const db = uniCloud.database()
const dbCmd = db.command
module.exports = {
  _before: function() { // 通用预处理器

  },
  /**
   * table 数据表
   * attr 属性
   * id 操作的id
   * num 1自增 -1自减
   **/
  async operation(table, attr, id, num) {
    let obj = {}
    obj[attr] = dbCmd.inc(num)
    return await db.collection(table).doc(id).update(obj)
  }
}