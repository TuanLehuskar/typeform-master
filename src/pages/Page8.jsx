import { useContext, useState } from "react";
import Logo from "../components/Logo";
import appActions from "../context/appActions";
import { appContext } from "../context/appContext";
export default function Page8() {
  const {
    value: { data },
    dispatch,
  } = useContext(appContext);

  const [tempAnswer, setTempAnswer] = useState(
    data.perfectDuos?.answer || [null, null, null]
  );
  const handleAnswerChanged = (newAnswer, order) => {
    setTempAnswer([
      ...tempAnswer.slice(0, order),
      newAnswer,
      ...tempAnswer.slice(order + 1),
    ]);
  };

  const handleButtonClicked = () => {
    dispatch({
      type: appActions.CHANGE_PAGE,
      payload: 8,
    });
    dispatch({
      type: appActions.CHANGE_ANSWER,
      payload: {
        perfectDuos: {
          questions:
            "Cặp đôi nào trong Hugo để lại cho bạn nhiều ấn tượng nhất?",
          answer: tempAnswer,
        },
      },
    });
  };

  return (
    <div className="row flex-column h-100">
      <div className="col-auto mb-4">
        <Logo
          style="animate__animated animate__fadeIn"
          icon="couple.svg"
          title="The Perfect Dou"
        />
      </div>
      <div className="col">
        <div className="row justify-content-center align-items-center h-100">
          <div className="col">
            <div className="row">
              <div className="col-auto">
                <h4 className="text-yellow animate__animated animate__fadeInUp">
                  6
                </h4>
              </div>
              <div className="col">
                <div className="row">
                  <div className="col-auto">
                    <h4 className="text-yellow animate__animated animate__fadeInUp">
                      Cặp đôi nào trong Hugo để lại cho bạn nhiều ấn tượng nhất?
                    </h4>
                  </div>
                  <div className="col-auto">
                    <h5 className="font-italic fst-italic text-opacity-50 text-yellow animate__animated animate__fadeInUp">
                      Hãy bình chọn 3 cặp đôi yêu thích của bạn nhé!
                    </h5>
                  </div>
                </div>
                <div className="row">
                  <div className="col">
                    <input
                      type="text"
                      className="form-control border-top-0 border-start-0 border-end-0 px-0 fs-2 animate__animated animate__fadeInUp"
                      value={tempAnswer[0]}
                      placeholder="Cặp đôi yêu thích thứ nhất..."
                      onChange={(event) =>
                        handleAnswerChanged(event.target.value, 0)
                      }
                    />
                    <input
                      type="text"
                      className="form-control border-top-0 border-start-0 border-end-0 px-0 fs-2 animate__animated animate__fadeInUp"
                      value={tempAnswer[1]}
                      placeholder="Cặp đôi yêu thích thứ hai..."
                      onChange={(event) =>
                        handleAnswerChanged(event.target.value, 1)
                      }
                    />
                    <input
                      type="text"
                      className="form-control border-top-0 border-start-0 border-end-0 px-0 fs-2 animate__animated animate__fadeInUp"
                      value={tempAnswer[2]}
                      placeholder="Cặp đôi yêu thích thứ ba..."
                      onChange={(event) =>
                        handleAnswerChanged(event.target.value, 2)
                      }
                    />
                  </div>
                </div>
                <div className="row mt-5 justify-content-end">
                  <div className="col-auto">
                    <button
                      className="btn rounded-0 btn-lg btn-yellow animate__animated animate__fadeIn animate__delay-1s"
                      onClick={handleButtonClicked}
                      disabled={!tempAnswer}
                    >
                      OK
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
