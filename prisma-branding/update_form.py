import re

# Leer archivo
with open('app/page.js', 'r', encoding='utf-8') as f:
    content = f.read()

# Buscar y reemplazar solo el form tag
old_form = r'<form\s+className="space-y-6">'
new_form = '''<form 
                action="https://api.web3forms.com/submit" 
                method="POST"
                className="space-y-6"
              >
                {/* Web3Forms Configuration */}
                <input type="hidden" name="access_key" value="02efd0d3-bcec-40f9-a6fc-63b6d42927fd" />
                <input type="hidden" name="subject" value="Nuevo contacto desde Prisma Branding" />
                <input type="hidden" name="from_name" value="Formulario Web - Prisma Branding" />
                <input type="hidden" name="redirect" value="https://brandprisma.com?success=true" />'''

content = re.sub(old_form, new_form, content)

# Añadir name attributes a los inputs si no los tienen
content = re.sub(
    r'<input\s+type="text"\s+className="w-full',
    '<input type="text" name="name" required className="w-full',
    content,
    count=1
)

content = re.sub(
    r'<input\s+type="email"\s+className="w-full',
    '<input type="email" name="email" required className="w-full',
    content,
    count=1
)

content = re.sub(
    r'<textarea\s+rows="4"\s+className="w-full',
    '<textarea name="message" required rows="4" className="w-full',
    content,
    count=1
)

# Guardar
with open('app/page.js', 'w', encoding='utf-8') as f:
    f.write(content)

print("✅ Formulario actualizado sin tocar el resto del código")
