using System;

namespace TransactionService.Data.Model
{
    public class Transaction
    {
        public int Id { get; set; }

		public DateTime Date { get; set; }
        
		public string Category { get; set; }
        
		public float Spend { get; set; }
    }
}
