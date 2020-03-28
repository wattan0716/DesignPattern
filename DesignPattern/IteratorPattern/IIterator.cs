using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace DesignPattern.IteratorPattern
{
    public interface IIterator
    {
        bool HasNext { get; }
        object Next();
    }
}
