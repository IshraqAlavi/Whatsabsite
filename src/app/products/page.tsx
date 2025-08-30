import { Metadata } from "next"
import { ProductCards } from "@/components/sections/product-cards"

export const metadata: Metadata = {
    title: "Products - WhatsAble",
    description: "Choose the right WhatsAble product for your WhatsApp automation needs",
}

export default function ProductsPage() {
    return (
        <div className="min-h-screen">
            <ProductCards />
        </div>
    )
}
