export const paginatioButtonProps = (props: any) => {
    const { page, router, handlePrevious, handleNext } = props
    console.log("page No is ::", page)

    return ([
        {
            label: "<",
            disable: page === 1,
            onClick: handlePrevious,
            className: "font-bold border border-e-0 border-gray-300 rounded-s-lg"
        },
        {
            label: "1",
            onClick: () => { router.push(`/products?page=1`) },
            disable: false,
            className: `${page === 1 ? "bg-gray-300" : ""}`
        },
        {
            label: "2",
            onClick: () => { router.push(`/products?page=2`) },
            disable: false,
            className: `${page === 2 ? "bg-gray-300 outline-none " : ""}`
        },
        {
            label: "3",
            onClick: () => { router.push(`/products?page=3`) },
            disable: false,
            className: `${page === 3 ? "bg-gray-300 outline-none " : ""}`
        },
        {
            label: "4",
            onClick: () => { router.push(`/products?page=4`) },
            disable: false,
            className: `${page === 4 ? "bg-gray-300 outline-none " : ""}`
        },
        {
            label: "5",
            onClick: () => { router.push(`/products?page=5`) },
            disable: false,
            className: `${page === 5 ? "bg-gray-300 outline-none " : ""}`
        },
        {
            label: ">",
            onClick: handleNext,
            disable: page === 5,
            className: "border border-l-0 border-gray-300 rounded-e-lg font-bold"
        },
    ])
}