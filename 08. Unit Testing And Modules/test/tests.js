const {expect} = require("chai");
const {sum, multiply} = require("../arr_Math_func");
const { describe, it } = require("mocha");


describe("Tests for SUM", ()=> {
    it("Test with correct array must return result", ()=> {
        //Arange
        let arr = [1, 2, 2, 3, 5, 7];
        //Act
        let result = sum(arr);
        //Assert
        expect(result).equal(20);
    });

    it("Test with numbers as string must return result", ()=> {
        //Arange
        let arr = ["1", "2", "7"];
        //Act
        let result = sum(arr);
        //Assert
        expect(result).equal(10);
    })

    it("Test with incorrect values must trow error", ()=> {
        //Arange
        let arr = [true, 5, 7];
        //Act
        
        //Assert
        expect(function(){
            sum(arr)
        }).throw();
    })

});