import { PaginationButtonProps } from "@/type/dataType"

export const paginatioButtonProps = (props: PaginationButtonProps) => {
    const { page, router, handlePrevious, handleNext } = props
    const totalPages = 5;
    const buttons = [];

    buttons.push({
        label: "<",
        disable: page === 1,
        onClick: handlePrevious,
        className: "font-bold border border-e-0 border-gray-300 rounded-s-lg"
    });
    for (let i = 1; i <= totalPages; i++) {
        buttons.push(
            {
                label: `${i}`,
                onClick: () => { router.push(`/products?page=${i}`) },
                disable: false,
                className: `${page === i ? "bg-gray-300" : ""}`
            }
        )
    }
    buttons.push({
        label: ">",
        onClick: handleNext,
        disable: page === 5,
        className: "border border-l-0 border-gray-300 rounded-e-lg font-bold"
    });
    return buttons

}