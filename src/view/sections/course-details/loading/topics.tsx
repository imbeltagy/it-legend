'use client';

export default function TopicsLoading() {
  return (
    <div id="topics">
      <h2 className="h-8 w-48 animate-pulse rounded bg-gray-200" />
      <div className="mt-4 h-4 w-full animate-pulse rounded bg-gray-200" />
      <div className="mt-20 flex flex-col gap-8">
        {[1, 2, 3].map((i) => (
          <div key={i} className="space-y-4">
            <div className="h-6 w-3/4 animate-pulse rounded bg-gray-200" />
            <div className="h-4 w-1/2 animate-pulse rounded bg-gray-200" />
            <div className="space-y-2">
              {[1, 2, 3, 4, 5].map((j) => (
                <div key={j} className="h-12 w-full animate-pulse rounded bg-gray-100" />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
