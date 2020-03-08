SELECT p.id, p2.parent_id
from Persona p
    INNER JOIN Persona p2 ON p.parent_id = p2.id
WHERE p2.parent_id IS NOT NULL