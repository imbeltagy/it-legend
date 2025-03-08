'use client';

export default function MaterialsLoading() {
  return (
    <div className="container mx-auto w-full rounded-lg max-lg:p-8 max-lg:shadow-[-30px_-31px_106px_-94px_rgba(0,0,0,0.5)]">
      <h2 className="h-8 w-48 animate-pulse rounded bg-gray-200" />

      <div className="mt-5 grid rounded-lg lg:mt-8 lg:grid-cols-2 lg:gap-20 lg:px-10 lg:py-8 lg:shadow-[0px_0px_177px_-60px_rgba(0,0,0,0.44)]">
        {[1, 2].map((col) => (
          <div key={col}>
            {[1, 2, 3, 4].map((row) => (
              <div key={row}>
                {row > 1 && <div className="bg-divider h-px w-full" />}
                <div className="flex items-center gap-2 py-4">
                  <span className="h-8 w-8 animate-pulse rounded bg-gray-200" />
                  <span className="h-6 flex-1 animate-pulse rounded bg-gray-200" />
                  <span className="h-6 w-24 animate-pulse rounded bg-gray-200" />
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
