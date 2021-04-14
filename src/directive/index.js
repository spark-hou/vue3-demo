/**
 * @author  sparkHou
 * @date 2021-04-14 10:32
 * @Description:
 */
export function directive(app) {
  app.directive('focus', {
    mounted(el) {
      console.log(el, 'jajajaj')
    }
  })

}
