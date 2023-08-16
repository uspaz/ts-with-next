
export default function Parent({children}: {children: React.ReactNode}) {
  return (
    <>
        <h3 className="text-xl font-bold">This is the parent</h3>
        {children}
    </>
  )
}
