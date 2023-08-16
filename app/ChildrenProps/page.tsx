import FirstChild from "@/components/childrenParent/FirstChild";
import Parent from "@/components/childrenParent/Parent";
import SecondChild from "@/components/childrenParent/SecondChild";

export default function ExampleChilds() {
  return (
    <>
        <Parent>
            <FirstChild />
            <SecondChild />
        </Parent>
    </>
  )
}
