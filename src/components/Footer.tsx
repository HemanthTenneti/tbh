const PURPLE = "#544396";
const LAVENDER = "#e4ddf9";
const font = '"DM Sans", sans-serif';

export default function Footer() {
  return (
    <footer
      className="w-full shrink-0 flex items-center justify-between"
      style={{
        backgroundColor: LAVENDER,
        height: "60px",
        padding: "0 75px",
      }}
    >
      <p
        style={{
          fontFamily: font,
          color: PURPLE,
          fontSize: "13px",
          opacity: 0.55,
        }}
      >
        © 2026 the better half. all rights reserved.
      </p>
      <p
        style={{
          fontFamily: font,
          color: PURPLE,
          fontSize: "13px",
          opacity: 0.55,
        }}
      >
        hello@tbh-thebetterhalf.com
      </p>
    </footer>
  );
}
