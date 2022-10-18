
import './results.scss'

function Results(props) {
  return (
    <>
      <section>
        <pre>
          <h4>
            <pre>{props.dataFromPayload ? JSON.stringify(props.dataFromPayload, undefined, 2) : null}</pre>
          </h4>
        </pre>
      </section>
    </>
  )
}

export default Results;
