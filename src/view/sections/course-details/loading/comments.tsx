'use client';

export default function CommentsLoading() {
  return (
    <div id="comments">
      <div className="container mx-auto">
        <h2 className="h-8 w-48 animate-pulse rounded bg-gray-200" />
        <div>
          {[1, 2, 3].map((i) => (
            <div key={i}>
              {i > 0 && <div className="bg-divider mt-6 h-px w-full" />}
              <div className="mt-6 flex items-start gap-4">
                <div className="h-[50px] w-[50px] animate-pulse rounded-full bg-gray-200" />
                <div className="flex-1">
                  <div className="h-6 w-32 animate-pulse rounded bg-gray-200" />
                  <div className="mt-2 h-4 w-24 animate-pulse rounded bg-gray-200" />
                  <div className="mt-4 h-16 w-full animate-pulse rounded bg-gray-100" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="from-neutral to-default mt-10 rounded-lg px-8 pt-4 pb-8 max-lg:bg-gradient-to-b lg:px-0">
        <div className="container mx-auto">
          <div className="h-32 w-full animate-pulse rounded bg-gray-100" />
          <div className="mt-4 h-12 w-32 animate-pulse rounded bg-gray-200" />
        </div>
      </div>
    </div>
  );
}
