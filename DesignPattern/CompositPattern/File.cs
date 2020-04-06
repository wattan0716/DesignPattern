using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace DesignPattern.CompositPattern
{
    public class File : IEntry
    {
        private string name;

        public File(string name)
        {
            this.name = name;
        }

        public void Output(int depth)
        {
            for (int i = 0; i < depth; i++)
            {
                Console.WriteLine($@" ");
            }
            Console.WriteLine($@"File: {name}");
        }
    }
}
