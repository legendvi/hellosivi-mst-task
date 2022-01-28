// This component gives all the dropdown JSX required

import { NavDropdown, Nav } from "react-bootstrap";
import store from "../store/app-store";
export default function Dropdown() {
  // this returns dropdown Coomponents imported from reat-bootstrap to render in Header
  return (
    <>
      <Nav
        className="me-auto my-2 my-lg-0"
        style={{ maxHeight: "100px" }}
        navbarScroll
      >
        {/* Dropdown to filter by Category */}
        <NavDropdown
          onSelect={(e) => store.categoryHandler(e)}
          title="Category"
          id="navbarScrollingCategory"
        >
          {/* eventKey defines the value of the event in NavItem
        onSelect is the function that is invoked when a item is selected
        and eventKey is passed as argument to selected item
         */}
          <NavDropdown.Item eventKey="ALL">---</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item eventKey="WF">Womens Formalwear</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item eventKey="MF">Mens Formalwear</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item eventKey="MC">Mens Casualwear</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item eventKey="WC">Womens Casualwear</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item eventKey="WFT">Womens Footwear</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item eventKey="MFT">Mens Footwear</NavDropdown.Item>
        </NavDropdown>
        {/* Dropdown to filter by Rating */}
        <NavDropdown
          onSelect={(e) => store.ratingHandler(e)}
          title="Rating"
          id="navbarScrollingRating"
        >
          <NavDropdown.Item eventKey="ALL">---</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item eventKey="BelowFour">Below 4</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item eventKey="UptoFourAndHalf">4-4.5</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item eventKey="AboveFourAndHalf">
            Above 4.5
          </NavDropdown.Item>
        </NavDropdown>
        {/* Dropdown to filter by Price */}
        <NavDropdown
          onSelect={(e) => store.priceHandler(e)}
          title="Price"
          id="navbarScrollingPrice"
        >
          <NavDropdown.Item eventKey="ALL">---</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item eventKey="UptoFifty">Rs 1 - Rs 50</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item eventKey="UptoOneFifty">
            Rs 50 - Rs 150
          </NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item eventKey="AboveOneFifty">
            Above Rs 150
          </NavDropdown.Item>
        </NavDropdown>
      </Nav>
      <Nav>
        {/* Dropdown to sort Elements */}
        <NavDropdown
          onSelect={(e) => store.sortHandler(e)}
          title="Sort By"
          id="navbarScrollingPrice"
        >
          <NavDropdown.Item eventKey="NoSort">No Sort</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item eventKey="Name">Name</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item eventKey="Category">Category</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item eventKey="Price">Price</NavDropdown.Item>
        </NavDropdown>
      </Nav>
    </>
  );
}
