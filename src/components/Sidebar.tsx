import Image from "next/image";

export default function LeftBar() {
  return (
    <>
      <div className="sidebar">
        <div className="top">
          <div className="logo">
            <Image
              width={512/8}
              height={512/8}
              src="/icon.png"
              alt="Icon"
              priority
            ></Image>
            <span>DoS</span>
          </div>
        </div>
        <div className="user">

        </div>
        <ul>
          <li>a</li>
          <li>b</li>
          <li>c</li>
          <li>d</li>
        </ul>
      </div>
    </>
  )
}