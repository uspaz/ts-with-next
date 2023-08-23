import FirstChild from "@/components/ChildrenParent/FirstChild";
import Parent from "@/components/ChildrenParent/Parent";
import SecondChild from "@/components/ChildrenParent/SecondChild";

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
