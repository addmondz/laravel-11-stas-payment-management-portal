<script>
import { computed } from 'vue';
import { usePage } from '@inertiajs/vue3';

export function isAdmin() {
    const { props } = usePage();
    return computed(() => props?.auth?.user?.role === 'admin');
}

export function getUserApprovalPrivillage() {
    const { props } = usePage();
    return computed(() => {
        const privileges = props?.auth?.user?.privileges;
        return privileges && privileges.length > 0 ? privileges[0]?.approval_role_id : null;
    });
}
</script>
