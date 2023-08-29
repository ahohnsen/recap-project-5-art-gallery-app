import styled from "styled-components";
import { useRouter } from "next/router";
import Link from "next/link.js";

const List = styled.ul`
  list-style: none;
  display: flex;
  justify-content: center;
  gap: 0.8rem;
  height: 100%;
  align-items: center;
`;

const NavLink = styled(Link)`
  text-decoration: none;
  padding: 0 0.3rem;
  /* color: ${({ active }) => (active ? "var(--primary-color)" : "black")}; */
  color: ${({ isActive }) => (isActive ? "var(--primary-color)" : "black")};
  font-weight: bold;
  &:hover {
    border-bottom: 5px dotted var(--primary-color);
  }
`;

export default function Navigation() {
  const router = useRouter();

  return (
    <nav>
      <List>
        <li>
          {/* <NavLink href="/" active={router.pathname === "/" ? "active" : ""}> */}
          <NavLink href="/" $isActive={router.pathname === "/"}>
            Spotlight
          </NavLink>
        </li>
        <li>
          <NavLink
            href="/art-pieces"
            $isActive={router.pathname === "/art-pieces"}
          >
            Art Pieces
          </NavLink>
        </li>
      </List>
    </nav>
  );
}
