import os

def replace_in_file(file_path, replacements):
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        original_content = content
        for old, new in replacements.items():
            content = content.replace(old, new)
        
        if content != original_content:
            with open(file_path, 'w', encoding='utf-8') as f:
                f.write(content)
            return True
    except Exception as e:
        print(f"Error processing {file_path}: {e}")
    return False

replacements = {
    "Triostack CRM": "CRM Solutions",
    "Trio CRM": "CRM Solutions",
    "Triostack AI": "CRM Solutions AI"
}

# Directories to skip
skip_dirs = {'.git', '.next', 'node_modules', '.docker'}

for root, dirs, files in os.walk('.'):
    dirs[:] = [d for d in dirs if d not in skip_dirs]
    for file in files:
        if file.endswith(('.js', '.jsx', '.json', '.md', '.txt', '.sh', '.yml', '.yaml')):
            file_path = os.path.join(root, file)
            if replace_in_file(file_path, replacements):
                print(f"Updated: {file_path}")
