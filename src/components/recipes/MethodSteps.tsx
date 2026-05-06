export function MethodSteps({ steps }: { steps: string[] }) {
  return (
    <div>
      <h2 className="editorial text-3xl">Method</h2>
      <ol className="mt-5 grid gap-5">
        {steps.map((step, index) => (
          <li className="grid grid-cols-[40px_1fr] gap-4" key={step}>
            <span className="grid h-10 w-10 place-items-center rounded-full bg-olive text-sm text-warm">{index + 1}</span>
            <p className="pt-2 leading-7 text-charcoal/75">{step}</p>
          </li>
        ))}
      </ol>
    </div>
  );
}
