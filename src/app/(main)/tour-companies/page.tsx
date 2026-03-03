"use client";

import TourCompanies from "@/components/TourCompanies";

export default function TourCompaniesPage() {
    return (
        <div className="pt-32 pb-24">
            <div className="container mx-auto px-6">
                <div className="max-w-3xl mb-16 mx-auto text-center">
                    <h1 className="text-5xl md:text-7xl font-bold mb-6">Our Partner <br />Tour Companies</h1>
                    <p className="text-xl text-muted-foreground leading-relaxed">
                        We have partnered with the most reliable and experienced tour operators in Uganda.
                        Whether you are looking for mountain gorilla trekking, wildlife safaris, or cultural
                        experiences, our partners are ready to make your dream trip a reality.
                    </p>
                </div>

                <TourCompanies />


            </div>
        </div>
    );
}
