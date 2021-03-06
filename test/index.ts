import { expect } from "chai";
import { ethers } from "hardhat";
import { Greeter__factory } from "../typechain-types";

describe("Greeter", function () {
  it("Should return the new greeting once it's changed", async function () {
    const signers = await ethers.getSigners();

    const greeter = await new Greeter__factory(signers[0]).deploy(
      "Hello, world!"
    );

    expect(await greeter.greet()).to.eq("Hello, world!");

    await greeter.setGreeting("Hola, mundo!");

    expect(await greeter.greet()).to.eq("Hola, mundo!");
  });
});
