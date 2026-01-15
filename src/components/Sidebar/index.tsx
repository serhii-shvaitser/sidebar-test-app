import { Button } from "@/components/ui/button";
import Form from "@/components/Sidebar/components/Form";
import Footer from "@/components/Sidebar/components/Footer";
import Backgrounds from "@/components/Sidebar/components/Backgrounds";

import {
  Sheet,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

function Sidebar() {
  return (
    <div className="flex h-screen items-center justify-center">
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline" className="cursor-pointer">
            Change background
          </Button>
        </SheetTrigger>
        <SheetContent
          onOpenAutoFocus={(e) => e.preventDefault()}
          className="flex h-full flex-col gap-5 px-5 pt-6.25 pb-5 sm:max-w-100 [&>button]:top-7 [&>button]:right-5 [&>button]:size-6 [&>button>svg]:size-6"
        >
          <SheetHeader className="px-0 py-0">
            <SheetTitle className="text-[22px] font-bold tracking-[120%]">
              Change background
            </SheetTitle>
          </SheetHeader>
          <div className="flex flex-1 flex-col justify-between overflow-y-auto">
            <div className="grid gap-5.75">
              <Form />
              <Backgrounds />
            </div>
          </div>
          <SheetFooter className="flex h-40 flex-row justify-between gap-9.75 overflow-hidden rounded-lg border border-[#F2F4F6] bg-[#F2F4F680] pt-0 pr-0 pb-0 pl-5">
            <Footer />
          </SheetFooter>
        </SheetContent>
      </Sheet>
    </div>
  );
}

export default Sidebar;
