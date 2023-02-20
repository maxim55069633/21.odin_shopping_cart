import React from "react";
import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom'

import userEvent from "@testing-library/user-event";
import RouteSwitch from "./RouteSwitch";

describe("RouteSwitch component", () => {
    it("display the content from the shop page route",   () => {

      render(<RouteSwitch />)

      const shop_route_link = screen.getByRole("link",  { name: "Shop Page" });
      userEvent.click(shop_route_link);
      expect(screen.getByText("Eldritch Horror")).toBeInTheDocument();
      
    });
  
  });