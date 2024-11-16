// import { ApiError } from "./ApiError";
// import {
//   getAuthToken,
//   isLoggedIn,
//   onUnauthorized,
// } from "@/helpers/authentication";

export const apiBaseUrl = `${process.env.NEXT_PUBLIC_API_URL}`;

export async function get(path: string, params: any = null) {
  const response = await callFetch(`${path}${getParams(params)}`, {
    method: "GET",
  });

  if (!response.ok) {
    return await handleError(response);
  }

  const parsedResponse = await response.json();

  return parsedResponse;
}

type OnResponseHeader = (headers: Headers) => void;

export async function post(
  path: string,
  data: any,
  {
    ignoreAuthorization = false,
    onResponseHeader,
  }: {
    ignoreAuthorization?: boolean;
    onResponseHeader?: OnResponseHeader;
  } = {}
) {
  const response = await callFetch(path, {
    method: "POST",
    body: JSON.stringify(data),
    ignoreAuthorization,
  });

  if (!response.ok) {
    return handleError(response);
  }

  onResponseHeader?.(response.headers);

  // 204 No Content - return nothing.
  if (response.status === 204) {
    return null;
  }

  const parsedResponse = await response.json();

  return parsedResponse;
}

export async function patch(path: string, data: any) {
  const response = await callFetch(path, {
    method: "PATCH",
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    return handleError(response);
  }

  const parsedResponse = await response.json();

  return parsedResponse;
}

export async function del(path: string, params: string = "") {
  const response = await callFetch(`${path}${getParams(params)}`, {
    method: "DELETE",
  });

  if (!response.ok) {
    return await handleError(response);
  }

  return response.ok;
}

function callFetch(resource: string, { ...options }) {
  const headers: any = {
    "Content-Type": "application/json; charset=utf-8",
    "Preface-Client": "fc-web",
  };

  // if (!ignoreAuthorization && isLoggedIn()) {
  //   headers["Authorization"] = `Bearer ${getAuthToken()}`;
  // }

  return fetch(`${apiBaseUrl}/${resource}`, {
    ...options,
    credentials: "omit",
    headers,
  });
}

function getParams(params: any) {
  const filteredParams = [];

  if (!params) {
    return "";
  }

  for (const key in params) {
    if (
      params[key] !== null &&
      params[key] !== undefined &&
      params[key] !== ""
    ) {
      if (Array.isArray(params[key])) {
        params[key].forEach((value: any) => {
          filteredParams.push([`${key}[]`, value]);
        });
      } else {
        filteredParams.push([key, params[key]]);
      }
    }
  }

  const search = new URLSearchParams(filteredParams).toString();

  return search ? `?${search}` : "";
}

async function handleError(response: Response) {
  console.log(response);
  // const responseJson = await response.json();

  // if (responseJson) {
  //   const {
  //     data: { code, errors },
  //   } = responseJson;

  //   const status = response.status;

  //   const error = new ApiError({
  //     url: response.url,
  //     status,
  //     code,
  //     errors,
  //   });

  //   if (error.unauthorized()) {
  //     onUnauthorized();
  //   }

  //   throw error;

  //   throw "error";
  // }

  throw new Error("API Error.");
}
