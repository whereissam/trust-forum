const errorCodeMapping: Record<number, Record<string, string>> = {
  422: {
    password_incorrect: "Incorrect old password",
    authentication_error: "Invalid login credentials",
    user_email_already_taken:
      "Email address is already linked with another acccount",
    user_no_subscription_error: "User is not subscribed to techbites.",
    nested_manager_account: "Nested managing is not allowed",
    subordinate_already_occupied:
      "This account has been added by current or another accoun",
    student_occupied: "Student get another class on the same time period",
    wallet_insufficient_balance: "You don't have enough Wallet Balance",
    invalid_code: "Invalid redemption code, please try again.",
    code_already_redeemed: "Invalid redemption code, please try again.",
    invalid_phone_number:
      "The phone number you provided is invalid. Please try again.",
    phone_number_already_taken:
      "Phone number is already linked with another acccount.",
    one_time_password_incorrect:
      "Incorrect One Time Password. Please input again or request for a new one.",
    any: "Authentication error",
    invalid_franchise_role_error: "Invalid Account Role, please try again.",
    nomad_lateness_attended_mismatch:
      "Nomad cannot be marked as absent if they were late initially.",
    invalid_user_permission:
      "Your account does not have permissions to perform this action. Please contact your administrator.",
    query_parameter_invalid: "Parameter email must match a valid email format.",
  },
  400: {
    should_not_generate_otp_error:
      "Failed to generate new OTP. Please do not request too frequently.",
    any: "Bad Request",
  },
  404: {
    user_not_found_error: "User not found",
  },
};

export function composeErrorMessage(status: number, code: string) {
  const statusSubtree = errorCodeMapping[status];

  return statusSubtree[code];
}
