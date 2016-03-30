describe("checkToHideOrShowLink", function() {

  it("contains 3 questions on page load", function() {
    var questionFields = $("#questions .question .nested-fields");
    ready();
    expect(questionFields.length).toEqual(3);
  });

  it("removes add question btn when fields count is 10", function() {
    var addQuestionBtn = $("#add_question");
    ready();

    for (var i = 0; i < 7; i++) {
      addQuestionBtn.click();
    }

    expect(addQuestionBtn).is(':visible').toBe(false);
  });
});