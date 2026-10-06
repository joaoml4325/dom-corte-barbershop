'use client'

import { Hero } from "@/components/hero/hero";
import { Header } from "@/components/header/header";
import { Services } from "@/components/services/services";
import { Team } from "@/components/team/team";
import { Reviews } from "@/components/reviews/reviews";
import { Location } from "@/components/location/location";
import { Call } from "@/components/call/call";
import { Footer } from "@/components/footer/footer";
import { OrderForm } from "@/components/order/order-form";
import { useEffect, useState } from "react";

const Page = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [hasOpened, setHasOpened] = useState(false);
  
  const openForm = () => {
    setIsFormOpen(true);
    setHasOpened(true);
  }

  const closeForm = () => {
    setIsFormOpen(false);
  }

  useEffect(() => {
    if (isFormOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    }
  }, [isFormOpen])
  
  return (
    <div className="w-full">
      <div
        className="w-full h-screen"
        style={{
          backgroundImage: ('url(/images/background-barber.jpg)'),
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <Header onOrderClick={openForm} />
        <Hero onOrderClick={openForm} />
      </div>
      <Services />
      <Team />
      <Reviews />
      <Location />
      <Call onOrderClick={openForm} />
      <Footer />

      <OrderForm
        isOpen={isFormOpen}
        setIsOpen={closeForm}
        hasOpened={hasOpened}
      />
    </div>
  );
}

export default Page;