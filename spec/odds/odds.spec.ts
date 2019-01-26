/* tslint:disable no-unused-expression */
import { expect } from 'chai';
import R from 'ramda';
import odssModule from '../../src/odds';
import { EOdds } from '../../src/typings';

describe('oddsModule', () => {
  it(`correct bonus for each odds`, () => {
    expect(odssModule(EOdds.Impossible).bonus()).to.eql(-8);
    expect(odssModule(EOdds.NoWay).bonus()).to.eql(-6);
    expect(odssModule(EOdds.VeryUnlikely).bonus()).to.eql(-4);
    expect(odssModule(EOdds.Unlikely).bonus()).to.eql(-2);
    expect(odssModule(EOdds.Unsure).bonus()).to.eql(0);
    expect(odssModule(EOdds.Likely).bonus()).to.eql(2);
    expect(odssModule(EOdds.VeryLikely).bonus()).to.eql(4);
    expect(odssModule(EOdds.SureThing).bonus()).to.eql(6);
    expect(odssModule(EOdds.HasToBe).bonus()).to.eql(8);
  });

  it(`correct positive for each odds`, () => {
    expect(odssModule(EOdds.Impossible).positive()).to.be.false;
    expect(odssModule(EOdds.NoWay).positive()).to.be.false;
    expect(odssModule(EOdds.VeryUnlikely).positive()).to.be.false;
    expect(odssModule(EOdds.Unlikely).positive()).to.be.false;
    expect(odssModule(EOdds.Unsure).positive()).to.be.true;
    expect(odssModule(EOdds.Likely).positive()).to.be.true;
    expect(odssModule(EOdds.VeryLikely).positive()).to.be.true;
    expect(odssModule(EOdds.SureThing).positive()).to.be.true;
    expect(odssModule(EOdds.HasToBe).positive()).to.be.true;
  });

  it(`correct negative for each odds`, () => {
    expect(odssModule(EOdds.Impossible).negative()).to.be.true;
    expect(odssModule(EOdds.NoWay).negative()).to.be.true;
    expect(odssModule(EOdds.VeryUnlikely).negative()).to.be.true;
    expect(odssModule(EOdds.Unlikely).negative()).to.be.true;
    expect(odssModule(EOdds.Unsure).negative()).to.be.false;
    expect(odssModule(EOdds.Likely).negative()).to.be.false;
    expect(odssModule(EOdds.VeryLikely).negative()).to.be.false;
    expect(odssModule(EOdds.SureThing).negative()).to.be.false;
    expect(odssModule(EOdds.HasToBe).negative()).to.be.false;
  });
});
