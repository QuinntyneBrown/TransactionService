using MediatR;
using System.Net;
using System.Net.Http;
using System.Threading.Tasks;
using System.Web.Http;
using TransactionService.Features.Transactions.UploadHandlers;

using static TransactionService.Features.Transactions.UploadTransactionsCommand;

namespace TransactionService.Features.Transactions
{
    [RoutePrefix("api/transaction")]
    public class TransactionController : ApiController
    {
        public TransactionController(IMediator mediator)
        {
            _mediator = mediator;
        }

        [Route("upload")]
        [HttpPost]
        public async Task<IHttpActionResult> Upload() {

            if (!Request.Content.IsMimeMultipartContent("form-data"))
                throw new HttpResponseException(HttpStatusCode.BadRequest);

            var provider = await Request.Content.ReadAsMultipartAsync(new InMemoryMultipartFormDataStreamProvider());

            return Ok(await _mediator.Send(new UploadTransactionsRequest() { Provider = provider }));            
        }

        protected readonly IMediator _mediator;
    }
}
