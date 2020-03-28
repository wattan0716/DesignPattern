using Microsoft.VisualStudio.TestTools.UnitTesting;
using System;
using DesignPattern.IteratorPattern;
namespace DesignPatternTest
{
    [TestClass]
    public class IteratorTest
    {
        [TestMethod]
        public void Main()
        {
            var bookShelf = new BookShelf();
            bookShelf.AppendBook(new Book { Name = "Bible" });
            bookShelf.AppendBook(new Book { Name = "TOEIC TEST" });
            bookShelf.AppendBook(new Book { Name = "CARRER BOOK" });

            foreach(var book in bookShelf)
            {
                Console.WriteLine(book.Name);
            }
        }
    }
}
