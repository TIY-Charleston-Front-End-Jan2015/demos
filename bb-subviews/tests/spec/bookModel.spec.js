// testing our book model

describe("Book Model", function () {
  beforeEach(function () {
    this.bookModel = new BookModel();
    this.bookStub = sinon.stub(this.bookModel, 'save');
  });
  it("should be an instance of BookModel Class", function () {
    expect(this.bookModel).is.instanceof(BookModel);
  });
  it("should have correct urlRoot", function () {
    expect(this.bookModel.urlRoot).to.be.ok;
    expect(this.bookModel.urlRoot).to.be.equal("http://tiy-fee-rest.herokuapp.com/collections/bb-subviews");
  });
  it("should be able to add property to model", function () {
    expect(this.bookModel.attributes.title).to.not.be.ok;
    this.bookModel.set({title: "Grapes of Wrath"});
    expect(this.bookModel.attributes.title).to.equal("Grapes of Wrath");
  });
  it("should save my model when i call save", function () {
    this.bookModel.set({title: 'Charleston, a History'});
    this.bookModel.save();

    expect(this.bookStub).to.have.been.calledOnce;
    this.bookModel.set({author: 'Calvin'});
    this.bookModel.save();
    expect(this.bookStub).to.have.been.calledTwice;
  })

  it("should have a default photo", function () {
    expect(this.bookModel.attributes.photo).to.equal("http://fc09.deviantart.net/fs70/f/2011/321/a/2/old_book_cover_1_by_foxinshadow-d4ghgle.png");
  })
});
