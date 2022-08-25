from django.views.decorators.http import require_POST
from django.views.generic import TemplateView


import generator.functions.generate_cable_documentation as gcd


class CableDocumentationView(TemplateView):
    template_name = "generator/cable_documentation.html"

    def get_context_data(self, **kwargs):
        context = super().get_context_data()
        return context


@require_POST
def generate_cable_documentation(request, **kwargs):
    """
    Generate cable documentation as bunch of xlsx files in zip archive.
    Generate from POST request params.
    :param request:
    :param kwargs:
    :return:
    """
    cable_parameter_list = gcd.get_cable_parameters(request.POST)
    buffer_folder_path = gcd.run_documentation_calculation(cable_parameter_list)
    archive_path = gcd.archive_and_delete(buffer_folder_path)
    response = gcd.serve_archived_documentation(archive_path)
    return response
