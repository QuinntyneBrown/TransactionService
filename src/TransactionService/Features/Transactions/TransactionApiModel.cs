using System;
using TransactionService.Data.Model;

namespace TransactionService.Features.Transactions
{
    public class TransactionApiModel
    {
        public DateTime Date { get; set; }

        public string Category { get; set; }

        public string Spend { get; set; }

        public static TransactionApiModel FromTransaction(Transaction entity) {
            var model = new TransactionApiModel();

            model.Category = entity.Category;

            model.Spend = $"{entity.Spend}";

            model.Date = entity.Date;

            return model;
        }
    }
}
