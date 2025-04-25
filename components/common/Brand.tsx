import React from "react";

const Brand = () => {
  return (
    <section className="border-t border-b py-10 p-responsive">
      <div className=" px-4 md:px-6">
        <div className="flex flex-col items-center justify-center gap-4 text-center">
          <h2 className="text-xl font-medium text-muted-foreground">
            Trusted by data teams at
          </h2>
          <div className="flex flex-wrap items-center justify-center gap-8">
            <div className="text-2xl font-bold text-muted-foreground/50">
              ACME
            </div>
            <div className="text-2xl font-bold text-muted-foreground/50">
              Globex
            </div>
            <div className="text-2xl font-bold text-muted-foreground/50">
              Initech
            </div>
            <div className="text-2xl font-bold text-muted-foreground/50">
              Umbrella
            </div>
            <div className="text-2xl font-bold text-muted-foreground/50">
              Stark
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Brand;
