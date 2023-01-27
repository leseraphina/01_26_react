import { BiTrash } from "react-icons/bi";

function AddInfo() {
  return (
    <li>
      <dl>
        <dt>애기이름</dt>
        <dd>
          <dfn>예약자명</dfn>
          예약자명데이터
        </dd>
        <dd>
          설명
        </dd>
        <dd>날짜 - 시간</dd>
      </dl>
      <button type="button"><BiTrash /></button>
    </li>
  );
}

export default AddInfo;
