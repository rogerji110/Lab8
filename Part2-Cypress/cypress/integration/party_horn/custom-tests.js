describe("Party Horn Tests", () => {
  beforeEach(() => {
    cy.visit("http://127.0.0.1:5500/Part2-Cypress/index.html");
  });

  it("First Test", () => {
    expect(true).to.equal(true);
  });

  it("Slider changes when volume input changes", () => {
    cy.get("#volume-number").clear().type("75");
    cy.get("#volume-slider").then($el => {
      expect($el).to.have.value(75);
    });
  });

  it("Volume input changes when slider changes", () => {
    cy.get("#volume-slider").invoke("val", 33).trigger("input");
    cy.get("#volume-number").then($el => {
      expect($el).to.have.value(33);
    });
  });

  it("volume of the <audio> element changes when we change the value of our slider", () => {
    cy.get("#volume-slider").invoke("val", 33).trigger("input");
    cy.get("#horn-sound").then($el => {
      expect($el).to.have.prop("volume", 0.33);
    });
  });

  it("Test if the image and sound sources change when you select the party horn radio button", () => {
    cy.get("#radio-party-horn").check();
    cy.get("#horn-sound").then($el => {
      expect($el).to.have.attr("src", "./assets/media/audio/party-horn.mp3");
    });
    cy.get("#sound-image").then($el => {
      expect($el).to.have.attr("src", "./assets/media/images/party-horn.svg");
    });
  });

  it("Test if the volume image changes when increasing volumes from level 0 to level 1", () => {
    cy.get("#volume-slider").invoke("val", 0).trigger("input");
    cy.get("#volume-image").then($el => {
      expect($el).to.have.attr("src", "./assets/media/icons/volume-level-0.svg");
    });
    cy.get("#volume-slider").invoke("val", 1).trigger("input");
    cy.get("#volume-image").then($el => {
      expect($el).to.have.attr("src", "./assets/media/icons/volume-level-1.svg");
    });
  });

  it("Test if the volume image changes when increasing volumes from level 1 to level 2", () => {
    cy.get("#volume-slider").invoke("val", 33).trigger("input");
    cy.get("#volume-image").then($el => {
      expect($el).to.have.attr("src", "./assets/media/icons/volume-level-1.svg");
    });
    cy.get("#volume-slider").invoke("val", 34).trigger("input");
    cy.get("#volume-image").then($el => {
      expect($el).to.have.attr("src", "./assets/media/icons/volume-level-2.svg");
    });
  });

  it("Test if the volume image changes when increasing volumes from level 2 to level 3", () => {
    cy.get("#volume-slider").invoke("val", 66).trigger("input");
    cy.get("#volume-image").then($el => {
      expect($el).to.have.attr("src", "./assets/media/icons/volume-level-2.svg");
    });
    cy.get("#volume-slider").invoke("val", 67).trigger("input");
    cy.get("#volume-image").then($el => {
      expect($el).to.have.attr("src", "./assets/media/icons/volume-level-3.svg");
    });
  });

  it("Test if the honk button is disabled when the textbox input is a empty or a non-number", () => {
    cy.get("#volume-number").clear();
    cy.get("#honk-btn").then($el => {
      expect($el).to.have.attr("disabled");
    });

    cy.get("#volume-number").clear().type("hgfdkjhcjhc");
    cy.get("#honk-btn").then($el => {
      expect($el).to.have.attr("disabled");
    });
  });

  it("Test if an error is shown when you type a number outside of the given range for the volume textbox input", () => {
    cy.get("#volume-number").clear().type("69420");
    cy.get("input:invalid").should("exist");
  });

});