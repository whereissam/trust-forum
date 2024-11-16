export default async function ThreadsPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const id = (await params).id;

  return (
    <div>
      <p>Threads {id}</p>
      {/* COMPONENT */}
      <div className="max-w-2xl mx-auto mt-8 p-4">
        <div className="bg-white rounded-lg shadow-md p-6">
          {/* User info and timestamp */}
          <div className="flex items-center space-x-2 mb-4">
            <div className="w-8 h-8 bg-gray-300 rounded-full"></div>
            <span className="text-sm font-medium text-gray-700">username</span>
            <span className="text-sm text-gray-500">• 2h ago</span>
          </div>

          {/* Thread title */}
          <h1 className="text-xl font-bold mb-4">
            This is a sample thread title
          </h1>

          {/* Thread content */}
          <div className="text-gray-800 mb-6">
            <p>
              This is the thread content. It can contain multiple paragraphs and
              other elements.
            </p>
          </div>

          {/* Interaction buttons */}
          <div className="flex items-center space-x-4 text-gray-500">
            <div className="flex items-center space-x-1">
              <button className="p-1 hover:bg-gray-100 rounded">
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 15l7-7 7 7"
                  />
                </svg>
              </button>
              <span>42</span>
              <button className="p-1 hover:bg-gray-100 rounded">
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              <span>42</span>
            </div>
            <div className="flex items-center space-x-1">
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                />
              </svg>
              <span>12 comments</span>
            </div>
          </div>
        </div>
      </div>

      {/* COMMENT SECTION */}
      <div className="max-w-2xl mx-auto mt-4 p-4">
        <h2 className="text-xl font-bold mb-4">Comments</h2>
        {/* Comment input */}
        <div className="bg-white rounded-lg shadow-md p-4 mb-4">
          <div className="flex items-start space-x-4">
            <div className="w-8 h-8 bg-gray-300 rounded-full"></div>
            <div className="flex-grow">
              <textarea
                className="w-full p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                rows={3}
                placeholder="What are your thoughts?"
              ></textarea>
              <button className="mt-2 px-4 py-2 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition-colors">
                Comment
              </button>
            </div>
          </div>
        </div>

        {/* Comments list */}
        <div className="space-y-4">
          {/* Single comment */}
          <div className="bg-white rounded-lg shadow-md p-4">
            <div className="flex items-center space-x-2 mb-2">
              <div className="w-6 h-6 bg-gray-300 rounded-full"></div>
              <span className="text-sm font-medium text-gray-700">
                commenter_username
              </span>
              <span className="text-sm text-gray-500">• 1h ago</span>
            </div>
            <div className="text-gray-800 ml-8">
              <p>
                This is a sample comment. It can contain multiple lines of text
                and will wrap accordingly when it reaches the end of the
                container.
              </p>
            </div>
            <div className="flex items-center space-x-4 text-gray-500 mt-2 ml-8">
              <div className="flex items-center space-x-1">
                <button className="p-1 hover:bg-gray-100 rounded">
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 15l7-7 7 7"
                    />
                  </svg>
                </button>
                <span className="text-sm">24</span>
                <button className="p-1 hover:bg-gray-100 rounded">
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
