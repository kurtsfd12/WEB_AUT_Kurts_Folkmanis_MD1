import { SelectablePage } from "../pageObjects/SelectablePage";

describe('MD1', () => {
  
  context("Grid test", () => {
    beforeEach(() => {
      SelectablePage.visit();
    });

    it('passes', () => {
      SelectablePage.gridButton.click();

      SelectablePage.gridButtonTwo.click();
      SelectablePage.gridButtonFour.click();
      SelectablePage.gridButtonSix.click();
      SelectablePage.gridButtonEight.click();

      SelectablePage.gridButtonTwo.should("contain.class", "active");
      SelectablePage.gridButtonFour.should("contain.class", "active");
      SelectablePage.gridButtonSix.should("contain.class", "active");
      SelectablePage.gridButtonEight.should("contain.class", "active");

      SelectablePage.gridButtonOne.should("not.have.class", "active");
      SelectablePage.gridButtonThree.should("not.have.class", "active");
      SelectablePage.gridButtonFive.should("not.have.class", "active");
      SelectablePage.gridButtonSeven.should("not.have.class", "active");
      SelectablePage.gridButtonNine.should("not.have.class", "active");
    });
  });
});