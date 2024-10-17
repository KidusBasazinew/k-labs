import MessageIcon from "/chat.svg";

import { Button } from "./ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet";
import BlogText from "./BlogText";

export function Blog() {
  const blogTexts = [
    "In today’s digital world, having a professional website is essential for any business. It’s often the first interaction potential customers have with your brand. A well-designed website can significantly enhance your credibility, making visitors more likely to trust and engage with your business.",
    "A professional website allows you to showcase your services effectively. With high-quality images and detailed descriptions, you can highlight what sets you apart from competitors. Additionally, a website provides a platform for sharing customer testimonials and case studies, further boosting your reputation.",
  ];

  return (
    <Sheet>
      <SheetTrigger asChild className="fixed bottom-10 right-0 mr-10">
        <img
          src={MessageIcon}
          className="z-50 w-16 h-16 sm:w-24 sm:h-24 cursor-pointer"
        />
      </SheetTrigger>
      <SheetContent className="z-[10000]">
        <SheetHeader>
          <SheetTitle>Our Blogs</SheetTitle>
          <SheetDescription>
            Make shure you read out blog that could be help full for your
            business!
          </SheetDescription>
        </SheetHeader>
        <div className="grid gap-4 py-4">
          {blogTexts.map((blogText, index) => (
            <BlogText key={index} text={blogText} />
          ))}
        </div>
        <SheetFooter>
          <SheetClose asChild>
            <div
              data-orentation="horizontal"
              role="none"
              className="shrink-0 bg-border h-[1px] w-full"
            >
              <Button className="mt-10 w-full" type="submit">
                Like it
              </Button>
            </div>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
