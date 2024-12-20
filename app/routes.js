//
// For guidance on how to create routes see:
// https://prototype-kit.service.gov.uk/docs/create-routes
//

const govukPrototypeKit = require('govuk-prototype-kit')
const router = govukPrototypeKit.requests.setupRouter()

// Add your routes here


router.post('/are-you-sure-answer', function(request, response) {

    var areyousure = request.session.data['createLicence']
    if (areyousure == "yes"){
        response.redirect("/probation-practitioner/who-with")
    } else {
        response.redirect("/probation-practitioner/case-list")
    }
})


router.post('/additional-conditions-answer', function(request, response) {

    var addConditions = request.session.data['additionalConditions']
    if (addConditions == "yes"){
        response.redirect("/../../../_common/not-testing.html")
    } else {
        response.redirect("/probation-practitioner/bespoke-conditions")
    }
})

router.post('/bespoke-conditions-answer', function(request, response) {

    var bespConditions = request.session.data['bespokeConditions']
    if (bespConditions == "yes"){
        response.redirect("/../../../_common/not-testing.html")
    } else {
        response.redirect("/probation-practitioner/check-licence")
    }
})

