# `gitlab_application_settings`

Refer to the Terraform Registory for docs: [`gitlab_application_settings`](https://registry.terraform.io/providers/gitlabhq/gitlab/16.4.0/docs/resources/application_settings).

# `applicationSettings` Submodule <a name="`applicationSettings` Submodule" id="@cdktf/provider-gitlab.applicationSettings"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ApplicationSettings <a name="ApplicationSettings" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings"></a>

Represents a {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.4.0/docs/resources/application_settings gitlab_application_settings}.

#### Initializers <a name="Initializers" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.Initializer"></a>

```python
from cdktf_cdktf_provider_gitlab import application_settings

applicationSettings.ApplicationSettings(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  abuse_notification_email: str = None,
  admin_mode: typing.Union[bool, IResolvable] = None,
  after_sign_out_path: str = None,
  after_sign_up_text: str = None,
  akismet_api_key: str = None,
  akismet_enabled: typing.Union[bool, IResolvable] = None,
  allow_group_owners_to_manage_ldap: typing.Union[bool, IResolvable] = None,
  allow_local_requests_from_system_hooks: typing.Union[bool, IResolvable] = None,
  allow_local_requests_from_web_hooks_and_services: typing.Union[bool, IResolvable] = None,
  archive_builds_in_human_readable: str = None,
  asset_proxy_allowlist: typing.List[str] = None,
  asset_proxy_enabled: typing.Union[bool, IResolvable] = None,
  asset_proxy_secret_key: str = None,
  asset_proxy_url: str = None,
  authorized_keys_enabled: typing.Union[bool, IResolvable] = None,
  auto_devops_domain: str = None,
  auto_devops_enabled: typing.Union[bool, IResolvable] = None,
  automatic_purchased_storage_allocation: typing.Union[bool, IResolvable] = None,
  can_create_group: typing.Union[bool, IResolvable] = None,
  check_namespace_plan: typing.Union[bool, IResolvable] = None,
  commit_email_hostname: str = None,
  container_expiration_policies_enable_historic_entries: typing.Union[bool, IResolvable] = None,
  container_registry_cleanup_tags_service_max_list_size: typing.Union[int, float] = None,
  container_registry_delete_tags_service_timeout: typing.Union[int, float] = None,
  container_registry_expiration_policies_caching: typing.Union[bool, IResolvable] = None,
  container_registry_expiration_policies_worker_capacity: typing.Union[int, float] = None,
  container_registry_token_expire_delay: typing.Union[int, float] = None,
  deactivate_dormant_users: typing.Union[bool, IResolvable] = None,
  default_artifacts_expire_in: str = None,
  default_branch_name: str = None,
  default_branch_protection: typing.Union[int, float] = None,
  default_ci_config_path: str = None,
  default_group_visibility: str = None,
  default_project_creation: typing.Union[int, float] = None,
  default_projects_limit: typing.Union[int, float] = None,
  default_project_visibility: str = None,
  default_snippet_visibility: str = None,
  delayed_group_deletion: typing.Union[bool, IResolvable] = None,
  delayed_project_deletion: typing.Union[bool, IResolvable] = None,
  delete_inactive_projects: typing.Union[bool, IResolvable] = None,
  deletion_adjourned_period: typing.Union[int, float] = None,
  diff_max_files: typing.Union[int, float] = None,
  diff_max_lines: typing.Union[int, float] = None,
  diff_max_patch_bytes: typing.Union[int, float] = None,
  disabled_oauth_sign_in_sources: typing.List[str] = None,
  disable_feed_token: typing.Union[bool, IResolvable] = None,
  dns_rebinding_protection_enabled: typing.Union[bool, IResolvable] = None,
  domain_allowlist: typing.List[str] = None,
  domain_denylist: typing.List[str] = None,
  domain_denylist_enabled: typing.Union[bool, IResolvable] = None,
  dsa_key_restriction: typing.Union[int, float] = None,
  ecdsa_key_restriction: typing.Union[int, float] = None,
  ecdsa_sk_key_restriction: typing.Union[int, float] = None,
  ed25519_key_restriction: typing.Union[int, float] = None,
  ed25519_sk_key_restriction: typing.Union[int, float] = None,
  eks_access_key_id: str = None,
  eks_account_id: str = None,
  eks_integration_enabled: typing.Union[bool, IResolvable] = None,
  eks_secret_access_key: str = None,
  elasticsearch_aws: typing.Union[bool, IResolvable] = None,
  elasticsearch_aws_access_key: str = None,
  elasticsearch_aws_region: str = None,
  elasticsearch_aws_secret_access_key: str = None,
  elasticsearch_indexed_field_length_limit: typing.Union[int, float] = None,
  elasticsearch_indexed_file_size_limit_kb: typing.Union[int, float] = None,
  elasticsearch_indexing: typing.Union[bool, IResolvable] = None,
  elasticsearch_limit_indexing: typing.Union[bool, IResolvable] = None,
  elasticsearch_max_bulk_concurrency: typing.Union[int, float] = None,
  elasticsearch_max_bulk_size_mb: typing.Union[int, float] = None,
  elasticsearch_namespace_ids: typing.List[str] = None,
  elasticsearch_password: str = None,
  elasticsearch_project_ids: typing.List[str] = None,
  elasticsearch_search: typing.Union[bool, IResolvable] = None,
  elasticsearch_url: typing.List[str] = None,
  elasticsearch_username: str = None,
  email_additional_text: str = None,
  email_author_in_body: typing.Union[bool, IResolvable] = None,
  enabled_git_access_protocol: str = None,
  enforce_namespace_storage_limit: typing.Union[bool, IResolvable] = None,
  enforce_terms: typing.Union[bool, IResolvable] = None,
  external_auth_client_cert: str = None,
  external_auth_client_key: str = None,
  external_auth_client_key_pass: str = None,
  external_authorization_service_default_label: str = None,
  external_authorization_service_enabled: typing.Union[bool, IResolvable] = None,
  external_authorization_service_timeout: typing.Union[int, float] = None,
  external_authorization_service_url: str = None,
  external_pipeline_validation_service_timeout: typing.Union[int, float] = None,
  external_pipeline_validation_service_token: str = None,
  external_pipeline_validation_service_url: str = None,
  file_template_project_id: typing.Union[int, float] = None,
  first_day_of_week: typing.Union[int, float] = None,
  geo_node_allowed_ips: str = None,
  geo_status_timeout: typing.Union[int, float] = None,
  gitaly_timeout_default: typing.Union[int, float] = None,
  gitaly_timeout_fast: typing.Union[int, float] = None,
  gitaly_timeout_medium: typing.Union[int, float] = None,
  git_rate_limit_users_allowlist: typing.List[str] = None,
  git_two_factor_session_expiry: typing.Union[int, float] = None,
  grafana_enabled: typing.Union[bool, IResolvable] = None,
  grafana_url: str = None,
  gravatar_enabled: typing.Union[bool, IResolvable] = None,
  group_owners_can_manage_default_branch_protection: typing.Union[bool, IResolvable] = None,
  hashed_storage_enabled: typing.Union[bool, IResolvable] = None,
  help_page_hide_commercial_content: typing.Union[bool, IResolvable] = None,
  help_page_support_url: str = None,
  help_page_text: str = None,
  help_text: str = None,
  hide_third_party_offers: typing.Union[bool, IResolvable] = None,
  home_page_url: str = None,
  housekeeping_enabled: typing.Union[bool, IResolvable] = None,
  housekeeping_full_repack_period: typing.Union[int, float] = None,
  housekeeping_gc_period: typing.Union[int, float] = None,
  housekeeping_incremental_repack_period: typing.Union[int, float] = None,
  html_emails_enabled: typing.Union[bool, IResolvable] = None,
  id: str = None,
  import_sources: typing.List[str] = None,
  inactive_projects_delete_after_months: typing.Union[int, float] = None,
  inactive_projects_min_size_mb: typing.Union[int, float] = None,
  inactive_projects_send_warning_email_after_months: typing.Union[int, float] = None,
  in_product_marketing_emails_enabled: typing.Union[bool, IResolvable] = None,
  invisible_captcha_enabled: typing.Union[bool, IResolvable] = None,
  issues_create_limit: typing.Union[int, float] = None,
  keep_latest_artifact: typing.Union[bool, IResolvable] = None,
  local_markdown_version: typing.Union[int, float] = None,
  mailgun_events_enabled: typing.Union[bool, IResolvable] = None,
  mailgun_signing_key: str = None,
  maintenance_mode: typing.Union[bool, IResolvable] = None,
  maintenance_mode_message: str = None,
  max_artifacts_size: typing.Union[int, float] = None,
  max_attachment_size: typing.Union[int, float] = None,
  max_export_size: typing.Union[int, float] = None,
  max_import_size: typing.Union[int, float] = None,
  max_number_of_repository_downloads: typing.Union[int, float] = None,
  max_number_of_repository_downloads_within_time_period: typing.Union[int, float] = None,
  max_pages_size: typing.Union[int, float] = None,
  max_personal_access_token_lifetime: typing.Union[int, float] = None,
  max_ssh_key_lifetime: typing.Union[int, float] = None,
  metrics_method_call_threshold: typing.Union[int, float] = None,
  mirror_available: typing.Union[bool, IResolvable] = None,
  mirror_capacity_threshold: typing.Union[int, float] = None,
  mirror_max_capacity: typing.Union[int, float] = None,
  mirror_max_delay: typing.Union[int, float] = None,
  npm_package_requests_forwarding: typing.Union[bool, IResolvable] = None,
  outbound_local_requests_whitelist: typing.List[str] = None,
  package_registry_cleanup_policies_worker_capacity: typing.Union[int, float] = None,
  pages_domain_verification_enabled: typing.Union[bool, IResolvable] = None,
  password_authentication_enabled_for_git: typing.Union[bool, IResolvable] = None,
  password_authentication_enabled_for_web: typing.Union[bool, IResolvable] = None,
  password_lowercase_required: typing.Union[bool, IResolvable] = None,
  password_number_required: typing.Union[bool, IResolvable] = None,
  password_symbol_required: typing.Union[bool, IResolvable] = None,
  password_uppercase_required: typing.Union[bool, IResolvable] = None,
  performance_bar_allowed_group_path: str = None,
  personal_access_token_prefix: str = None,
  pipeline_limit_per_project_user_sha: typing.Union[int, float] = None,
  plantuml_enabled: typing.Union[bool, IResolvable] = None,
  plantuml_url: str = None,
  polling_interval_multiplier: typing.Union[int, float] = None,
  project_export_enabled: typing.Union[bool, IResolvable] = None,
  prometheus_metrics_enabled: typing.Union[bool, IResolvable] = None,
  protected_ci_variables: typing.Union[bool, IResolvable] = None,
  push_event_activities_limit: typing.Union[int, float] = None,
  push_event_hooks_limit: typing.Union[int, float] = None,
  pypi_package_requests_forwarding: typing.Union[bool, IResolvable] = None,
  rate_limiting_response_text: str = None,
  raw_blob_request_limit: typing.Union[int, float] = None,
  recaptcha_enabled: typing.Union[bool, IResolvable] = None,
  recaptcha_private_key: str = None,
  recaptcha_site_key: str = None,
  receive_max_input_size: typing.Union[int, float] = None,
  repository_checks_enabled: typing.Union[bool, IResolvable] = None,
  repository_size_limit: typing.Union[int, float] = None,
  repository_storages: typing.List[str] = None,
  repository_storages_weighted: typing.Mapping[typing.Union[int, float]] = None,
  require_admin_approval_after_user_signup: typing.Union[bool, IResolvable] = None,
  require_two_factor_authentication: typing.Union[bool, IResolvable] = None,
  restricted_visibility_levels: typing.List[str] = None,
  rsa_key_restriction: typing.Union[int, float] = None,
  search_rate_limit: typing.Union[int, float] = None,
  search_rate_limit_unauthenticated: typing.Union[int, float] = None,
  send_user_confirmation_email: typing.Union[bool, IResolvable] = None,
  session_expire_delay: typing.Union[int, float] = None,
  shared_runners_enabled: typing.Union[bool, IResolvable] = None,
  shared_runners_minutes: typing.Union[int, float] = None,
  shared_runners_text: str = None,
  sidekiq_job_limiter_compression_threshold_bytes: typing.Union[int, float] = None,
  sidekiq_job_limiter_limit_bytes: typing.Union[int, float] = None,
  sidekiq_job_limiter_mode: str = None,
  sign_in_text: str = None,
  signup_enabled: typing.Union[bool, IResolvable] = None,
  slack_app_enabled: typing.Union[bool, IResolvable] = None,
  slack_app_id: str = None,
  slack_app_secret: str = None,
  slack_app_signing_secret: str = None,
  slack_app_verification_token: str = None,
  snippet_size_limit: typing.Union[int, float] = None,
  snowplow_app_id: str = None,
  snowplow_collector_hostname: str = None,
  snowplow_cookie_domain: str = None,
  snowplow_enabled: typing.Union[bool, IResolvable] = None,
  sourcegraph_enabled: typing.Union[bool, IResolvable] = None,
  sourcegraph_public_only: typing.Union[bool, IResolvable] = None,
  sourcegraph_url: str = None,
  spam_check_api_key: str = None,
  spam_check_endpoint_enabled: typing.Union[bool, IResolvable] = None,
  spam_check_endpoint_url: str = None,
  suggest_pipeline_enabled: typing.Union[bool, IResolvable] = None,
  terminal_max_session_time: typing.Union[int, float] = None,
  terms: str = None,
  throttle_authenticated_api_enabled: typing.Union[bool, IResolvable] = None,
  throttle_authenticated_api_period_in_seconds: typing.Union[int, float] = None,
  throttle_authenticated_api_requests_per_period: typing.Union[int, float] = None,
  throttle_authenticated_packages_api_enabled: typing.Union[bool, IResolvable] = None,
  throttle_authenticated_packages_api_period_in_seconds: typing.Union[int, float] = None,
  throttle_authenticated_packages_api_requests_per_period: typing.Union[int, float] = None,
  throttle_authenticated_web_enabled: typing.Union[bool, IResolvable] = None,
  throttle_authenticated_web_period_in_seconds: typing.Union[int, float] = None,
  throttle_authenticated_web_requests_per_period: typing.Union[int, float] = None,
  throttle_unauthenticated_api_enabled: typing.Union[bool, IResolvable] = None,
  throttle_unauthenticated_api_period_in_seconds: typing.Union[int, float] = None,
  throttle_unauthenticated_api_requests_per_period: typing.Union[int, float] = None,
  throttle_unauthenticated_packages_api_enabled: typing.Union[bool, IResolvable] = None,
  throttle_unauthenticated_packages_api_period_in_seconds: typing.Union[int, float] = None,
  throttle_unauthenticated_packages_api_requests_per_period: typing.Union[int, float] = None,
  throttle_unauthenticated_web_enabled: typing.Union[bool, IResolvable] = None,
  throttle_unauthenticated_web_period_in_seconds: typing.Union[int, float] = None,
  throttle_unauthenticated_web_requests_per_period: typing.Union[int, float] = None,
  time_tracking_limit_to_hours: typing.Union[bool, IResolvable] = None,
  two_factor_grace_period: typing.Union[int, float] = None,
  unique_ips_limit_enabled: typing.Union[bool, IResolvable] = None,
  unique_ips_limit_per_user: typing.Union[int, float] = None,
  unique_ips_limit_time_window: typing.Union[int, float] = None,
  usage_ping_enabled: typing.Union[bool, IResolvable] = None,
  user_deactivation_emails_enabled: typing.Union[bool, IResolvable] = None,
  user_default_external: typing.Union[bool, IResolvable] = None,
  user_default_internal_regex: str = None,
  user_oauth_applications: typing.Union[bool, IResolvable] = None,
  user_show_add_ssh_key_message: typing.Union[bool, IResolvable] = None,
  version_check_enabled: typing.Union[bool, IResolvable] = None,
  web_ide_clientside_preview_enabled: typing.Union[bool, IResolvable] = None,
  whats_new_variant: str = None,
  wiki_page_max_content_bytes: typing.Union[int, float] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.Initializer.parameter.abuseNotificationEmail">abuse_notification_email</a></code> | <code>str</code> | If set, abuse reports are sent to this address. Abuse reports are always available in the Admin Area. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.Initializer.parameter.adminMode">admin_mode</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Require administrators to enable Admin Mode by re-authenticating for administrative tasks. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.Initializer.parameter.afterSignOutPath">after_sign_out_path</a></code> | <code>str</code> | Where to redirect users after logout. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.Initializer.parameter.afterSignUpText">after_sign_up_text</a></code> | <code>str</code> | Text shown to the user after signing up. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.Initializer.parameter.akismetApiKey">akismet_api_key</a></code> | <code>str</code> | API key for Akismet spam protection. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.Initializer.parameter.akismetEnabled">akismet_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | (If enabled, requires: akismet_api_key) Enable or disable Akismet spam protection. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.Initializer.parameter.allowGroupOwnersToManageLdap">allow_group_owners_to_manage_ldap</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Set to true to allow group owners to manage LDAP. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.Initializer.parameter.allowLocalRequestsFromSystemHooks">allow_local_requests_from_system_hooks</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Allow requests to the local network from system hooks. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.Initializer.parameter.allowLocalRequestsFromWebHooksAndServices">allow_local_requests_from_web_hooks_and_services</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Allow requests to the local network from web hooks and services. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.Initializer.parameter.archiveBuildsInHumanReadable">archive_builds_in_human_readable</a></code> | <code>str</code> | Set the duration for which the jobs are considered as old and expired. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.Initializer.parameter.assetProxyAllowlist">asset_proxy_allowlist</a></code> | <code>typing.List[str]</code> | Assets that match these domains are not proxied. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.Initializer.parameter.assetProxyEnabled">asset_proxy_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | (If enabled, requires: asset_proxy_url) Enable proxying of assets. GitLab restart is required to apply changes. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.Initializer.parameter.assetProxySecretKey">asset_proxy_secret_key</a></code> | <code>str</code> | Shared secret with the asset proxy server. GitLab restart is required to apply changes. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.Initializer.parameter.assetProxyUrl">asset_proxy_url</a></code> | <code>str</code> | URL of the asset proxy server. GitLab restart is required to apply changes. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.Initializer.parameter.authorizedKeysEnabled">authorized_keys_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | By default, we write to the authorized_keys file to support Git over SSH without additional configuration. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.Initializer.parameter.autoDevopsDomain">auto_devops_domain</a></code> | <code>str</code> | Specify a domain to use by default for every project’s Auto Review Apps and Auto Deploy stages. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.Initializer.parameter.autoDevopsEnabled">auto_devops_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Enable Auto DevOps for projects by default. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.Initializer.parameter.automaticPurchasedStorageAllocation">automatic_purchased_storage_allocation</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Enabling this permits automatic allocation of purchased storage in a namespace. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.Initializer.parameter.canCreateGroup">can_create_group</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Indicates whether users can create top-level groups. Introduced in GitLab 15.5. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.Initializer.parameter.checkNamespacePlan">check_namespace_plan</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Enabling this makes only licensed EE features available to projects if the project namespace’s plan includes the feature or if the project is public. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.Initializer.parameter.commitEmailHostname">commit_email_hostname</a></code> | <code>str</code> | Custom hostname (for private commit emails). |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.Initializer.parameter.containerExpirationPoliciesEnableHistoricEntries">container_expiration_policies_enable_historic_entries</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Enable cleanup policies for all projects. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.Initializer.parameter.containerRegistryCleanupTagsServiceMaxListSize">container_registry_cleanup_tags_service_max_list_size</a></code> | <code>typing.Union[int, float]</code> | The maximum number of tags that can be deleted in a single execution of cleanup policies. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.Initializer.parameter.containerRegistryDeleteTagsServiceTimeout">container_registry_delete_tags_service_timeout</a></code> | <code>typing.Union[int, float]</code> | The maximum time, in seconds, that the cleanup process can take to delete a batch of tags for cleanup policies. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.Initializer.parameter.containerRegistryExpirationPoliciesCaching">container_registry_expiration_policies_caching</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Caching during the execution of cleanup policies. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.Initializer.parameter.containerRegistryExpirationPoliciesWorkerCapacity">container_registry_expiration_policies_worker_capacity</a></code> | <code>typing.Union[int, float]</code> | Number of workers for cleanup policies. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.Initializer.parameter.containerRegistryTokenExpireDelay">container_registry_token_expire_delay</a></code> | <code>typing.Union[int, float]</code> | Container Registry token duration in minutes. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.Initializer.parameter.deactivateDormantUsers">deactivate_dormant_users</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Enable automatic deactivation of dormant users. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.Initializer.parameter.defaultArtifactsExpireIn">default_artifacts_expire_in</a></code> | <code>str</code> | Set the default expiration time for each job’s artifacts. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.Initializer.parameter.defaultBranchName">default_branch_name</a></code> | <code>str</code> | Instance-level custom initial branch name (introduced in GitLab 13.2). |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.Initializer.parameter.defaultBranchProtection">default_branch_protection</a></code> | <code>typing.Union[int, float]</code> | Determine if developers can push to the default branch. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.Initializer.parameter.defaultCiConfigPath">default_ci_config_path</a></code> | <code>str</code> | Default CI/CD configuration file and path for new projects (.gitlab-ci.yml if not set). |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.Initializer.parameter.defaultGroupVisibility">default_group_visibility</a></code> | <code>str</code> | What visibility level new groups receive. Can take private, internal and public as a parameter. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.Initializer.parameter.defaultProjectCreation">default_project_creation</a></code> | <code>typing.Union[int, float]</code> | Default project creation protection. Can take: 0 (No one), 1 (Maintainers) or 2 (Developers + Maintainers). |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.Initializer.parameter.defaultProjectsLimit">default_projects_limit</a></code> | <code>typing.Union[int, float]</code> | Project limit per user. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.Initializer.parameter.defaultProjectVisibility">default_project_visibility</a></code> | <code>str</code> | What visibility level new projects receive. Can take private, internal and public as a parameter. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.Initializer.parameter.defaultSnippetVisibility">default_snippet_visibility</a></code> | <code>str</code> | What visibility level new snippets receive. Can take private, internal and public as a parameter. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.Initializer.parameter.delayedGroupDeletion">delayed_group_deletion</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Enable delayed group deletion. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.Initializer.parameter.delayedProjectDeletion">delayed_project_deletion</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Enable delayed project deletion by default in new groups. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.Initializer.parameter.deleteInactiveProjects">delete_inactive_projects</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Enable inactive project deletion feature. Introduced in GitLab 14.10. Became operational in GitLab 15.0 (with feature flag inactive_projects_deletion). |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.Initializer.parameter.deletionAdjournedPeriod">deletion_adjourned_period</a></code> | <code>typing.Union[int, float]</code> | The number of days to wait before deleting a project or group that is marked for deletion. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.Initializer.parameter.diffMaxFiles">diff_max_files</a></code> | <code>typing.Union[int, float]</code> | Maximum files in a diff. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.Initializer.parameter.diffMaxLines">diff_max_lines</a></code> | <code>typing.Union[int, float]</code> | Maximum lines in a diff. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.Initializer.parameter.diffMaxPatchBytes">diff_max_patch_bytes</a></code> | <code>typing.Union[int, float]</code> | Maximum diff patch size, in bytes. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.Initializer.parameter.disabledOauthSignInSources">disabled_oauth_sign_in_sources</a></code> | <code>typing.List[str]</code> | Disabled OAuth sign-in sources. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.Initializer.parameter.disableFeedToken">disable_feed_token</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Disable display of RSS/Atom and calendar feed tokens (introduced in GitLab 13.7). |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.Initializer.parameter.dnsRebindingProtectionEnabled">dns_rebinding_protection_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Enforce DNS rebinding attack protection. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.Initializer.parameter.domainAllowlist">domain_allowlist</a></code> | <code>typing.List[str]</code> | Force people to use only corporate emails for sign-up. Null means there is no restriction. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.Initializer.parameter.domainDenylist">domain_denylist</a></code> | <code>typing.List[str]</code> | Users with email addresses that match these domains cannot sign up. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.Initializer.parameter.domainDenylistEnabled">domain_denylist_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | (If enabled, requires: domain_denylist) Allows blocking sign-ups from emails from specific domains. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.Initializer.parameter.dsaKeyRestriction">dsa_key_restriction</a></code> | <code>typing.Union[int, float]</code> | The minimum allowed bit length of an uploaded DSA key. 0 means no restriction. -1 disables DSA keys. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.Initializer.parameter.ecdsaKeyRestriction">ecdsa_key_restriction</a></code> | <code>typing.Union[int, float]</code> | The minimum allowed curve size (in bits) of an uploaded ECDSA key. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.Initializer.parameter.ecdsaSkKeyRestriction">ecdsa_sk_key_restriction</a></code> | <code>typing.Union[int, float]</code> | The minimum allowed curve size (in bits) of an uploaded ECDSA_SK key. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.Initializer.parameter.ed25519KeyRestriction">ed25519_key_restriction</a></code> | <code>typing.Union[int, float]</code> | The minimum allowed curve size (in bits) of an uploaded ED25519 key. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.Initializer.parameter.ed25519SkKeyRestriction">ed25519_sk_key_restriction</a></code> | <code>typing.Union[int, float]</code> | The minimum allowed curve size (in bits) of an uploaded ED25519_SK key. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.Initializer.parameter.eksAccessKeyId">eks_access_key_id</a></code> | <code>str</code> | AWS IAM access key ID. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.Initializer.parameter.eksAccountId">eks_account_id</a></code> | <code>str</code> | Amazon account ID. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.Initializer.parameter.eksIntegrationEnabled">eks_integration_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Enable integration with Amazon EKS. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.Initializer.parameter.eksSecretAccessKey">eks_secret_access_key</a></code> | <code>str</code> | AWS IAM secret access key. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.Initializer.parameter.elasticsearchAws">elasticsearch_aws</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Enable the use of AWS hosted Elasticsearch. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.Initializer.parameter.elasticsearchAwsAccessKey">elasticsearch_aws_access_key</a></code> | <code>str</code> | AWS IAM access key. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.Initializer.parameter.elasticsearchAwsRegion">elasticsearch_aws_region</a></code> | <code>str</code> | The AWS region the Elasticsearch domain is configured. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.Initializer.parameter.elasticsearchAwsSecretAccessKey">elasticsearch_aws_secret_access_key</a></code> | <code>str</code> | AWS IAM secret access key. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.Initializer.parameter.elasticsearchIndexedFieldLengthLimit">elasticsearch_indexed_field_length_limit</a></code> | <code>typing.Union[int, float]</code> | Maximum size of text fields to index by Elasticsearch. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.Initializer.parameter.elasticsearchIndexedFileSizeLimitKb">elasticsearch_indexed_file_size_limit_kb</a></code> | <code>typing.Union[int, float]</code> | Maximum size of repository and wiki files that are indexed by Elasticsearch. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.Initializer.parameter.elasticsearchIndexing">elasticsearch_indexing</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Enable Elasticsearch indexing. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.Initializer.parameter.elasticsearchLimitIndexing">elasticsearch_limit_indexing</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Limit Elasticsearch to index certain namespaces and projects. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.Initializer.parameter.elasticsearchMaxBulkConcurrency">elasticsearch_max_bulk_concurrency</a></code> | <code>typing.Union[int, float]</code> | Maximum concurrency of Elasticsearch bulk requests per indexing operation. This only applies to repository indexing operations. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.Initializer.parameter.elasticsearchMaxBulkSizeMb">elasticsearch_max_bulk_size_mb</a></code> | <code>typing.Union[int, float]</code> | Maximum size of Elasticsearch bulk indexing requests in MB. This only applies to repository indexing operations. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.Initializer.parameter.elasticsearchNamespaceIds">elasticsearch_namespace_ids</a></code> | <code>typing.List[str]</code> | The namespaces to index via Elasticsearch if elasticsearch_limit_indexing is enabled. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.Initializer.parameter.elasticsearchPassword">elasticsearch_password</a></code> | <code>str</code> | The password of your Elasticsearch instance. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.Initializer.parameter.elasticsearchProjectIds">elasticsearch_project_ids</a></code> | <code>typing.List[str]</code> | The projects to index via Elasticsearch if elasticsearch_limit_indexing is enabled. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.Initializer.parameter.elasticsearchSearch">elasticsearch_search</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Enable Elasticsearch search. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.Initializer.parameter.elasticsearchUrl">elasticsearch_url</a></code> | <code>typing.List[str]</code> | The URL to use for connecting to Elasticsearch. Use a comma-separated list to support cluster (for example, http://localhost:9200, http://localhost:9201). |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.Initializer.parameter.elasticsearchUsername">elasticsearch_username</a></code> | <code>str</code> | The username of your Elasticsearch instance. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.Initializer.parameter.emailAdditionalText">email_additional_text</a></code> | <code>str</code> | Additional text added to the bottom of every email for legal/auditing/compliance reasons. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.Initializer.parameter.emailAuthorInBody">email_author_in_body</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Some email servers do not support overriding the email sender name. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.Initializer.parameter.enabledGitAccessProtocol">enabled_git_access_protocol</a></code> | <code>str</code> | Enabled protocols for Git access. Allowed values are: ssh, http, and nil to allow both protocols. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.Initializer.parameter.enforceNamespaceStorageLimit">enforce_namespace_storage_limit</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Enabling this permits enforcement of namespace storage limits. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.Initializer.parameter.enforceTerms">enforce_terms</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | (If enabled, requires: terms) Enforce application ToS to all users. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.Initializer.parameter.externalAuthClientCert">external_auth_client_cert</a></code> | <code>str</code> | (If enabled, requires: external_auth_client_key) The certificate to use to authenticate with the external authorization service. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.Initializer.parameter.externalAuthClientKey">external_auth_client_key</a></code> | <code>str</code> | Private key for the certificate when authentication is required for the external authorization service, this is encrypted when stored. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.Initializer.parameter.externalAuthClientKeyPass">external_auth_client_key_pass</a></code> | <code>str</code> | Passphrase to use for the private key when authenticating with the external service this is encrypted when stored. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.Initializer.parameter.externalAuthorizationServiceDefaultLabel">external_authorization_service_default_label</a></code> | <code>str</code> | The default classification label to use when requesting authorization and no classification label has been specified on the project. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.Initializer.parameter.externalAuthorizationServiceEnabled">external_authorization_service_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | (If enabled, requires: external_authorization_service_default_label, external_authorization_service_timeout and external_authorization_service_url) Enable using an external authorization service for accessing projects. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.Initializer.parameter.externalAuthorizationServiceTimeout">external_authorization_service_timeout</a></code> | <code>typing.Union[int, float]</code> | The timeout after which an authorization request is aborted, in seconds. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.Initializer.parameter.externalAuthorizationServiceUrl">external_authorization_service_url</a></code> | <code>str</code> | URL to which authorization requests are directed. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.Initializer.parameter.externalPipelineValidationServiceTimeout">external_pipeline_validation_service_timeout</a></code> | <code>typing.Union[int, float]</code> | How long to wait for a response from the pipeline validation service. Assumes OK if it times out. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.Initializer.parameter.externalPipelineValidationServiceToken">external_pipeline_validation_service_token</a></code> | <code>str</code> | Optional. Token to include as the X-Gitlab-Token header in requests to the URL in external_pipeline_validation_service_url. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.Initializer.parameter.externalPipelineValidationServiceUrl">external_pipeline_validation_service_url</a></code> | <code>str</code> | URL to use for pipeline validation requests. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.Initializer.parameter.fileTemplateProjectId">file_template_project_id</a></code> | <code>typing.Union[int, float]</code> | The ID of a project to load custom file templates from. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.Initializer.parameter.firstDayOfWeek">first_day_of_week</a></code> | <code>typing.Union[int, float]</code> | Start day of the week for calendar views and date pickers. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.Initializer.parameter.geoNodeAllowedIps">geo_node_allowed_ips</a></code> | <code>str</code> | Comma-separated list of IPs and CIDRs of allowed secondary nodes. For example, 1.1.1.1, 2.2.2.0/24. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.Initializer.parameter.geoStatusTimeout">geo_status_timeout</a></code> | <code>typing.Union[int, float]</code> | The amount of seconds after which a request to get a secondary node status times out. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.Initializer.parameter.gitalyTimeoutDefault">gitaly_timeout_default</a></code> | <code>typing.Union[int, float]</code> | Default Gitaly timeout, in seconds. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.Initializer.parameter.gitalyTimeoutFast">gitaly_timeout_fast</a></code> | <code>typing.Union[int, float]</code> | Gitaly fast operation timeout, in seconds. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.Initializer.parameter.gitalyTimeoutMedium">gitaly_timeout_medium</a></code> | <code>typing.Union[int, float]</code> | Medium Gitaly timeout, in seconds. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.Initializer.parameter.gitRateLimitUsersAllowlist">git_rate_limit_users_allowlist</a></code> | <code>typing.List[str]</code> | List of usernames excluded from Git anti-abuse rate limits. Maximum: 100 usernames. Introduced in GitLab 15.2. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.Initializer.parameter.gitTwoFactorSessionExpiry">git_two_factor_session_expiry</a></code> | <code>typing.Union[int, float]</code> | Maximum duration (in minutes) of a session for Git operations when 2FA is enabled. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.Initializer.parameter.grafanaEnabled">grafana_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Enable Grafana. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.Initializer.parameter.grafanaUrl">grafana_url</a></code> | <code>str</code> | Grafana URL. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.Initializer.parameter.gravatarEnabled">gravatar_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Enable Gravatar. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.Initializer.parameter.groupOwnersCanManageDefaultBranchProtection">group_owners_can_manage_default_branch_protection</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Prevent overrides of default branch protection. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.Initializer.parameter.hashedStorageEnabled">hashed_storage_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Create new projects using hashed storage paths: Enable immutable, hash-based paths and repository names to store repositories on disk. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.Initializer.parameter.helpPageHideCommercialContent">help_page_hide_commercial_content</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Hide marketing-related entries from help. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.Initializer.parameter.helpPageSupportUrl">help_page_support_url</a></code> | <code>str</code> | Alternate support URL for help page and help dropdown. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.Initializer.parameter.helpPageText">help_page_text</a></code> | <code>str</code> | Custom text displayed on the help page. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.Initializer.parameter.helpText">help_text</a></code> | <code>str</code> | GitLab server administrator information. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.Initializer.parameter.hideThirdPartyOffers">hide_third_party_offers</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Do not display offers from third parties in GitLab. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.Initializer.parameter.homePageUrl">home_page_url</a></code> | <code>str</code> | Redirect to this URL when not logged in. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.Initializer.parameter.housekeepingEnabled">housekeeping_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | (If enabled, requires: housekeeping_bitmaps_enabled, housekeeping_full_repack_period, housekeeping_gc_period, and housekeeping_incremental_repack_period) Enable or disable Git housekeeping. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.Initializer.parameter.housekeepingFullRepackPeriod">housekeeping_full_repack_period</a></code> | <code>typing.Union[int, float]</code> | Number of Git pushes after which an incremental git repack is run. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.Initializer.parameter.housekeepingGcPeriod">housekeeping_gc_period</a></code> | <code>typing.Union[int, float]</code> | Number of Git pushes after which git gc is run. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.Initializer.parameter.housekeepingIncrementalRepackPeriod">housekeeping_incremental_repack_period</a></code> | <code>typing.Union[int, float]</code> | Number of Git pushes after which an incremental git repack is run. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.Initializer.parameter.htmlEmailsEnabled">html_emails_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Enable HTML emails. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.4.0/docs/resources/application_settings#id ApplicationSettings#id}. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.Initializer.parameter.importSources">import_sources</a></code> | <code>typing.List[str]</code> | Sources to allow project import from. Valid values are: `github`, `bitbucket`, `bitbucket_server`, `fogbugz`, `git`, `gitlab_project`, `gitea`, `manifest`. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.Initializer.parameter.inactiveProjectsDeleteAfterMonths">inactive_projects_delete_after_months</a></code> | <code>typing.Union[int, float]</code> | If delete_inactive_projects is true, the time (in months) to wait before deleting inactive projects. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.Initializer.parameter.inactiveProjectsMinSizeMb">inactive_projects_min_size_mb</a></code> | <code>typing.Union[int, float]</code> | If delete_inactive_projects is true, the minimum repository size for projects to be checked for inactivity. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.Initializer.parameter.inactiveProjectsSendWarningEmailAfterMonths">inactive_projects_send_warning_email_after_months</a></code> | <code>typing.Union[int, float]</code> | If delete_inactive_projects is true, sets the time (in months) to wait before emailing maintainers that the project is scheduled be deleted because it is inactive. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.Initializer.parameter.inProductMarketingEmailsEnabled">in_product_marketing_emails_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Enable in-product marketing emails. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.Initializer.parameter.invisibleCaptchaEnabled">invisible_captcha_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Enable Invisible CAPTCHA spam detection during sign-up. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.Initializer.parameter.issuesCreateLimit">issues_create_limit</a></code> | <code>typing.Union[int, float]</code> | Max number of issue creation requests per minute per user. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.Initializer.parameter.keepLatestArtifact">keep_latest_artifact</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Prevent the deletion of the artifacts from the most recent successful jobs, regardless of the expiry time. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.Initializer.parameter.localMarkdownVersion">local_markdown_version</a></code> | <code>typing.Union[int, float]</code> | Increase this value when any cached Markdown should be invalidated. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.Initializer.parameter.mailgunEventsEnabled">mailgun_events_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Enable Mailgun event receiver. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.Initializer.parameter.mailgunSigningKey">mailgun_signing_key</a></code> | <code>str</code> | The Mailgun HTTP webhook signing key for receiving events from webhook. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.Initializer.parameter.maintenanceMode">maintenance_mode</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | When instance is in maintenance mode, non-administrative users can sign in with read-only access and make read-only API requests. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.Initializer.parameter.maintenanceModeMessage">maintenance_mode_message</a></code> | <code>str</code> | Message displayed when instance is in maintenance mode. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.Initializer.parameter.maxArtifactsSize">max_artifacts_size</a></code> | <code>typing.Union[int, float]</code> | Maximum artifacts size in MB. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.Initializer.parameter.maxAttachmentSize">max_attachment_size</a></code> | <code>typing.Union[int, float]</code> | Limit attachment size in MB. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.Initializer.parameter.maxExportSize">max_export_size</a></code> | <code>typing.Union[int, float]</code> | Maximum export size in MB. 0 for unlimited. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.Initializer.parameter.maxImportSize">max_import_size</a></code> | <code>typing.Union[int, float]</code> | Maximum import size in MB. 0 for unlimited. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.Initializer.parameter.maxNumberOfRepositoryDownloads">max_number_of_repository_downloads</a></code> | <code>typing.Union[int, float]</code> | Maximum number of unique repositories a user can download in the specified time period before they are banned. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.Initializer.parameter.maxNumberOfRepositoryDownloadsWithinTimePeriod">max_number_of_repository_downloads_within_time_period</a></code> | <code>typing.Union[int, float]</code> | Reporting time period (in seconds). Maximum: 864000 seconds (10 days). Introduced in GitLab 15.1. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.Initializer.parameter.maxPagesSize">max_pages_size</a></code> | <code>typing.Union[int, float]</code> | Maximum size of pages repositories in MB. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.Initializer.parameter.maxPersonalAccessTokenLifetime">max_personal_access_token_lifetime</a></code> | <code>typing.Union[int, float]</code> | Maximum allowable lifetime for access tokens in days. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.Initializer.parameter.maxSshKeyLifetime">max_ssh_key_lifetime</a></code> | <code>typing.Union[int, float]</code> | Maximum allowable lifetime for SSH keys in days. Introduced in GitLab 14.6. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.Initializer.parameter.metricsMethodCallThreshold">metrics_method_call_threshold</a></code> | <code>typing.Union[int, float]</code> | A method call is only tracked when it takes longer than the given amount of milliseconds. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.Initializer.parameter.mirrorAvailable">mirror_available</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Allow repository mirroring to configured by project Maintainers. If disabled, only Administrators can configure repository mirroring. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.Initializer.parameter.mirrorCapacityThreshold">mirror_capacity_threshold</a></code> | <code>typing.Union[int, float]</code> | Minimum capacity to be available before scheduling more mirrors preemptively. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.Initializer.parameter.mirrorMaxCapacity">mirror_max_capacity</a></code> | <code>typing.Union[int, float]</code> | Maximum number of mirrors that can be synchronizing at the same time. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.Initializer.parameter.mirrorMaxDelay">mirror_max_delay</a></code> | <code>typing.Union[int, float]</code> | Maximum time (in minutes) between updates that a mirror can have when scheduled to synchronize. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.Initializer.parameter.npmPackageRequestsForwarding">npm_package_requests_forwarding</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Use npmjs.org as a default remote repository when the package is not found in the GitLab Package Registry for npm. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.Initializer.parameter.outboundLocalRequestsWhitelist">outbound_local_requests_whitelist</a></code> | <code>typing.List[str]</code> | Define a list of trusted domains or IP addresses to which local requests are allowed when local requests for hooks and services are disabled. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.Initializer.parameter.packageRegistryCleanupPoliciesWorkerCapacity">package_registry_cleanup_policies_worker_capacity</a></code> | <code>typing.Union[int, float]</code> | Number of workers assigned to the packages cleanup policies. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.Initializer.parameter.pagesDomainVerificationEnabled">pages_domain_verification_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Require users to prove ownership of custom domains. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.Initializer.parameter.passwordAuthenticationEnabledForGit">password_authentication_enabled_for_git</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Enable authentication for Git over HTTP(S) via a GitLab account password. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.Initializer.parameter.passwordAuthenticationEnabledForWeb">password_authentication_enabled_for_web</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Enable authentication for the web interface via a GitLab account password. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.Initializer.parameter.passwordLowercaseRequired">password_lowercase_required</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Indicates whether passwords require at least one lowercase letter. Introduced in GitLab 15.1. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.Initializer.parameter.passwordNumberRequired">password_number_required</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Indicates whether passwords require at least one number. Introduced in GitLab 15.1. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.Initializer.parameter.passwordSymbolRequired">password_symbol_required</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Indicates whether passwords require at least one symbol character. Introduced in GitLab 15.1. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.Initializer.parameter.passwordUppercaseRequired">password_uppercase_required</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Indicates whether passwords require at least one uppercase letter. Introduced in GitLab 15.1. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.Initializer.parameter.performanceBarAllowedGroupPath">performance_bar_allowed_group_path</a></code> | <code>str</code> | Path of the group that is allowed to toggle the performance bar. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.Initializer.parameter.personalAccessTokenPrefix">personal_access_token_prefix</a></code> | <code>str</code> | Prefix for all generated personal access tokens. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.Initializer.parameter.pipelineLimitPerProjectUserSha">pipeline_limit_per_project_user_sha</a></code> | <code>typing.Union[int, float]</code> | Maximum number of pipeline creation requests per minute per user and commit. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.Initializer.parameter.plantumlEnabled">plantuml_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | (If enabled, requires: plantuml_url) Enable PlantUML integration. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.Initializer.parameter.plantumlUrl">plantuml_url</a></code> | <code>str</code> | The PlantUML instance URL for integration. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.Initializer.parameter.pollingIntervalMultiplier">polling_interval_multiplier</a></code> | <code>typing.Union[int, float]</code> | Interval multiplier used by endpoints that perform polling. Set to 0 to disable polling. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.Initializer.parameter.projectExportEnabled">project_export_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Enable project export. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.Initializer.parameter.prometheusMetricsEnabled">prometheus_metrics_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Enable Prometheus metrics. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.Initializer.parameter.protectedCiVariables">protected_ci_variables</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | CI/CD variables are protected by default. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.Initializer.parameter.pushEventActivitiesLimit">push_event_activities_limit</a></code> | <code>typing.Union[int, float]</code> | Number of changes (branches or tags) in a single push to determine whether individual push events or bulk push events are created. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.Initializer.parameter.pushEventHooksLimit">push_event_hooks_limit</a></code> | <code>typing.Union[int, float]</code> | Number of changes (branches or tags) in a single push to determine whether webhooks and services fire or not. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.Initializer.parameter.pypiPackageRequestsForwarding">pypi_package_requests_forwarding</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Use pypi.org as a default remote repository when the package is not found in the GitLab Package Registry for PyPI. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.Initializer.parameter.rateLimitingResponseText">rate_limiting_response_text</a></code> | <code>str</code> | When rate limiting is enabled via the throttle_* settings, send this plain text response when a rate limit is exceeded. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.Initializer.parameter.rawBlobRequestLimit">raw_blob_request_limit</a></code> | <code>typing.Union[int, float]</code> | Max number of requests per minute for each raw path. To disable throttling set to 0. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.Initializer.parameter.recaptchaEnabled">recaptcha_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | (If enabled, requires: recaptcha_private_key and recaptcha_site_key) Enable reCAPTCHA. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.Initializer.parameter.recaptchaPrivateKey">recaptcha_private_key</a></code> | <code>str</code> | Private key for reCAPTCHA. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.Initializer.parameter.recaptchaSiteKey">recaptcha_site_key</a></code> | <code>str</code> | Site key for reCAPTCHA. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.Initializer.parameter.receiveMaxInputSize">receive_max_input_size</a></code> | <code>typing.Union[int, float]</code> | Maximum push size (MB). |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.Initializer.parameter.repositoryChecksEnabled">repository_checks_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | GitLab periodically runs git fsck in all project and wiki repositories to look for silent disk corruption issues. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.Initializer.parameter.repositorySizeLimit">repository_size_limit</a></code> | <code>typing.Union[int, float]</code> | Size limit per repository (MB). |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.Initializer.parameter.repositoryStorages">repository_storages</a></code> | <code>typing.List[str]</code> | (GitLab 13.0 and earlier) List of names of enabled storage paths, taken from gitlab.yml. New projects are created in one of these stores, chosen at random. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.Initializer.parameter.repositoryStoragesWeighted">repository_storages_weighted</a></code> | <code>typing.Mapping[typing.Union[int, float]]</code> | (GitLab 13.1 and later) Hash of names of taken from gitlab.yml to weights. New projects are created in one of these stores, chosen by a weighted random selection. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.Initializer.parameter.requireAdminApprovalAfterUserSignup">require_admin_approval_after_user_signup</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | When enabled, any user that signs up for an account using the registration form is placed under a Pending approval state and has to be explicitly approved by an administrator. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.Initializer.parameter.requireTwoFactorAuthentication">require_two_factor_authentication</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | (If enabled, requires: two_factor_grace_period) Require all users to set up Two-factor authentication. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.Initializer.parameter.restrictedVisibilityLevels">restricted_visibility_levels</a></code> | <code>typing.List[str]</code> | Selected levels cannot be used by non-Administrator users for groups, projects or snippets. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.Initializer.parameter.rsaKeyRestriction">rsa_key_restriction</a></code> | <code>typing.Union[int, float]</code> | The minimum allowed bit length of an uploaded RSA key. 0 means no restriction. -1 disables RSA keys. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.Initializer.parameter.searchRateLimit">search_rate_limit</a></code> | <code>typing.Union[int, float]</code> | Max number of requests per minute for performing a search while authenticated. To disable throttling set to 0. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.Initializer.parameter.searchRateLimitUnauthenticated">search_rate_limit_unauthenticated</a></code> | <code>typing.Union[int, float]</code> | Max number of requests per minute for performing a search while unauthenticated. To disable throttling set to 0. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.Initializer.parameter.sendUserConfirmationEmail">send_user_confirmation_email</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Send confirmation email on sign-up. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.Initializer.parameter.sessionExpireDelay">session_expire_delay</a></code> | <code>typing.Union[int, float]</code> | Session duration in minutes. GitLab restart is required to apply changes. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.Initializer.parameter.sharedRunnersEnabled">shared_runners_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | (If enabled, requires: shared_runners_text and shared_runners_minutes) Enable shared runners for new projects. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.Initializer.parameter.sharedRunnersMinutes">shared_runners_minutes</a></code> | <code>typing.Union[int, float]</code> | Set the maximum number of CI/CD minutes that a group can use on shared runners per month. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.Initializer.parameter.sharedRunnersText">shared_runners_text</a></code> | <code>str</code> | Shared runners text. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.Initializer.parameter.sidekiqJobLimiterCompressionThresholdBytes">sidekiq_job_limiter_compression_threshold_bytes</a></code> | <code>typing.Union[int, float]</code> | The threshold in bytes at which Sidekiq jobs are compressed before being stored in Redis. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.Initializer.parameter.sidekiqJobLimiterLimitBytes">sidekiq_job_limiter_limit_bytes</a></code> | <code>typing.Union[int, float]</code> | The threshold in bytes at which Sidekiq jobs are rejected. 0 means do not reject any job. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.Initializer.parameter.sidekiqJobLimiterMode">sidekiq_job_limiter_mode</a></code> | <code>str</code> | track or compress. Sets the behavior for Sidekiq job size limits. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.Initializer.parameter.signInText">sign_in_text</a></code> | <code>str</code> | Text on the login page. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.Initializer.parameter.signupEnabled">signup_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Enable registration. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.Initializer.parameter.slackAppEnabled">slack_app_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | (If enabled, requires: slack_app_id, slack_app_secret and slack_app_secret) Enable Slack app. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.Initializer.parameter.slackAppId">slack_app_id</a></code> | <code>str</code> | The app ID of the Slack-app. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.Initializer.parameter.slackAppSecret">slack_app_secret</a></code> | <code>str</code> | The app secret of the Slack-app. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.Initializer.parameter.slackAppSigningSecret">slack_app_signing_secret</a></code> | <code>str</code> | The signing secret of the Slack-app. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.Initializer.parameter.slackAppVerificationToken">slack_app_verification_token</a></code> | <code>str</code> | The verification token of the Slack-app. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.Initializer.parameter.snippetSizeLimit">snippet_size_limit</a></code> | <code>typing.Union[int, float]</code> | Max snippet content size in bytes. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.Initializer.parameter.snowplowAppId">snowplow_app_id</a></code> | <code>str</code> | The Snowplow site name / application ID. (for example, gitlab). |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.Initializer.parameter.snowplowCollectorHostname">snowplow_collector_hostname</a></code> | <code>str</code> | The Snowplow collector hostname. (for example, snowplow.trx.gitlab.net). |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.Initializer.parameter.snowplowCookieDomain">snowplow_cookie_domain</a></code> | <code>str</code> | The Snowplow cookie domain. (for example, .gitlab.com). |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.Initializer.parameter.snowplowEnabled">snowplow_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Enable snowplow tracking. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.Initializer.parameter.sourcegraphEnabled">sourcegraph_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Enables Sourcegraph integration. If enabled, requires sourcegraph_url. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.Initializer.parameter.sourcegraphPublicOnly">sourcegraph_public_only</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Blocks Sourcegraph from being loaded on private and internal projects. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.Initializer.parameter.sourcegraphUrl">sourcegraph_url</a></code> | <code>str</code> | The Sourcegraph instance URL for integration. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.Initializer.parameter.spamCheckApiKey">spam_check_api_key</a></code> | <code>str</code> | API key used by GitLab for accessing the Spam Check service endpoint. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.Initializer.parameter.spamCheckEndpointEnabled">spam_check_endpoint_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Enables spam checking using external Spam Check API endpoint. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.Initializer.parameter.spamCheckEndpointUrl">spam_check_endpoint_url</a></code> | <code>str</code> | URL of the external Spamcheck service endpoint. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.Initializer.parameter.suggestPipelineEnabled">suggest_pipeline_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Enable pipeline suggestion banner. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.Initializer.parameter.terminalMaxSessionTime">terminal_max_session_time</a></code> | <code>typing.Union[int, float]</code> | Maximum time for web terminal websocket connection (in seconds). Set to 0 for unlimited time. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.Initializer.parameter.terms">terms</a></code> | <code>str</code> | (Required by: enforce_terms) Markdown content for the ToS. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.Initializer.parameter.throttleAuthenticatedApiEnabled">throttle_authenticated_api_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | (If enabled, requires: throttle_authenticated_api_period_in_seconds and throttle_authenticated_api_requests_per_period) Enable authenticated API request rate limit. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.Initializer.parameter.throttleAuthenticatedApiPeriodInSeconds">throttle_authenticated_api_period_in_seconds</a></code> | <code>typing.Union[int, float]</code> | Rate limit period (in seconds). |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.Initializer.parameter.throttleAuthenticatedApiRequestsPerPeriod">throttle_authenticated_api_requests_per_period</a></code> | <code>typing.Union[int, float]</code> | Maximum requests per period per user. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.Initializer.parameter.throttleAuthenticatedPackagesApiEnabled">throttle_authenticated_packages_api_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | (If enabled, requires: throttle_authenticated_packages_api_period_in_seconds and throttle_authenticated_packages_api_requests_per_period) Enable authenticated API request rate limit. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.Initializer.parameter.throttleAuthenticatedPackagesApiPeriodInSeconds">throttle_authenticated_packages_api_period_in_seconds</a></code> | <code>typing.Union[int, float]</code> | Rate limit period (in seconds). View Package Registry rate limits for more details. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.Initializer.parameter.throttleAuthenticatedPackagesApiRequestsPerPeriod">throttle_authenticated_packages_api_requests_per_period</a></code> | <code>typing.Union[int, float]</code> | Maximum requests per period per user. View Package Registry rate limits for more details. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.Initializer.parameter.throttleAuthenticatedWebEnabled">throttle_authenticated_web_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | (If enabled, requires: throttle_authenticated_web_period_in_seconds and throttle_authenticated_web_requests_per_period) Enable authenticated web request rate limit. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.Initializer.parameter.throttleAuthenticatedWebPeriodInSeconds">throttle_authenticated_web_period_in_seconds</a></code> | <code>typing.Union[int, float]</code> | Rate limit period (in seconds). |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.Initializer.parameter.throttleAuthenticatedWebRequestsPerPeriod">throttle_authenticated_web_requests_per_period</a></code> | <code>typing.Union[int, float]</code> | Maximum requests per period per user. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.Initializer.parameter.throttleUnauthenticatedApiEnabled">throttle_unauthenticated_api_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | (If enabled, requires: throttle_unauthenticated_api_period_in_seconds and throttle_unauthenticated_api_requests_per_period) Enable unauthenticated API request rate limit. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.Initializer.parameter.throttleUnauthenticatedApiPeriodInSeconds">throttle_unauthenticated_api_period_in_seconds</a></code> | <code>typing.Union[int, float]</code> | Rate limit period in seconds. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.Initializer.parameter.throttleUnauthenticatedApiRequestsPerPeriod">throttle_unauthenticated_api_requests_per_period</a></code> | <code>typing.Union[int, float]</code> | Max requests per period per IP. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.Initializer.parameter.throttleUnauthenticatedPackagesApiEnabled">throttle_unauthenticated_packages_api_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | (If enabled, requires: throttle_unauthenticated_packages_api_period_in_seconds and throttle_unauthenticated_packages_api_requests_per_period) Enable authenticated API request rate limit. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.Initializer.parameter.throttleUnauthenticatedPackagesApiPeriodInSeconds">throttle_unauthenticated_packages_api_period_in_seconds</a></code> | <code>typing.Union[int, float]</code> | Rate limit period (in seconds). View Package Registry rate limits for more details. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.Initializer.parameter.throttleUnauthenticatedPackagesApiRequestsPerPeriod">throttle_unauthenticated_packages_api_requests_per_period</a></code> | <code>typing.Union[int, float]</code> | Maximum requests per period per user. View Package Registry rate limits for more details. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.Initializer.parameter.throttleUnauthenticatedWebEnabled">throttle_unauthenticated_web_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | (If enabled, requires: throttle_unauthenticated_web_period_in_seconds and throttle_unauthenticated_web_requests_per_period) Enable unauthenticated web request rate limit. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.Initializer.parameter.throttleUnauthenticatedWebPeriodInSeconds">throttle_unauthenticated_web_period_in_seconds</a></code> | <code>typing.Union[int, float]</code> | Rate limit period in seconds. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.Initializer.parameter.throttleUnauthenticatedWebRequestsPerPeriod">throttle_unauthenticated_web_requests_per_period</a></code> | <code>typing.Union[int, float]</code> | Max requests per period per IP. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.Initializer.parameter.timeTrackingLimitToHours">time_tracking_limit_to_hours</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Limit display of time tracking units to hours. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.Initializer.parameter.twoFactorGracePeriod">two_factor_grace_period</a></code> | <code>typing.Union[int, float]</code> | Amount of time (in hours) that users are allowed to skip forced configuration of two-factor authentication. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.Initializer.parameter.uniqueIpsLimitEnabled">unique_ips_limit_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | (If enabled, requires: unique_ips_limit_per_user and unique_ips_limit_time_window) Limit sign in from multiple IPs. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.Initializer.parameter.uniqueIpsLimitPerUser">unique_ips_limit_per_user</a></code> | <code>typing.Union[int, float]</code> | Maximum number of IPs per user. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.Initializer.parameter.uniqueIpsLimitTimeWindow">unique_ips_limit_time_window</a></code> | <code>typing.Union[int, float]</code> | How many seconds an IP is counted towards the limit. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.Initializer.parameter.usagePingEnabled">usage_ping_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Every week GitLab reports license usage back to GitLab, Inc. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.Initializer.parameter.userDeactivationEmailsEnabled">user_deactivation_emails_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Send an email to users upon account deactivation. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.Initializer.parameter.userDefaultExternal">user_default_external</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Newly registered users are external by default. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.Initializer.parameter.userDefaultInternalRegex">user_default_internal_regex</a></code> | <code>str</code> | Specify an email address regex pattern to identify default internal users. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.Initializer.parameter.userOauthApplications">user_oauth_applications</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Allow users to register any application to use GitLab as an OAuth provider. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.Initializer.parameter.userShowAddSshKeyMessage">user_show_add_ssh_key_message</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | When set to false disable the You won't be able to pull or push project code via SSH warning shown to users with no uploaded SSH key. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.Initializer.parameter.versionCheckEnabled">version_check_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Let GitLab inform you when an update is available. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.Initializer.parameter.webIdeClientsidePreviewEnabled">web_ide_clientside_preview_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Live Preview (allow live previews of JavaScript projects in the Web IDE using CodeSandbox Live Preview). |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.Initializer.parameter.whatsNewVariant">whats_new_variant</a></code> | <code>str</code> | What’s new variant, possible values: all_tiers, current_tier, and disabled. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.Initializer.parameter.wikiPageMaxContentBytes">wiki_page_max_content_bytes</a></code> | <code>typing.Union[int, float]</code> | Maximum wiki page content size in bytes. The minimum value is 1024 bytes. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `abuse_notification_email`<sup>Optional</sup> <a name="abuse_notification_email" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.Initializer.parameter.abuseNotificationEmail"></a>

- *Type:* str

If set, abuse reports are sent to this address. Abuse reports are always available in the Admin Area.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.4.0/docs/resources/application_settings#abuse_notification_email ApplicationSettings#abuse_notification_email}

---

##### `admin_mode`<sup>Optional</sup> <a name="admin_mode" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.Initializer.parameter.adminMode"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Require administrators to enable Admin Mode by re-authenticating for administrative tasks.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.4.0/docs/resources/application_settings#admin_mode ApplicationSettings#admin_mode}

---

##### `after_sign_out_path`<sup>Optional</sup> <a name="after_sign_out_path" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.Initializer.parameter.afterSignOutPath"></a>

- *Type:* str

Where to redirect users after logout.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.4.0/docs/resources/application_settings#after_sign_out_path ApplicationSettings#after_sign_out_path}

---

##### `after_sign_up_text`<sup>Optional</sup> <a name="after_sign_up_text" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.Initializer.parameter.afterSignUpText"></a>

- *Type:* str

Text shown to the user after signing up.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.4.0/docs/resources/application_settings#after_sign_up_text ApplicationSettings#after_sign_up_text}

---

##### `akismet_api_key`<sup>Optional</sup> <a name="akismet_api_key" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.Initializer.parameter.akismetApiKey"></a>

- *Type:* str

API key for Akismet spam protection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.4.0/docs/resources/application_settings#akismet_api_key ApplicationSettings#akismet_api_key}

---

##### `akismet_enabled`<sup>Optional</sup> <a name="akismet_enabled" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.Initializer.parameter.akismetEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

(If enabled, requires: akismet_api_key) Enable or disable Akismet spam protection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.4.0/docs/resources/application_settings#akismet_enabled ApplicationSettings#akismet_enabled}

---

##### `allow_group_owners_to_manage_ldap`<sup>Optional</sup> <a name="allow_group_owners_to_manage_ldap" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.Initializer.parameter.allowGroupOwnersToManageLdap"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Set to true to allow group owners to manage LDAP.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.4.0/docs/resources/application_settings#allow_group_owners_to_manage_ldap ApplicationSettings#allow_group_owners_to_manage_ldap}

---

##### `allow_local_requests_from_system_hooks`<sup>Optional</sup> <a name="allow_local_requests_from_system_hooks" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.Initializer.parameter.allowLocalRequestsFromSystemHooks"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Allow requests to the local network from system hooks.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.4.0/docs/resources/application_settings#allow_local_requests_from_system_hooks ApplicationSettings#allow_local_requests_from_system_hooks}

---

##### `allow_local_requests_from_web_hooks_and_services`<sup>Optional</sup> <a name="allow_local_requests_from_web_hooks_and_services" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.Initializer.parameter.allowLocalRequestsFromWebHooksAndServices"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Allow requests to the local network from web hooks and services.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.4.0/docs/resources/application_settings#allow_local_requests_from_web_hooks_and_services ApplicationSettings#allow_local_requests_from_web_hooks_and_services}

---

##### `archive_builds_in_human_readable`<sup>Optional</sup> <a name="archive_builds_in_human_readable" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.Initializer.parameter.archiveBuildsInHumanReadable"></a>

- *Type:* str

Set the duration for which the jobs are considered as old and expired.

After that time passes, the jobs are archived and no longer able to be retried. Make it empty to never expire jobs. It has to be no less than 1 day, for example: 15 days, 1 month, 2 years.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.4.0/docs/resources/application_settings#archive_builds_in_human_readable ApplicationSettings#archive_builds_in_human_readable}

---

##### `asset_proxy_allowlist`<sup>Optional</sup> <a name="asset_proxy_allowlist" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.Initializer.parameter.assetProxyAllowlist"></a>

- *Type:* typing.List[str]

Assets that match these domains are not proxied.

Wildcards allowed. Your GitLab installation URL is automatically allowlisted. GitLab restart is required to apply changes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.4.0/docs/resources/application_settings#asset_proxy_allowlist ApplicationSettings#asset_proxy_allowlist}

---

##### `asset_proxy_enabled`<sup>Optional</sup> <a name="asset_proxy_enabled" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.Initializer.parameter.assetProxyEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

(If enabled, requires: asset_proxy_url) Enable proxying of assets. GitLab restart is required to apply changes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.4.0/docs/resources/application_settings#asset_proxy_enabled ApplicationSettings#asset_proxy_enabled}

---

##### `asset_proxy_secret_key`<sup>Optional</sup> <a name="asset_proxy_secret_key" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.Initializer.parameter.assetProxySecretKey"></a>

- *Type:* str

Shared secret with the asset proxy server. GitLab restart is required to apply changes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.4.0/docs/resources/application_settings#asset_proxy_secret_key ApplicationSettings#asset_proxy_secret_key}

---

##### `asset_proxy_url`<sup>Optional</sup> <a name="asset_proxy_url" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.Initializer.parameter.assetProxyUrl"></a>

- *Type:* str

URL of the asset proxy server. GitLab restart is required to apply changes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.4.0/docs/resources/application_settings#asset_proxy_url ApplicationSettings#asset_proxy_url}

---

##### `authorized_keys_enabled`<sup>Optional</sup> <a name="authorized_keys_enabled" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.Initializer.parameter.authorizedKeysEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

By default, we write to the authorized_keys file to support Git over SSH without additional configuration.

GitLab can be optimized to authenticate SSH keys via the database file. Only disable this if you have configured your OpenSSH server to use the AuthorizedKeysCommand.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.4.0/docs/resources/application_settings#authorized_keys_enabled ApplicationSettings#authorized_keys_enabled}

---

##### `auto_devops_domain`<sup>Optional</sup> <a name="auto_devops_domain" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.Initializer.parameter.autoDevopsDomain"></a>

- *Type:* str

Specify a domain to use by default for every project’s Auto Review Apps and Auto Deploy stages.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.4.0/docs/resources/application_settings#auto_devops_domain ApplicationSettings#auto_devops_domain}

---

##### `auto_devops_enabled`<sup>Optional</sup> <a name="auto_devops_enabled" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.Initializer.parameter.autoDevopsEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Enable Auto DevOps for projects by default.

It automatically builds, tests, and deploys applications based on a predefined CI/CD configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.4.0/docs/resources/application_settings#auto_devops_enabled ApplicationSettings#auto_devops_enabled}

---

##### `automatic_purchased_storage_allocation`<sup>Optional</sup> <a name="automatic_purchased_storage_allocation" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.Initializer.parameter.automaticPurchasedStorageAllocation"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Enabling this permits automatic allocation of purchased storage in a namespace.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.4.0/docs/resources/application_settings#automatic_purchased_storage_allocation ApplicationSettings#automatic_purchased_storage_allocation}

---

##### `can_create_group`<sup>Optional</sup> <a name="can_create_group" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.Initializer.parameter.canCreateGroup"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Indicates whether users can create top-level groups. Introduced in GitLab 15.5.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.4.0/docs/resources/application_settings#can_create_group ApplicationSettings#can_create_group}

---

##### `check_namespace_plan`<sup>Optional</sup> <a name="check_namespace_plan" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.Initializer.parameter.checkNamespacePlan"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Enabling this makes only licensed EE features available to projects if the project namespace’s plan includes the feature or if the project is public.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.4.0/docs/resources/application_settings#check_namespace_plan ApplicationSettings#check_namespace_plan}

---

##### `commit_email_hostname`<sup>Optional</sup> <a name="commit_email_hostname" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.Initializer.parameter.commitEmailHostname"></a>

- *Type:* str

Custom hostname (for private commit emails).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.4.0/docs/resources/application_settings#commit_email_hostname ApplicationSettings#commit_email_hostname}

---

##### `container_expiration_policies_enable_historic_entries`<sup>Optional</sup> <a name="container_expiration_policies_enable_historic_entries" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.Initializer.parameter.containerExpirationPoliciesEnableHistoricEntries"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Enable cleanup policies for all projects.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.4.0/docs/resources/application_settings#container_expiration_policies_enable_historic_entries ApplicationSettings#container_expiration_policies_enable_historic_entries}

---

##### `container_registry_cleanup_tags_service_max_list_size`<sup>Optional</sup> <a name="container_registry_cleanup_tags_service_max_list_size" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.Initializer.parameter.containerRegistryCleanupTagsServiceMaxListSize"></a>

- *Type:* typing.Union[int, float]

The maximum number of tags that can be deleted in a single execution of cleanup policies.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.4.0/docs/resources/application_settings#container_registry_cleanup_tags_service_max_list_size ApplicationSettings#container_registry_cleanup_tags_service_max_list_size}

---

##### `container_registry_delete_tags_service_timeout`<sup>Optional</sup> <a name="container_registry_delete_tags_service_timeout" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.Initializer.parameter.containerRegistryDeleteTagsServiceTimeout"></a>

- *Type:* typing.Union[int, float]

The maximum time, in seconds, that the cleanup process can take to delete a batch of tags for cleanup policies.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.4.0/docs/resources/application_settings#container_registry_delete_tags_service_timeout ApplicationSettings#container_registry_delete_tags_service_timeout}

---

##### `container_registry_expiration_policies_caching`<sup>Optional</sup> <a name="container_registry_expiration_policies_caching" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.Initializer.parameter.containerRegistryExpirationPoliciesCaching"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Caching during the execution of cleanup policies.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.4.0/docs/resources/application_settings#container_registry_expiration_policies_caching ApplicationSettings#container_registry_expiration_policies_caching}

---

##### `container_registry_expiration_policies_worker_capacity`<sup>Optional</sup> <a name="container_registry_expiration_policies_worker_capacity" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.Initializer.parameter.containerRegistryExpirationPoliciesWorkerCapacity"></a>

- *Type:* typing.Union[int, float]

Number of workers for cleanup policies.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.4.0/docs/resources/application_settings#container_registry_expiration_policies_worker_capacity ApplicationSettings#container_registry_expiration_policies_worker_capacity}

---

##### `container_registry_token_expire_delay`<sup>Optional</sup> <a name="container_registry_token_expire_delay" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.Initializer.parameter.containerRegistryTokenExpireDelay"></a>

- *Type:* typing.Union[int, float]

Container Registry token duration in minutes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.4.0/docs/resources/application_settings#container_registry_token_expire_delay ApplicationSettings#container_registry_token_expire_delay}

---

##### `deactivate_dormant_users`<sup>Optional</sup> <a name="deactivate_dormant_users" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.Initializer.parameter.deactivateDormantUsers"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Enable automatic deactivation of dormant users.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.4.0/docs/resources/application_settings#deactivate_dormant_users ApplicationSettings#deactivate_dormant_users}

---

##### `default_artifacts_expire_in`<sup>Optional</sup> <a name="default_artifacts_expire_in" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.Initializer.parameter.defaultArtifactsExpireIn"></a>

- *Type:* str

Set the default expiration time for each job’s artifacts.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.4.0/docs/resources/application_settings#default_artifacts_expire_in ApplicationSettings#default_artifacts_expire_in}

---

##### `default_branch_name`<sup>Optional</sup> <a name="default_branch_name" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.Initializer.parameter.defaultBranchName"></a>

- *Type:* str

Instance-level custom initial branch name (introduced in GitLab 13.2).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.4.0/docs/resources/application_settings#default_branch_name ApplicationSettings#default_branch_name}

---

##### `default_branch_protection`<sup>Optional</sup> <a name="default_branch_protection" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.Initializer.parameter.defaultBranchProtection"></a>

- *Type:* typing.Union[int, float]

Determine if developers can push to the default branch.

Can take: 0 (not protected, both users with the Developer role or Maintainer role can push new commits and force push), 1 (partially protected, users with the Developer role or Maintainer role can push new commits, but cannot force push) or 2 (fully protected, users with the Developer or Maintainer role cannot push new commits, but users with the Developer or Maintainer role can; no one can force push) as a parameter. Default is 2.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.4.0/docs/resources/application_settings#default_branch_protection ApplicationSettings#default_branch_protection}

---

##### `default_ci_config_path`<sup>Optional</sup> <a name="default_ci_config_path" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.Initializer.parameter.defaultCiConfigPath"></a>

- *Type:* str

Default CI/CD configuration file and path for new projects (.gitlab-ci.yml if not set).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.4.0/docs/resources/application_settings#default_ci_config_path ApplicationSettings#default_ci_config_path}

---

##### `default_group_visibility`<sup>Optional</sup> <a name="default_group_visibility" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.Initializer.parameter.defaultGroupVisibility"></a>

- *Type:* str

What visibility level new groups receive. Can take private, internal and public as a parameter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.4.0/docs/resources/application_settings#default_group_visibility ApplicationSettings#default_group_visibility}

---

##### `default_project_creation`<sup>Optional</sup> <a name="default_project_creation" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.Initializer.parameter.defaultProjectCreation"></a>

- *Type:* typing.Union[int, float]

Default project creation protection. Can take: 0 (No one), 1 (Maintainers) or 2 (Developers + Maintainers).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.4.0/docs/resources/application_settings#default_project_creation ApplicationSettings#default_project_creation}

---

##### `default_projects_limit`<sup>Optional</sup> <a name="default_projects_limit" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.Initializer.parameter.defaultProjectsLimit"></a>

- *Type:* typing.Union[int, float]

Project limit per user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.4.0/docs/resources/application_settings#default_projects_limit ApplicationSettings#default_projects_limit}

---

##### `default_project_visibility`<sup>Optional</sup> <a name="default_project_visibility" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.Initializer.parameter.defaultProjectVisibility"></a>

- *Type:* str

What visibility level new projects receive. Can take private, internal and public as a parameter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.4.0/docs/resources/application_settings#default_project_visibility ApplicationSettings#default_project_visibility}

---

##### `default_snippet_visibility`<sup>Optional</sup> <a name="default_snippet_visibility" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.Initializer.parameter.defaultSnippetVisibility"></a>

- *Type:* str

What visibility level new snippets receive. Can take private, internal and public as a parameter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.4.0/docs/resources/application_settings#default_snippet_visibility ApplicationSettings#default_snippet_visibility}

---

##### `delayed_group_deletion`<sup>Optional</sup> <a name="delayed_group_deletion" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.Initializer.parameter.delayedGroupDeletion"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Enable delayed group deletion.

Introduced in GitLab 15.0. From GitLab 15.1, disables and locks the group-level setting for delayed protect deletion when set to false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.4.0/docs/resources/application_settings#delayed_group_deletion ApplicationSettings#delayed_group_deletion}

---

##### `delayed_project_deletion`<sup>Optional</sup> <a name="delayed_project_deletion" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.Initializer.parameter.delayedProjectDeletion"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Enable delayed project deletion by default in new groups.

From GitLab 15.1, can only be enabled when delayed_group_deletion is true.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.4.0/docs/resources/application_settings#delayed_project_deletion ApplicationSettings#delayed_project_deletion}

---

##### `delete_inactive_projects`<sup>Optional</sup> <a name="delete_inactive_projects" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.Initializer.parameter.deleteInactiveProjects"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Enable inactive project deletion feature. Introduced in GitLab 14.10. Became operational in GitLab 15.0 (with feature flag inactive_projects_deletion).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.4.0/docs/resources/application_settings#delete_inactive_projects ApplicationSettings#delete_inactive_projects}

---

##### `deletion_adjourned_period`<sup>Optional</sup> <a name="deletion_adjourned_period" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.Initializer.parameter.deletionAdjournedPeriod"></a>

- *Type:* typing.Union[int, float]

The number of days to wait before deleting a project or group that is marked for deletion.

Value must be between 1 and 90. From GitLab 15.1, a hook on deletion_adjourned_period sets the period to 1 on every update, and sets both delayed_project_deletion and delayed_group_deletion to false if the period is 0.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.4.0/docs/resources/application_settings#deletion_adjourned_period ApplicationSettings#deletion_adjourned_period}

---

##### `diff_max_files`<sup>Optional</sup> <a name="diff_max_files" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.Initializer.parameter.diffMaxFiles"></a>

- *Type:* typing.Union[int, float]

Maximum files in a diff.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.4.0/docs/resources/application_settings#diff_max_files ApplicationSettings#diff_max_files}

---

##### `diff_max_lines`<sup>Optional</sup> <a name="diff_max_lines" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.Initializer.parameter.diffMaxLines"></a>

- *Type:* typing.Union[int, float]

Maximum lines in a diff.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.4.0/docs/resources/application_settings#diff_max_lines ApplicationSettings#diff_max_lines}

---

##### `diff_max_patch_bytes`<sup>Optional</sup> <a name="diff_max_patch_bytes" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.Initializer.parameter.diffMaxPatchBytes"></a>

- *Type:* typing.Union[int, float]

Maximum diff patch size, in bytes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.4.0/docs/resources/application_settings#diff_max_patch_bytes ApplicationSettings#diff_max_patch_bytes}

---

##### `disabled_oauth_sign_in_sources`<sup>Optional</sup> <a name="disabled_oauth_sign_in_sources" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.Initializer.parameter.disabledOauthSignInSources"></a>

- *Type:* typing.List[str]

Disabled OAuth sign-in sources.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.4.0/docs/resources/application_settings#disabled_oauth_sign_in_sources ApplicationSettings#disabled_oauth_sign_in_sources}

---

##### `disable_feed_token`<sup>Optional</sup> <a name="disable_feed_token" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.Initializer.parameter.disableFeedToken"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Disable display of RSS/Atom and calendar feed tokens (introduced in GitLab 13.7).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.4.0/docs/resources/application_settings#disable_feed_token ApplicationSettings#disable_feed_token}

---

##### `dns_rebinding_protection_enabled`<sup>Optional</sup> <a name="dns_rebinding_protection_enabled" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.Initializer.parameter.dnsRebindingProtectionEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Enforce DNS rebinding attack protection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.4.0/docs/resources/application_settings#dns_rebinding_protection_enabled ApplicationSettings#dns_rebinding_protection_enabled}

---

##### `domain_allowlist`<sup>Optional</sup> <a name="domain_allowlist" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.Initializer.parameter.domainAllowlist"></a>

- *Type:* typing.List[str]

Force people to use only corporate emails for sign-up. Null means there is no restriction.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.4.0/docs/resources/application_settings#domain_allowlist ApplicationSettings#domain_allowlist}

---

##### `domain_denylist`<sup>Optional</sup> <a name="domain_denylist" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.Initializer.parameter.domainDenylist"></a>

- *Type:* typing.List[str]

Users with email addresses that match these domains cannot sign up.

Wildcards allowed. Use separate lines for multiple entries. Ex: domain.com, *.domain.com.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.4.0/docs/resources/application_settings#domain_denylist ApplicationSettings#domain_denylist}

---

##### `domain_denylist_enabled`<sup>Optional</sup> <a name="domain_denylist_enabled" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.Initializer.parameter.domainDenylistEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

(If enabled, requires: domain_denylist) Allows blocking sign-ups from emails from specific domains.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.4.0/docs/resources/application_settings#domain_denylist_enabled ApplicationSettings#domain_denylist_enabled}

---

##### `dsa_key_restriction`<sup>Optional</sup> <a name="dsa_key_restriction" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.Initializer.parameter.dsaKeyRestriction"></a>

- *Type:* typing.Union[int, float]

The minimum allowed bit length of an uploaded DSA key. 0 means no restriction. -1 disables DSA keys.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.4.0/docs/resources/application_settings#dsa_key_restriction ApplicationSettings#dsa_key_restriction}

---

##### `ecdsa_key_restriction`<sup>Optional</sup> <a name="ecdsa_key_restriction" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.Initializer.parameter.ecdsaKeyRestriction"></a>

- *Type:* typing.Union[int, float]

The minimum allowed curve size (in bits) of an uploaded ECDSA key.

0 means no restriction. -1 disables ECDSA keys.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.4.0/docs/resources/application_settings#ecdsa_key_restriction ApplicationSettings#ecdsa_key_restriction}

---

##### `ecdsa_sk_key_restriction`<sup>Optional</sup> <a name="ecdsa_sk_key_restriction" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.Initializer.parameter.ecdsaSkKeyRestriction"></a>

- *Type:* typing.Union[int, float]

The minimum allowed curve size (in bits) of an uploaded ECDSA_SK key.

0 means no restriction. -1 disables ECDSA_SK keys.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.4.0/docs/resources/application_settings#ecdsa_sk_key_restriction ApplicationSettings#ecdsa_sk_key_restriction}

---

##### `ed25519_key_restriction`<sup>Optional</sup> <a name="ed25519_key_restriction" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.Initializer.parameter.ed25519KeyRestriction"></a>

- *Type:* typing.Union[int, float]

The minimum allowed curve size (in bits) of an uploaded ED25519 key.

0 means no restriction. -1 disables ED25519 keys.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.4.0/docs/resources/application_settings#ed25519_key_restriction ApplicationSettings#ed25519_key_restriction}

---

##### `ed25519_sk_key_restriction`<sup>Optional</sup> <a name="ed25519_sk_key_restriction" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.Initializer.parameter.ed25519SkKeyRestriction"></a>

- *Type:* typing.Union[int, float]

The minimum allowed curve size (in bits) of an uploaded ED25519_SK key.

0 means no restriction. -1 disables ED25519_SK keys.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.4.0/docs/resources/application_settings#ed25519_sk_key_restriction ApplicationSettings#ed25519_sk_key_restriction}

---

##### `eks_access_key_id`<sup>Optional</sup> <a name="eks_access_key_id" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.Initializer.parameter.eksAccessKeyId"></a>

- *Type:* str

AWS IAM access key ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.4.0/docs/resources/application_settings#eks_access_key_id ApplicationSettings#eks_access_key_id}

---

##### `eks_account_id`<sup>Optional</sup> <a name="eks_account_id" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.Initializer.parameter.eksAccountId"></a>

- *Type:* str

Amazon account ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.4.0/docs/resources/application_settings#eks_account_id ApplicationSettings#eks_account_id}

---

##### `eks_integration_enabled`<sup>Optional</sup> <a name="eks_integration_enabled" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.Initializer.parameter.eksIntegrationEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Enable integration with Amazon EKS.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.4.0/docs/resources/application_settings#eks_integration_enabled ApplicationSettings#eks_integration_enabled}

---

##### `eks_secret_access_key`<sup>Optional</sup> <a name="eks_secret_access_key" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.Initializer.parameter.eksSecretAccessKey"></a>

- *Type:* str

AWS IAM secret access key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.4.0/docs/resources/application_settings#eks_secret_access_key ApplicationSettings#eks_secret_access_key}

---

##### `elasticsearch_aws`<sup>Optional</sup> <a name="elasticsearch_aws" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.Initializer.parameter.elasticsearchAws"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Enable the use of AWS hosted Elasticsearch.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.4.0/docs/resources/application_settings#elasticsearch_aws ApplicationSettings#elasticsearch_aws}

---

##### `elasticsearch_aws_access_key`<sup>Optional</sup> <a name="elasticsearch_aws_access_key" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.Initializer.parameter.elasticsearchAwsAccessKey"></a>

- *Type:* str

AWS IAM access key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.4.0/docs/resources/application_settings#elasticsearch_aws_access_key ApplicationSettings#elasticsearch_aws_access_key}

---

##### `elasticsearch_aws_region`<sup>Optional</sup> <a name="elasticsearch_aws_region" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.Initializer.parameter.elasticsearchAwsRegion"></a>

- *Type:* str

The AWS region the Elasticsearch domain is configured.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.4.0/docs/resources/application_settings#elasticsearch_aws_region ApplicationSettings#elasticsearch_aws_region}

---

##### `elasticsearch_aws_secret_access_key`<sup>Optional</sup> <a name="elasticsearch_aws_secret_access_key" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.Initializer.parameter.elasticsearchAwsSecretAccessKey"></a>

- *Type:* str

AWS IAM secret access key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.4.0/docs/resources/application_settings#elasticsearch_aws_secret_access_key ApplicationSettings#elasticsearch_aws_secret_access_key}

---

##### `elasticsearch_indexed_field_length_limit`<sup>Optional</sup> <a name="elasticsearch_indexed_field_length_limit" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.Initializer.parameter.elasticsearchIndexedFieldLengthLimit"></a>

- *Type:* typing.Union[int, float]

Maximum size of text fields to index by Elasticsearch.

0 value means no limit. This does not apply to repository and wiki indexing.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.4.0/docs/resources/application_settings#elasticsearch_indexed_field_length_limit ApplicationSettings#elasticsearch_indexed_field_length_limit}

---

##### `elasticsearch_indexed_file_size_limit_kb`<sup>Optional</sup> <a name="elasticsearch_indexed_file_size_limit_kb" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.Initializer.parameter.elasticsearchIndexedFileSizeLimitKb"></a>

- *Type:* typing.Union[int, float]

Maximum size of repository and wiki files that are indexed by Elasticsearch.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.4.0/docs/resources/application_settings#elasticsearch_indexed_file_size_limit_kb ApplicationSettings#elasticsearch_indexed_file_size_limit_kb}

---

##### `elasticsearch_indexing`<sup>Optional</sup> <a name="elasticsearch_indexing" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.Initializer.parameter.elasticsearchIndexing"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Enable Elasticsearch indexing.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.4.0/docs/resources/application_settings#elasticsearch_indexing ApplicationSettings#elasticsearch_indexing}

---

##### `elasticsearch_limit_indexing`<sup>Optional</sup> <a name="elasticsearch_limit_indexing" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.Initializer.parameter.elasticsearchLimitIndexing"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Limit Elasticsearch to index certain namespaces and projects.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.4.0/docs/resources/application_settings#elasticsearch_limit_indexing ApplicationSettings#elasticsearch_limit_indexing}

---

##### `elasticsearch_max_bulk_concurrency`<sup>Optional</sup> <a name="elasticsearch_max_bulk_concurrency" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.Initializer.parameter.elasticsearchMaxBulkConcurrency"></a>

- *Type:* typing.Union[int, float]

Maximum concurrency of Elasticsearch bulk requests per indexing operation. This only applies to repository indexing operations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.4.0/docs/resources/application_settings#elasticsearch_max_bulk_concurrency ApplicationSettings#elasticsearch_max_bulk_concurrency}

---

##### `elasticsearch_max_bulk_size_mb`<sup>Optional</sup> <a name="elasticsearch_max_bulk_size_mb" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.Initializer.parameter.elasticsearchMaxBulkSizeMb"></a>

- *Type:* typing.Union[int, float]

Maximum size of Elasticsearch bulk indexing requests in MB. This only applies to repository indexing operations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.4.0/docs/resources/application_settings#elasticsearch_max_bulk_size_mb ApplicationSettings#elasticsearch_max_bulk_size_mb}

---

##### `elasticsearch_namespace_ids`<sup>Optional</sup> <a name="elasticsearch_namespace_ids" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.Initializer.parameter.elasticsearchNamespaceIds"></a>

- *Type:* typing.List[str]

The namespaces to index via Elasticsearch if elasticsearch_limit_indexing is enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.4.0/docs/resources/application_settings#elasticsearch_namespace_ids ApplicationSettings#elasticsearch_namespace_ids}

---

##### `elasticsearch_password`<sup>Optional</sup> <a name="elasticsearch_password" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.Initializer.parameter.elasticsearchPassword"></a>

- *Type:* str

The password of your Elasticsearch instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.4.0/docs/resources/application_settings#elasticsearch_password ApplicationSettings#elasticsearch_password}

---

##### `elasticsearch_project_ids`<sup>Optional</sup> <a name="elasticsearch_project_ids" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.Initializer.parameter.elasticsearchProjectIds"></a>

- *Type:* typing.List[str]

The projects to index via Elasticsearch if elasticsearch_limit_indexing is enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.4.0/docs/resources/application_settings#elasticsearch_project_ids ApplicationSettings#elasticsearch_project_ids}

---

##### `elasticsearch_search`<sup>Optional</sup> <a name="elasticsearch_search" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.Initializer.parameter.elasticsearchSearch"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Enable Elasticsearch search.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.4.0/docs/resources/application_settings#elasticsearch_search ApplicationSettings#elasticsearch_search}

---

##### `elasticsearch_url`<sup>Optional</sup> <a name="elasticsearch_url" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.Initializer.parameter.elasticsearchUrl"></a>

- *Type:* typing.List[str]

The URL to use for connecting to Elasticsearch. Use a comma-separated list to support cluster (for example, http://localhost:9200, http://localhost:9201).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.4.0/docs/resources/application_settings#elasticsearch_url ApplicationSettings#elasticsearch_url}

---

##### `elasticsearch_username`<sup>Optional</sup> <a name="elasticsearch_username" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.Initializer.parameter.elasticsearchUsername"></a>

- *Type:* str

The username of your Elasticsearch instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.4.0/docs/resources/application_settings#elasticsearch_username ApplicationSettings#elasticsearch_username}

---

##### `email_additional_text`<sup>Optional</sup> <a name="email_additional_text" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.Initializer.parameter.emailAdditionalText"></a>

- *Type:* str

Additional text added to the bottom of every email for legal/auditing/compliance reasons.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.4.0/docs/resources/application_settings#email_additional_text ApplicationSettings#email_additional_text}

---

##### `email_author_in_body`<sup>Optional</sup> <a name="email_author_in_body" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.Initializer.parameter.emailAuthorInBody"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Some email servers do not support overriding the email sender name.

Enable this option to include the name of the author of the issue, merge request or comment in the email body instead.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.4.0/docs/resources/application_settings#email_author_in_body ApplicationSettings#email_author_in_body}

---

##### `enabled_git_access_protocol`<sup>Optional</sup> <a name="enabled_git_access_protocol" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.Initializer.parameter.enabledGitAccessProtocol"></a>

- *Type:* str

Enabled protocols for Git access. Allowed values are: ssh, http, and nil to allow both protocols.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.4.0/docs/resources/application_settings#enabled_git_access_protocol ApplicationSettings#enabled_git_access_protocol}

---

##### `enforce_namespace_storage_limit`<sup>Optional</sup> <a name="enforce_namespace_storage_limit" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.Initializer.parameter.enforceNamespaceStorageLimit"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Enabling this permits enforcement of namespace storage limits.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.4.0/docs/resources/application_settings#enforce_namespace_storage_limit ApplicationSettings#enforce_namespace_storage_limit}

---

##### `enforce_terms`<sup>Optional</sup> <a name="enforce_terms" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.Initializer.parameter.enforceTerms"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

(If enabled, requires: terms) Enforce application ToS to all users.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.4.0/docs/resources/application_settings#enforce_terms ApplicationSettings#enforce_terms}

---

##### `external_auth_client_cert`<sup>Optional</sup> <a name="external_auth_client_cert" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.Initializer.parameter.externalAuthClientCert"></a>

- *Type:* str

(If enabled, requires: external_auth_client_key) The certificate to use to authenticate with the external authorization service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.4.0/docs/resources/application_settings#external_auth_client_cert ApplicationSettings#external_auth_client_cert}

---

##### `external_auth_client_key`<sup>Optional</sup> <a name="external_auth_client_key" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.Initializer.parameter.externalAuthClientKey"></a>

- *Type:* str

Private key for the certificate when authentication is required for the external authorization service, this is encrypted when stored.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.4.0/docs/resources/application_settings#external_auth_client_key ApplicationSettings#external_auth_client_key}

---

##### `external_auth_client_key_pass`<sup>Optional</sup> <a name="external_auth_client_key_pass" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.Initializer.parameter.externalAuthClientKeyPass"></a>

- *Type:* str

Passphrase to use for the private key when authenticating with the external service this is encrypted when stored.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.4.0/docs/resources/application_settings#external_auth_client_key_pass ApplicationSettings#external_auth_client_key_pass}

---

##### `external_authorization_service_default_label`<sup>Optional</sup> <a name="external_authorization_service_default_label" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.Initializer.parameter.externalAuthorizationServiceDefaultLabel"></a>

- *Type:* str

The default classification label to use when requesting authorization and no classification label has been specified on the project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.4.0/docs/resources/application_settings#external_authorization_service_default_label ApplicationSettings#external_authorization_service_default_label}

---

##### `external_authorization_service_enabled`<sup>Optional</sup> <a name="external_authorization_service_enabled" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.Initializer.parameter.externalAuthorizationServiceEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

(If enabled, requires: external_authorization_service_default_label, external_authorization_service_timeout and external_authorization_service_url) Enable using an external authorization service for accessing projects.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.4.0/docs/resources/application_settings#external_authorization_service_enabled ApplicationSettings#external_authorization_service_enabled}

---

##### `external_authorization_service_timeout`<sup>Optional</sup> <a name="external_authorization_service_timeout" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.Initializer.parameter.externalAuthorizationServiceTimeout"></a>

- *Type:* typing.Union[int, float]

The timeout after which an authorization request is aborted, in seconds.

When a request times out, access is denied to the user. (min: 0.001, max: 10, step: 0.001).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.4.0/docs/resources/application_settings#external_authorization_service_timeout ApplicationSettings#external_authorization_service_timeout}

---

##### `external_authorization_service_url`<sup>Optional</sup> <a name="external_authorization_service_url" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.Initializer.parameter.externalAuthorizationServiceUrl"></a>

- *Type:* str

URL to which authorization requests are directed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.4.0/docs/resources/application_settings#external_authorization_service_url ApplicationSettings#external_authorization_service_url}

---

##### `external_pipeline_validation_service_timeout`<sup>Optional</sup> <a name="external_pipeline_validation_service_timeout" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.Initializer.parameter.externalPipelineValidationServiceTimeout"></a>

- *Type:* typing.Union[int, float]

How long to wait for a response from the pipeline validation service. Assumes OK if it times out.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.4.0/docs/resources/application_settings#external_pipeline_validation_service_timeout ApplicationSettings#external_pipeline_validation_service_timeout}

---

##### `external_pipeline_validation_service_token`<sup>Optional</sup> <a name="external_pipeline_validation_service_token" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.Initializer.parameter.externalPipelineValidationServiceToken"></a>

- *Type:* str

Optional. Token to include as the X-Gitlab-Token header in requests to the URL in external_pipeline_validation_service_url.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.4.0/docs/resources/application_settings#external_pipeline_validation_service_token ApplicationSettings#external_pipeline_validation_service_token}

---

##### `external_pipeline_validation_service_url`<sup>Optional</sup> <a name="external_pipeline_validation_service_url" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.Initializer.parameter.externalPipelineValidationServiceUrl"></a>

- *Type:* str

URL to use for pipeline validation requests.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.4.0/docs/resources/application_settings#external_pipeline_validation_service_url ApplicationSettings#external_pipeline_validation_service_url}

---

##### `file_template_project_id`<sup>Optional</sup> <a name="file_template_project_id" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.Initializer.parameter.fileTemplateProjectId"></a>

- *Type:* typing.Union[int, float]

The ID of a project to load custom file templates from.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.4.0/docs/resources/application_settings#file_template_project_id ApplicationSettings#file_template_project_id}

---

##### `first_day_of_week`<sup>Optional</sup> <a name="first_day_of_week" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.Initializer.parameter.firstDayOfWeek"></a>

- *Type:* typing.Union[int, float]

Start day of the week for calendar views and date pickers.

Valid values are 0 for Sunday, 1 for Monday, and 6 for Saturday.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.4.0/docs/resources/application_settings#first_day_of_week ApplicationSettings#first_day_of_week}

---

##### `geo_node_allowed_ips`<sup>Optional</sup> <a name="geo_node_allowed_ips" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.Initializer.parameter.geoNodeAllowedIps"></a>

- *Type:* str

Comma-separated list of IPs and CIDRs of allowed secondary nodes. For example, 1.1.1.1, 2.2.2.0/24.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.4.0/docs/resources/application_settings#geo_node_allowed_ips ApplicationSettings#geo_node_allowed_ips}

---

##### `geo_status_timeout`<sup>Optional</sup> <a name="geo_status_timeout" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.Initializer.parameter.geoStatusTimeout"></a>

- *Type:* typing.Union[int, float]

The amount of seconds after which a request to get a secondary node status times out.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.4.0/docs/resources/application_settings#geo_status_timeout ApplicationSettings#geo_status_timeout}

---

##### `gitaly_timeout_default`<sup>Optional</sup> <a name="gitaly_timeout_default" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.Initializer.parameter.gitalyTimeoutDefault"></a>

- *Type:* typing.Union[int, float]

Default Gitaly timeout, in seconds.

This timeout is not enforced for Git fetch/push operations or Sidekiq jobs. Set to 0 to disable timeouts.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.4.0/docs/resources/application_settings#gitaly_timeout_default ApplicationSettings#gitaly_timeout_default}

---

##### `gitaly_timeout_fast`<sup>Optional</sup> <a name="gitaly_timeout_fast" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.Initializer.parameter.gitalyTimeoutFast"></a>

- *Type:* typing.Union[int, float]

Gitaly fast operation timeout, in seconds.

Some Gitaly operations are expected to be fast. If they exceed this threshold, there may be a problem with a storage shard and ‘failing fast’ can help maintain the stability of the GitLab instance. Set to 0 to disable timeouts.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.4.0/docs/resources/application_settings#gitaly_timeout_fast ApplicationSettings#gitaly_timeout_fast}

---

##### `gitaly_timeout_medium`<sup>Optional</sup> <a name="gitaly_timeout_medium" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.Initializer.parameter.gitalyTimeoutMedium"></a>

- *Type:* typing.Union[int, float]

Medium Gitaly timeout, in seconds.

This should be a value between the Fast and the Default timeout. Set to 0 to disable timeouts.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.4.0/docs/resources/application_settings#gitaly_timeout_medium ApplicationSettings#gitaly_timeout_medium}

---

##### `git_rate_limit_users_allowlist`<sup>Optional</sup> <a name="git_rate_limit_users_allowlist" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.Initializer.parameter.gitRateLimitUsersAllowlist"></a>

- *Type:* typing.List[str]

List of usernames excluded from Git anti-abuse rate limits. Maximum: 100 usernames. Introduced in GitLab 15.2.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.4.0/docs/resources/application_settings#git_rate_limit_users_allowlist ApplicationSettings#git_rate_limit_users_allowlist}

---

##### `git_two_factor_session_expiry`<sup>Optional</sup> <a name="git_two_factor_session_expiry" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.Initializer.parameter.gitTwoFactorSessionExpiry"></a>

- *Type:* typing.Union[int, float]

Maximum duration (in minutes) of a session for Git operations when 2FA is enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.4.0/docs/resources/application_settings#git_two_factor_session_expiry ApplicationSettings#git_two_factor_session_expiry}

---

##### `grafana_enabled`<sup>Optional</sup> <a name="grafana_enabled" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.Initializer.parameter.grafanaEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Enable Grafana.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.4.0/docs/resources/application_settings#grafana_enabled ApplicationSettings#grafana_enabled}

---

##### `grafana_url`<sup>Optional</sup> <a name="grafana_url" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.Initializer.parameter.grafanaUrl"></a>

- *Type:* str

Grafana URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.4.0/docs/resources/application_settings#grafana_url ApplicationSettings#grafana_url}

---

##### `gravatar_enabled`<sup>Optional</sup> <a name="gravatar_enabled" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.Initializer.parameter.gravatarEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Enable Gravatar.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.4.0/docs/resources/application_settings#gravatar_enabled ApplicationSettings#gravatar_enabled}

---

##### `group_owners_can_manage_default_branch_protection`<sup>Optional</sup> <a name="group_owners_can_manage_default_branch_protection" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.Initializer.parameter.groupOwnersCanManageDefaultBranchProtection"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Prevent overrides of default branch protection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.4.0/docs/resources/application_settings#group_owners_can_manage_default_branch_protection ApplicationSettings#group_owners_can_manage_default_branch_protection}

---

##### `hashed_storage_enabled`<sup>Optional</sup> <a name="hashed_storage_enabled" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.Initializer.parameter.hashedStorageEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Create new projects using hashed storage paths: Enable immutable, hash-based paths and repository names to store repositories on disk.

This prevents repositories from having to be moved or renamed when the Project URL changes and may improve disk I/O performance. (Always enabled in GitLab versions 13.0 and later, configuration is scheduled for removal in 14.0).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.4.0/docs/resources/application_settings#hashed_storage_enabled ApplicationSettings#hashed_storage_enabled}

---

##### `help_page_hide_commercial_content`<sup>Optional</sup> <a name="help_page_hide_commercial_content" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.Initializer.parameter.helpPageHideCommercialContent"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Hide marketing-related entries from help.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.4.0/docs/resources/application_settings#help_page_hide_commercial_content ApplicationSettings#help_page_hide_commercial_content}

---

##### `help_page_support_url`<sup>Optional</sup> <a name="help_page_support_url" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.Initializer.parameter.helpPageSupportUrl"></a>

- *Type:* str

Alternate support URL for help page and help dropdown.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.4.0/docs/resources/application_settings#help_page_support_url ApplicationSettings#help_page_support_url}

---

##### `help_page_text`<sup>Optional</sup> <a name="help_page_text" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.Initializer.parameter.helpPageText"></a>

- *Type:* str

Custom text displayed on the help page.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.4.0/docs/resources/application_settings#help_page_text ApplicationSettings#help_page_text}

---

##### `help_text`<sup>Optional</sup> <a name="help_text" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.Initializer.parameter.helpText"></a>

- *Type:* str

GitLab server administrator information.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.4.0/docs/resources/application_settings#help_text ApplicationSettings#help_text}

---

##### `hide_third_party_offers`<sup>Optional</sup> <a name="hide_third_party_offers" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.Initializer.parameter.hideThirdPartyOffers"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Do not display offers from third parties in GitLab.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.4.0/docs/resources/application_settings#hide_third_party_offers ApplicationSettings#hide_third_party_offers}

---

##### `home_page_url`<sup>Optional</sup> <a name="home_page_url" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.Initializer.parameter.homePageUrl"></a>

- *Type:* str

Redirect to this URL when not logged in.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.4.0/docs/resources/application_settings#home_page_url ApplicationSettings#home_page_url}

---

##### `housekeeping_enabled`<sup>Optional</sup> <a name="housekeeping_enabled" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.Initializer.parameter.housekeepingEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

(If enabled, requires: housekeeping_bitmaps_enabled, housekeeping_full_repack_period, housekeeping_gc_period, and housekeeping_incremental_repack_period) Enable or disable Git housekeeping.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.4.0/docs/resources/application_settings#housekeeping_enabled ApplicationSettings#housekeeping_enabled}

---

##### `housekeeping_full_repack_period`<sup>Optional</sup> <a name="housekeeping_full_repack_period" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.Initializer.parameter.housekeepingFullRepackPeriod"></a>

- *Type:* typing.Union[int, float]

Number of Git pushes after which an incremental git repack is run.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.4.0/docs/resources/application_settings#housekeeping_full_repack_period ApplicationSettings#housekeeping_full_repack_period}

---

##### `housekeeping_gc_period`<sup>Optional</sup> <a name="housekeeping_gc_period" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.Initializer.parameter.housekeepingGcPeriod"></a>

- *Type:* typing.Union[int, float]

Number of Git pushes after which git gc is run.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.4.0/docs/resources/application_settings#housekeeping_gc_period ApplicationSettings#housekeeping_gc_period}

---

##### `housekeeping_incremental_repack_period`<sup>Optional</sup> <a name="housekeeping_incremental_repack_period" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.Initializer.parameter.housekeepingIncrementalRepackPeriod"></a>

- *Type:* typing.Union[int, float]

Number of Git pushes after which an incremental git repack is run.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.4.0/docs/resources/application_settings#housekeeping_incremental_repack_period ApplicationSettings#housekeeping_incremental_repack_period}

---

##### `html_emails_enabled`<sup>Optional</sup> <a name="html_emails_enabled" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.Initializer.parameter.htmlEmailsEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Enable HTML emails.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.4.0/docs/resources/application_settings#html_emails_enabled ApplicationSettings#html_emails_enabled}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.4.0/docs/resources/application_settings#id ApplicationSettings#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `import_sources`<sup>Optional</sup> <a name="import_sources" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.Initializer.parameter.importSources"></a>

- *Type:* typing.List[str]

Sources to allow project import from. Valid values are: `github`, `bitbucket`, `bitbucket_server`, `fogbugz`, `git`, `gitlab_project`, `gitea`, `manifest`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.4.0/docs/resources/application_settings#import_sources ApplicationSettings#import_sources}

---

##### `inactive_projects_delete_after_months`<sup>Optional</sup> <a name="inactive_projects_delete_after_months" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.Initializer.parameter.inactiveProjectsDeleteAfterMonths"></a>

- *Type:* typing.Union[int, float]

If delete_inactive_projects is true, the time (in months) to wait before deleting inactive projects.

Introduced in GitLab 14.10. Became operational in GitLab 15.0.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.4.0/docs/resources/application_settings#inactive_projects_delete_after_months ApplicationSettings#inactive_projects_delete_after_months}

---

##### `inactive_projects_min_size_mb`<sup>Optional</sup> <a name="inactive_projects_min_size_mb" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.Initializer.parameter.inactiveProjectsMinSizeMb"></a>

- *Type:* typing.Union[int, float]

If delete_inactive_projects is true, the minimum repository size for projects to be checked for inactivity.

Introduced in GitLab 14.10. Became operational in GitLab 15.0.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.4.0/docs/resources/application_settings#inactive_projects_min_size_mb ApplicationSettings#inactive_projects_min_size_mb}

---

##### `inactive_projects_send_warning_email_after_months`<sup>Optional</sup> <a name="inactive_projects_send_warning_email_after_months" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.Initializer.parameter.inactiveProjectsSendWarningEmailAfterMonths"></a>

- *Type:* typing.Union[int, float]

If delete_inactive_projects is true, sets the time (in months) to wait before emailing maintainers that the project is scheduled be deleted because it is inactive.

Introduced in GitLab 14.10. Became operational in GitLab 15.0.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.4.0/docs/resources/application_settings#inactive_projects_send_warning_email_after_months ApplicationSettings#inactive_projects_send_warning_email_after_months}

---

##### `in_product_marketing_emails_enabled`<sup>Optional</sup> <a name="in_product_marketing_emails_enabled" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.Initializer.parameter.inProductMarketingEmailsEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Enable in-product marketing emails.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.4.0/docs/resources/application_settings#in_product_marketing_emails_enabled ApplicationSettings#in_product_marketing_emails_enabled}

---

##### `invisible_captcha_enabled`<sup>Optional</sup> <a name="invisible_captcha_enabled" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.Initializer.parameter.invisibleCaptchaEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Enable Invisible CAPTCHA spam detection during sign-up.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.4.0/docs/resources/application_settings#invisible_captcha_enabled ApplicationSettings#invisible_captcha_enabled}

---

##### `issues_create_limit`<sup>Optional</sup> <a name="issues_create_limit" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.Initializer.parameter.issuesCreateLimit"></a>

- *Type:* typing.Union[int, float]

Max number of issue creation requests per minute per user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.4.0/docs/resources/application_settings#issues_create_limit ApplicationSettings#issues_create_limit}

---

##### `keep_latest_artifact`<sup>Optional</sup> <a name="keep_latest_artifact" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.Initializer.parameter.keepLatestArtifact"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Prevent the deletion of the artifacts from the most recent successful jobs, regardless of the expiry time.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.4.0/docs/resources/application_settings#keep_latest_artifact ApplicationSettings#keep_latest_artifact}

---

##### `local_markdown_version`<sup>Optional</sup> <a name="local_markdown_version" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.Initializer.parameter.localMarkdownVersion"></a>

- *Type:* typing.Union[int, float]

Increase this value when any cached Markdown should be invalidated.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.4.0/docs/resources/application_settings#local_markdown_version ApplicationSettings#local_markdown_version}

---

##### `mailgun_events_enabled`<sup>Optional</sup> <a name="mailgun_events_enabled" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.Initializer.parameter.mailgunEventsEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Enable Mailgun event receiver.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.4.0/docs/resources/application_settings#mailgun_events_enabled ApplicationSettings#mailgun_events_enabled}

---

##### `mailgun_signing_key`<sup>Optional</sup> <a name="mailgun_signing_key" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.Initializer.parameter.mailgunSigningKey"></a>

- *Type:* str

The Mailgun HTTP webhook signing key for receiving events from webhook.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.4.0/docs/resources/application_settings#mailgun_signing_key ApplicationSettings#mailgun_signing_key}

---

##### `maintenance_mode`<sup>Optional</sup> <a name="maintenance_mode" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.Initializer.parameter.maintenanceMode"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

When instance is in maintenance mode, non-administrative users can sign in with read-only access and make read-only API requests.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.4.0/docs/resources/application_settings#maintenance_mode ApplicationSettings#maintenance_mode}

---

##### `maintenance_mode_message`<sup>Optional</sup> <a name="maintenance_mode_message" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.Initializer.parameter.maintenanceModeMessage"></a>

- *Type:* str

Message displayed when instance is in maintenance mode.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.4.0/docs/resources/application_settings#maintenance_mode_message ApplicationSettings#maintenance_mode_message}

---

##### `max_artifacts_size`<sup>Optional</sup> <a name="max_artifacts_size" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.Initializer.parameter.maxArtifactsSize"></a>

- *Type:* typing.Union[int, float]

Maximum artifacts size in MB.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.4.0/docs/resources/application_settings#max_artifacts_size ApplicationSettings#max_artifacts_size}

---

##### `max_attachment_size`<sup>Optional</sup> <a name="max_attachment_size" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.Initializer.parameter.maxAttachmentSize"></a>

- *Type:* typing.Union[int, float]

Limit attachment size in MB.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.4.0/docs/resources/application_settings#max_attachment_size ApplicationSettings#max_attachment_size}

---

##### `max_export_size`<sup>Optional</sup> <a name="max_export_size" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.Initializer.parameter.maxExportSize"></a>

- *Type:* typing.Union[int, float]

Maximum export size in MB. 0 for unlimited.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.4.0/docs/resources/application_settings#max_export_size ApplicationSettings#max_export_size}

---

##### `max_import_size`<sup>Optional</sup> <a name="max_import_size" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.Initializer.parameter.maxImportSize"></a>

- *Type:* typing.Union[int, float]

Maximum import size in MB. 0 for unlimited.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.4.0/docs/resources/application_settings#max_import_size ApplicationSettings#max_import_size}

---

##### `max_number_of_repository_downloads`<sup>Optional</sup> <a name="max_number_of_repository_downloads" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.Initializer.parameter.maxNumberOfRepositoryDownloads"></a>

- *Type:* typing.Union[int, float]

Maximum number of unique repositories a user can download in the specified time period before they are banned.

Maximum: 10,000 repositories. Introduced in GitLab 15.1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.4.0/docs/resources/application_settings#max_number_of_repository_downloads ApplicationSettings#max_number_of_repository_downloads}

---

##### `max_number_of_repository_downloads_within_time_period`<sup>Optional</sup> <a name="max_number_of_repository_downloads_within_time_period" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.Initializer.parameter.maxNumberOfRepositoryDownloadsWithinTimePeriod"></a>

- *Type:* typing.Union[int, float]

Reporting time period (in seconds). Maximum: 864000 seconds (10 days). Introduced in GitLab 15.1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.4.0/docs/resources/application_settings#max_number_of_repository_downloads_within_time_period ApplicationSettings#max_number_of_repository_downloads_within_time_period}

---

##### `max_pages_size`<sup>Optional</sup> <a name="max_pages_size" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.Initializer.parameter.maxPagesSize"></a>

- *Type:* typing.Union[int, float]

Maximum size of pages repositories in MB.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.4.0/docs/resources/application_settings#max_pages_size ApplicationSettings#max_pages_size}

---

##### `max_personal_access_token_lifetime`<sup>Optional</sup> <a name="max_personal_access_token_lifetime" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.Initializer.parameter.maxPersonalAccessTokenLifetime"></a>

- *Type:* typing.Union[int, float]

Maximum allowable lifetime for access tokens in days.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.4.0/docs/resources/application_settings#max_personal_access_token_lifetime ApplicationSettings#max_personal_access_token_lifetime}

---

##### `max_ssh_key_lifetime`<sup>Optional</sup> <a name="max_ssh_key_lifetime" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.Initializer.parameter.maxSshKeyLifetime"></a>

- *Type:* typing.Union[int, float]

Maximum allowable lifetime for SSH keys in days. Introduced in GitLab 14.6.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.4.0/docs/resources/application_settings#max_ssh_key_lifetime ApplicationSettings#max_ssh_key_lifetime}

---

##### `metrics_method_call_threshold`<sup>Optional</sup> <a name="metrics_method_call_threshold" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.Initializer.parameter.metricsMethodCallThreshold"></a>

- *Type:* typing.Union[int, float]

A method call is only tracked when it takes longer than the given amount of milliseconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.4.0/docs/resources/application_settings#metrics_method_call_threshold ApplicationSettings#metrics_method_call_threshold}

---

##### `mirror_available`<sup>Optional</sup> <a name="mirror_available" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.Initializer.parameter.mirrorAvailable"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Allow repository mirroring to configured by project Maintainers. If disabled, only Administrators can configure repository mirroring.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.4.0/docs/resources/application_settings#mirror_available ApplicationSettings#mirror_available}

---

##### `mirror_capacity_threshold`<sup>Optional</sup> <a name="mirror_capacity_threshold" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.Initializer.parameter.mirrorCapacityThreshold"></a>

- *Type:* typing.Union[int, float]

Minimum capacity to be available before scheduling more mirrors preemptively.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.4.0/docs/resources/application_settings#mirror_capacity_threshold ApplicationSettings#mirror_capacity_threshold}

---

##### `mirror_max_capacity`<sup>Optional</sup> <a name="mirror_max_capacity" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.Initializer.parameter.mirrorMaxCapacity"></a>

- *Type:* typing.Union[int, float]

Maximum number of mirrors that can be synchronizing at the same time.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.4.0/docs/resources/application_settings#mirror_max_capacity ApplicationSettings#mirror_max_capacity}

---

##### `mirror_max_delay`<sup>Optional</sup> <a name="mirror_max_delay" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.Initializer.parameter.mirrorMaxDelay"></a>

- *Type:* typing.Union[int, float]

Maximum time (in minutes) between updates that a mirror can have when scheduled to synchronize.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.4.0/docs/resources/application_settings#mirror_max_delay ApplicationSettings#mirror_max_delay}

---

##### `npm_package_requests_forwarding`<sup>Optional</sup> <a name="npm_package_requests_forwarding" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.Initializer.parameter.npmPackageRequestsForwarding"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Use npmjs.org as a default remote repository when the package is not found in the GitLab Package Registry for npm.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.4.0/docs/resources/application_settings#npm_package_requests_forwarding ApplicationSettings#npm_package_requests_forwarding}

---

##### `outbound_local_requests_whitelist`<sup>Optional</sup> <a name="outbound_local_requests_whitelist" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.Initializer.parameter.outboundLocalRequestsWhitelist"></a>

- *Type:* typing.List[str]

Define a list of trusted domains or IP addresses to which local requests are allowed when local requests for hooks and services are disabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.4.0/docs/resources/application_settings#outbound_local_requests_whitelist ApplicationSettings#outbound_local_requests_whitelist}

---

##### `package_registry_cleanup_policies_worker_capacity`<sup>Optional</sup> <a name="package_registry_cleanup_policies_worker_capacity" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.Initializer.parameter.packageRegistryCleanupPoliciesWorkerCapacity"></a>

- *Type:* typing.Union[int, float]

Number of workers assigned to the packages cleanup policies.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.4.0/docs/resources/application_settings#package_registry_cleanup_policies_worker_capacity ApplicationSettings#package_registry_cleanup_policies_worker_capacity}

---

##### `pages_domain_verification_enabled`<sup>Optional</sup> <a name="pages_domain_verification_enabled" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.Initializer.parameter.pagesDomainVerificationEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Require users to prove ownership of custom domains.

Domain verification is an essential security measure for public GitLab sites. Users are required to demonstrate they control a domain before it is enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.4.0/docs/resources/application_settings#pages_domain_verification_enabled ApplicationSettings#pages_domain_verification_enabled}

---

##### `password_authentication_enabled_for_git`<sup>Optional</sup> <a name="password_authentication_enabled_for_git" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.Initializer.parameter.passwordAuthenticationEnabledForGit"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Enable authentication for Git over HTTP(S) via a GitLab account password.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.4.0/docs/resources/application_settings#password_authentication_enabled_for_git ApplicationSettings#password_authentication_enabled_for_git}

---

##### `password_authentication_enabled_for_web`<sup>Optional</sup> <a name="password_authentication_enabled_for_web" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.Initializer.parameter.passwordAuthenticationEnabledForWeb"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Enable authentication for the web interface via a GitLab account password.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.4.0/docs/resources/application_settings#password_authentication_enabled_for_web ApplicationSettings#password_authentication_enabled_for_web}

---

##### `password_lowercase_required`<sup>Optional</sup> <a name="password_lowercase_required" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.Initializer.parameter.passwordLowercaseRequired"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Indicates whether passwords require at least one lowercase letter. Introduced in GitLab 15.1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.4.0/docs/resources/application_settings#password_lowercase_required ApplicationSettings#password_lowercase_required}

---

##### `password_number_required`<sup>Optional</sup> <a name="password_number_required" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.Initializer.parameter.passwordNumberRequired"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Indicates whether passwords require at least one number. Introduced in GitLab 15.1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.4.0/docs/resources/application_settings#password_number_required ApplicationSettings#password_number_required}

---

##### `password_symbol_required`<sup>Optional</sup> <a name="password_symbol_required" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.Initializer.parameter.passwordSymbolRequired"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Indicates whether passwords require at least one symbol character. Introduced in GitLab 15.1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.4.0/docs/resources/application_settings#password_symbol_required ApplicationSettings#password_symbol_required}

---

##### `password_uppercase_required`<sup>Optional</sup> <a name="password_uppercase_required" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.Initializer.parameter.passwordUppercaseRequired"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Indicates whether passwords require at least one uppercase letter. Introduced in GitLab 15.1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.4.0/docs/resources/application_settings#password_uppercase_required ApplicationSettings#password_uppercase_required}

---

##### `performance_bar_allowed_group_path`<sup>Optional</sup> <a name="performance_bar_allowed_group_path" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.Initializer.parameter.performanceBarAllowedGroupPath"></a>

- *Type:* str

Path of the group that is allowed to toggle the performance bar.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.4.0/docs/resources/application_settings#performance_bar_allowed_group_path ApplicationSettings#performance_bar_allowed_group_path}

---

##### `personal_access_token_prefix`<sup>Optional</sup> <a name="personal_access_token_prefix" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.Initializer.parameter.personalAccessTokenPrefix"></a>

- *Type:* str

Prefix for all generated personal access tokens.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.4.0/docs/resources/application_settings#personal_access_token_prefix ApplicationSettings#personal_access_token_prefix}

---

##### `pipeline_limit_per_project_user_sha`<sup>Optional</sup> <a name="pipeline_limit_per_project_user_sha" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.Initializer.parameter.pipelineLimitPerProjectUserSha"></a>

- *Type:* typing.Union[int, float]

Maximum number of pipeline creation requests per minute per user and commit.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.4.0/docs/resources/application_settings#pipeline_limit_per_project_user_sha ApplicationSettings#pipeline_limit_per_project_user_sha}

---

##### `plantuml_enabled`<sup>Optional</sup> <a name="plantuml_enabled" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.Initializer.parameter.plantumlEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

(If enabled, requires: plantuml_url) Enable PlantUML integration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.4.0/docs/resources/application_settings#plantuml_enabled ApplicationSettings#plantuml_enabled}

---

##### `plantuml_url`<sup>Optional</sup> <a name="plantuml_url" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.Initializer.parameter.plantumlUrl"></a>

- *Type:* str

The PlantUML instance URL for integration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.4.0/docs/resources/application_settings#plantuml_url ApplicationSettings#plantuml_url}

---

##### `polling_interval_multiplier`<sup>Optional</sup> <a name="polling_interval_multiplier" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.Initializer.parameter.pollingIntervalMultiplier"></a>

- *Type:* typing.Union[int, float]

Interval multiplier used by endpoints that perform polling. Set to 0 to disable polling.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.4.0/docs/resources/application_settings#polling_interval_multiplier ApplicationSettings#polling_interval_multiplier}

---

##### `project_export_enabled`<sup>Optional</sup> <a name="project_export_enabled" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.Initializer.parameter.projectExportEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Enable project export.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.4.0/docs/resources/application_settings#project_export_enabled ApplicationSettings#project_export_enabled}

---

##### `prometheus_metrics_enabled`<sup>Optional</sup> <a name="prometheus_metrics_enabled" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.Initializer.parameter.prometheusMetricsEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Enable Prometheus metrics.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.4.0/docs/resources/application_settings#prometheus_metrics_enabled ApplicationSettings#prometheus_metrics_enabled}

---

##### `protected_ci_variables`<sup>Optional</sup> <a name="protected_ci_variables" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.Initializer.parameter.protectedCiVariables"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

CI/CD variables are protected by default.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.4.0/docs/resources/application_settings#protected_ci_variables ApplicationSettings#protected_ci_variables}

---

##### `push_event_activities_limit`<sup>Optional</sup> <a name="push_event_activities_limit" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.Initializer.parameter.pushEventActivitiesLimit"></a>

- *Type:* typing.Union[int, float]

Number of changes (branches or tags) in a single push to determine whether individual push events or bulk push events are created.

Bulk push events are created if it surpasses that value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.4.0/docs/resources/application_settings#push_event_activities_limit ApplicationSettings#push_event_activities_limit}

---

##### `push_event_hooks_limit`<sup>Optional</sup> <a name="push_event_hooks_limit" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.Initializer.parameter.pushEventHooksLimit"></a>

- *Type:* typing.Union[int, float]

Number of changes (branches or tags) in a single push to determine whether webhooks and services fire or not.

Webhooks and services aren’t submitted if it surpasses that value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.4.0/docs/resources/application_settings#push_event_hooks_limit ApplicationSettings#push_event_hooks_limit}

---

##### `pypi_package_requests_forwarding`<sup>Optional</sup> <a name="pypi_package_requests_forwarding" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.Initializer.parameter.pypiPackageRequestsForwarding"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Use pypi.org as a default remote repository when the package is not found in the GitLab Package Registry for PyPI.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.4.0/docs/resources/application_settings#pypi_package_requests_forwarding ApplicationSettings#pypi_package_requests_forwarding}

---

##### `rate_limiting_response_text`<sup>Optional</sup> <a name="rate_limiting_response_text" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.Initializer.parameter.rateLimitingResponseText"></a>

- *Type:* str

When rate limiting is enabled via the throttle_* settings, send this plain text response when a rate limit is exceeded.

‘Retry later’ is sent if this is blank.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.4.0/docs/resources/application_settings#rate_limiting_response_text ApplicationSettings#rate_limiting_response_text}

---

##### `raw_blob_request_limit`<sup>Optional</sup> <a name="raw_blob_request_limit" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.Initializer.parameter.rawBlobRequestLimit"></a>

- *Type:* typing.Union[int, float]

Max number of requests per minute for each raw path. To disable throttling set to 0.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.4.0/docs/resources/application_settings#raw_blob_request_limit ApplicationSettings#raw_blob_request_limit}

---

##### `recaptcha_enabled`<sup>Optional</sup> <a name="recaptcha_enabled" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.Initializer.parameter.recaptchaEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

(If enabled, requires: recaptcha_private_key and recaptcha_site_key) Enable reCAPTCHA.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.4.0/docs/resources/application_settings#recaptcha_enabled ApplicationSettings#recaptcha_enabled}

---

##### `recaptcha_private_key`<sup>Optional</sup> <a name="recaptcha_private_key" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.Initializer.parameter.recaptchaPrivateKey"></a>

- *Type:* str

Private key for reCAPTCHA.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.4.0/docs/resources/application_settings#recaptcha_private_key ApplicationSettings#recaptcha_private_key}

---

##### `recaptcha_site_key`<sup>Optional</sup> <a name="recaptcha_site_key" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.Initializer.parameter.recaptchaSiteKey"></a>

- *Type:* str

Site key for reCAPTCHA.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.4.0/docs/resources/application_settings#recaptcha_site_key ApplicationSettings#recaptcha_site_key}

---

##### `receive_max_input_size`<sup>Optional</sup> <a name="receive_max_input_size" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.Initializer.parameter.receiveMaxInputSize"></a>

- *Type:* typing.Union[int, float]

Maximum push size (MB).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.4.0/docs/resources/application_settings#receive_max_input_size ApplicationSettings#receive_max_input_size}

---

##### `repository_checks_enabled`<sup>Optional</sup> <a name="repository_checks_enabled" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.Initializer.parameter.repositoryChecksEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

GitLab periodically runs git fsck in all project and wiki repositories to look for silent disk corruption issues.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.4.0/docs/resources/application_settings#repository_checks_enabled ApplicationSettings#repository_checks_enabled}

---

##### `repository_size_limit`<sup>Optional</sup> <a name="repository_size_limit" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.Initializer.parameter.repositorySizeLimit"></a>

- *Type:* typing.Union[int, float]

Size limit per repository (MB).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.4.0/docs/resources/application_settings#repository_size_limit ApplicationSettings#repository_size_limit}

---

##### `repository_storages`<sup>Optional</sup> <a name="repository_storages" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.Initializer.parameter.repositoryStorages"></a>

- *Type:* typing.List[str]

(GitLab 13.0 and earlier) List of names of enabled storage paths, taken from gitlab.yml. New projects are created in one of these stores, chosen at random.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.4.0/docs/resources/application_settings#repository_storages ApplicationSettings#repository_storages}

---

##### `repository_storages_weighted`<sup>Optional</sup> <a name="repository_storages_weighted" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.Initializer.parameter.repositoryStoragesWeighted"></a>

- *Type:* typing.Mapping[typing.Union[int, float]]

(GitLab 13.1 and later) Hash of names of taken from gitlab.yml to weights. New projects are created in one of these stores, chosen by a weighted random selection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.4.0/docs/resources/application_settings#repository_storages_weighted ApplicationSettings#repository_storages_weighted}

---

##### `require_admin_approval_after_user_signup`<sup>Optional</sup> <a name="require_admin_approval_after_user_signup" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.Initializer.parameter.requireAdminApprovalAfterUserSignup"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

When enabled, any user that signs up for an account using the registration form is placed under a Pending approval state and has to be explicitly approved by an administrator.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.4.0/docs/resources/application_settings#require_admin_approval_after_user_signup ApplicationSettings#require_admin_approval_after_user_signup}

---

##### `require_two_factor_authentication`<sup>Optional</sup> <a name="require_two_factor_authentication" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.Initializer.parameter.requireTwoFactorAuthentication"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

(If enabled, requires: two_factor_grace_period) Require all users to set up Two-factor authentication.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.4.0/docs/resources/application_settings#require_two_factor_authentication ApplicationSettings#require_two_factor_authentication}

---

##### `restricted_visibility_levels`<sup>Optional</sup> <a name="restricted_visibility_levels" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.Initializer.parameter.restrictedVisibilityLevels"></a>

- *Type:* typing.List[str]

Selected levels cannot be used by non-Administrator users for groups, projects or snippets.

Can take private, internal and public as a parameter. Null means there is no restriction.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.4.0/docs/resources/application_settings#restricted_visibility_levels ApplicationSettings#restricted_visibility_levels}

---

##### `rsa_key_restriction`<sup>Optional</sup> <a name="rsa_key_restriction" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.Initializer.parameter.rsaKeyRestriction"></a>

- *Type:* typing.Union[int, float]

The minimum allowed bit length of an uploaded RSA key. 0 means no restriction. -1 disables RSA keys.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.4.0/docs/resources/application_settings#rsa_key_restriction ApplicationSettings#rsa_key_restriction}

---

##### `search_rate_limit`<sup>Optional</sup> <a name="search_rate_limit" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.Initializer.parameter.searchRateLimit"></a>

- *Type:* typing.Union[int, float]

Max number of requests per minute for performing a search while authenticated. To disable throttling set to 0.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.4.0/docs/resources/application_settings#search_rate_limit ApplicationSettings#search_rate_limit}

---

##### `search_rate_limit_unauthenticated`<sup>Optional</sup> <a name="search_rate_limit_unauthenticated" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.Initializer.parameter.searchRateLimitUnauthenticated"></a>

- *Type:* typing.Union[int, float]

Max number of requests per minute for performing a search while unauthenticated. To disable throttling set to 0.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.4.0/docs/resources/application_settings#search_rate_limit_unauthenticated ApplicationSettings#search_rate_limit_unauthenticated}

---

##### `send_user_confirmation_email`<sup>Optional</sup> <a name="send_user_confirmation_email" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.Initializer.parameter.sendUserConfirmationEmail"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Send confirmation email on sign-up.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.4.0/docs/resources/application_settings#send_user_confirmation_email ApplicationSettings#send_user_confirmation_email}

---

##### `session_expire_delay`<sup>Optional</sup> <a name="session_expire_delay" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.Initializer.parameter.sessionExpireDelay"></a>

- *Type:* typing.Union[int, float]

Session duration in minutes. GitLab restart is required to apply changes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.4.0/docs/resources/application_settings#session_expire_delay ApplicationSettings#session_expire_delay}

---

##### `shared_runners_enabled`<sup>Optional</sup> <a name="shared_runners_enabled" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.Initializer.parameter.sharedRunnersEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

(If enabled, requires: shared_runners_text and shared_runners_minutes) Enable shared runners for new projects.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.4.0/docs/resources/application_settings#shared_runners_enabled ApplicationSettings#shared_runners_enabled}

---

##### `shared_runners_minutes`<sup>Optional</sup> <a name="shared_runners_minutes" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.Initializer.parameter.sharedRunnersMinutes"></a>

- *Type:* typing.Union[int, float]

Set the maximum number of CI/CD minutes that a group can use on shared runners per month.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.4.0/docs/resources/application_settings#shared_runners_minutes ApplicationSettings#shared_runners_minutes}

---

##### `shared_runners_text`<sup>Optional</sup> <a name="shared_runners_text" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.Initializer.parameter.sharedRunnersText"></a>

- *Type:* str

Shared runners text.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.4.0/docs/resources/application_settings#shared_runners_text ApplicationSettings#shared_runners_text}

---

##### `sidekiq_job_limiter_compression_threshold_bytes`<sup>Optional</sup> <a name="sidekiq_job_limiter_compression_threshold_bytes" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.Initializer.parameter.sidekiqJobLimiterCompressionThresholdBytes"></a>

- *Type:* typing.Union[int, float]

The threshold in bytes at which Sidekiq jobs are compressed before being stored in Redis.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.4.0/docs/resources/application_settings#sidekiq_job_limiter_compression_threshold_bytes ApplicationSettings#sidekiq_job_limiter_compression_threshold_bytes}

---

##### `sidekiq_job_limiter_limit_bytes`<sup>Optional</sup> <a name="sidekiq_job_limiter_limit_bytes" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.Initializer.parameter.sidekiqJobLimiterLimitBytes"></a>

- *Type:* typing.Union[int, float]

The threshold in bytes at which Sidekiq jobs are rejected. 0 means do not reject any job.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.4.0/docs/resources/application_settings#sidekiq_job_limiter_limit_bytes ApplicationSettings#sidekiq_job_limiter_limit_bytes}

---

##### `sidekiq_job_limiter_mode`<sup>Optional</sup> <a name="sidekiq_job_limiter_mode" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.Initializer.parameter.sidekiqJobLimiterMode"></a>

- *Type:* str

track or compress. Sets the behavior for Sidekiq job size limits.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.4.0/docs/resources/application_settings#sidekiq_job_limiter_mode ApplicationSettings#sidekiq_job_limiter_mode}

---

##### `sign_in_text`<sup>Optional</sup> <a name="sign_in_text" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.Initializer.parameter.signInText"></a>

- *Type:* str

Text on the login page.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.4.0/docs/resources/application_settings#sign_in_text ApplicationSettings#sign_in_text}

---

##### `signup_enabled`<sup>Optional</sup> <a name="signup_enabled" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.Initializer.parameter.signupEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Enable registration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.4.0/docs/resources/application_settings#signup_enabled ApplicationSettings#signup_enabled}

---

##### `slack_app_enabled`<sup>Optional</sup> <a name="slack_app_enabled" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.Initializer.parameter.slackAppEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

(If enabled, requires: slack_app_id, slack_app_secret and slack_app_secret) Enable Slack app.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.4.0/docs/resources/application_settings#slack_app_enabled ApplicationSettings#slack_app_enabled}

---

##### `slack_app_id`<sup>Optional</sup> <a name="slack_app_id" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.Initializer.parameter.slackAppId"></a>

- *Type:* str

The app ID of the Slack-app.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.4.0/docs/resources/application_settings#slack_app_id ApplicationSettings#slack_app_id}

---

##### `slack_app_secret`<sup>Optional</sup> <a name="slack_app_secret" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.Initializer.parameter.slackAppSecret"></a>

- *Type:* str

The app secret of the Slack-app.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.4.0/docs/resources/application_settings#slack_app_secret ApplicationSettings#slack_app_secret}

---

##### `slack_app_signing_secret`<sup>Optional</sup> <a name="slack_app_signing_secret" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.Initializer.parameter.slackAppSigningSecret"></a>

- *Type:* str

The signing secret of the Slack-app.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.4.0/docs/resources/application_settings#slack_app_signing_secret ApplicationSettings#slack_app_signing_secret}

---

##### `slack_app_verification_token`<sup>Optional</sup> <a name="slack_app_verification_token" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.Initializer.parameter.slackAppVerificationToken"></a>

- *Type:* str

The verification token of the Slack-app.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.4.0/docs/resources/application_settings#slack_app_verification_token ApplicationSettings#slack_app_verification_token}

---

##### `snippet_size_limit`<sup>Optional</sup> <a name="snippet_size_limit" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.Initializer.parameter.snippetSizeLimit"></a>

- *Type:* typing.Union[int, float]

Max snippet content size in bytes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.4.0/docs/resources/application_settings#snippet_size_limit ApplicationSettings#snippet_size_limit}

---

##### `snowplow_app_id`<sup>Optional</sup> <a name="snowplow_app_id" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.Initializer.parameter.snowplowAppId"></a>

- *Type:* str

The Snowplow site name / application ID. (for example, gitlab).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.4.0/docs/resources/application_settings#snowplow_app_id ApplicationSettings#snowplow_app_id}

---

##### `snowplow_collector_hostname`<sup>Optional</sup> <a name="snowplow_collector_hostname" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.Initializer.parameter.snowplowCollectorHostname"></a>

- *Type:* str

The Snowplow collector hostname. (for example, snowplow.trx.gitlab.net).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.4.0/docs/resources/application_settings#snowplow_collector_hostname ApplicationSettings#snowplow_collector_hostname}

---

##### `snowplow_cookie_domain`<sup>Optional</sup> <a name="snowplow_cookie_domain" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.Initializer.parameter.snowplowCookieDomain"></a>

- *Type:* str

The Snowplow cookie domain. (for example, .gitlab.com).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.4.0/docs/resources/application_settings#snowplow_cookie_domain ApplicationSettings#snowplow_cookie_domain}

---

##### `snowplow_enabled`<sup>Optional</sup> <a name="snowplow_enabled" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.Initializer.parameter.snowplowEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Enable snowplow tracking.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.4.0/docs/resources/application_settings#snowplow_enabled ApplicationSettings#snowplow_enabled}

---

##### `sourcegraph_enabled`<sup>Optional</sup> <a name="sourcegraph_enabled" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.Initializer.parameter.sourcegraphEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Enables Sourcegraph integration. If enabled, requires sourcegraph_url.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.4.0/docs/resources/application_settings#sourcegraph_enabled ApplicationSettings#sourcegraph_enabled}

---

##### `sourcegraph_public_only`<sup>Optional</sup> <a name="sourcegraph_public_only" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.Initializer.parameter.sourcegraphPublicOnly"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Blocks Sourcegraph from being loaded on private and internal projects.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.4.0/docs/resources/application_settings#sourcegraph_public_only ApplicationSettings#sourcegraph_public_only}

---

##### `sourcegraph_url`<sup>Optional</sup> <a name="sourcegraph_url" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.Initializer.parameter.sourcegraphUrl"></a>

- *Type:* str

The Sourcegraph instance URL for integration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.4.0/docs/resources/application_settings#sourcegraph_url ApplicationSettings#sourcegraph_url}

---

##### `spam_check_api_key`<sup>Optional</sup> <a name="spam_check_api_key" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.Initializer.parameter.spamCheckApiKey"></a>

- *Type:* str

API key used by GitLab for accessing the Spam Check service endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.4.0/docs/resources/application_settings#spam_check_api_key ApplicationSettings#spam_check_api_key}

---

##### `spam_check_endpoint_enabled`<sup>Optional</sup> <a name="spam_check_endpoint_enabled" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.Initializer.parameter.spamCheckEndpointEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Enables spam checking using external Spam Check API endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.4.0/docs/resources/application_settings#spam_check_endpoint_enabled ApplicationSettings#spam_check_endpoint_enabled}

---

##### `spam_check_endpoint_url`<sup>Optional</sup> <a name="spam_check_endpoint_url" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.Initializer.parameter.spamCheckEndpointUrl"></a>

- *Type:* str

URL of the external Spamcheck service endpoint.

Valid URI schemes are grpc or tls. Specifying tls forces communication to be encrypted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.4.0/docs/resources/application_settings#spam_check_endpoint_url ApplicationSettings#spam_check_endpoint_url}

---

##### `suggest_pipeline_enabled`<sup>Optional</sup> <a name="suggest_pipeline_enabled" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.Initializer.parameter.suggestPipelineEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Enable pipeline suggestion banner.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.4.0/docs/resources/application_settings#suggest_pipeline_enabled ApplicationSettings#suggest_pipeline_enabled}

---

##### `terminal_max_session_time`<sup>Optional</sup> <a name="terminal_max_session_time" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.Initializer.parameter.terminalMaxSessionTime"></a>

- *Type:* typing.Union[int, float]

Maximum time for web terminal websocket connection (in seconds). Set to 0 for unlimited time.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.4.0/docs/resources/application_settings#terminal_max_session_time ApplicationSettings#terminal_max_session_time}

---

##### `terms`<sup>Optional</sup> <a name="terms" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.Initializer.parameter.terms"></a>

- *Type:* str

(Required by: enforce_terms) Markdown content for the ToS.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.4.0/docs/resources/application_settings#terms ApplicationSettings#terms}

---

##### `throttle_authenticated_api_enabled`<sup>Optional</sup> <a name="throttle_authenticated_api_enabled" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.Initializer.parameter.throttleAuthenticatedApiEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

(If enabled, requires: throttle_authenticated_api_period_in_seconds and throttle_authenticated_api_requests_per_period) Enable authenticated API request rate limit.

Helps reduce request volume (for example, from crawlers or abusive bots).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.4.0/docs/resources/application_settings#throttle_authenticated_api_enabled ApplicationSettings#throttle_authenticated_api_enabled}

---

##### `throttle_authenticated_api_period_in_seconds`<sup>Optional</sup> <a name="throttle_authenticated_api_period_in_seconds" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.Initializer.parameter.throttleAuthenticatedApiPeriodInSeconds"></a>

- *Type:* typing.Union[int, float]

Rate limit period (in seconds).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.4.0/docs/resources/application_settings#throttle_authenticated_api_period_in_seconds ApplicationSettings#throttle_authenticated_api_period_in_seconds}

---

##### `throttle_authenticated_api_requests_per_period`<sup>Optional</sup> <a name="throttle_authenticated_api_requests_per_period" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.Initializer.parameter.throttleAuthenticatedApiRequestsPerPeriod"></a>

- *Type:* typing.Union[int, float]

Maximum requests per period per user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.4.0/docs/resources/application_settings#throttle_authenticated_api_requests_per_period ApplicationSettings#throttle_authenticated_api_requests_per_period}

---

##### `throttle_authenticated_packages_api_enabled`<sup>Optional</sup> <a name="throttle_authenticated_packages_api_enabled" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.Initializer.parameter.throttleAuthenticatedPackagesApiEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

(If enabled, requires: throttle_authenticated_packages_api_period_in_seconds and throttle_authenticated_packages_api_requests_per_period) Enable authenticated API request rate limit.

Helps reduce request volume (for example, from crawlers or abusive bots). View Package Registry rate limits for more details.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.4.0/docs/resources/application_settings#throttle_authenticated_packages_api_enabled ApplicationSettings#throttle_authenticated_packages_api_enabled}

---

##### `throttle_authenticated_packages_api_period_in_seconds`<sup>Optional</sup> <a name="throttle_authenticated_packages_api_period_in_seconds" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.Initializer.parameter.throttleAuthenticatedPackagesApiPeriodInSeconds"></a>

- *Type:* typing.Union[int, float]

Rate limit period (in seconds). View Package Registry rate limits for more details.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.4.0/docs/resources/application_settings#throttle_authenticated_packages_api_period_in_seconds ApplicationSettings#throttle_authenticated_packages_api_period_in_seconds}

---

##### `throttle_authenticated_packages_api_requests_per_period`<sup>Optional</sup> <a name="throttle_authenticated_packages_api_requests_per_period" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.Initializer.parameter.throttleAuthenticatedPackagesApiRequestsPerPeriod"></a>

- *Type:* typing.Union[int, float]

Maximum requests per period per user. View Package Registry rate limits for more details.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.4.0/docs/resources/application_settings#throttle_authenticated_packages_api_requests_per_period ApplicationSettings#throttle_authenticated_packages_api_requests_per_period}

---

##### `throttle_authenticated_web_enabled`<sup>Optional</sup> <a name="throttle_authenticated_web_enabled" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.Initializer.parameter.throttleAuthenticatedWebEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

(If enabled, requires: throttle_authenticated_web_period_in_seconds and throttle_authenticated_web_requests_per_period) Enable authenticated web request rate limit.

Helps reduce request volume (for example, from crawlers or abusive bots).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.4.0/docs/resources/application_settings#throttle_authenticated_web_enabled ApplicationSettings#throttle_authenticated_web_enabled}

---

##### `throttle_authenticated_web_period_in_seconds`<sup>Optional</sup> <a name="throttle_authenticated_web_period_in_seconds" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.Initializer.parameter.throttleAuthenticatedWebPeriodInSeconds"></a>

- *Type:* typing.Union[int, float]

Rate limit period (in seconds).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.4.0/docs/resources/application_settings#throttle_authenticated_web_period_in_seconds ApplicationSettings#throttle_authenticated_web_period_in_seconds}

---

##### `throttle_authenticated_web_requests_per_period`<sup>Optional</sup> <a name="throttle_authenticated_web_requests_per_period" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.Initializer.parameter.throttleAuthenticatedWebRequestsPerPeriod"></a>

- *Type:* typing.Union[int, float]

Maximum requests per period per user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.4.0/docs/resources/application_settings#throttle_authenticated_web_requests_per_period ApplicationSettings#throttle_authenticated_web_requests_per_period}

---

##### `throttle_unauthenticated_api_enabled`<sup>Optional</sup> <a name="throttle_unauthenticated_api_enabled" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.Initializer.parameter.throttleUnauthenticatedApiEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

(If enabled, requires: throttle_unauthenticated_api_period_in_seconds and throttle_unauthenticated_api_requests_per_period) Enable unauthenticated API request rate limit.

Helps reduce request volume (for example, from crawlers or abusive bots).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.4.0/docs/resources/application_settings#throttle_unauthenticated_api_enabled ApplicationSettings#throttle_unauthenticated_api_enabled}

---

##### `throttle_unauthenticated_api_period_in_seconds`<sup>Optional</sup> <a name="throttle_unauthenticated_api_period_in_seconds" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.Initializer.parameter.throttleUnauthenticatedApiPeriodInSeconds"></a>

- *Type:* typing.Union[int, float]

Rate limit period in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.4.0/docs/resources/application_settings#throttle_unauthenticated_api_period_in_seconds ApplicationSettings#throttle_unauthenticated_api_period_in_seconds}

---

##### `throttle_unauthenticated_api_requests_per_period`<sup>Optional</sup> <a name="throttle_unauthenticated_api_requests_per_period" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.Initializer.parameter.throttleUnauthenticatedApiRequestsPerPeriod"></a>

- *Type:* typing.Union[int, float]

Max requests per period per IP.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.4.0/docs/resources/application_settings#throttle_unauthenticated_api_requests_per_period ApplicationSettings#throttle_unauthenticated_api_requests_per_period}

---

##### `throttle_unauthenticated_packages_api_enabled`<sup>Optional</sup> <a name="throttle_unauthenticated_packages_api_enabled" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.Initializer.parameter.throttleUnauthenticatedPackagesApiEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

(If enabled, requires: throttle_unauthenticated_packages_api_period_in_seconds and throttle_unauthenticated_packages_api_requests_per_period) Enable authenticated API request rate limit.

Helps reduce request volume (for example, from crawlers or abusive bots). View Package Registry rate limits for more details.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.4.0/docs/resources/application_settings#throttle_unauthenticated_packages_api_enabled ApplicationSettings#throttle_unauthenticated_packages_api_enabled}

---

##### `throttle_unauthenticated_packages_api_period_in_seconds`<sup>Optional</sup> <a name="throttle_unauthenticated_packages_api_period_in_seconds" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.Initializer.parameter.throttleUnauthenticatedPackagesApiPeriodInSeconds"></a>

- *Type:* typing.Union[int, float]

Rate limit period (in seconds). View Package Registry rate limits for more details.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.4.0/docs/resources/application_settings#throttle_unauthenticated_packages_api_period_in_seconds ApplicationSettings#throttle_unauthenticated_packages_api_period_in_seconds}

---

##### `throttle_unauthenticated_packages_api_requests_per_period`<sup>Optional</sup> <a name="throttle_unauthenticated_packages_api_requests_per_period" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.Initializer.parameter.throttleUnauthenticatedPackagesApiRequestsPerPeriod"></a>

- *Type:* typing.Union[int, float]

Maximum requests per period per user. View Package Registry rate limits for more details.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.4.0/docs/resources/application_settings#throttle_unauthenticated_packages_api_requests_per_period ApplicationSettings#throttle_unauthenticated_packages_api_requests_per_period}

---

##### `throttle_unauthenticated_web_enabled`<sup>Optional</sup> <a name="throttle_unauthenticated_web_enabled" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.Initializer.parameter.throttleUnauthenticatedWebEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

(If enabled, requires: throttle_unauthenticated_web_period_in_seconds and throttle_unauthenticated_web_requests_per_period) Enable unauthenticated web request rate limit.

Helps reduce request volume (for example, from crawlers or abusive bots).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.4.0/docs/resources/application_settings#throttle_unauthenticated_web_enabled ApplicationSettings#throttle_unauthenticated_web_enabled}

---

##### `throttle_unauthenticated_web_period_in_seconds`<sup>Optional</sup> <a name="throttle_unauthenticated_web_period_in_seconds" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.Initializer.parameter.throttleUnauthenticatedWebPeriodInSeconds"></a>

- *Type:* typing.Union[int, float]

Rate limit period in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.4.0/docs/resources/application_settings#throttle_unauthenticated_web_period_in_seconds ApplicationSettings#throttle_unauthenticated_web_period_in_seconds}

---

##### `throttle_unauthenticated_web_requests_per_period`<sup>Optional</sup> <a name="throttle_unauthenticated_web_requests_per_period" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.Initializer.parameter.throttleUnauthenticatedWebRequestsPerPeriod"></a>

- *Type:* typing.Union[int, float]

Max requests per period per IP.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.4.0/docs/resources/application_settings#throttle_unauthenticated_web_requests_per_period ApplicationSettings#throttle_unauthenticated_web_requests_per_period}

---

##### `time_tracking_limit_to_hours`<sup>Optional</sup> <a name="time_tracking_limit_to_hours" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.Initializer.parameter.timeTrackingLimitToHours"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Limit display of time tracking units to hours.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.4.0/docs/resources/application_settings#time_tracking_limit_to_hours ApplicationSettings#time_tracking_limit_to_hours}

---

##### `two_factor_grace_period`<sup>Optional</sup> <a name="two_factor_grace_period" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.Initializer.parameter.twoFactorGracePeriod"></a>

- *Type:* typing.Union[int, float]

Amount of time (in hours) that users are allowed to skip forced configuration of two-factor authentication.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.4.0/docs/resources/application_settings#two_factor_grace_period ApplicationSettings#two_factor_grace_period}

---

##### `unique_ips_limit_enabled`<sup>Optional</sup> <a name="unique_ips_limit_enabled" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.Initializer.parameter.uniqueIpsLimitEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

(If enabled, requires: unique_ips_limit_per_user and unique_ips_limit_time_window) Limit sign in from multiple IPs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.4.0/docs/resources/application_settings#unique_ips_limit_enabled ApplicationSettings#unique_ips_limit_enabled}

---

##### `unique_ips_limit_per_user`<sup>Optional</sup> <a name="unique_ips_limit_per_user" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.Initializer.parameter.uniqueIpsLimitPerUser"></a>

- *Type:* typing.Union[int, float]

Maximum number of IPs per user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.4.0/docs/resources/application_settings#unique_ips_limit_per_user ApplicationSettings#unique_ips_limit_per_user}

---

##### `unique_ips_limit_time_window`<sup>Optional</sup> <a name="unique_ips_limit_time_window" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.Initializer.parameter.uniqueIpsLimitTimeWindow"></a>

- *Type:* typing.Union[int, float]

How many seconds an IP is counted towards the limit.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.4.0/docs/resources/application_settings#unique_ips_limit_time_window ApplicationSettings#unique_ips_limit_time_window}

---

##### `usage_ping_enabled`<sup>Optional</sup> <a name="usage_ping_enabled" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.Initializer.parameter.usagePingEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Every week GitLab reports license usage back to GitLab, Inc.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.4.0/docs/resources/application_settings#usage_ping_enabled ApplicationSettings#usage_ping_enabled}

---

##### `user_deactivation_emails_enabled`<sup>Optional</sup> <a name="user_deactivation_emails_enabled" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.Initializer.parameter.userDeactivationEmailsEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Send an email to users upon account deactivation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.4.0/docs/resources/application_settings#user_deactivation_emails_enabled ApplicationSettings#user_deactivation_emails_enabled}

---

##### `user_default_external`<sup>Optional</sup> <a name="user_default_external" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.Initializer.parameter.userDefaultExternal"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Newly registered users are external by default.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.4.0/docs/resources/application_settings#user_default_external ApplicationSettings#user_default_external}

---

##### `user_default_internal_regex`<sup>Optional</sup> <a name="user_default_internal_regex" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.Initializer.parameter.userDefaultInternalRegex"></a>

- *Type:* str

Specify an email address regex pattern to identify default internal users.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.4.0/docs/resources/application_settings#user_default_internal_regex ApplicationSettings#user_default_internal_regex}

---

##### `user_oauth_applications`<sup>Optional</sup> <a name="user_oauth_applications" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.Initializer.parameter.userOauthApplications"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Allow users to register any application to use GitLab as an OAuth provider.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.4.0/docs/resources/application_settings#user_oauth_applications ApplicationSettings#user_oauth_applications}

---

##### `user_show_add_ssh_key_message`<sup>Optional</sup> <a name="user_show_add_ssh_key_message" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.Initializer.parameter.userShowAddSshKeyMessage"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

When set to false disable the You won't be able to pull or push project code via SSH warning shown to users with no uploaded SSH key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.4.0/docs/resources/application_settings#user_show_add_ssh_key_message ApplicationSettings#user_show_add_ssh_key_message}

---

##### `version_check_enabled`<sup>Optional</sup> <a name="version_check_enabled" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.Initializer.parameter.versionCheckEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Let GitLab inform you when an update is available.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.4.0/docs/resources/application_settings#version_check_enabled ApplicationSettings#version_check_enabled}

---

##### `web_ide_clientside_preview_enabled`<sup>Optional</sup> <a name="web_ide_clientside_preview_enabled" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.Initializer.parameter.webIdeClientsidePreviewEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Live Preview (allow live previews of JavaScript projects in the Web IDE using CodeSandbox Live Preview).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.4.0/docs/resources/application_settings#web_ide_clientside_preview_enabled ApplicationSettings#web_ide_clientside_preview_enabled}

---

##### `whats_new_variant`<sup>Optional</sup> <a name="whats_new_variant" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.Initializer.parameter.whatsNewVariant"></a>

- *Type:* str

What’s new variant, possible values: all_tiers, current_tier, and disabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.4.0/docs/resources/application_settings#whats_new_variant ApplicationSettings#whats_new_variant}

---

##### `wiki_page_max_content_bytes`<sup>Optional</sup> <a name="wiki_page_max_content_bytes" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.Initializer.parameter.wikiPageMaxContentBytes"></a>

- *Type:* typing.Union[int, float]

Maximum wiki page content size in bytes. The minimum value is 1024 bytes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.4.0/docs/resources/application_settings#wiki_page_max_content_bytes ApplicationSettings#wiki_page_max_content_bytes}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetAbuseNotificationEmail">reset_abuse_notification_email</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetAdminMode">reset_admin_mode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetAfterSignOutPath">reset_after_sign_out_path</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetAfterSignUpText">reset_after_sign_up_text</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetAkismetApiKey">reset_akismet_api_key</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetAkismetEnabled">reset_akismet_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetAllowGroupOwnersToManageLdap">reset_allow_group_owners_to_manage_ldap</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetAllowLocalRequestsFromSystemHooks">reset_allow_local_requests_from_system_hooks</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetAllowLocalRequestsFromWebHooksAndServices">reset_allow_local_requests_from_web_hooks_and_services</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetArchiveBuildsInHumanReadable">reset_archive_builds_in_human_readable</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetAssetProxyAllowlist">reset_asset_proxy_allowlist</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetAssetProxyEnabled">reset_asset_proxy_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetAssetProxySecretKey">reset_asset_proxy_secret_key</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetAssetProxyUrl">reset_asset_proxy_url</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetAuthorizedKeysEnabled">reset_authorized_keys_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetAutoDevopsDomain">reset_auto_devops_domain</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetAutoDevopsEnabled">reset_auto_devops_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetAutomaticPurchasedStorageAllocation">reset_automatic_purchased_storage_allocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetCanCreateGroup">reset_can_create_group</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetCheckNamespacePlan">reset_check_namespace_plan</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetCommitEmailHostname">reset_commit_email_hostname</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetContainerExpirationPoliciesEnableHistoricEntries">reset_container_expiration_policies_enable_historic_entries</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetContainerRegistryCleanupTagsServiceMaxListSize">reset_container_registry_cleanup_tags_service_max_list_size</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetContainerRegistryDeleteTagsServiceTimeout">reset_container_registry_delete_tags_service_timeout</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetContainerRegistryExpirationPoliciesCaching">reset_container_registry_expiration_policies_caching</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetContainerRegistryExpirationPoliciesWorkerCapacity">reset_container_registry_expiration_policies_worker_capacity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetContainerRegistryTokenExpireDelay">reset_container_registry_token_expire_delay</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetDeactivateDormantUsers">reset_deactivate_dormant_users</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetDefaultArtifactsExpireIn">reset_default_artifacts_expire_in</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetDefaultBranchName">reset_default_branch_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetDefaultBranchProtection">reset_default_branch_protection</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetDefaultCiConfigPath">reset_default_ci_config_path</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetDefaultGroupVisibility">reset_default_group_visibility</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetDefaultProjectCreation">reset_default_project_creation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetDefaultProjectsLimit">reset_default_projects_limit</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetDefaultProjectVisibility">reset_default_project_visibility</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetDefaultSnippetVisibility">reset_default_snippet_visibility</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetDelayedGroupDeletion">reset_delayed_group_deletion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetDelayedProjectDeletion">reset_delayed_project_deletion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetDeleteInactiveProjects">reset_delete_inactive_projects</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetDeletionAdjournedPeriod">reset_deletion_adjourned_period</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetDiffMaxFiles">reset_diff_max_files</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetDiffMaxLines">reset_diff_max_lines</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetDiffMaxPatchBytes">reset_diff_max_patch_bytes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetDisabledOauthSignInSources">reset_disabled_oauth_sign_in_sources</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetDisableFeedToken">reset_disable_feed_token</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetDnsRebindingProtectionEnabled">reset_dns_rebinding_protection_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetDomainAllowlist">reset_domain_allowlist</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetDomainDenylist">reset_domain_denylist</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetDomainDenylistEnabled">reset_domain_denylist_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetDsaKeyRestriction">reset_dsa_key_restriction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetEcdsaKeyRestriction">reset_ecdsa_key_restriction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetEcdsaSkKeyRestriction">reset_ecdsa_sk_key_restriction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetEd25519KeyRestriction">reset_ed25519_key_restriction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetEd25519SkKeyRestriction">reset_ed25519_sk_key_restriction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetEksAccessKeyId">reset_eks_access_key_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetEksAccountId">reset_eks_account_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetEksIntegrationEnabled">reset_eks_integration_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetEksSecretAccessKey">reset_eks_secret_access_key</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetElasticsearchAws">reset_elasticsearch_aws</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetElasticsearchAwsAccessKey">reset_elasticsearch_aws_access_key</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetElasticsearchAwsRegion">reset_elasticsearch_aws_region</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetElasticsearchAwsSecretAccessKey">reset_elasticsearch_aws_secret_access_key</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetElasticsearchIndexedFieldLengthLimit">reset_elasticsearch_indexed_field_length_limit</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetElasticsearchIndexedFileSizeLimitKb">reset_elasticsearch_indexed_file_size_limit_kb</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetElasticsearchIndexing">reset_elasticsearch_indexing</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetElasticsearchLimitIndexing">reset_elasticsearch_limit_indexing</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetElasticsearchMaxBulkConcurrency">reset_elasticsearch_max_bulk_concurrency</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetElasticsearchMaxBulkSizeMb">reset_elasticsearch_max_bulk_size_mb</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetElasticsearchNamespaceIds">reset_elasticsearch_namespace_ids</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetElasticsearchPassword">reset_elasticsearch_password</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetElasticsearchProjectIds">reset_elasticsearch_project_ids</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetElasticsearchSearch">reset_elasticsearch_search</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetElasticsearchUrl">reset_elasticsearch_url</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetElasticsearchUsername">reset_elasticsearch_username</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetEmailAdditionalText">reset_email_additional_text</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetEmailAuthorInBody">reset_email_author_in_body</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetEnabledGitAccessProtocol">reset_enabled_git_access_protocol</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetEnforceNamespaceStorageLimit">reset_enforce_namespace_storage_limit</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetEnforceTerms">reset_enforce_terms</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetExternalAuthClientCert">reset_external_auth_client_cert</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetExternalAuthClientKey">reset_external_auth_client_key</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetExternalAuthClientKeyPass">reset_external_auth_client_key_pass</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetExternalAuthorizationServiceDefaultLabel">reset_external_authorization_service_default_label</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetExternalAuthorizationServiceEnabled">reset_external_authorization_service_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetExternalAuthorizationServiceTimeout">reset_external_authorization_service_timeout</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetExternalAuthorizationServiceUrl">reset_external_authorization_service_url</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetExternalPipelineValidationServiceTimeout">reset_external_pipeline_validation_service_timeout</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetExternalPipelineValidationServiceToken">reset_external_pipeline_validation_service_token</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetExternalPipelineValidationServiceUrl">reset_external_pipeline_validation_service_url</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetFileTemplateProjectId">reset_file_template_project_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetFirstDayOfWeek">reset_first_day_of_week</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetGeoNodeAllowedIps">reset_geo_node_allowed_ips</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetGeoStatusTimeout">reset_geo_status_timeout</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetGitalyTimeoutDefault">reset_gitaly_timeout_default</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetGitalyTimeoutFast">reset_gitaly_timeout_fast</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetGitalyTimeoutMedium">reset_gitaly_timeout_medium</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetGitRateLimitUsersAllowlist">reset_git_rate_limit_users_allowlist</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetGitTwoFactorSessionExpiry">reset_git_two_factor_session_expiry</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetGrafanaEnabled">reset_grafana_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetGrafanaUrl">reset_grafana_url</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetGravatarEnabled">reset_gravatar_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetGroupOwnersCanManageDefaultBranchProtection">reset_group_owners_can_manage_default_branch_protection</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetHashedStorageEnabled">reset_hashed_storage_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetHelpPageHideCommercialContent">reset_help_page_hide_commercial_content</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetHelpPageSupportUrl">reset_help_page_support_url</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetHelpPageText">reset_help_page_text</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetHelpText">reset_help_text</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetHideThirdPartyOffers">reset_hide_third_party_offers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetHomePageUrl">reset_home_page_url</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetHousekeepingEnabled">reset_housekeeping_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetHousekeepingFullRepackPeriod">reset_housekeeping_full_repack_period</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetHousekeepingGcPeriod">reset_housekeeping_gc_period</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetHousekeepingIncrementalRepackPeriod">reset_housekeeping_incremental_repack_period</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetHtmlEmailsEnabled">reset_html_emails_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetImportSources">reset_import_sources</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetInactiveProjectsDeleteAfterMonths">reset_inactive_projects_delete_after_months</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetInactiveProjectsMinSizeMb">reset_inactive_projects_min_size_mb</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetInactiveProjectsSendWarningEmailAfterMonths">reset_inactive_projects_send_warning_email_after_months</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetInProductMarketingEmailsEnabled">reset_in_product_marketing_emails_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetInvisibleCaptchaEnabled">reset_invisible_captcha_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetIssuesCreateLimit">reset_issues_create_limit</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetKeepLatestArtifact">reset_keep_latest_artifact</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetLocalMarkdownVersion">reset_local_markdown_version</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetMailgunEventsEnabled">reset_mailgun_events_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetMailgunSigningKey">reset_mailgun_signing_key</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetMaintenanceMode">reset_maintenance_mode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetMaintenanceModeMessage">reset_maintenance_mode_message</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetMaxArtifactsSize">reset_max_artifacts_size</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetMaxAttachmentSize">reset_max_attachment_size</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetMaxExportSize">reset_max_export_size</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetMaxImportSize">reset_max_import_size</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetMaxNumberOfRepositoryDownloads">reset_max_number_of_repository_downloads</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetMaxNumberOfRepositoryDownloadsWithinTimePeriod">reset_max_number_of_repository_downloads_within_time_period</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetMaxPagesSize">reset_max_pages_size</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetMaxPersonalAccessTokenLifetime">reset_max_personal_access_token_lifetime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetMaxSshKeyLifetime">reset_max_ssh_key_lifetime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetMetricsMethodCallThreshold">reset_metrics_method_call_threshold</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetMirrorAvailable">reset_mirror_available</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetMirrorCapacityThreshold">reset_mirror_capacity_threshold</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetMirrorMaxCapacity">reset_mirror_max_capacity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetMirrorMaxDelay">reset_mirror_max_delay</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetNpmPackageRequestsForwarding">reset_npm_package_requests_forwarding</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetOutboundLocalRequestsWhitelist">reset_outbound_local_requests_whitelist</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetPackageRegistryCleanupPoliciesWorkerCapacity">reset_package_registry_cleanup_policies_worker_capacity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetPagesDomainVerificationEnabled">reset_pages_domain_verification_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetPasswordAuthenticationEnabledForGit">reset_password_authentication_enabled_for_git</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetPasswordAuthenticationEnabledForWeb">reset_password_authentication_enabled_for_web</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetPasswordLowercaseRequired">reset_password_lowercase_required</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetPasswordNumberRequired">reset_password_number_required</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetPasswordSymbolRequired">reset_password_symbol_required</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetPasswordUppercaseRequired">reset_password_uppercase_required</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetPerformanceBarAllowedGroupPath">reset_performance_bar_allowed_group_path</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetPersonalAccessTokenPrefix">reset_personal_access_token_prefix</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetPipelineLimitPerProjectUserSha">reset_pipeline_limit_per_project_user_sha</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetPlantumlEnabled">reset_plantuml_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetPlantumlUrl">reset_plantuml_url</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetPollingIntervalMultiplier">reset_polling_interval_multiplier</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetProjectExportEnabled">reset_project_export_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetPrometheusMetricsEnabled">reset_prometheus_metrics_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetProtectedCiVariables">reset_protected_ci_variables</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetPushEventActivitiesLimit">reset_push_event_activities_limit</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetPushEventHooksLimit">reset_push_event_hooks_limit</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetPypiPackageRequestsForwarding">reset_pypi_package_requests_forwarding</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetRateLimitingResponseText">reset_rate_limiting_response_text</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetRawBlobRequestLimit">reset_raw_blob_request_limit</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetRecaptchaEnabled">reset_recaptcha_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetRecaptchaPrivateKey">reset_recaptcha_private_key</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetRecaptchaSiteKey">reset_recaptcha_site_key</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetReceiveMaxInputSize">reset_receive_max_input_size</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetRepositoryChecksEnabled">reset_repository_checks_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetRepositorySizeLimit">reset_repository_size_limit</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetRepositoryStorages">reset_repository_storages</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetRepositoryStoragesWeighted">reset_repository_storages_weighted</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetRequireAdminApprovalAfterUserSignup">reset_require_admin_approval_after_user_signup</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetRequireTwoFactorAuthentication">reset_require_two_factor_authentication</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetRestrictedVisibilityLevels">reset_restricted_visibility_levels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetRsaKeyRestriction">reset_rsa_key_restriction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetSearchRateLimit">reset_search_rate_limit</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetSearchRateLimitUnauthenticated">reset_search_rate_limit_unauthenticated</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetSendUserConfirmationEmail">reset_send_user_confirmation_email</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetSessionExpireDelay">reset_session_expire_delay</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetSharedRunnersEnabled">reset_shared_runners_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetSharedRunnersMinutes">reset_shared_runners_minutes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetSharedRunnersText">reset_shared_runners_text</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetSidekiqJobLimiterCompressionThresholdBytes">reset_sidekiq_job_limiter_compression_threshold_bytes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetSidekiqJobLimiterLimitBytes">reset_sidekiq_job_limiter_limit_bytes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetSidekiqJobLimiterMode">reset_sidekiq_job_limiter_mode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetSignInText">reset_sign_in_text</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetSignupEnabled">reset_signup_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetSlackAppEnabled">reset_slack_app_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetSlackAppId">reset_slack_app_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetSlackAppSecret">reset_slack_app_secret</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetSlackAppSigningSecret">reset_slack_app_signing_secret</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetSlackAppVerificationToken">reset_slack_app_verification_token</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetSnippetSizeLimit">reset_snippet_size_limit</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetSnowplowAppId">reset_snowplow_app_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetSnowplowCollectorHostname">reset_snowplow_collector_hostname</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetSnowplowCookieDomain">reset_snowplow_cookie_domain</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetSnowplowEnabled">reset_snowplow_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetSourcegraphEnabled">reset_sourcegraph_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetSourcegraphPublicOnly">reset_sourcegraph_public_only</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetSourcegraphUrl">reset_sourcegraph_url</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetSpamCheckApiKey">reset_spam_check_api_key</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetSpamCheckEndpointEnabled">reset_spam_check_endpoint_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetSpamCheckEndpointUrl">reset_spam_check_endpoint_url</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetSuggestPipelineEnabled">reset_suggest_pipeline_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetTerminalMaxSessionTime">reset_terminal_max_session_time</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetTerms">reset_terms</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetThrottleAuthenticatedApiEnabled">reset_throttle_authenticated_api_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetThrottleAuthenticatedApiPeriodInSeconds">reset_throttle_authenticated_api_period_in_seconds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetThrottleAuthenticatedApiRequestsPerPeriod">reset_throttle_authenticated_api_requests_per_period</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetThrottleAuthenticatedPackagesApiEnabled">reset_throttle_authenticated_packages_api_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetThrottleAuthenticatedPackagesApiPeriodInSeconds">reset_throttle_authenticated_packages_api_period_in_seconds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetThrottleAuthenticatedPackagesApiRequestsPerPeriod">reset_throttle_authenticated_packages_api_requests_per_period</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetThrottleAuthenticatedWebEnabled">reset_throttle_authenticated_web_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetThrottleAuthenticatedWebPeriodInSeconds">reset_throttle_authenticated_web_period_in_seconds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetThrottleAuthenticatedWebRequestsPerPeriod">reset_throttle_authenticated_web_requests_per_period</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetThrottleUnauthenticatedApiEnabled">reset_throttle_unauthenticated_api_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetThrottleUnauthenticatedApiPeriodInSeconds">reset_throttle_unauthenticated_api_period_in_seconds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetThrottleUnauthenticatedApiRequestsPerPeriod">reset_throttle_unauthenticated_api_requests_per_period</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetThrottleUnauthenticatedPackagesApiEnabled">reset_throttle_unauthenticated_packages_api_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetThrottleUnauthenticatedPackagesApiPeriodInSeconds">reset_throttle_unauthenticated_packages_api_period_in_seconds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetThrottleUnauthenticatedPackagesApiRequestsPerPeriod">reset_throttle_unauthenticated_packages_api_requests_per_period</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetThrottleUnauthenticatedWebEnabled">reset_throttle_unauthenticated_web_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetThrottleUnauthenticatedWebPeriodInSeconds">reset_throttle_unauthenticated_web_period_in_seconds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetThrottleUnauthenticatedWebRequestsPerPeriod">reset_throttle_unauthenticated_web_requests_per_period</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetTimeTrackingLimitToHours">reset_time_tracking_limit_to_hours</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetTwoFactorGracePeriod">reset_two_factor_grace_period</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetUniqueIpsLimitEnabled">reset_unique_ips_limit_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetUniqueIpsLimitPerUser">reset_unique_ips_limit_per_user</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetUniqueIpsLimitTimeWindow">reset_unique_ips_limit_time_window</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetUsagePingEnabled">reset_usage_ping_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetUserDeactivationEmailsEnabled">reset_user_deactivation_emails_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetUserDefaultExternal">reset_user_default_external</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetUserDefaultInternalRegex">reset_user_default_internal_regex</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetUserOauthApplications">reset_user_oauth_applications</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetUserShowAddSshKeyMessage">reset_user_show_add_ssh_key_message</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetVersionCheckEnabled">reset_version_check_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetWebIdeClientsidePreviewEnabled">reset_web_ide_clientside_preview_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetWhatsNewVariant">reset_whats_new_variant</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetWikiPageMaxContentBytes">reset_wiki_page_max_content_bytes</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_abuse_notification_email` <a name="reset_abuse_notification_email" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetAbuseNotificationEmail"></a>

```python
def reset_abuse_notification_email() -> None
```

##### `reset_admin_mode` <a name="reset_admin_mode" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetAdminMode"></a>

```python
def reset_admin_mode() -> None
```

##### `reset_after_sign_out_path` <a name="reset_after_sign_out_path" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetAfterSignOutPath"></a>

```python
def reset_after_sign_out_path() -> None
```

##### `reset_after_sign_up_text` <a name="reset_after_sign_up_text" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetAfterSignUpText"></a>

```python
def reset_after_sign_up_text() -> None
```

##### `reset_akismet_api_key` <a name="reset_akismet_api_key" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetAkismetApiKey"></a>

```python
def reset_akismet_api_key() -> None
```

##### `reset_akismet_enabled` <a name="reset_akismet_enabled" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetAkismetEnabled"></a>

```python
def reset_akismet_enabled() -> None
```

##### `reset_allow_group_owners_to_manage_ldap` <a name="reset_allow_group_owners_to_manage_ldap" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetAllowGroupOwnersToManageLdap"></a>

```python
def reset_allow_group_owners_to_manage_ldap() -> None
```

##### `reset_allow_local_requests_from_system_hooks` <a name="reset_allow_local_requests_from_system_hooks" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetAllowLocalRequestsFromSystemHooks"></a>

```python
def reset_allow_local_requests_from_system_hooks() -> None
```

##### `reset_allow_local_requests_from_web_hooks_and_services` <a name="reset_allow_local_requests_from_web_hooks_and_services" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetAllowLocalRequestsFromWebHooksAndServices"></a>

```python
def reset_allow_local_requests_from_web_hooks_and_services() -> None
```

##### `reset_archive_builds_in_human_readable` <a name="reset_archive_builds_in_human_readable" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetArchiveBuildsInHumanReadable"></a>

```python
def reset_archive_builds_in_human_readable() -> None
```

##### `reset_asset_proxy_allowlist` <a name="reset_asset_proxy_allowlist" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetAssetProxyAllowlist"></a>

```python
def reset_asset_proxy_allowlist() -> None
```

##### `reset_asset_proxy_enabled` <a name="reset_asset_proxy_enabled" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetAssetProxyEnabled"></a>

```python
def reset_asset_proxy_enabled() -> None
```

##### `reset_asset_proxy_secret_key` <a name="reset_asset_proxy_secret_key" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetAssetProxySecretKey"></a>

```python
def reset_asset_proxy_secret_key() -> None
```

##### `reset_asset_proxy_url` <a name="reset_asset_proxy_url" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetAssetProxyUrl"></a>

```python
def reset_asset_proxy_url() -> None
```

##### `reset_authorized_keys_enabled` <a name="reset_authorized_keys_enabled" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetAuthorizedKeysEnabled"></a>

```python
def reset_authorized_keys_enabled() -> None
```

##### `reset_auto_devops_domain` <a name="reset_auto_devops_domain" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetAutoDevopsDomain"></a>

```python
def reset_auto_devops_domain() -> None
```

##### `reset_auto_devops_enabled` <a name="reset_auto_devops_enabled" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetAutoDevopsEnabled"></a>

```python
def reset_auto_devops_enabled() -> None
```

##### `reset_automatic_purchased_storage_allocation` <a name="reset_automatic_purchased_storage_allocation" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetAutomaticPurchasedStorageAllocation"></a>

```python
def reset_automatic_purchased_storage_allocation() -> None
```

##### `reset_can_create_group` <a name="reset_can_create_group" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetCanCreateGroup"></a>

```python
def reset_can_create_group() -> None
```

##### `reset_check_namespace_plan` <a name="reset_check_namespace_plan" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetCheckNamespacePlan"></a>

```python
def reset_check_namespace_plan() -> None
```

##### `reset_commit_email_hostname` <a name="reset_commit_email_hostname" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetCommitEmailHostname"></a>

```python
def reset_commit_email_hostname() -> None
```

##### `reset_container_expiration_policies_enable_historic_entries` <a name="reset_container_expiration_policies_enable_historic_entries" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetContainerExpirationPoliciesEnableHistoricEntries"></a>

```python
def reset_container_expiration_policies_enable_historic_entries() -> None
```

##### `reset_container_registry_cleanup_tags_service_max_list_size` <a name="reset_container_registry_cleanup_tags_service_max_list_size" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetContainerRegistryCleanupTagsServiceMaxListSize"></a>

```python
def reset_container_registry_cleanup_tags_service_max_list_size() -> None
```

##### `reset_container_registry_delete_tags_service_timeout` <a name="reset_container_registry_delete_tags_service_timeout" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetContainerRegistryDeleteTagsServiceTimeout"></a>

```python
def reset_container_registry_delete_tags_service_timeout() -> None
```

##### `reset_container_registry_expiration_policies_caching` <a name="reset_container_registry_expiration_policies_caching" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetContainerRegistryExpirationPoliciesCaching"></a>

```python
def reset_container_registry_expiration_policies_caching() -> None
```

##### `reset_container_registry_expiration_policies_worker_capacity` <a name="reset_container_registry_expiration_policies_worker_capacity" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetContainerRegistryExpirationPoliciesWorkerCapacity"></a>

```python
def reset_container_registry_expiration_policies_worker_capacity() -> None
```

##### `reset_container_registry_token_expire_delay` <a name="reset_container_registry_token_expire_delay" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetContainerRegistryTokenExpireDelay"></a>

```python
def reset_container_registry_token_expire_delay() -> None
```

##### `reset_deactivate_dormant_users` <a name="reset_deactivate_dormant_users" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetDeactivateDormantUsers"></a>

```python
def reset_deactivate_dormant_users() -> None
```

##### `reset_default_artifacts_expire_in` <a name="reset_default_artifacts_expire_in" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetDefaultArtifactsExpireIn"></a>

```python
def reset_default_artifacts_expire_in() -> None
```

##### `reset_default_branch_name` <a name="reset_default_branch_name" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetDefaultBranchName"></a>

```python
def reset_default_branch_name() -> None
```

##### `reset_default_branch_protection` <a name="reset_default_branch_protection" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetDefaultBranchProtection"></a>

```python
def reset_default_branch_protection() -> None
```

##### `reset_default_ci_config_path` <a name="reset_default_ci_config_path" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetDefaultCiConfigPath"></a>

```python
def reset_default_ci_config_path() -> None
```

##### `reset_default_group_visibility` <a name="reset_default_group_visibility" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetDefaultGroupVisibility"></a>

```python
def reset_default_group_visibility() -> None
```

##### `reset_default_project_creation` <a name="reset_default_project_creation" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetDefaultProjectCreation"></a>

```python
def reset_default_project_creation() -> None
```

##### `reset_default_projects_limit` <a name="reset_default_projects_limit" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetDefaultProjectsLimit"></a>

```python
def reset_default_projects_limit() -> None
```

##### `reset_default_project_visibility` <a name="reset_default_project_visibility" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetDefaultProjectVisibility"></a>

```python
def reset_default_project_visibility() -> None
```

##### `reset_default_snippet_visibility` <a name="reset_default_snippet_visibility" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetDefaultSnippetVisibility"></a>

```python
def reset_default_snippet_visibility() -> None
```

##### `reset_delayed_group_deletion` <a name="reset_delayed_group_deletion" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetDelayedGroupDeletion"></a>

```python
def reset_delayed_group_deletion() -> None
```

##### `reset_delayed_project_deletion` <a name="reset_delayed_project_deletion" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetDelayedProjectDeletion"></a>

```python
def reset_delayed_project_deletion() -> None
```

##### `reset_delete_inactive_projects` <a name="reset_delete_inactive_projects" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetDeleteInactiveProjects"></a>

```python
def reset_delete_inactive_projects() -> None
```

##### `reset_deletion_adjourned_period` <a name="reset_deletion_adjourned_period" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetDeletionAdjournedPeriod"></a>

```python
def reset_deletion_adjourned_period() -> None
```

##### `reset_diff_max_files` <a name="reset_diff_max_files" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetDiffMaxFiles"></a>

```python
def reset_diff_max_files() -> None
```

##### `reset_diff_max_lines` <a name="reset_diff_max_lines" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetDiffMaxLines"></a>

```python
def reset_diff_max_lines() -> None
```

##### `reset_diff_max_patch_bytes` <a name="reset_diff_max_patch_bytes" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetDiffMaxPatchBytes"></a>

```python
def reset_diff_max_patch_bytes() -> None
```

##### `reset_disabled_oauth_sign_in_sources` <a name="reset_disabled_oauth_sign_in_sources" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetDisabledOauthSignInSources"></a>

```python
def reset_disabled_oauth_sign_in_sources() -> None
```

##### `reset_disable_feed_token` <a name="reset_disable_feed_token" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetDisableFeedToken"></a>

```python
def reset_disable_feed_token() -> None
```

##### `reset_dns_rebinding_protection_enabled` <a name="reset_dns_rebinding_protection_enabled" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetDnsRebindingProtectionEnabled"></a>

```python
def reset_dns_rebinding_protection_enabled() -> None
```

##### `reset_domain_allowlist` <a name="reset_domain_allowlist" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetDomainAllowlist"></a>

```python
def reset_domain_allowlist() -> None
```

##### `reset_domain_denylist` <a name="reset_domain_denylist" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetDomainDenylist"></a>

```python
def reset_domain_denylist() -> None
```

##### `reset_domain_denylist_enabled` <a name="reset_domain_denylist_enabled" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetDomainDenylistEnabled"></a>

```python
def reset_domain_denylist_enabled() -> None
```

##### `reset_dsa_key_restriction` <a name="reset_dsa_key_restriction" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetDsaKeyRestriction"></a>

```python
def reset_dsa_key_restriction() -> None
```

##### `reset_ecdsa_key_restriction` <a name="reset_ecdsa_key_restriction" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetEcdsaKeyRestriction"></a>

```python
def reset_ecdsa_key_restriction() -> None
```

##### `reset_ecdsa_sk_key_restriction` <a name="reset_ecdsa_sk_key_restriction" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetEcdsaSkKeyRestriction"></a>

```python
def reset_ecdsa_sk_key_restriction() -> None
```

##### `reset_ed25519_key_restriction` <a name="reset_ed25519_key_restriction" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetEd25519KeyRestriction"></a>

```python
def reset_ed25519_key_restriction() -> None
```

##### `reset_ed25519_sk_key_restriction` <a name="reset_ed25519_sk_key_restriction" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetEd25519SkKeyRestriction"></a>

```python
def reset_ed25519_sk_key_restriction() -> None
```

##### `reset_eks_access_key_id` <a name="reset_eks_access_key_id" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetEksAccessKeyId"></a>

```python
def reset_eks_access_key_id() -> None
```

##### `reset_eks_account_id` <a name="reset_eks_account_id" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetEksAccountId"></a>

```python
def reset_eks_account_id() -> None
```

##### `reset_eks_integration_enabled` <a name="reset_eks_integration_enabled" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetEksIntegrationEnabled"></a>

```python
def reset_eks_integration_enabled() -> None
```

##### `reset_eks_secret_access_key` <a name="reset_eks_secret_access_key" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetEksSecretAccessKey"></a>

```python
def reset_eks_secret_access_key() -> None
```

##### `reset_elasticsearch_aws` <a name="reset_elasticsearch_aws" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetElasticsearchAws"></a>

```python
def reset_elasticsearch_aws() -> None
```

##### `reset_elasticsearch_aws_access_key` <a name="reset_elasticsearch_aws_access_key" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetElasticsearchAwsAccessKey"></a>

```python
def reset_elasticsearch_aws_access_key() -> None
```

##### `reset_elasticsearch_aws_region` <a name="reset_elasticsearch_aws_region" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetElasticsearchAwsRegion"></a>

```python
def reset_elasticsearch_aws_region() -> None
```

##### `reset_elasticsearch_aws_secret_access_key` <a name="reset_elasticsearch_aws_secret_access_key" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetElasticsearchAwsSecretAccessKey"></a>

```python
def reset_elasticsearch_aws_secret_access_key() -> None
```

##### `reset_elasticsearch_indexed_field_length_limit` <a name="reset_elasticsearch_indexed_field_length_limit" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetElasticsearchIndexedFieldLengthLimit"></a>

```python
def reset_elasticsearch_indexed_field_length_limit() -> None
```

##### `reset_elasticsearch_indexed_file_size_limit_kb` <a name="reset_elasticsearch_indexed_file_size_limit_kb" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetElasticsearchIndexedFileSizeLimitKb"></a>

```python
def reset_elasticsearch_indexed_file_size_limit_kb() -> None
```

##### `reset_elasticsearch_indexing` <a name="reset_elasticsearch_indexing" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetElasticsearchIndexing"></a>

```python
def reset_elasticsearch_indexing() -> None
```

##### `reset_elasticsearch_limit_indexing` <a name="reset_elasticsearch_limit_indexing" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetElasticsearchLimitIndexing"></a>

```python
def reset_elasticsearch_limit_indexing() -> None
```

##### `reset_elasticsearch_max_bulk_concurrency` <a name="reset_elasticsearch_max_bulk_concurrency" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetElasticsearchMaxBulkConcurrency"></a>

```python
def reset_elasticsearch_max_bulk_concurrency() -> None
```

##### `reset_elasticsearch_max_bulk_size_mb` <a name="reset_elasticsearch_max_bulk_size_mb" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetElasticsearchMaxBulkSizeMb"></a>

```python
def reset_elasticsearch_max_bulk_size_mb() -> None
```

##### `reset_elasticsearch_namespace_ids` <a name="reset_elasticsearch_namespace_ids" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetElasticsearchNamespaceIds"></a>

```python
def reset_elasticsearch_namespace_ids() -> None
```

##### `reset_elasticsearch_password` <a name="reset_elasticsearch_password" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetElasticsearchPassword"></a>

```python
def reset_elasticsearch_password() -> None
```

##### `reset_elasticsearch_project_ids` <a name="reset_elasticsearch_project_ids" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetElasticsearchProjectIds"></a>

```python
def reset_elasticsearch_project_ids() -> None
```

##### `reset_elasticsearch_search` <a name="reset_elasticsearch_search" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetElasticsearchSearch"></a>

```python
def reset_elasticsearch_search() -> None
```

##### `reset_elasticsearch_url` <a name="reset_elasticsearch_url" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetElasticsearchUrl"></a>

```python
def reset_elasticsearch_url() -> None
```

##### `reset_elasticsearch_username` <a name="reset_elasticsearch_username" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetElasticsearchUsername"></a>

```python
def reset_elasticsearch_username() -> None
```

##### `reset_email_additional_text` <a name="reset_email_additional_text" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetEmailAdditionalText"></a>

```python
def reset_email_additional_text() -> None
```

##### `reset_email_author_in_body` <a name="reset_email_author_in_body" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetEmailAuthorInBody"></a>

```python
def reset_email_author_in_body() -> None
```

##### `reset_enabled_git_access_protocol` <a name="reset_enabled_git_access_protocol" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetEnabledGitAccessProtocol"></a>

```python
def reset_enabled_git_access_protocol() -> None
```

##### `reset_enforce_namespace_storage_limit` <a name="reset_enforce_namespace_storage_limit" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetEnforceNamespaceStorageLimit"></a>

```python
def reset_enforce_namespace_storage_limit() -> None
```

##### `reset_enforce_terms` <a name="reset_enforce_terms" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetEnforceTerms"></a>

```python
def reset_enforce_terms() -> None
```

##### `reset_external_auth_client_cert` <a name="reset_external_auth_client_cert" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetExternalAuthClientCert"></a>

```python
def reset_external_auth_client_cert() -> None
```

##### `reset_external_auth_client_key` <a name="reset_external_auth_client_key" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetExternalAuthClientKey"></a>

```python
def reset_external_auth_client_key() -> None
```

##### `reset_external_auth_client_key_pass` <a name="reset_external_auth_client_key_pass" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetExternalAuthClientKeyPass"></a>

```python
def reset_external_auth_client_key_pass() -> None
```

##### `reset_external_authorization_service_default_label` <a name="reset_external_authorization_service_default_label" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetExternalAuthorizationServiceDefaultLabel"></a>

```python
def reset_external_authorization_service_default_label() -> None
```

##### `reset_external_authorization_service_enabled` <a name="reset_external_authorization_service_enabled" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetExternalAuthorizationServiceEnabled"></a>

```python
def reset_external_authorization_service_enabled() -> None
```

##### `reset_external_authorization_service_timeout` <a name="reset_external_authorization_service_timeout" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetExternalAuthorizationServiceTimeout"></a>

```python
def reset_external_authorization_service_timeout() -> None
```

##### `reset_external_authorization_service_url` <a name="reset_external_authorization_service_url" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetExternalAuthorizationServiceUrl"></a>

```python
def reset_external_authorization_service_url() -> None
```

##### `reset_external_pipeline_validation_service_timeout` <a name="reset_external_pipeline_validation_service_timeout" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetExternalPipelineValidationServiceTimeout"></a>

```python
def reset_external_pipeline_validation_service_timeout() -> None
```

##### `reset_external_pipeline_validation_service_token` <a name="reset_external_pipeline_validation_service_token" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetExternalPipelineValidationServiceToken"></a>

```python
def reset_external_pipeline_validation_service_token() -> None
```

##### `reset_external_pipeline_validation_service_url` <a name="reset_external_pipeline_validation_service_url" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetExternalPipelineValidationServiceUrl"></a>

```python
def reset_external_pipeline_validation_service_url() -> None
```

##### `reset_file_template_project_id` <a name="reset_file_template_project_id" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetFileTemplateProjectId"></a>

```python
def reset_file_template_project_id() -> None
```

##### `reset_first_day_of_week` <a name="reset_first_day_of_week" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetFirstDayOfWeek"></a>

```python
def reset_first_day_of_week() -> None
```

##### `reset_geo_node_allowed_ips` <a name="reset_geo_node_allowed_ips" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetGeoNodeAllowedIps"></a>

```python
def reset_geo_node_allowed_ips() -> None
```

##### `reset_geo_status_timeout` <a name="reset_geo_status_timeout" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetGeoStatusTimeout"></a>

```python
def reset_geo_status_timeout() -> None
```

##### `reset_gitaly_timeout_default` <a name="reset_gitaly_timeout_default" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetGitalyTimeoutDefault"></a>

```python
def reset_gitaly_timeout_default() -> None
```

##### `reset_gitaly_timeout_fast` <a name="reset_gitaly_timeout_fast" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetGitalyTimeoutFast"></a>

```python
def reset_gitaly_timeout_fast() -> None
```

##### `reset_gitaly_timeout_medium` <a name="reset_gitaly_timeout_medium" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetGitalyTimeoutMedium"></a>

```python
def reset_gitaly_timeout_medium() -> None
```

##### `reset_git_rate_limit_users_allowlist` <a name="reset_git_rate_limit_users_allowlist" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetGitRateLimitUsersAllowlist"></a>

```python
def reset_git_rate_limit_users_allowlist() -> None
```

##### `reset_git_two_factor_session_expiry` <a name="reset_git_two_factor_session_expiry" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetGitTwoFactorSessionExpiry"></a>

```python
def reset_git_two_factor_session_expiry() -> None
```

##### `reset_grafana_enabled` <a name="reset_grafana_enabled" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetGrafanaEnabled"></a>

```python
def reset_grafana_enabled() -> None
```

##### `reset_grafana_url` <a name="reset_grafana_url" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetGrafanaUrl"></a>

```python
def reset_grafana_url() -> None
```

##### `reset_gravatar_enabled` <a name="reset_gravatar_enabled" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetGravatarEnabled"></a>

```python
def reset_gravatar_enabled() -> None
```

##### `reset_group_owners_can_manage_default_branch_protection` <a name="reset_group_owners_can_manage_default_branch_protection" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetGroupOwnersCanManageDefaultBranchProtection"></a>

```python
def reset_group_owners_can_manage_default_branch_protection() -> None
```

##### `reset_hashed_storage_enabled` <a name="reset_hashed_storage_enabled" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetHashedStorageEnabled"></a>

```python
def reset_hashed_storage_enabled() -> None
```

##### `reset_help_page_hide_commercial_content` <a name="reset_help_page_hide_commercial_content" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetHelpPageHideCommercialContent"></a>

```python
def reset_help_page_hide_commercial_content() -> None
```

##### `reset_help_page_support_url` <a name="reset_help_page_support_url" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetHelpPageSupportUrl"></a>

```python
def reset_help_page_support_url() -> None
```

##### `reset_help_page_text` <a name="reset_help_page_text" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetHelpPageText"></a>

```python
def reset_help_page_text() -> None
```

##### `reset_help_text` <a name="reset_help_text" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetHelpText"></a>

```python
def reset_help_text() -> None
```

##### `reset_hide_third_party_offers` <a name="reset_hide_third_party_offers" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetHideThirdPartyOffers"></a>

```python
def reset_hide_third_party_offers() -> None
```

##### `reset_home_page_url` <a name="reset_home_page_url" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetHomePageUrl"></a>

```python
def reset_home_page_url() -> None
```

##### `reset_housekeeping_enabled` <a name="reset_housekeeping_enabled" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetHousekeepingEnabled"></a>

```python
def reset_housekeeping_enabled() -> None
```

##### `reset_housekeeping_full_repack_period` <a name="reset_housekeeping_full_repack_period" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetHousekeepingFullRepackPeriod"></a>

```python
def reset_housekeeping_full_repack_period() -> None
```

##### `reset_housekeeping_gc_period` <a name="reset_housekeeping_gc_period" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetHousekeepingGcPeriod"></a>

```python
def reset_housekeeping_gc_period() -> None
```

##### `reset_housekeeping_incremental_repack_period` <a name="reset_housekeeping_incremental_repack_period" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetHousekeepingIncrementalRepackPeriod"></a>

```python
def reset_housekeeping_incremental_repack_period() -> None
```

##### `reset_html_emails_enabled` <a name="reset_html_emails_enabled" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetHtmlEmailsEnabled"></a>

```python
def reset_html_emails_enabled() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_import_sources` <a name="reset_import_sources" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetImportSources"></a>

```python
def reset_import_sources() -> None
```

##### `reset_inactive_projects_delete_after_months` <a name="reset_inactive_projects_delete_after_months" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetInactiveProjectsDeleteAfterMonths"></a>

```python
def reset_inactive_projects_delete_after_months() -> None
```

##### `reset_inactive_projects_min_size_mb` <a name="reset_inactive_projects_min_size_mb" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetInactiveProjectsMinSizeMb"></a>

```python
def reset_inactive_projects_min_size_mb() -> None
```

##### `reset_inactive_projects_send_warning_email_after_months` <a name="reset_inactive_projects_send_warning_email_after_months" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetInactiveProjectsSendWarningEmailAfterMonths"></a>

```python
def reset_inactive_projects_send_warning_email_after_months() -> None
```

##### `reset_in_product_marketing_emails_enabled` <a name="reset_in_product_marketing_emails_enabled" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetInProductMarketingEmailsEnabled"></a>

```python
def reset_in_product_marketing_emails_enabled() -> None
```

##### `reset_invisible_captcha_enabled` <a name="reset_invisible_captcha_enabled" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetInvisibleCaptchaEnabled"></a>

```python
def reset_invisible_captcha_enabled() -> None
```

##### `reset_issues_create_limit` <a name="reset_issues_create_limit" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetIssuesCreateLimit"></a>

```python
def reset_issues_create_limit() -> None
```

##### `reset_keep_latest_artifact` <a name="reset_keep_latest_artifact" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetKeepLatestArtifact"></a>

```python
def reset_keep_latest_artifact() -> None
```

##### `reset_local_markdown_version` <a name="reset_local_markdown_version" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetLocalMarkdownVersion"></a>

```python
def reset_local_markdown_version() -> None
```

##### `reset_mailgun_events_enabled` <a name="reset_mailgun_events_enabled" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetMailgunEventsEnabled"></a>

```python
def reset_mailgun_events_enabled() -> None
```

##### `reset_mailgun_signing_key` <a name="reset_mailgun_signing_key" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetMailgunSigningKey"></a>

```python
def reset_mailgun_signing_key() -> None
```

##### `reset_maintenance_mode` <a name="reset_maintenance_mode" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetMaintenanceMode"></a>

```python
def reset_maintenance_mode() -> None
```

##### `reset_maintenance_mode_message` <a name="reset_maintenance_mode_message" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetMaintenanceModeMessage"></a>

```python
def reset_maintenance_mode_message() -> None
```

##### `reset_max_artifacts_size` <a name="reset_max_artifacts_size" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetMaxArtifactsSize"></a>

```python
def reset_max_artifacts_size() -> None
```

##### `reset_max_attachment_size` <a name="reset_max_attachment_size" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetMaxAttachmentSize"></a>

```python
def reset_max_attachment_size() -> None
```

##### `reset_max_export_size` <a name="reset_max_export_size" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetMaxExportSize"></a>

```python
def reset_max_export_size() -> None
```

##### `reset_max_import_size` <a name="reset_max_import_size" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetMaxImportSize"></a>

```python
def reset_max_import_size() -> None
```

##### `reset_max_number_of_repository_downloads` <a name="reset_max_number_of_repository_downloads" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetMaxNumberOfRepositoryDownloads"></a>

```python
def reset_max_number_of_repository_downloads() -> None
```

##### `reset_max_number_of_repository_downloads_within_time_period` <a name="reset_max_number_of_repository_downloads_within_time_period" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetMaxNumberOfRepositoryDownloadsWithinTimePeriod"></a>

```python
def reset_max_number_of_repository_downloads_within_time_period() -> None
```

##### `reset_max_pages_size` <a name="reset_max_pages_size" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetMaxPagesSize"></a>

```python
def reset_max_pages_size() -> None
```

##### `reset_max_personal_access_token_lifetime` <a name="reset_max_personal_access_token_lifetime" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetMaxPersonalAccessTokenLifetime"></a>

```python
def reset_max_personal_access_token_lifetime() -> None
```

##### `reset_max_ssh_key_lifetime` <a name="reset_max_ssh_key_lifetime" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetMaxSshKeyLifetime"></a>

```python
def reset_max_ssh_key_lifetime() -> None
```

##### `reset_metrics_method_call_threshold` <a name="reset_metrics_method_call_threshold" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetMetricsMethodCallThreshold"></a>

```python
def reset_metrics_method_call_threshold() -> None
```

##### `reset_mirror_available` <a name="reset_mirror_available" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetMirrorAvailable"></a>

```python
def reset_mirror_available() -> None
```

##### `reset_mirror_capacity_threshold` <a name="reset_mirror_capacity_threshold" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetMirrorCapacityThreshold"></a>

```python
def reset_mirror_capacity_threshold() -> None
```

##### `reset_mirror_max_capacity` <a name="reset_mirror_max_capacity" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetMirrorMaxCapacity"></a>

```python
def reset_mirror_max_capacity() -> None
```

##### `reset_mirror_max_delay` <a name="reset_mirror_max_delay" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetMirrorMaxDelay"></a>

```python
def reset_mirror_max_delay() -> None
```

##### `reset_npm_package_requests_forwarding` <a name="reset_npm_package_requests_forwarding" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetNpmPackageRequestsForwarding"></a>

```python
def reset_npm_package_requests_forwarding() -> None
```

##### `reset_outbound_local_requests_whitelist` <a name="reset_outbound_local_requests_whitelist" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetOutboundLocalRequestsWhitelist"></a>

```python
def reset_outbound_local_requests_whitelist() -> None
```

##### `reset_package_registry_cleanup_policies_worker_capacity` <a name="reset_package_registry_cleanup_policies_worker_capacity" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetPackageRegistryCleanupPoliciesWorkerCapacity"></a>

```python
def reset_package_registry_cleanup_policies_worker_capacity() -> None
```

##### `reset_pages_domain_verification_enabled` <a name="reset_pages_domain_verification_enabled" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetPagesDomainVerificationEnabled"></a>

```python
def reset_pages_domain_verification_enabled() -> None
```

##### `reset_password_authentication_enabled_for_git` <a name="reset_password_authentication_enabled_for_git" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetPasswordAuthenticationEnabledForGit"></a>

```python
def reset_password_authentication_enabled_for_git() -> None
```

##### `reset_password_authentication_enabled_for_web` <a name="reset_password_authentication_enabled_for_web" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetPasswordAuthenticationEnabledForWeb"></a>

```python
def reset_password_authentication_enabled_for_web() -> None
```

##### `reset_password_lowercase_required` <a name="reset_password_lowercase_required" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetPasswordLowercaseRequired"></a>

```python
def reset_password_lowercase_required() -> None
```

##### `reset_password_number_required` <a name="reset_password_number_required" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetPasswordNumberRequired"></a>

```python
def reset_password_number_required() -> None
```

##### `reset_password_symbol_required` <a name="reset_password_symbol_required" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetPasswordSymbolRequired"></a>

```python
def reset_password_symbol_required() -> None
```

##### `reset_password_uppercase_required` <a name="reset_password_uppercase_required" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetPasswordUppercaseRequired"></a>

```python
def reset_password_uppercase_required() -> None
```

##### `reset_performance_bar_allowed_group_path` <a name="reset_performance_bar_allowed_group_path" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetPerformanceBarAllowedGroupPath"></a>

```python
def reset_performance_bar_allowed_group_path() -> None
```

##### `reset_personal_access_token_prefix` <a name="reset_personal_access_token_prefix" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetPersonalAccessTokenPrefix"></a>

```python
def reset_personal_access_token_prefix() -> None
```

##### `reset_pipeline_limit_per_project_user_sha` <a name="reset_pipeline_limit_per_project_user_sha" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetPipelineLimitPerProjectUserSha"></a>

```python
def reset_pipeline_limit_per_project_user_sha() -> None
```

##### `reset_plantuml_enabled` <a name="reset_plantuml_enabled" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetPlantumlEnabled"></a>

```python
def reset_plantuml_enabled() -> None
```

##### `reset_plantuml_url` <a name="reset_plantuml_url" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetPlantumlUrl"></a>

```python
def reset_plantuml_url() -> None
```

##### `reset_polling_interval_multiplier` <a name="reset_polling_interval_multiplier" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetPollingIntervalMultiplier"></a>

```python
def reset_polling_interval_multiplier() -> None
```

##### `reset_project_export_enabled` <a name="reset_project_export_enabled" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetProjectExportEnabled"></a>

```python
def reset_project_export_enabled() -> None
```

##### `reset_prometheus_metrics_enabled` <a name="reset_prometheus_metrics_enabled" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetPrometheusMetricsEnabled"></a>

```python
def reset_prometheus_metrics_enabled() -> None
```

##### `reset_protected_ci_variables` <a name="reset_protected_ci_variables" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetProtectedCiVariables"></a>

```python
def reset_protected_ci_variables() -> None
```

##### `reset_push_event_activities_limit` <a name="reset_push_event_activities_limit" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetPushEventActivitiesLimit"></a>

```python
def reset_push_event_activities_limit() -> None
```

##### `reset_push_event_hooks_limit` <a name="reset_push_event_hooks_limit" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetPushEventHooksLimit"></a>

```python
def reset_push_event_hooks_limit() -> None
```

##### `reset_pypi_package_requests_forwarding` <a name="reset_pypi_package_requests_forwarding" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetPypiPackageRequestsForwarding"></a>

```python
def reset_pypi_package_requests_forwarding() -> None
```

##### `reset_rate_limiting_response_text` <a name="reset_rate_limiting_response_text" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetRateLimitingResponseText"></a>

```python
def reset_rate_limiting_response_text() -> None
```

##### `reset_raw_blob_request_limit` <a name="reset_raw_blob_request_limit" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetRawBlobRequestLimit"></a>

```python
def reset_raw_blob_request_limit() -> None
```

##### `reset_recaptcha_enabled` <a name="reset_recaptcha_enabled" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetRecaptchaEnabled"></a>

```python
def reset_recaptcha_enabled() -> None
```

##### `reset_recaptcha_private_key` <a name="reset_recaptcha_private_key" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetRecaptchaPrivateKey"></a>

```python
def reset_recaptcha_private_key() -> None
```

##### `reset_recaptcha_site_key` <a name="reset_recaptcha_site_key" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetRecaptchaSiteKey"></a>

```python
def reset_recaptcha_site_key() -> None
```

##### `reset_receive_max_input_size` <a name="reset_receive_max_input_size" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetReceiveMaxInputSize"></a>

```python
def reset_receive_max_input_size() -> None
```

##### `reset_repository_checks_enabled` <a name="reset_repository_checks_enabled" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetRepositoryChecksEnabled"></a>

```python
def reset_repository_checks_enabled() -> None
```

##### `reset_repository_size_limit` <a name="reset_repository_size_limit" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetRepositorySizeLimit"></a>

```python
def reset_repository_size_limit() -> None
```

##### `reset_repository_storages` <a name="reset_repository_storages" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetRepositoryStorages"></a>

```python
def reset_repository_storages() -> None
```

##### `reset_repository_storages_weighted` <a name="reset_repository_storages_weighted" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetRepositoryStoragesWeighted"></a>

```python
def reset_repository_storages_weighted() -> None
```

##### `reset_require_admin_approval_after_user_signup` <a name="reset_require_admin_approval_after_user_signup" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetRequireAdminApprovalAfterUserSignup"></a>

```python
def reset_require_admin_approval_after_user_signup() -> None
```

##### `reset_require_two_factor_authentication` <a name="reset_require_two_factor_authentication" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetRequireTwoFactorAuthentication"></a>

```python
def reset_require_two_factor_authentication() -> None
```

##### `reset_restricted_visibility_levels` <a name="reset_restricted_visibility_levels" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetRestrictedVisibilityLevels"></a>

```python
def reset_restricted_visibility_levels() -> None
```

##### `reset_rsa_key_restriction` <a name="reset_rsa_key_restriction" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetRsaKeyRestriction"></a>

```python
def reset_rsa_key_restriction() -> None
```

##### `reset_search_rate_limit` <a name="reset_search_rate_limit" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetSearchRateLimit"></a>

```python
def reset_search_rate_limit() -> None
```

##### `reset_search_rate_limit_unauthenticated` <a name="reset_search_rate_limit_unauthenticated" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetSearchRateLimitUnauthenticated"></a>

```python
def reset_search_rate_limit_unauthenticated() -> None
```

##### `reset_send_user_confirmation_email` <a name="reset_send_user_confirmation_email" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetSendUserConfirmationEmail"></a>

```python
def reset_send_user_confirmation_email() -> None
```

##### `reset_session_expire_delay` <a name="reset_session_expire_delay" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetSessionExpireDelay"></a>

```python
def reset_session_expire_delay() -> None
```

##### `reset_shared_runners_enabled` <a name="reset_shared_runners_enabled" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetSharedRunnersEnabled"></a>

```python
def reset_shared_runners_enabled() -> None
```

##### `reset_shared_runners_minutes` <a name="reset_shared_runners_minutes" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetSharedRunnersMinutes"></a>

```python
def reset_shared_runners_minutes() -> None
```

##### `reset_shared_runners_text` <a name="reset_shared_runners_text" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetSharedRunnersText"></a>

```python
def reset_shared_runners_text() -> None
```

##### `reset_sidekiq_job_limiter_compression_threshold_bytes` <a name="reset_sidekiq_job_limiter_compression_threshold_bytes" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetSidekiqJobLimiterCompressionThresholdBytes"></a>

```python
def reset_sidekiq_job_limiter_compression_threshold_bytes() -> None
```

##### `reset_sidekiq_job_limiter_limit_bytes` <a name="reset_sidekiq_job_limiter_limit_bytes" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetSidekiqJobLimiterLimitBytes"></a>

```python
def reset_sidekiq_job_limiter_limit_bytes() -> None
```

##### `reset_sidekiq_job_limiter_mode` <a name="reset_sidekiq_job_limiter_mode" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetSidekiqJobLimiterMode"></a>

```python
def reset_sidekiq_job_limiter_mode() -> None
```

##### `reset_sign_in_text` <a name="reset_sign_in_text" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetSignInText"></a>

```python
def reset_sign_in_text() -> None
```

##### `reset_signup_enabled` <a name="reset_signup_enabled" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetSignupEnabled"></a>

```python
def reset_signup_enabled() -> None
```

##### `reset_slack_app_enabled` <a name="reset_slack_app_enabled" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetSlackAppEnabled"></a>

```python
def reset_slack_app_enabled() -> None
```

##### `reset_slack_app_id` <a name="reset_slack_app_id" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetSlackAppId"></a>

```python
def reset_slack_app_id() -> None
```

##### `reset_slack_app_secret` <a name="reset_slack_app_secret" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetSlackAppSecret"></a>

```python
def reset_slack_app_secret() -> None
```

##### `reset_slack_app_signing_secret` <a name="reset_slack_app_signing_secret" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetSlackAppSigningSecret"></a>

```python
def reset_slack_app_signing_secret() -> None
```

##### `reset_slack_app_verification_token` <a name="reset_slack_app_verification_token" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetSlackAppVerificationToken"></a>

```python
def reset_slack_app_verification_token() -> None
```

##### `reset_snippet_size_limit` <a name="reset_snippet_size_limit" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetSnippetSizeLimit"></a>

```python
def reset_snippet_size_limit() -> None
```

##### `reset_snowplow_app_id` <a name="reset_snowplow_app_id" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetSnowplowAppId"></a>

```python
def reset_snowplow_app_id() -> None
```

##### `reset_snowplow_collector_hostname` <a name="reset_snowplow_collector_hostname" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetSnowplowCollectorHostname"></a>

```python
def reset_snowplow_collector_hostname() -> None
```

##### `reset_snowplow_cookie_domain` <a name="reset_snowplow_cookie_domain" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetSnowplowCookieDomain"></a>

```python
def reset_snowplow_cookie_domain() -> None
```

##### `reset_snowplow_enabled` <a name="reset_snowplow_enabled" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetSnowplowEnabled"></a>

```python
def reset_snowplow_enabled() -> None
```

##### `reset_sourcegraph_enabled` <a name="reset_sourcegraph_enabled" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetSourcegraphEnabled"></a>

```python
def reset_sourcegraph_enabled() -> None
```

##### `reset_sourcegraph_public_only` <a name="reset_sourcegraph_public_only" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetSourcegraphPublicOnly"></a>

```python
def reset_sourcegraph_public_only() -> None
```

##### `reset_sourcegraph_url` <a name="reset_sourcegraph_url" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetSourcegraphUrl"></a>

```python
def reset_sourcegraph_url() -> None
```

##### `reset_spam_check_api_key` <a name="reset_spam_check_api_key" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetSpamCheckApiKey"></a>

```python
def reset_spam_check_api_key() -> None
```

##### `reset_spam_check_endpoint_enabled` <a name="reset_spam_check_endpoint_enabled" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetSpamCheckEndpointEnabled"></a>

```python
def reset_spam_check_endpoint_enabled() -> None
```

##### `reset_spam_check_endpoint_url` <a name="reset_spam_check_endpoint_url" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetSpamCheckEndpointUrl"></a>

```python
def reset_spam_check_endpoint_url() -> None
```

##### `reset_suggest_pipeline_enabled` <a name="reset_suggest_pipeline_enabled" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetSuggestPipelineEnabled"></a>

```python
def reset_suggest_pipeline_enabled() -> None
```

##### `reset_terminal_max_session_time` <a name="reset_terminal_max_session_time" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetTerminalMaxSessionTime"></a>

```python
def reset_terminal_max_session_time() -> None
```

##### `reset_terms` <a name="reset_terms" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetTerms"></a>

```python
def reset_terms() -> None
```

##### `reset_throttle_authenticated_api_enabled` <a name="reset_throttle_authenticated_api_enabled" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetThrottleAuthenticatedApiEnabled"></a>

```python
def reset_throttle_authenticated_api_enabled() -> None
```

##### `reset_throttle_authenticated_api_period_in_seconds` <a name="reset_throttle_authenticated_api_period_in_seconds" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetThrottleAuthenticatedApiPeriodInSeconds"></a>

```python
def reset_throttle_authenticated_api_period_in_seconds() -> None
```

##### `reset_throttle_authenticated_api_requests_per_period` <a name="reset_throttle_authenticated_api_requests_per_period" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetThrottleAuthenticatedApiRequestsPerPeriod"></a>

```python
def reset_throttle_authenticated_api_requests_per_period() -> None
```

##### `reset_throttle_authenticated_packages_api_enabled` <a name="reset_throttle_authenticated_packages_api_enabled" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetThrottleAuthenticatedPackagesApiEnabled"></a>

```python
def reset_throttle_authenticated_packages_api_enabled() -> None
```

##### `reset_throttle_authenticated_packages_api_period_in_seconds` <a name="reset_throttle_authenticated_packages_api_period_in_seconds" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetThrottleAuthenticatedPackagesApiPeriodInSeconds"></a>

```python
def reset_throttle_authenticated_packages_api_period_in_seconds() -> None
```

##### `reset_throttle_authenticated_packages_api_requests_per_period` <a name="reset_throttle_authenticated_packages_api_requests_per_period" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetThrottleAuthenticatedPackagesApiRequestsPerPeriod"></a>

```python
def reset_throttle_authenticated_packages_api_requests_per_period() -> None
```

##### `reset_throttle_authenticated_web_enabled` <a name="reset_throttle_authenticated_web_enabled" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetThrottleAuthenticatedWebEnabled"></a>

```python
def reset_throttle_authenticated_web_enabled() -> None
```

##### `reset_throttle_authenticated_web_period_in_seconds` <a name="reset_throttle_authenticated_web_period_in_seconds" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetThrottleAuthenticatedWebPeriodInSeconds"></a>

```python
def reset_throttle_authenticated_web_period_in_seconds() -> None
```

##### `reset_throttle_authenticated_web_requests_per_period` <a name="reset_throttle_authenticated_web_requests_per_period" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetThrottleAuthenticatedWebRequestsPerPeriod"></a>

```python
def reset_throttle_authenticated_web_requests_per_period() -> None
```

##### `reset_throttle_unauthenticated_api_enabled` <a name="reset_throttle_unauthenticated_api_enabled" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetThrottleUnauthenticatedApiEnabled"></a>

```python
def reset_throttle_unauthenticated_api_enabled() -> None
```

##### `reset_throttle_unauthenticated_api_period_in_seconds` <a name="reset_throttle_unauthenticated_api_period_in_seconds" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetThrottleUnauthenticatedApiPeriodInSeconds"></a>

```python
def reset_throttle_unauthenticated_api_period_in_seconds() -> None
```

##### `reset_throttle_unauthenticated_api_requests_per_period` <a name="reset_throttle_unauthenticated_api_requests_per_period" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetThrottleUnauthenticatedApiRequestsPerPeriod"></a>

```python
def reset_throttle_unauthenticated_api_requests_per_period() -> None
```

##### `reset_throttle_unauthenticated_packages_api_enabled` <a name="reset_throttle_unauthenticated_packages_api_enabled" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetThrottleUnauthenticatedPackagesApiEnabled"></a>

```python
def reset_throttle_unauthenticated_packages_api_enabled() -> None
```

##### `reset_throttle_unauthenticated_packages_api_period_in_seconds` <a name="reset_throttle_unauthenticated_packages_api_period_in_seconds" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetThrottleUnauthenticatedPackagesApiPeriodInSeconds"></a>

```python
def reset_throttle_unauthenticated_packages_api_period_in_seconds() -> None
```

##### `reset_throttle_unauthenticated_packages_api_requests_per_period` <a name="reset_throttle_unauthenticated_packages_api_requests_per_period" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetThrottleUnauthenticatedPackagesApiRequestsPerPeriod"></a>

```python
def reset_throttle_unauthenticated_packages_api_requests_per_period() -> None
```

##### `reset_throttle_unauthenticated_web_enabled` <a name="reset_throttle_unauthenticated_web_enabled" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetThrottleUnauthenticatedWebEnabled"></a>

```python
def reset_throttle_unauthenticated_web_enabled() -> None
```

##### `reset_throttle_unauthenticated_web_period_in_seconds` <a name="reset_throttle_unauthenticated_web_period_in_seconds" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetThrottleUnauthenticatedWebPeriodInSeconds"></a>

```python
def reset_throttle_unauthenticated_web_period_in_seconds() -> None
```

##### `reset_throttle_unauthenticated_web_requests_per_period` <a name="reset_throttle_unauthenticated_web_requests_per_period" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetThrottleUnauthenticatedWebRequestsPerPeriod"></a>

```python
def reset_throttle_unauthenticated_web_requests_per_period() -> None
```

##### `reset_time_tracking_limit_to_hours` <a name="reset_time_tracking_limit_to_hours" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetTimeTrackingLimitToHours"></a>

```python
def reset_time_tracking_limit_to_hours() -> None
```

##### `reset_two_factor_grace_period` <a name="reset_two_factor_grace_period" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetTwoFactorGracePeriod"></a>

```python
def reset_two_factor_grace_period() -> None
```

##### `reset_unique_ips_limit_enabled` <a name="reset_unique_ips_limit_enabled" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetUniqueIpsLimitEnabled"></a>

```python
def reset_unique_ips_limit_enabled() -> None
```

##### `reset_unique_ips_limit_per_user` <a name="reset_unique_ips_limit_per_user" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetUniqueIpsLimitPerUser"></a>

```python
def reset_unique_ips_limit_per_user() -> None
```

##### `reset_unique_ips_limit_time_window` <a name="reset_unique_ips_limit_time_window" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetUniqueIpsLimitTimeWindow"></a>

```python
def reset_unique_ips_limit_time_window() -> None
```

##### `reset_usage_ping_enabled` <a name="reset_usage_ping_enabled" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetUsagePingEnabled"></a>

```python
def reset_usage_ping_enabled() -> None
```

##### `reset_user_deactivation_emails_enabled` <a name="reset_user_deactivation_emails_enabled" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetUserDeactivationEmailsEnabled"></a>

```python
def reset_user_deactivation_emails_enabled() -> None
```

##### `reset_user_default_external` <a name="reset_user_default_external" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetUserDefaultExternal"></a>

```python
def reset_user_default_external() -> None
```

##### `reset_user_default_internal_regex` <a name="reset_user_default_internal_regex" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetUserDefaultInternalRegex"></a>

```python
def reset_user_default_internal_regex() -> None
```

##### `reset_user_oauth_applications` <a name="reset_user_oauth_applications" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetUserOauthApplications"></a>

```python
def reset_user_oauth_applications() -> None
```

##### `reset_user_show_add_ssh_key_message` <a name="reset_user_show_add_ssh_key_message" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetUserShowAddSshKeyMessage"></a>

```python
def reset_user_show_add_ssh_key_message() -> None
```

##### `reset_version_check_enabled` <a name="reset_version_check_enabled" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetVersionCheckEnabled"></a>

```python
def reset_version_check_enabled() -> None
```

##### `reset_web_ide_clientside_preview_enabled` <a name="reset_web_ide_clientside_preview_enabled" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetWebIdeClientsidePreviewEnabled"></a>

```python
def reset_web_ide_clientside_preview_enabled() -> None
```

##### `reset_whats_new_variant` <a name="reset_whats_new_variant" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetWhatsNewVariant"></a>

```python
def reset_whats_new_variant() -> None
```

##### `reset_wiki_page_max_content_bytes` <a name="reset_wiki_page_max_content_bytes" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetWikiPageMaxContentBytes"></a>

```python
def reset_wiki_page_max_content_bytes() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.isConstruct"></a>

```python
from cdktf_cdktf_provider_gitlab import application_settings

applicationSettings.ApplicationSettings.is_construct(
  x: typing.Any
)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_gitlab import application_settings

applicationSettings.ApplicationSettings.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_gitlab import application_settings

applicationSettings.ApplicationSettings.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.abuseNotificationEmailInput">abuse_notification_email_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.adminModeInput">admin_mode_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.afterSignOutPathInput">after_sign_out_path_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.afterSignUpTextInput">after_sign_up_text_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.akismetApiKeyInput">akismet_api_key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.akismetEnabledInput">akismet_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.allowGroupOwnersToManageLdapInput">allow_group_owners_to_manage_ldap_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.allowLocalRequestsFromSystemHooksInput">allow_local_requests_from_system_hooks_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.allowLocalRequestsFromWebHooksAndServicesInput">allow_local_requests_from_web_hooks_and_services_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.archiveBuildsInHumanReadableInput">archive_builds_in_human_readable_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.assetProxyAllowlistInput">asset_proxy_allowlist_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.assetProxyEnabledInput">asset_proxy_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.assetProxySecretKeyInput">asset_proxy_secret_key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.assetProxyUrlInput">asset_proxy_url_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.authorizedKeysEnabledInput">authorized_keys_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.autoDevopsDomainInput">auto_devops_domain_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.autoDevopsEnabledInput">auto_devops_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.automaticPurchasedStorageAllocationInput">automatic_purchased_storage_allocation_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.canCreateGroupInput">can_create_group_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.checkNamespacePlanInput">check_namespace_plan_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.commitEmailHostnameInput">commit_email_hostname_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.containerExpirationPoliciesEnableHistoricEntriesInput">container_expiration_policies_enable_historic_entries_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.containerRegistryCleanupTagsServiceMaxListSizeInput">container_registry_cleanup_tags_service_max_list_size_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.containerRegistryDeleteTagsServiceTimeoutInput">container_registry_delete_tags_service_timeout_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.containerRegistryExpirationPoliciesCachingInput">container_registry_expiration_policies_caching_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.containerRegistryExpirationPoliciesWorkerCapacityInput">container_registry_expiration_policies_worker_capacity_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.containerRegistryTokenExpireDelayInput">container_registry_token_expire_delay_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.deactivateDormantUsersInput">deactivate_dormant_users_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.defaultArtifactsExpireInInput">default_artifacts_expire_in_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.defaultBranchNameInput">default_branch_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.defaultBranchProtectionInput">default_branch_protection_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.defaultCiConfigPathInput">default_ci_config_path_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.defaultGroupVisibilityInput">default_group_visibility_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.defaultProjectCreationInput">default_project_creation_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.defaultProjectsLimitInput">default_projects_limit_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.defaultProjectVisibilityInput">default_project_visibility_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.defaultSnippetVisibilityInput">default_snippet_visibility_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.delayedGroupDeletionInput">delayed_group_deletion_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.delayedProjectDeletionInput">delayed_project_deletion_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.deleteInactiveProjectsInput">delete_inactive_projects_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.deletionAdjournedPeriodInput">deletion_adjourned_period_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.diffMaxFilesInput">diff_max_files_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.diffMaxLinesInput">diff_max_lines_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.diffMaxPatchBytesInput">diff_max_patch_bytes_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.disabledOauthSignInSourcesInput">disabled_oauth_sign_in_sources_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.disableFeedTokenInput">disable_feed_token_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.dnsRebindingProtectionEnabledInput">dns_rebinding_protection_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.domainAllowlistInput">domain_allowlist_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.domainDenylistEnabledInput">domain_denylist_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.domainDenylistInput">domain_denylist_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.dsaKeyRestrictionInput">dsa_key_restriction_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.ecdsaKeyRestrictionInput">ecdsa_key_restriction_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.ecdsaSkKeyRestrictionInput">ecdsa_sk_key_restriction_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.ed25519KeyRestrictionInput">ed25519_key_restriction_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.ed25519SkKeyRestrictionInput">ed25519_sk_key_restriction_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.eksAccessKeyIdInput">eks_access_key_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.eksAccountIdInput">eks_account_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.eksIntegrationEnabledInput">eks_integration_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.eksSecretAccessKeyInput">eks_secret_access_key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.elasticsearchAwsAccessKeyInput">elasticsearch_aws_access_key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.elasticsearchAwsInput">elasticsearch_aws_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.elasticsearchAwsRegionInput">elasticsearch_aws_region_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.elasticsearchAwsSecretAccessKeyInput">elasticsearch_aws_secret_access_key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.elasticsearchIndexedFieldLengthLimitInput">elasticsearch_indexed_field_length_limit_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.elasticsearchIndexedFileSizeLimitKbInput">elasticsearch_indexed_file_size_limit_kb_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.elasticsearchIndexingInput">elasticsearch_indexing_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.elasticsearchLimitIndexingInput">elasticsearch_limit_indexing_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.elasticsearchMaxBulkConcurrencyInput">elasticsearch_max_bulk_concurrency_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.elasticsearchMaxBulkSizeMbInput">elasticsearch_max_bulk_size_mb_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.elasticsearchNamespaceIdsInput">elasticsearch_namespace_ids_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.elasticsearchPasswordInput">elasticsearch_password_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.elasticsearchProjectIdsInput">elasticsearch_project_ids_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.elasticsearchSearchInput">elasticsearch_search_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.elasticsearchUrlInput">elasticsearch_url_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.elasticsearchUsernameInput">elasticsearch_username_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.emailAdditionalTextInput">email_additional_text_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.emailAuthorInBodyInput">email_author_in_body_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.enabledGitAccessProtocolInput">enabled_git_access_protocol_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.enforceNamespaceStorageLimitInput">enforce_namespace_storage_limit_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.enforceTermsInput">enforce_terms_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.externalAuthClientCertInput">external_auth_client_cert_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.externalAuthClientKeyInput">external_auth_client_key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.externalAuthClientKeyPassInput">external_auth_client_key_pass_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.externalAuthorizationServiceDefaultLabelInput">external_authorization_service_default_label_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.externalAuthorizationServiceEnabledInput">external_authorization_service_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.externalAuthorizationServiceTimeoutInput">external_authorization_service_timeout_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.externalAuthorizationServiceUrlInput">external_authorization_service_url_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.externalPipelineValidationServiceTimeoutInput">external_pipeline_validation_service_timeout_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.externalPipelineValidationServiceTokenInput">external_pipeline_validation_service_token_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.externalPipelineValidationServiceUrlInput">external_pipeline_validation_service_url_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.fileTemplateProjectIdInput">file_template_project_id_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.firstDayOfWeekInput">first_day_of_week_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.geoNodeAllowedIpsInput">geo_node_allowed_ips_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.geoStatusTimeoutInput">geo_status_timeout_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.gitalyTimeoutDefaultInput">gitaly_timeout_default_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.gitalyTimeoutFastInput">gitaly_timeout_fast_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.gitalyTimeoutMediumInput">gitaly_timeout_medium_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.gitRateLimitUsersAllowlistInput">git_rate_limit_users_allowlist_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.gitTwoFactorSessionExpiryInput">git_two_factor_session_expiry_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.grafanaEnabledInput">grafana_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.grafanaUrlInput">grafana_url_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.gravatarEnabledInput">gravatar_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.groupOwnersCanManageDefaultBranchProtectionInput">group_owners_can_manage_default_branch_protection_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.hashedStorageEnabledInput">hashed_storage_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.helpPageHideCommercialContentInput">help_page_hide_commercial_content_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.helpPageSupportUrlInput">help_page_support_url_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.helpPageTextInput">help_page_text_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.helpTextInput">help_text_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.hideThirdPartyOffersInput">hide_third_party_offers_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.homePageUrlInput">home_page_url_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.housekeepingEnabledInput">housekeeping_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.housekeepingFullRepackPeriodInput">housekeeping_full_repack_period_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.housekeepingGcPeriodInput">housekeeping_gc_period_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.housekeepingIncrementalRepackPeriodInput">housekeeping_incremental_repack_period_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.htmlEmailsEnabledInput">html_emails_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.importSourcesInput">import_sources_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.inactiveProjectsDeleteAfterMonthsInput">inactive_projects_delete_after_months_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.inactiveProjectsMinSizeMbInput">inactive_projects_min_size_mb_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.inactiveProjectsSendWarningEmailAfterMonthsInput">inactive_projects_send_warning_email_after_months_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.inProductMarketingEmailsEnabledInput">in_product_marketing_emails_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.invisibleCaptchaEnabledInput">invisible_captcha_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.issuesCreateLimitInput">issues_create_limit_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.keepLatestArtifactInput">keep_latest_artifact_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.localMarkdownVersionInput">local_markdown_version_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.mailgunEventsEnabledInput">mailgun_events_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.mailgunSigningKeyInput">mailgun_signing_key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.maintenanceModeInput">maintenance_mode_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.maintenanceModeMessageInput">maintenance_mode_message_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.maxArtifactsSizeInput">max_artifacts_size_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.maxAttachmentSizeInput">max_attachment_size_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.maxExportSizeInput">max_export_size_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.maxImportSizeInput">max_import_size_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.maxNumberOfRepositoryDownloadsInput">max_number_of_repository_downloads_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.maxNumberOfRepositoryDownloadsWithinTimePeriodInput">max_number_of_repository_downloads_within_time_period_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.maxPagesSizeInput">max_pages_size_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.maxPersonalAccessTokenLifetimeInput">max_personal_access_token_lifetime_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.maxSshKeyLifetimeInput">max_ssh_key_lifetime_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.metricsMethodCallThresholdInput">metrics_method_call_threshold_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.mirrorAvailableInput">mirror_available_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.mirrorCapacityThresholdInput">mirror_capacity_threshold_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.mirrorMaxCapacityInput">mirror_max_capacity_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.mirrorMaxDelayInput">mirror_max_delay_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.npmPackageRequestsForwardingInput">npm_package_requests_forwarding_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.outboundLocalRequestsWhitelistInput">outbound_local_requests_whitelist_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.packageRegistryCleanupPoliciesWorkerCapacityInput">package_registry_cleanup_policies_worker_capacity_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.pagesDomainVerificationEnabledInput">pages_domain_verification_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.passwordAuthenticationEnabledForGitInput">password_authentication_enabled_for_git_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.passwordAuthenticationEnabledForWebInput">password_authentication_enabled_for_web_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.passwordLowercaseRequiredInput">password_lowercase_required_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.passwordNumberRequiredInput">password_number_required_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.passwordSymbolRequiredInput">password_symbol_required_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.passwordUppercaseRequiredInput">password_uppercase_required_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.performanceBarAllowedGroupPathInput">performance_bar_allowed_group_path_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.personalAccessTokenPrefixInput">personal_access_token_prefix_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.pipelineLimitPerProjectUserShaInput">pipeline_limit_per_project_user_sha_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.plantumlEnabledInput">plantuml_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.plantumlUrlInput">plantuml_url_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.pollingIntervalMultiplierInput">polling_interval_multiplier_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.projectExportEnabledInput">project_export_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.prometheusMetricsEnabledInput">prometheus_metrics_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.protectedCiVariablesInput">protected_ci_variables_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.pushEventActivitiesLimitInput">push_event_activities_limit_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.pushEventHooksLimitInput">push_event_hooks_limit_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.pypiPackageRequestsForwardingInput">pypi_package_requests_forwarding_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.rateLimitingResponseTextInput">rate_limiting_response_text_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.rawBlobRequestLimitInput">raw_blob_request_limit_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.recaptchaEnabledInput">recaptcha_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.recaptchaPrivateKeyInput">recaptcha_private_key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.recaptchaSiteKeyInput">recaptcha_site_key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.receiveMaxInputSizeInput">receive_max_input_size_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.repositoryChecksEnabledInput">repository_checks_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.repositorySizeLimitInput">repository_size_limit_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.repositoryStoragesInput">repository_storages_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.repositoryStoragesWeightedInput">repository_storages_weighted_input</a></code> | <code>typing.Mapping[typing.Union[int, float]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.requireAdminApprovalAfterUserSignupInput">require_admin_approval_after_user_signup_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.requireTwoFactorAuthenticationInput">require_two_factor_authentication_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.restrictedVisibilityLevelsInput">restricted_visibility_levels_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.rsaKeyRestrictionInput">rsa_key_restriction_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.searchRateLimitInput">search_rate_limit_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.searchRateLimitUnauthenticatedInput">search_rate_limit_unauthenticated_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.sendUserConfirmationEmailInput">send_user_confirmation_email_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.sessionExpireDelayInput">session_expire_delay_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.sharedRunnersEnabledInput">shared_runners_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.sharedRunnersMinutesInput">shared_runners_minutes_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.sharedRunnersTextInput">shared_runners_text_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.sidekiqJobLimiterCompressionThresholdBytesInput">sidekiq_job_limiter_compression_threshold_bytes_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.sidekiqJobLimiterLimitBytesInput">sidekiq_job_limiter_limit_bytes_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.sidekiqJobLimiterModeInput">sidekiq_job_limiter_mode_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.signInTextInput">sign_in_text_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.signupEnabledInput">signup_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.slackAppEnabledInput">slack_app_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.slackAppIdInput">slack_app_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.slackAppSecretInput">slack_app_secret_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.slackAppSigningSecretInput">slack_app_signing_secret_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.slackAppVerificationTokenInput">slack_app_verification_token_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.snippetSizeLimitInput">snippet_size_limit_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.snowplowAppIdInput">snowplow_app_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.snowplowCollectorHostnameInput">snowplow_collector_hostname_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.snowplowCookieDomainInput">snowplow_cookie_domain_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.snowplowEnabledInput">snowplow_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.sourcegraphEnabledInput">sourcegraph_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.sourcegraphPublicOnlyInput">sourcegraph_public_only_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.sourcegraphUrlInput">sourcegraph_url_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.spamCheckApiKeyInput">spam_check_api_key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.spamCheckEndpointEnabledInput">spam_check_endpoint_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.spamCheckEndpointUrlInput">spam_check_endpoint_url_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.suggestPipelineEnabledInput">suggest_pipeline_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.terminalMaxSessionTimeInput">terminal_max_session_time_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.termsInput">terms_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.throttleAuthenticatedApiEnabledInput">throttle_authenticated_api_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.throttleAuthenticatedApiPeriodInSecondsInput">throttle_authenticated_api_period_in_seconds_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.throttleAuthenticatedApiRequestsPerPeriodInput">throttle_authenticated_api_requests_per_period_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.throttleAuthenticatedPackagesApiEnabledInput">throttle_authenticated_packages_api_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.throttleAuthenticatedPackagesApiPeriodInSecondsInput">throttle_authenticated_packages_api_period_in_seconds_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.throttleAuthenticatedPackagesApiRequestsPerPeriodInput">throttle_authenticated_packages_api_requests_per_period_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.throttleAuthenticatedWebEnabledInput">throttle_authenticated_web_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.throttleAuthenticatedWebPeriodInSecondsInput">throttle_authenticated_web_period_in_seconds_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.throttleAuthenticatedWebRequestsPerPeriodInput">throttle_authenticated_web_requests_per_period_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.throttleUnauthenticatedApiEnabledInput">throttle_unauthenticated_api_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.throttleUnauthenticatedApiPeriodInSecondsInput">throttle_unauthenticated_api_period_in_seconds_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.throttleUnauthenticatedApiRequestsPerPeriodInput">throttle_unauthenticated_api_requests_per_period_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.throttleUnauthenticatedPackagesApiEnabledInput">throttle_unauthenticated_packages_api_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.throttleUnauthenticatedPackagesApiPeriodInSecondsInput">throttle_unauthenticated_packages_api_period_in_seconds_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.throttleUnauthenticatedPackagesApiRequestsPerPeriodInput">throttle_unauthenticated_packages_api_requests_per_period_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.throttleUnauthenticatedWebEnabledInput">throttle_unauthenticated_web_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.throttleUnauthenticatedWebPeriodInSecondsInput">throttle_unauthenticated_web_period_in_seconds_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.throttleUnauthenticatedWebRequestsPerPeriodInput">throttle_unauthenticated_web_requests_per_period_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.timeTrackingLimitToHoursInput">time_tracking_limit_to_hours_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.twoFactorGracePeriodInput">two_factor_grace_period_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.uniqueIpsLimitEnabledInput">unique_ips_limit_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.uniqueIpsLimitPerUserInput">unique_ips_limit_per_user_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.uniqueIpsLimitTimeWindowInput">unique_ips_limit_time_window_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.usagePingEnabledInput">usage_ping_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.userDeactivationEmailsEnabledInput">user_deactivation_emails_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.userDefaultExternalInput">user_default_external_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.userDefaultInternalRegexInput">user_default_internal_regex_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.userOauthApplicationsInput">user_oauth_applications_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.userShowAddSshKeyMessageInput">user_show_add_ssh_key_message_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.versionCheckEnabledInput">version_check_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.webIdeClientsidePreviewEnabledInput">web_ide_clientside_preview_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.whatsNewVariantInput">whats_new_variant_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.wikiPageMaxContentBytesInput">wiki_page_max_content_bytes_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.abuseNotificationEmail">abuse_notification_email</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.adminMode">admin_mode</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.afterSignOutPath">after_sign_out_path</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.afterSignUpText">after_sign_up_text</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.akismetApiKey">akismet_api_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.akismetEnabled">akismet_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.allowGroupOwnersToManageLdap">allow_group_owners_to_manage_ldap</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.allowLocalRequestsFromSystemHooks">allow_local_requests_from_system_hooks</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.allowLocalRequestsFromWebHooksAndServices">allow_local_requests_from_web_hooks_and_services</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.archiveBuildsInHumanReadable">archive_builds_in_human_readable</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.assetProxyAllowlist">asset_proxy_allowlist</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.assetProxyEnabled">asset_proxy_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.assetProxySecretKey">asset_proxy_secret_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.assetProxyUrl">asset_proxy_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.authorizedKeysEnabled">authorized_keys_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.autoDevopsDomain">auto_devops_domain</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.autoDevopsEnabled">auto_devops_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.automaticPurchasedStorageAllocation">automatic_purchased_storage_allocation</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.canCreateGroup">can_create_group</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.checkNamespacePlan">check_namespace_plan</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.commitEmailHostname">commit_email_hostname</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.containerExpirationPoliciesEnableHistoricEntries">container_expiration_policies_enable_historic_entries</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.containerRegistryCleanupTagsServiceMaxListSize">container_registry_cleanup_tags_service_max_list_size</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.containerRegistryDeleteTagsServiceTimeout">container_registry_delete_tags_service_timeout</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.containerRegistryExpirationPoliciesCaching">container_registry_expiration_policies_caching</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.containerRegistryExpirationPoliciesWorkerCapacity">container_registry_expiration_policies_worker_capacity</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.containerRegistryTokenExpireDelay">container_registry_token_expire_delay</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.deactivateDormantUsers">deactivate_dormant_users</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.defaultArtifactsExpireIn">default_artifacts_expire_in</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.defaultBranchName">default_branch_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.defaultBranchProtection">default_branch_protection</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.defaultCiConfigPath">default_ci_config_path</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.defaultGroupVisibility">default_group_visibility</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.defaultProjectCreation">default_project_creation</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.defaultProjectsLimit">default_projects_limit</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.defaultProjectVisibility">default_project_visibility</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.defaultSnippetVisibility">default_snippet_visibility</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.delayedGroupDeletion">delayed_group_deletion</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.delayedProjectDeletion">delayed_project_deletion</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.deleteInactiveProjects">delete_inactive_projects</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.deletionAdjournedPeriod">deletion_adjourned_period</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.diffMaxFiles">diff_max_files</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.diffMaxLines">diff_max_lines</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.diffMaxPatchBytes">diff_max_patch_bytes</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.disabledOauthSignInSources">disabled_oauth_sign_in_sources</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.disableFeedToken">disable_feed_token</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.dnsRebindingProtectionEnabled">dns_rebinding_protection_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.domainAllowlist">domain_allowlist</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.domainDenylist">domain_denylist</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.domainDenylistEnabled">domain_denylist_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.dsaKeyRestriction">dsa_key_restriction</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.ecdsaKeyRestriction">ecdsa_key_restriction</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.ecdsaSkKeyRestriction">ecdsa_sk_key_restriction</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.ed25519KeyRestriction">ed25519_key_restriction</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.ed25519SkKeyRestriction">ed25519_sk_key_restriction</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.eksAccessKeyId">eks_access_key_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.eksAccountId">eks_account_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.eksIntegrationEnabled">eks_integration_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.eksSecretAccessKey">eks_secret_access_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.elasticsearchAws">elasticsearch_aws</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.elasticsearchAwsAccessKey">elasticsearch_aws_access_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.elasticsearchAwsRegion">elasticsearch_aws_region</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.elasticsearchAwsSecretAccessKey">elasticsearch_aws_secret_access_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.elasticsearchIndexedFieldLengthLimit">elasticsearch_indexed_field_length_limit</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.elasticsearchIndexedFileSizeLimitKb">elasticsearch_indexed_file_size_limit_kb</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.elasticsearchIndexing">elasticsearch_indexing</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.elasticsearchLimitIndexing">elasticsearch_limit_indexing</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.elasticsearchMaxBulkConcurrency">elasticsearch_max_bulk_concurrency</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.elasticsearchMaxBulkSizeMb">elasticsearch_max_bulk_size_mb</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.elasticsearchNamespaceIds">elasticsearch_namespace_ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.elasticsearchPassword">elasticsearch_password</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.elasticsearchProjectIds">elasticsearch_project_ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.elasticsearchSearch">elasticsearch_search</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.elasticsearchUrl">elasticsearch_url</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.elasticsearchUsername">elasticsearch_username</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.emailAdditionalText">email_additional_text</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.emailAuthorInBody">email_author_in_body</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.enabledGitAccessProtocol">enabled_git_access_protocol</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.enforceNamespaceStorageLimit">enforce_namespace_storage_limit</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.enforceTerms">enforce_terms</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.externalAuthClientCert">external_auth_client_cert</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.externalAuthClientKey">external_auth_client_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.externalAuthClientKeyPass">external_auth_client_key_pass</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.externalAuthorizationServiceDefaultLabel">external_authorization_service_default_label</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.externalAuthorizationServiceEnabled">external_authorization_service_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.externalAuthorizationServiceTimeout">external_authorization_service_timeout</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.externalAuthorizationServiceUrl">external_authorization_service_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.externalPipelineValidationServiceTimeout">external_pipeline_validation_service_timeout</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.externalPipelineValidationServiceToken">external_pipeline_validation_service_token</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.externalPipelineValidationServiceUrl">external_pipeline_validation_service_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.fileTemplateProjectId">file_template_project_id</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.firstDayOfWeek">first_day_of_week</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.geoNodeAllowedIps">geo_node_allowed_ips</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.geoStatusTimeout">geo_status_timeout</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.gitalyTimeoutDefault">gitaly_timeout_default</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.gitalyTimeoutFast">gitaly_timeout_fast</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.gitalyTimeoutMedium">gitaly_timeout_medium</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.gitRateLimitUsersAllowlist">git_rate_limit_users_allowlist</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.gitTwoFactorSessionExpiry">git_two_factor_session_expiry</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.grafanaEnabled">grafana_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.grafanaUrl">grafana_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.gravatarEnabled">gravatar_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.groupOwnersCanManageDefaultBranchProtection">group_owners_can_manage_default_branch_protection</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.hashedStorageEnabled">hashed_storage_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.helpPageHideCommercialContent">help_page_hide_commercial_content</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.helpPageSupportUrl">help_page_support_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.helpPageText">help_page_text</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.helpText">help_text</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.hideThirdPartyOffers">hide_third_party_offers</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.homePageUrl">home_page_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.housekeepingEnabled">housekeeping_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.housekeepingFullRepackPeriod">housekeeping_full_repack_period</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.housekeepingGcPeriod">housekeeping_gc_period</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.housekeepingIncrementalRepackPeriod">housekeeping_incremental_repack_period</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.htmlEmailsEnabled">html_emails_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.importSources">import_sources</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.inactiveProjectsDeleteAfterMonths">inactive_projects_delete_after_months</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.inactiveProjectsMinSizeMb">inactive_projects_min_size_mb</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.inactiveProjectsSendWarningEmailAfterMonths">inactive_projects_send_warning_email_after_months</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.inProductMarketingEmailsEnabled">in_product_marketing_emails_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.invisibleCaptchaEnabled">invisible_captcha_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.issuesCreateLimit">issues_create_limit</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.keepLatestArtifact">keep_latest_artifact</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.localMarkdownVersion">local_markdown_version</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.mailgunEventsEnabled">mailgun_events_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.mailgunSigningKey">mailgun_signing_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.maintenanceMode">maintenance_mode</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.maintenanceModeMessage">maintenance_mode_message</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.maxArtifactsSize">max_artifacts_size</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.maxAttachmentSize">max_attachment_size</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.maxExportSize">max_export_size</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.maxImportSize">max_import_size</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.maxNumberOfRepositoryDownloads">max_number_of_repository_downloads</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.maxNumberOfRepositoryDownloadsWithinTimePeriod">max_number_of_repository_downloads_within_time_period</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.maxPagesSize">max_pages_size</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.maxPersonalAccessTokenLifetime">max_personal_access_token_lifetime</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.maxSshKeyLifetime">max_ssh_key_lifetime</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.metricsMethodCallThreshold">metrics_method_call_threshold</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.mirrorAvailable">mirror_available</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.mirrorCapacityThreshold">mirror_capacity_threshold</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.mirrorMaxCapacity">mirror_max_capacity</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.mirrorMaxDelay">mirror_max_delay</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.npmPackageRequestsForwarding">npm_package_requests_forwarding</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.outboundLocalRequestsWhitelist">outbound_local_requests_whitelist</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.packageRegistryCleanupPoliciesWorkerCapacity">package_registry_cleanup_policies_worker_capacity</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.pagesDomainVerificationEnabled">pages_domain_verification_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.passwordAuthenticationEnabledForGit">password_authentication_enabled_for_git</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.passwordAuthenticationEnabledForWeb">password_authentication_enabled_for_web</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.passwordLowercaseRequired">password_lowercase_required</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.passwordNumberRequired">password_number_required</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.passwordSymbolRequired">password_symbol_required</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.passwordUppercaseRequired">password_uppercase_required</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.performanceBarAllowedGroupPath">performance_bar_allowed_group_path</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.personalAccessTokenPrefix">personal_access_token_prefix</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.pipelineLimitPerProjectUserSha">pipeline_limit_per_project_user_sha</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.plantumlEnabled">plantuml_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.plantumlUrl">plantuml_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.pollingIntervalMultiplier">polling_interval_multiplier</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.projectExportEnabled">project_export_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.prometheusMetricsEnabled">prometheus_metrics_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.protectedCiVariables">protected_ci_variables</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.pushEventActivitiesLimit">push_event_activities_limit</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.pushEventHooksLimit">push_event_hooks_limit</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.pypiPackageRequestsForwarding">pypi_package_requests_forwarding</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.rateLimitingResponseText">rate_limiting_response_text</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.rawBlobRequestLimit">raw_blob_request_limit</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.recaptchaEnabled">recaptcha_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.recaptchaPrivateKey">recaptcha_private_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.recaptchaSiteKey">recaptcha_site_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.receiveMaxInputSize">receive_max_input_size</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.repositoryChecksEnabled">repository_checks_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.repositorySizeLimit">repository_size_limit</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.repositoryStorages">repository_storages</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.repositoryStoragesWeighted">repository_storages_weighted</a></code> | <code>typing.Mapping[typing.Union[int, float]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.requireAdminApprovalAfterUserSignup">require_admin_approval_after_user_signup</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.requireTwoFactorAuthentication">require_two_factor_authentication</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.restrictedVisibilityLevels">restricted_visibility_levels</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.rsaKeyRestriction">rsa_key_restriction</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.searchRateLimit">search_rate_limit</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.searchRateLimitUnauthenticated">search_rate_limit_unauthenticated</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.sendUserConfirmationEmail">send_user_confirmation_email</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.sessionExpireDelay">session_expire_delay</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.sharedRunnersEnabled">shared_runners_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.sharedRunnersMinutes">shared_runners_minutes</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.sharedRunnersText">shared_runners_text</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.sidekiqJobLimiterCompressionThresholdBytes">sidekiq_job_limiter_compression_threshold_bytes</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.sidekiqJobLimiterLimitBytes">sidekiq_job_limiter_limit_bytes</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.sidekiqJobLimiterMode">sidekiq_job_limiter_mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.signInText">sign_in_text</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.signupEnabled">signup_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.slackAppEnabled">slack_app_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.slackAppId">slack_app_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.slackAppSecret">slack_app_secret</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.slackAppSigningSecret">slack_app_signing_secret</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.slackAppVerificationToken">slack_app_verification_token</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.snippetSizeLimit">snippet_size_limit</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.snowplowAppId">snowplow_app_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.snowplowCollectorHostname">snowplow_collector_hostname</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.snowplowCookieDomain">snowplow_cookie_domain</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.snowplowEnabled">snowplow_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.sourcegraphEnabled">sourcegraph_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.sourcegraphPublicOnly">sourcegraph_public_only</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.sourcegraphUrl">sourcegraph_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.spamCheckApiKey">spam_check_api_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.spamCheckEndpointEnabled">spam_check_endpoint_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.spamCheckEndpointUrl">spam_check_endpoint_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.suggestPipelineEnabled">suggest_pipeline_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.terminalMaxSessionTime">terminal_max_session_time</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.terms">terms</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.throttleAuthenticatedApiEnabled">throttle_authenticated_api_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.throttleAuthenticatedApiPeriodInSeconds">throttle_authenticated_api_period_in_seconds</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.throttleAuthenticatedApiRequestsPerPeriod">throttle_authenticated_api_requests_per_period</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.throttleAuthenticatedPackagesApiEnabled">throttle_authenticated_packages_api_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.throttleAuthenticatedPackagesApiPeriodInSeconds">throttle_authenticated_packages_api_period_in_seconds</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.throttleAuthenticatedPackagesApiRequestsPerPeriod">throttle_authenticated_packages_api_requests_per_period</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.throttleAuthenticatedWebEnabled">throttle_authenticated_web_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.throttleAuthenticatedWebPeriodInSeconds">throttle_authenticated_web_period_in_seconds</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.throttleAuthenticatedWebRequestsPerPeriod">throttle_authenticated_web_requests_per_period</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.throttleUnauthenticatedApiEnabled">throttle_unauthenticated_api_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.throttleUnauthenticatedApiPeriodInSeconds">throttle_unauthenticated_api_period_in_seconds</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.throttleUnauthenticatedApiRequestsPerPeriod">throttle_unauthenticated_api_requests_per_period</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.throttleUnauthenticatedPackagesApiEnabled">throttle_unauthenticated_packages_api_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.throttleUnauthenticatedPackagesApiPeriodInSeconds">throttle_unauthenticated_packages_api_period_in_seconds</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.throttleUnauthenticatedPackagesApiRequestsPerPeriod">throttle_unauthenticated_packages_api_requests_per_period</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.throttleUnauthenticatedWebEnabled">throttle_unauthenticated_web_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.throttleUnauthenticatedWebPeriodInSeconds">throttle_unauthenticated_web_period_in_seconds</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.throttleUnauthenticatedWebRequestsPerPeriod">throttle_unauthenticated_web_requests_per_period</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.timeTrackingLimitToHours">time_tracking_limit_to_hours</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.twoFactorGracePeriod">two_factor_grace_period</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.uniqueIpsLimitEnabled">unique_ips_limit_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.uniqueIpsLimitPerUser">unique_ips_limit_per_user</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.uniqueIpsLimitTimeWindow">unique_ips_limit_time_window</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.usagePingEnabled">usage_ping_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.userDeactivationEmailsEnabled">user_deactivation_emails_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.userDefaultExternal">user_default_external</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.userDefaultInternalRegex">user_default_internal_regex</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.userOauthApplications">user_oauth_applications</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.userShowAddSshKeyMessage">user_show_add_ssh_key_message</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.versionCheckEnabled">version_check_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.webIdeClientsidePreviewEnabled">web_ide_clientside_preview_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.whatsNewVariant">whats_new_variant</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.wikiPageMaxContentBytes">wiki_page_max_content_bytes</a></code> | <code>typing.Union[int, float]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `abuse_notification_email_input`<sup>Optional</sup> <a name="abuse_notification_email_input" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.abuseNotificationEmailInput"></a>

```python
abuse_notification_email_input: str
```

- *Type:* str

---

##### `admin_mode_input`<sup>Optional</sup> <a name="admin_mode_input" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.adminModeInput"></a>

```python
admin_mode_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `after_sign_out_path_input`<sup>Optional</sup> <a name="after_sign_out_path_input" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.afterSignOutPathInput"></a>

```python
after_sign_out_path_input: str
```

- *Type:* str

---

##### `after_sign_up_text_input`<sup>Optional</sup> <a name="after_sign_up_text_input" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.afterSignUpTextInput"></a>

```python
after_sign_up_text_input: str
```

- *Type:* str

---

##### `akismet_api_key_input`<sup>Optional</sup> <a name="akismet_api_key_input" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.akismetApiKeyInput"></a>

```python
akismet_api_key_input: str
```

- *Type:* str

---

##### `akismet_enabled_input`<sup>Optional</sup> <a name="akismet_enabled_input" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.akismetEnabledInput"></a>

```python
akismet_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `allow_group_owners_to_manage_ldap_input`<sup>Optional</sup> <a name="allow_group_owners_to_manage_ldap_input" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.allowGroupOwnersToManageLdapInput"></a>

```python
allow_group_owners_to_manage_ldap_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `allow_local_requests_from_system_hooks_input`<sup>Optional</sup> <a name="allow_local_requests_from_system_hooks_input" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.allowLocalRequestsFromSystemHooksInput"></a>

```python
allow_local_requests_from_system_hooks_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `allow_local_requests_from_web_hooks_and_services_input`<sup>Optional</sup> <a name="allow_local_requests_from_web_hooks_and_services_input" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.allowLocalRequestsFromWebHooksAndServicesInput"></a>

```python
allow_local_requests_from_web_hooks_and_services_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `archive_builds_in_human_readable_input`<sup>Optional</sup> <a name="archive_builds_in_human_readable_input" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.archiveBuildsInHumanReadableInput"></a>

```python
archive_builds_in_human_readable_input: str
```

- *Type:* str

---

##### `asset_proxy_allowlist_input`<sup>Optional</sup> <a name="asset_proxy_allowlist_input" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.assetProxyAllowlistInput"></a>

```python
asset_proxy_allowlist_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `asset_proxy_enabled_input`<sup>Optional</sup> <a name="asset_proxy_enabled_input" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.assetProxyEnabledInput"></a>

```python
asset_proxy_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `asset_proxy_secret_key_input`<sup>Optional</sup> <a name="asset_proxy_secret_key_input" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.assetProxySecretKeyInput"></a>

```python
asset_proxy_secret_key_input: str
```

- *Type:* str

---

##### `asset_proxy_url_input`<sup>Optional</sup> <a name="asset_proxy_url_input" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.assetProxyUrlInput"></a>

```python
asset_proxy_url_input: str
```

- *Type:* str

---

##### `authorized_keys_enabled_input`<sup>Optional</sup> <a name="authorized_keys_enabled_input" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.authorizedKeysEnabledInput"></a>

```python
authorized_keys_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `auto_devops_domain_input`<sup>Optional</sup> <a name="auto_devops_domain_input" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.autoDevopsDomainInput"></a>

```python
auto_devops_domain_input: str
```

- *Type:* str

---

##### `auto_devops_enabled_input`<sup>Optional</sup> <a name="auto_devops_enabled_input" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.autoDevopsEnabledInput"></a>

```python
auto_devops_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `automatic_purchased_storage_allocation_input`<sup>Optional</sup> <a name="automatic_purchased_storage_allocation_input" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.automaticPurchasedStorageAllocationInput"></a>

```python
automatic_purchased_storage_allocation_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `can_create_group_input`<sup>Optional</sup> <a name="can_create_group_input" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.canCreateGroupInput"></a>

```python
can_create_group_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `check_namespace_plan_input`<sup>Optional</sup> <a name="check_namespace_plan_input" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.checkNamespacePlanInput"></a>

```python
check_namespace_plan_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `commit_email_hostname_input`<sup>Optional</sup> <a name="commit_email_hostname_input" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.commitEmailHostnameInput"></a>

```python
commit_email_hostname_input: str
```

- *Type:* str

---

##### `container_expiration_policies_enable_historic_entries_input`<sup>Optional</sup> <a name="container_expiration_policies_enable_historic_entries_input" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.containerExpirationPoliciesEnableHistoricEntriesInput"></a>

```python
container_expiration_policies_enable_historic_entries_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `container_registry_cleanup_tags_service_max_list_size_input`<sup>Optional</sup> <a name="container_registry_cleanup_tags_service_max_list_size_input" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.containerRegistryCleanupTagsServiceMaxListSizeInput"></a>

```python
container_registry_cleanup_tags_service_max_list_size_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `container_registry_delete_tags_service_timeout_input`<sup>Optional</sup> <a name="container_registry_delete_tags_service_timeout_input" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.containerRegistryDeleteTagsServiceTimeoutInput"></a>

```python
container_registry_delete_tags_service_timeout_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `container_registry_expiration_policies_caching_input`<sup>Optional</sup> <a name="container_registry_expiration_policies_caching_input" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.containerRegistryExpirationPoliciesCachingInput"></a>

```python
container_registry_expiration_policies_caching_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `container_registry_expiration_policies_worker_capacity_input`<sup>Optional</sup> <a name="container_registry_expiration_policies_worker_capacity_input" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.containerRegistryExpirationPoliciesWorkerCapacityInput"></a>

```python
container_registry_expiration_policies_worker_capacity_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `container_registry_token_expire_delay_input`<sup>Optional</sup> <a name="container_registry_token_expire_delay_input" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.containerRegistryTokenExpireDelayInput"></a>

```python
container_registry_token_expire_delay_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `deactivate_dormant_users_input`<sup>Optional</sup> <a name="deactivate_dormant_users_input" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.deactivateDormantUsersInput"></a>

```python
deactivate_dormant_users_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `default_artifacts_expire_in_input`<sup>Optional</sup> <a name="default_artifacts_expire_in_input" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.defaultArtifactsExpireInInput"></a>

```python
default_artifacts_expire_in_input: str
```

- *Type:* str

---

##### `default_branch_name_input`<sup>Optional</sup> <a name="default_branch_name_input" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.defaultBranchNameInput"></a>

```python
default_branch_name_input: str
```

- *Type:* str

---

##### `default_branch_protection_input`<sup>Optional</sup> <a name="default_branch_protection_input" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.defaultBranchProtectionInput"></a>

```python
default_branch_protection_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `default_ci_config_path_input`<sup>Optional</sup> <a name="default_ci_config_path_input" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.defaultCiConfigPathInput"></a>

```python
default_ci_config_path_input: str
```

- *Type:* str

---

##### `default_group_visibility_input`<sup>Optional</sup> <a name="default_group_visibility_input" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.defaultGroupVisibilityInput"></a>

```python
default_group_visibility_input: str
```

- *Type:* str

---

##### `default_project_creation_input`<sup>Optional</sup> <a name="default_project_creation_input" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.defaultProjectCreationInput"></a>

```python
default_project_creation_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `default_projects_limit_input`<sup>Optional</sup> <a name="default_projects_limit_input" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.defaultProjectsLimitInput"></a>

```python
default_projects_limit_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `default_project_visibility_input`<sup>Optional</sup> <a name="default_project_visibility_input" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.defaultProjectVisibilityInput"></a>

```python
default_project_visibility_input: str
```

- *Type:* str

---

##### `default_snippet_visibility_input`<sup>Optional</sup> <a name="default_snippet_visibility_input" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.defaultSnippetVisibilityInput"></a>

```python
default_snippet_visibility_input: str
```

- *Type:* str

---

##### `delayed_group_deletion_input`<sup>Optional</sup> <a name="delayed_group_deletion_input" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.delayedGroupDeletionInput"></a>

```python
delayed_group_deletion_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `delayed_project_deletion_input`<sup>Optional</sup> <a name="delayed_project_deletion_input" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.delayedProjectDeletionInput"></a>

```python
delayed_project_deletion_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `delete_inactive_projects_input`<sup>Optional</sup> <a name="delete_inactive_projects_input" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.deleteInactiveProjectsInput"></a>

```python
delete_inactive_projects_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `deletion_adjourned_period_input`<sup>Optional</sup> <a name="deletion_adjourned_period_input" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.deletionAdjournedPeriodInput"></a>

```python
deletion_adjourned_period_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `diff_max_files_input`<sup>Optional</sup> <a name="diff_max_files_input" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.diffMaxFilesInput"></a>

```python
diff_max_files_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `diff_max_lines_input`<sup>Optional</sup> <a name="diff_max_lines_input" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.diffMaxLinesInput"></a>

```python
diff_max_lines_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `diff_max_patch_bytes_input`<sup>Optional</sup> <a name="diff_max_patch_bytes_input" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.diffMaxPatchBytesInput"></a>

```python
diff_max_patch_bytes_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `disabled_oauth_sign_in_sources_input`<sup>Optional</sup> <a name="disabled_oauth_sign_in_sources_input" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.disabledOauthSignInSourcesInput"></a>

```python
disabled_oauth_sign_in_sources_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `disable_feed_token_input`<sup>Optional</sup> <a name="disable_feed_token_input" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.disableFeedTokenInput"></a>

```python
disable_feed_token_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `dns_rebinding_protection_enabled_input`<sup>Optional</sup> <a name="dns_rebinding_protection_enabled_input" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.dnsRebindingProtectionEnabledInput"></a>

```python
dns_rebinding_protection_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `domain_allowlist_input`<sup>Optional</sup> <a name="domain_allowlist_input" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.domainAllowlistInput"></a>

```python
domain_allowlist_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `domain_denylist_enabled_input`<sup>Optional</sup> <a name="domain_denylist_enabled_input" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.domainDenylistEnabledInput"></a>

```python
domain_denylist_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `domain_denylist_input`<sup>Optional</sup> <a name="domain_denylist_input" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.domainDenylistInput"></a>

```python
domain_denylist_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `dsa_key_restriction_input`<sup>Optional</sup> <a name="dsa_key_restriction_input" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.dsaKeyRestrictionInput"></a>

```python
dsa_key_restriction_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `ecdsa_key_restriction_input`<sup>Optional</sup> <a name="ecdsa_key_restriction_input" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.ecdsaKeyRestrictionInput"></a>

```python
ecdsa_key_restriction_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `ecdsa_sk_key_restriction_input`<sup>Optional</sup> <a name="ecdsa_sk_key_restriction_input" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.ecdsaSkKeyRestrictionInput"></a>

```python
ecdsa_sk_key_restriction_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `ed25519_key_restriction_input`<sup>Optional</sup> <a name="ed25519_key_restriction_input" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.ed25519KeyRestrictionInput"></a>

```python
ed25519_key_restriction_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `ed25519_sk_key_restriction_input`<sup>Optional</sup> <a name="ed25519_sk_key_restriction_input" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.ed25519SkKeyRestrictionInput"></a>

```python
ed25519_sk_key_restriction_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `eks_access_key_id_input`<sup>Optional</sup> <a name="eks_access_key_id_input" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.eksAccessKeyIdInput"></a>

```python
eks_access_key_id_input: str
```

- *Type:* str

---

##### `eks_account_id_input`<sup>Optional</sup> <a name="eks_account_id_input" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.eksAccountIdInput"></a>

```python
eks_account_id_input: str
```

- *Type:* str

---

##### `eks_integration_enabled_input`<sup>Optional</sup> <a name="eks_integration_enabled_input" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.eksIntegrationEnabledInput"></a>

```python
eks_integration_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `eks_secret_access_key_input`<sup>Optional</sup> <a name="eks_secret_access_key_input" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.eksSecretAccessKeyInput"></a>

```python
eks_secret_access_key_input: str
```

- *Type:* str

---

##### `elasticsearch_aws_access_key_input`<sup>Optional</sup> <a name="elasticsearch_aws_access_key_input" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.elasticsearchAwsAccessKeyInput"></a>

```python
elasticsearch_aws_access_key_input: str
```

- *Type:* str

---

##### `elasticsearch_aws_input`<sup>Optional</sup> <a name="elasticsearch_aws_input" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.elasticsearchAwsInput"></a>

```python
elasticsearch_aws_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `elasticsearch_aws_region_input`<sup>Optional</sup> <a name="elasticsearch_aws_region_input" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.elasticsearchAwsRegionInput"></a>

```python
elasticsearch_aws_region_input: str
```

- *Type:* str

---

##### `elasticsearch_aws_secret_access_key_input`<sup>Optional</sup> <a name="elasticsearch_aws_secret_access_key_input" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.elasticsearchAwsSecretAccessKeyInput"></a>

```python
elasticsearch_aws_secret_access_key_input: str
```

- *Type:* str

---

##### `elasticsearch_indexed_field_length_limit_input`<sup>Optional</sup> <a name="elasticsearch_indexed_field_length_limit_input" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.elasticsearchIndexedFieldLengthLimitInput"></a>

```python
elasticsearch_indexed_field_length_limit_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `elasticsearch_indexed_file_size_limit_kb_input`<sup>Optional</sup> <a name="elasticsearch_indexed_file_size_limit_kb_input" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.elasticsearchIndexedFileSizeLimitKbInput"></a>

```python
elasticsearch_indexed_file_size_limit_kb_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `elasticsearch_indexing_input`<sup>Optional</sup> <a name="elasticsearch_indexing_input" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.elasticsearchIndexingInput"></a>

```python
elasticsearch_indexing_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `elasticsearch_limit_indexing_input`<sup>Optional</sup> <a name="elasticsearch_limit_indexing_input" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.elasticsearchLimitIndexingInput"></a>

```python
elasticsearch_limit_indexing_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `elasticsearch_max_bulk_concurrency_input`<sup>Optional</sup> <a name="elasticsearch_max_bulk_concurrency_input" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.elasticsearchMaxBulkConcurrencyInput"></a>

```python
elasticsearch_max_bulk_concurrency_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `elasticsearch_max_bulk_size_mb_input`<sup>Optional</sup> <a name="elasticsearch_max_bulk_size_mb_input" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.elasticsearchMaxBulkSizeMbInput"></a>

```python
elasticsearch_max_bulk_size_mb_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `elasticsearch_namespace_ids_input`<sup>Optional</sup> <a name="elasticsearch_namespace_ids_input" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.elasticsearchNamespaceIdsInput"></a>

```python
elasticsearch_namespace_ids_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `elasticsearch_password_input`<sup>Optional</sup> <a name="elasticsearch_password_input" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.elasticsearchPasswordInput"></a>

```python
elasticsearch_password_input: str
```

- *Type:* str

---

##### `elasticsearch_project_ids_input`<sup>Optional</sup> <a name="elasticsearch_project_ids_input" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.elasticsearchProjectIdsInput"></a>

```python
elasticsearch_project_ids_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `elasticsearch_search_input`<sup>Optional</sup> <a name="elasticsearch_search_input" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.elasticsearchSearchInput"></a>

```python
elasticsearch_search_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `elasticsearch_url_input`<sup>Optional</sup> <a name="elasticsearch_url_input" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.elasticsearchUrlInput"></a>

```python
elasticsearch_url_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `elasticsearch_username_input`<sup>Optional</sup> <a name="elasticsearch_username_input" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.elasticsearchUsernameInput"></a>

```python
elasticsearch_username_input: str
```

- *Type:* str

---

##### `email_additional_text_input`<sup>Optional</sup> <a name="email_additional_text_input" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.emailAdditionalTextInput"></a>

```python
email_additional_text_input: str
```

- *Type:* str

---

##### `email_author_in_body_input`<sup>Optional</sup> <a name="email_author_in_body_input" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.emailAuthorInBodyInput"></a>

```python
email_author_in_body_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `enabled_git_access_protocol_input`<sup>Optional</sup> <a name="enabled_git_access_protocol_input" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.enabledGitAccessProtocolInput"></a>

```python
enabled_git_access_protocol_input: str
```

- *Type:* str

---

##### `enforce_namespace_storage_limit_input`<sup>Optional</sup> <a name="enforce_namespace_storage_limit_input" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.enforceNamespaceStorageLimitInput"></a>

```python
enforce_namespace_storage_limit_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `enforce_terms_input`<sup>Optional</sup> <a name="enforce_terms_input" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.enforceTermsInput"></a>

```python
enforce_terms_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `external_auth_client_cert_input`<sup>Optional</sup> <a name="external_auth_client_cert_input" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.externalAuthClientCertInput"></a>

```python
external_auth_client_cert_input: str
```

- *Type:* str

---

##### `external_auth_client_key_input`<sup>Optional</sup> <a name="external_auth_client_key_input" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.externalAuthClientKeyInput"></a>

```python
external_auth_client_key_input: str
```

- *Type:* str

---

##### `external_auth_client_key_pass_input`<sup>Optional</sup> <a name="external_auth_client_key_pass_input" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.externalAuthClientKeyPassInput"></a>

```python
external_auth_client_key_pass_input: str
```

- *Type:* str

---

##### `external_authorization_service_default_label_input`<sup>Optional</sup> <a name="external_authorization_service_default_label_input" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.externalAuthorizationServiceDefaultLabelInput"></a>

```python
external_authorization_service_default_label_input: str
```

- *Type:* str

---

##### `external_authorization_service_enabled_input`<sup>Optional</sup> <a name="external_authorization_service_enabled_input" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.externalAuthorizationServiceEnabledInput"></a>

```python
external_authorization_service_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `external_authorization_service_timeout_input`<sup>Optional</sup> <a name="external_authorization_service_timeout_input" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.externalAuthorizationServiceTimeoutInput"></a>

```python
external_authorization_service_timeout_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `external_authorization_service_url_input`<sup>Optional</sup> <a name="external_authorization_service_url_input" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.externalAuthorizationServiceUrlInput"></a>

```python
external_authorization_service_url_input: str
```

- *Type:* str

---

##### `external_pipeline_validation_service_timeout_input`<sup>Optional</sup> <a name="external_pipeline_validation_service_timeout_input" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.externalPipelineValidationServiceTimeoutInput"></a>

```python
external_pipeline_validation_service_timeout_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `external_pipeline_validation_service_token_input`<sup>Optional</sup> <a name="external_pipeline_validation_service_token_input" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.externalPipelineValidationServiceTokenInput"></a>

```python
external_pipeline_validation_service_token_input: str
```

- *Type:* str

---

##### `external_pipeline_validation_service_url_input`<sup>Optional</sup> <a name="external_pipeline_validation_service_url_input" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.externalPipelineValidationServiceUrlInput"></a>

```python
external_pipeline_validation_service_url_input: str
```

- *Type:* str

---

##### `file_template_project_id_input`<sup>Optional</sup> <a name="file_template_project_id_input" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.fileTemplateProjectIdInput"></a>

```python
file_template_project_id_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `first_day_of_week_input`<sup>Optional</sup> <a name="first_day_of_week_input" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.firstDayOfWeekInput"></a>

```python
first_day_of_week_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `geo_node_allowed_ips_input`<sup>Optional</sup> <a name="geo_node_allowed_ips_input" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.geoNodeAllowedIpsInput"></a>

```python
geo_node_allowed_ips_input: str
```

- *Type:* str

---

##### `geo_status_timeout_input`<sup>Optional</sup> <a name="geo_status_timeout_input" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.geoStatusTimeoutInput"></a>

```python
geo_status_timeout_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `gitaly_timeout_default_input`<sup>Optional</sup> <a name="gitaly_timeout_default_input" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.gitalyTimeoutDefaultInput"></a>

```python
gitaly_timeout_default_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `gitaly_timeout_fast_input`<sup>Optional</sup> <a name="gitaly_timeout_fast_input" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.gitalyTimeoutFastInput"></a>

```python
gitaly_timeout_fast_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `gitaly_timeout_medium_input`<sup>Optional</sup> <a name="gitaly_timeout_medium_input" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.gitalyTimeoutMediumInput"></a>

```python
gitaly_timeout_medium_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `git_rate_limit_users_allowlist_input`<sup>Optional</sup> <a name="git_rate_limit_users_allowlist_input" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.gitRateLimitUsersAllowlistInput"></a>

```python
git_rate_limit_users_allowlist_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `git_two_factor_session_expiry_input`<sup>Optional</sup> <a name="git_two_factor_session_expiry_input" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.gitTwoFactorSessionExpiryInput"></a>

```python
git_two_factor_session_expiry_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `grafana_enabled_input`<sup>Optional</sup> <a name="grafana_enabled_input" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.grafanaEnabledInput"></a>

```python
grafana_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `grafana_url_input`<sup>Optional</sup> <a name="grafana_url_input" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.grafanaUrlInput"></a>

```python
grafana_url_input: str
```

- *Type:* str

---

##### `gravatar_enabled_input`<sup>Optional</sup> <a name="gravatar_enabled_input" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.gravatarEnabledInput"></a>

```python
gravatar_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `group_owners_can_manage_default_branch_protection_input`<sup>Optional</sup> <a name="group_owners_can_manage_default_branch_protection_input" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.groupOwnersCanManageDefaultBranchProtectionInput"></a>

```python
group_owners_can_manage_default_branch_protection_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `hashed_storage_enabled_input`<sup>Optional</sup> <a name="hashed_storage_enabled_input" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.hashedStorageEnabledInput"></a>

```python
hashed_storage_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `help_page_hide_commercial_content_input`<sup>Optional</sup> <a name="help_page_hide_commercial_content_input" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.helpPageHideCommercialContentInput"></a>

```python
help_page_hide_commercial_content_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `help_page_support_url_input`<sup>Optional</sup> <a name="help_page_support_url_input" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.helpPageSupportUrlInput"></a>

```python
help_page_support_url_input: str
```

- *Type:* str

---

##### `help_page_text_input`<sup>Optional</sup> <a name="help_page_text_input" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.helpPageTextInput"></a>

```python
help_page_text_input: str
```

- *Type:* str

---

##### `help_text_input`<sup>Optional</sup> <a name="help_text_input" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.helpTextInput"></a>

```python
help_text_input: str
```

- *Type:* str

---

##### `hide_third_party_offers_input`<sup>Optional</sup> <a name="hide_third_party_offers_input" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.hideThirdPartyOffersInput"></a>

```python
hide_third_party_offers_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `home_page_url_input`<sup>Optional</sup> <a name="home_page_url_input" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.homePageUrlInput"></a>

```python
home_page_url_input: str
```

- *Type:* str

---

##### `housekeeping_enabled_input`<sup>Optional</sup> <a name="housekeeping_enabled_input" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.housekeepingEnabledInput"></a>

```python
housekeeping_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `housekeeping_full_repack_period_input`<sup>Optional</sup> <a name="housekeeping_full_repack_period_input" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.housekeepingFullRepackPeriodInput"></a>

```python
housekeeping_full_repack_period_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `housekeeping_gc_period_input`<sup>Optional</sup> <a name="housekeeping_gc_period_input" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.housekeepingGcPeriodInput"></a>

```python
housekeeping_gc_period_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `housekeeping_incremental_repack_period_input`<sup>Optional</sup> <a name="housekeeping_incremental_repack_period_input" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.housekeepingIncrementalRepackPeriodInput"></a>

```python
housekeeping_incremental_repack_period_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `html_emails_enabled_input`<sup>Optional</sup> <a name="html_emails_enabled_input" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.htmlEmailsEnabledInput"></a>

```python
html_emails_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `import_sources_input`<sup>Optional</sup> <a name="import_sources_input" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.importSourcesInput"></a>

```python
import_sources_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `inactive_projects_delete_after_months_input`<sup>Optional</sup> <a name="inactive_projects_delete_after_months_input" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.inactiveProjectsDeleteAfterMonthsInput"></a>

```python
inactive_projects_delete_after_months_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `inactive_projects_min_size_mb_input`<sup>Optional</sup> <a name="inactive_projects_min_size_mb_input" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.inactiveProjectsMinSizeMbInput"></a>

```python
inactive_projects_min_size_mb_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `inactive_projects_send_warning_email_after_months_input`<sup>Optional</sup> <a name="inactive_projects_send_warning_email_after_months_input" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.inactiveProjectsSendWarningEmailAfterMonthsInput"></a>

```python
inactive_projects_send_warning_email_after_months_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `in_product_marketing_emails_enabled_input`<sup>Optional</sup> <a name="in_product_marketing_emails_enabled_input" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.inProductMarketingEmailsEnabledInput"></a>

```python
in_product_marketing_emails_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `invisible_captcha_enabled_input`<sup>Optional</sup> <a name="invisible_captcha_enabled_input" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.invisibleCaptchaEnabledInput"></a>

```python
invisible_captcha_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `issues_create_limit_input`<sup>Optional</sup> <a name="issues_create_limit_input" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.issuesCreateLimitInput"></a>

```python
issues_create_limit_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `keep_latest_artifact_input`<sup>Optional</sup> <a name="keep_latest_artifact_input" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.keepLatestArtifactInput"></a>

```python
keep_latest_artifact_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `local_markdown_version_input`<sup>Optional</sup> <a name="local_markdown_version_input" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.localMarkdownVersionInput"></a>

```python
local_markdown_version_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `mailgun_events_enabled_input`<sup>Optional</sup> <a name="mailgun_events_enabled_input" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.mailgunEventsEnabledInput"></a>

```python
mailgun_events_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `mailgun_signing_key_input`<sup>Optional</sup> <a name="mailgun_signing_key_input" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.mailgunSigningKeyInput"></a>

```python
mailgun_signing_key_input: str
```

- *Type:* str

---

##### `maintenance_mode_input`<sup>Optional</sup> <a name="maintenance_mode_input" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.maintenanceModeInput"></a>

```python
maintenance_mode_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `maintenance_mode_message_input`<sup>Optional</sup> <a name="maintenance_mode_message_input" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.maintenanceModeMessageInput"></a>

```python
maintenance_mode_message_input: str
```

- *Type:* str

---

##### `max_artifacts_size_input`<sup>Optional</sup> <a name="max_artifacts_size_input" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.maxArtifactsSizeInput"></a>

```python
max_artifacts_size_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max_attachment_size_input`<sup>Optional</sup> <a name="max_attachment_size_input" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.maxAttachmentSizeInput"></a>

```python
max_attachment_size_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max_export_size_input`<sup>Optional</sup> <a name="max_export_size_input" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.maxExportSizeInput"></a>

```python
max_export_size_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max_import_size_input`<sup>Optional</sup> <a name="max_import_size_input" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.maxImportSizeInput"></a>

```python
max_import_size_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max_number_of_repository_downloads_input`<sup>Optional</sup> <a name="max_number_of_repository_downloads_input" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.maxNumberOfRepositoryDownloadsInput"></a>

```python
max_number_of_repository_downloads_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max_number_of_repository_downloads_within_time_period_input`<sup>Optional</sup> <a name="max_number_of_repository_downloads_within_time_period_input" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.maxNumberOfRepositoryDownloadsWithinTimePeriodInput"></a>

```python
max_number_of_repository_downloads_within_time_period_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max_pages_size_input`<sup>Optional</sup> <a name="max_pages_size_input" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.maxPagesSizeInput"></a>

```python
max_pages_size_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max_personal_access_token_lifetime_input`<sup>Optional</sup> <a name="max_personal_access_token_lifetime_input" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.maxPersonalAccessTokenLifetimeInput"></a>

```python
max_personal_access_token_lifetime_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max_ssh_key_lifetime_input`<sup>Optional</sup> <a name="max_ssh_key_lifetime_input" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.maxSshKeyLifetimeInput"></a>

```python
max_ssh_key_lifetime_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `metrics_method_call_threshold_input`<sup>Optional</sup> <a name="metrics_method_call_threshold_input" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.metricsMethodCallThresholdInput"></a>

```python
metrics_method_call_threshold_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `mirror_available_input`<sup>Optional</sup> <a name="mirror_available_input" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.mirrorAvailableInput"></a>

```python
mirror_available_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `mirror_capacity_threshold_input`<sup>Optional</sup> <a name="mirror_capacity_threshold_input" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.mirrorCapacityThresholdInput"></a>

```python
mirror_capacity_threshold_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `mirror_max_capacity_input`<sup>Optional</sup> <a name="mirror_max_capacity_input" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.mirrorMaxCapacityInput"></a>

```python
mirror_max_capacity_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `mirror_max_delay_input`<sup>Optional</sup> <a name="mirror_max_delay_input" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.mirrorMaxDelayInput"></a>

```python
mirror_max_delay_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `npm_package_requests_forwarding_input`<sup>Optional</sup> <a name="npm_package_requests_forwarding_input" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.npmPackageRequestsForwardingInput"></a>

```python
npm_package_requests_forwarding_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `outbound_local_requests_whitelist_input`<sup>Optional</sup> <a name="outbound_local_requests_whitelist_input" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.outboundLocalRequestsWhitelistInput"></a>

```python
outbound_local_requests_whitelist_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `package_registry_cleanup_policies_worker_capacity_input`<sup>Optional</sup> <a name="package_registry_cleanup_policies_worker_capacity_input" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.packageRegistryCleanupPoliciesWorkerCapacityInput"></a>

```python
package_registry_cleanup_policies_worker_capacity_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `pages_domain_verification_enabled_input`<sup>Optional</sup> <a name="pages_domain_verification_enabled_input" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.pagesDomainVerificationEnabledInput"></a>

```python
pages_domain_verification_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `password_authentication_enabled_for_git_input`<sup>Optional</sup> <a name="password_authentication_enabled_for_git_input" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.passwordAuthenticationEnabledForGitInput"></a>

```python
password_authentication_enabled_for_git_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `password_authentication_enabled_for_web_input`<sup>Optional</sup> <a name="password_authentication_enabled_for_web_input" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.passwordAuthenticationEnabledForWebInput"></a>

```python
password_authentication_enabled_for_web_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `password_lowercase_required_input`<sup>Optional</sup> <a name="password_lowercase_required_input" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.passwordLowercaseRequiredInput"></a>

```python
password_lowercase_required_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `password_number_required_input`<sup>Optional</sup> <a name="password_number_required_input" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.passwordNumberRequiredInput"></a>

```python
password_number_required_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `password_symbol_required_input`<sup>Optional</sup> <a name="password_symbol_required_input" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.passwordSymbolRequiredInput"></a>

```python
password_symbol_required_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `password_uppercase_required_input`<sup>Optional</sup> <a name="password_uppercase_required_input" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.passwordUppercaseRequiredInput"></a>

```python
password_uppercase_required_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `performance_bar_allowed_group_path_input`<sup>Optional</sup> <a name="performance_bar_allowed_group_path_input" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.performanceBarAllowedGroupPathInput"></a>

```python
performance_bar_allowed_group_path_input: str
```

- *Type:* str

---

##### `personal_access_token_prefix_input`<sup>Optional</sup> <a name="personal_access_token_prefix_input" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.personalAccessTokenPrefixInput"></a>

```python
personal_access_token_prefix_input: str
```

- *Type:* str

---

##### `pipeline_limit_per_project_user_sha_input`<sup>Optional</sup> <a name="pipeline_limit_per_project_user_sha_input" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.pipelineLimitPerProjectUserShaInput"></a>

```python
pipeline_limit_per_project_user_sha_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `plantuml_enabled_input`<sup>Optional</sup> <a name="plantuml_enabled_input" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.plantumlEnabledInput"></a>

```python
plantuml_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `plantuml_url_input`<sup>Optional</sup> <a name="plantuml_url_input" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.plantumlUrlInput"></a>

```python
plantuml_url_input: str
```

- *Type:* str

---

##### `polling_interval_multiplier_input`<sup>Optional</sup> <a name="polling_interval_multiplier_input" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.pollingIntervalMultiplierInput"></a>

```python
polling_interval_multiplier_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `project_export_enabled_input`<sup>Optional</sup> <a name="project_export_enabled_input" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.projectExportEnabledInput"></a>

```python
project_export_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `prometheus_metrics_enabled_input`<sup>Optional</sup> <a name="prometheus_metrics_enabled_input" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.prometheusMetricsEnabledInput"></a>

```python
prometheus_metrics_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `protected_ci_variables_input`<sup>Optional</sup> <a name="protected_ci_variables_input" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.protectedCiVariablesInput"></a>

```python
protected_ci_variables_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `push_event_activities_limit_input`<sup>Optional</sup> <a name="push_event_activities_limit_input" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.pushEventActivitiesLimitInput"></a>

```python
push_event_activities_limit_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `push_event_hooks_limit_input`<sup>Optional</sup> <a name="push_event_hooks_limit_input" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.pushEventHooksLimitInput"></a>

```python
push_event_hooks_limit_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `pypi_package_requests_forwarding_input`<sup>Optional</sup> <a name="pypi_package_requests_forwarding_input" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.pypiPackageRequestsForwardingInput"></a>

```python
pypi_package_requests_forwarding_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `rate_limiting_response_text_input`<sup>Optional</sup> <a name="rate_limiting_response_text_input" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.rateLimitingResponseTextInput"></a>

```python
rate_limiting_response_text_input: str
```

- *Type:* str

---

##### `raw_blob_request_limit_input`<sup>Optional</sup> <a name="raw_blob_request_limit_input" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.rawBlobRequestLimitInput"></a>

```python
raw_blob_request_limit_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `recaptcha_enabled_input`<sup>Optional</sup> <a name="recaptcha_enabled_input" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.recaptchaEnabledInput"></a>

```python
recaptcha_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `recaptcha_private_key_input`<sup>Optional</sup> <a name="recaptcha_private_key_input" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.recaptchaPrivateKeyInput"></a>

```python
recaptcha_private_key_input: str
```

- *Type:* str

---

##### `recaptcha_site_key_input`<sup>Optional</sup> <a name="recaptcha_site_key_input" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.recaptchaSiteKeyInput"></a>

```python
recaptcha_site_key_input: str
```

- *Type:* str

---

##### `receive_max_input_size_input`<sup>Optional</sup> <a name="receive_max_input_size_input" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.receiveMaxInputSizeInput"></a>

```python
receive_max_input_size_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `repository_checks_enabled_input`<sup>Optional</sup> <a name="repository_checks_enabled_input" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.repositoryChecksEnabledInput"></a>

```python
repository_checks_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `repository_size_limit_input`<sup>Optional</sup> <a name="repository_size_limit_input" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.repositorySizeLimitInput"></a>

```python
repository_size_limit_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `repository_storages_input`<sup>Optional</sup> <a name="repository_storages_input" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.repositoryStoragesInput"></a>

```python
repository_storages_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `repository_storages_weighted_input`<sup>Optional</sup> <a name="repository_storages_weighted_input" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.repositoryStoragesWeightedInput"></a>

```python
repository_storages_weighted_input: typing.Mapping[typing.Union[int, float]]
```

- *Type:* typing.Mapping[typing.Union[int, float]]

---

##### `require_admin_approval_after_user_signup_input`<sup>Optional</sup> <a name="require_admin_approval_after_user_signup_input" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.requireAdminApprovalAfterUserSignupInput"></a>

```python
require_admin_approval_after_user_signup_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `require_two_factor_authentication_input`<sup>Optional</sup> <a name="require_two_factor_authentication_input" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.requireTwoFactorAuthenticationInput"></a>

```python
require_two_factor_authentication_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `restricted_visibility_levels_input`<sup>Optional</sup> <a name="restricted_visibility_levels_input" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.restrictedVisibilityLevelsInput"></a>

```python
restricted_visibility_levels_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `rsa_key_restriction_input`<sup>Optional</sup> <a name="rsa_key_restriction_input" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.rsaKeyRestrictionInput"></a>

```python
rsa_key_restriction_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `search_rate_limit_input`<sup>Optional</sup> <a name="search_rate_limit_input" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.searchRateLimitInput"></a>

```python
search_rate_limit_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `search_rate_limit_unauthenticated_input`<sup>Optional</sup> <a name="search_rate_limit_unauthenticated_input" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.searchRateLimitUnauthenticatedInput"></a>

```python
search_rate_limit_unauthenticated_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `send_user_confirmation_email_input`<sup>Optional</sup> <a name="send_user_confirmation_email_input" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.sendUserConfirmationEmailInput"></a>

```python
send_user_confirmation_email_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `session_expire_delay_input`<sup>Optional</sup> <a name="session_expire_delay_input" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.sessionExpireDelayInput"></a>

```python
session_expire_delay_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `shared_runners_enabled_input`<sup>Optional</sup> <a name="shared_runners_enabled_input" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.sharedRunnersEnabledInput"></a>

```python
shared_runners_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `shared_runners_minutes_input`<sup>Optional</sup> <a name="shared_runners_minutes_input" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.sharedRunnersMinutesInput"></a>

```python
shared_runners_minutes_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `shared_runners_text_input`<sup>Optional</sup> <a name="shared_runners_text_input" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.sharedRunnersTextInput"></a>

```python
shared_runners_text_input: str
```

- *Type:* str

---

##### `sidekiq_job_limiter_compression_threshold_bytes_input`<sup>Optional</sup> <a name="sidekiq_job_limiter_compression_threshold_bytes_input" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.sidekiqJobLimiterCompressionThresholdBytesInput"></a>

```python
sidekiq_job_limiter_compression_threshold_bytes_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `sidekiq_job_limiter_limit_bytes_input`<sup>Optional</sup> <a name="sidekiq_job_limiter_limit_bytes_input" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.sidekiqJobLimiterLimitBytesInput"></a>

```python
sidekiq_job_limiter_limit_bytes_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `sidekiq_job_limiter_mode_input`<sup>Optional</sup> <a name="sidekiq_job_limiter_mode_input" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.sidekiqJobLimiterModeInput"></a>

```python
sidekiq_job_limiter_mode_input: str
```

- *Type:* str

---

##### `sign_in_text_input`<sup>Optional</sup> <a name="sign_in_text_input" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.signInTextInput"></a>

```python
sign_in_text_input: str
```

- *Type:* str

---

##### `signup_enabled_input`<sup>Optional</sup> <a name="signup_enabled_input" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.signupEnabledInput"></a>

```python
signup_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `slack_app_enabled_input`<sup>Optional</sup> <a name="slack_app_enabled_input" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.slackAppEnabledInput"></a>

```python
slack_app_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `slack_app_id_input`<sup>Optional</sup> <a name="slack_app_id_input" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.slackAppIdInput"></a>

```python
slack_app_id_input: str
```

- *Type:* str

---

##### `slack_app_secret_input`<sup>Optional</sup> <a name="slack_app_secret_input" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.slackAppSecretInput"></a>

```python
slack_app_secret_input: str
```

- *Type:* str

---

##### `slack_app_signing_secret_input`<sup>Optional</sup> <a name="slack_app_signing_secret_input" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.slackAppSigningSecretInput"></a>

```python
slack_app_signing_secret_input: str
```

- *Type:* str

---

##### `slack_app_verification_token_input`<sup>Optional</sup> <a name="slack_app_verification_token_input" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.slackAppVerificationTokenInput"></a>

```python
slack_app_verification_token_input: str
```

- *Type:* str

---

##### `snippet_size_limit_input`<sup>Optional</sup> <a name="snippet_size_limit_input" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.snippetSizeLimitInput"></a>

```python
snippet_size_limit_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `snowplow_app_id_input`<sup>Optional</sup> <a name="snowplow_app_id_input" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.snowplowAppIdInput"></a>

```python
snowplow_app_id_input: str
```

- *Type:* str

---

##### `snowplow_collector_hostname_input`<sup>Optional</sup> <a name="snowplow_collector_hostname_input" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.snowplowCollectorHostnameInput"></a>

```python
snowplow_collector_hostname_input: str
```

- *Type:* str

---

##### `snowplow_cookie_domain_input`<sup>Optional</sup> <a name="snowplow_cookie_domain_input" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.snowplowCookieDomainInput"></a>

```python
snowplow_cookie_domain_input: str
```

- *Type:* str

---

##### `snowplow_enabled_input`<sup>Optional</sup> <a name="snowplow_enabled_input" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.snowplowEnabledInput"></a>

```python
snowplow_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `sourcegraph_enabled_input`<sup>Optional</sup> <a name="sourcegraph_enabled_input" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.sourcegraphEnabledInput"></a>

```python
sourcegraph_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `sourcegraph_public_only_input`<sup>Optional</sup> <a name="sourcegraph_public_only_input" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.sourcegraphPublicOnlyInput"></a>

```python
sourcegraph_public_only_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `sourcegraph_url_input`<sup>Optional</sup> <a name="sourcegraph_url_input" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.sourcegraphUrlInput"></a>

```python
sourcegraph_url_input: str
```

- *Type:* str

---

##### `spam_check_api_key_input`<sup>Optional</sup> <a name="spam_check_api_key_input" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.spamCheckApiKeyInput"></a>

```python
spam_check_api_key_input: str
```

- *Type:* str

---

##### `spam_check_endpoint_enabled_input`<sup>Optional</sup> <a name="spam_check_endpoint_enabled_input" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.spamCheckEndpointEnabledInput"></a>

```python
spam_check_endpoint_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `spam_check_endpoint_url_input`<sup>Optional</sup> <a name="spam_check_endpoint_url_input" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.spamCheckEndpointUrlInput"></a>

```python
spam_check_endpoint_url_input: str
```

- *Type:* str

---

##### `suggest_pipeline_enabled_input`<sup>Optional</sup> <a name="suggest_pipeline_enabled_input" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.suggestPipelineEnabledInput"></a>

```python
suggest_pipeline_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `terminal_max_session_time_input`<sup>Optional</sup> <a name="terminal_max_session_time_input" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.terminalMaxSessionTimeInput"></a>

```python
terminal_max_session_time_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `terms_input`<sup>Optional</sup> <a name="terms_input" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.termsInput"></a>

```python
terms_input: str
```

- *Type:* str

---

##### `throttle_authenticated_api_enabled_input`<sup>Optional</sup> <a name="throttle_authenticated_api_enabled_input" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.throttleAuthenticatedApiEnabledInput"></a>

```python
throttle_authenticated_api_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `throttle_authenticated_api_period_in_seconds_input`<sup>Optional</sup> <a name="throttle_authenticated_api_period_in_seconds_input" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.throttleAuthenticatedApiPeriodInSecondsInput"></a>

```python
throttle_authenticated_api_period_in_seconds_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `throttle_authenticated_api_requests_per_period_input`<sup>Optional</sup> <a name="throttle_authenticated_api_requests_per_period_input" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.throttleAuthenticatedApiRequestsPerPeriodInput"></a>

```python
throttle_authenticated_api_requests_per_period_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `throttle_authenticated_packages_api_enabled_input`<sup>Optional</sup> <a name="throttle_authenticated_packages_api_enabled_input" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.throttleAuthenticatedPackagesApiEnabledInput"></a>

```python
throttle_authenticated_packages_api_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `throttle_authenticated_packages_api_period_in_seconds_input`<sup>Optional</sup> <a name="throttle_authenticated_packages_api_period_in_seconds_input" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.throttleAuthenticatedPackagesApiPeriodInSecondsInput"></a>

```python
throttle_authenticated_packages_api_period_in_seconds_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `throttle_authenticated_packages_api_requests_per_period_input`<sup>Optional</sup> <a name="throttle_authenticated_packages_api_requests_per_period_input" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.throttleAuthenticatedPackagesApiRequestsPerPeriodInput"></a>

```python
throttle_authenticated_packages_api_requests_per_period_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `throttle_authenticated_web_enabled_input`<sup>Optional</sup> <a name="throttle_authenticated_web_enabled_input" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.throttleAuthenticatedWebEnabledInput"></a>

```python
throttle_authenticated_web_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `throttle_authenticated_web_period_in_seconds_input`<sup>Optional</sup> <a name="throttle_authenticated_web_period_in_seconds_input" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.throttleAuthenticatedWebPeriodInSecondsInput"></a>

```python
throttle_authenticated_web_period_in_seconds_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `throttle_authenticated_web_requests_per_period_input`<sup>Optional</sup> <a name="throttle_authenticated_web_requests_per_period_input" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.throttleAuthenticatedWebRequestsPerPeriodInput"></a>

```python
throttle_authenticated_web_requests_per_period_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `throttle_unauthenticated_api_enabled_input`<sup>Optional</sup> <a name="throttle_unauthenticated_api_enabled_input" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.throttleUnauthenticatedApiEnabledInput"></a>

```python
throttle_unauthenticated_api_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `throttle_unauthenticated_api_period_in_seconds_input`<sup>Optional</sup> <a name="throttle_unauthenticated_api_period_in_seconds_input" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.throttleUnauthenticatedApiPeriodInSecondsInput"></a>

```python
throttle_unauthenticated_api_period_in_seconds_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `throttle_unauthenticated_api_requests_per_period_input`<sup>Optional</sup> <a name="throttle_unauthenticated_api_requests_per_period_input" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.throttleUnauthenticatedApiRequestsPerPeriodInput"></a>

```python
throttle_unauthenticated_api_requests_per_period_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `throttle_unauthenticated_packages_api_enabled_input`<sup>Optional</sup> <a name="throttle_unauthenticated_packages_api_enabled_input" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.throttleUnauthenticatedPackagesApiEnabledInput"></a>

```python
throttle_unauthenticated_packages_api_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `throttle_unauthenticated_packages_api_period_in_seconds_input`<sup>Optional</sup> <a name="throttle_unauthenticated_packages_api_period_in_seconds_input" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.throttleUnauthenticatedPackagesApiPeriodInSecondsInput"></a>

```python
throttle_unauthenticated_packages_api_period_in_seconds_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `throttle_unauthenticated_packages_api_requests_per_period_input`<sup>Optional</sup> <a name="throttle_unauthenticated_packages_api_requests_per_period_input" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.throttleUnauthenticatedPackagesApiRequestsPerPeriodInput"></a>

```python
throttle_unauthenticated_packages_api_requests_per_period_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `throttle_unauthenticated_web_enabled_input`<sup>Optional</sup> <a name="throttle_unauthenticated_web_enabled_input" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.throttleUnauthenticatedWebEnabledInput"></a>

```python
throttle_unauthenticated_web_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `throttle_unauthenticated_web_period_in_seconds_input`<sup>Optional</sup> <a name="throttle_unauthenticated_web_period_in_seconds_input" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.throttleUnauthenticatedWebPeriodInSecondsInput"></a>

```python
throttle_unauthenticated_web_period_in_seconds_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `throttle_unauthenticated_web_requests_per_period_input`<sup>Optional</sup> <a name="throttle_unauthenticated_web_requests_per_period_input" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.throttleUnauthenticatedWebRequestsPerPeriodInput"></a>

```python
throttle_unauthenticated_web_requests_per_period_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `time_tracking_limit_to_hours_input`<sup>Optional</sup> <a name="time_tracking_limit_to_hours_input" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.timeTrackingLimitToHoursInput"></a>

```python
time_tracking_limit_to_hours_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `two_factor_grace_period_input`<sup>Optional</sup> <a name="two_factor_grace_period_input" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.twoFactorGracePeriodInput"></a>

```python
two_factor_grace_period_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `unique_ips_limit_enabled_input`<sup>Optional</sup> <a name="unique_ips_limit_enabled_input" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.uniqueIpsLimitEnabledInput"></a>

```python
unique_ips_limit_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `unique_ips_limit_per_user_input`<sup>Optional</sup> <a name="unique_ips_limit_per_user_input" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.uniqueIpsLimitPerUserInput"></a>

```python
unique_ips_limit_per_user_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `unique_ips_limit_time_window_input`<sup>Optional</sup> <a name="unique_ips_limit_time_window_input" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.uniqueIpsLimitTimeWindowInput"></a>

```python
unique_ips_limit_time_window_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `usage_ping_enabled_input`<sup>Optional</sup> <a name="usage_ping_enabled_input" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.usagePingEnabledInput"></a>

```python
usage_ping_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `user_deactivation_emails_enabled_input`<sup>Optional</sup> <a name="user_deactivation_emails_enabled_input" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.userDeactivationEmailsEnabledInput"></a>

```python
user_deactivation_emails_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `user_default_external_input`<sup>Optional</sup> <a name="user_default_external_input" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.userDefaultExternalInput"></a>

```python
user_default_external_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `user_default_internal_regex_input`<sup>Optional</sup> <a name="user_default_internal_regex_input" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.userDefaultInternalRegexInput"></a>

```python
user_default_internal_regex_input: str
```

- *Type:* str

---

##### `user_oauth_applications_input`<sup>Optional</sup> <a name="user_oauth_applications_input" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.userOauthApplicationsInput"></a>

```python
user_oauth_applications_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `user_show_add_ssh_key_message_input`<sup>Optional</sup> <a name="user_show_add_ssh_key_message_input" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.userShowAddSshKeyMessageInput"></a>

```python
user_show_add_ssh_key_message_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `version_check_enabled_input`<sup>Optional</sup> <a name="version_check_enabled_input" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.versionCheckEnabledInput"></a>

```python
version_check_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `web_ide_clientside_preview_enabled_input`<sup>Optional</sup> <a name="web_ide_clientside_preview_enabled_input" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.webIdeClientsidePreviewEnabledInput"></a>

```python
web_ide_clientside_preview_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `whats_new_variant_input`<sup>Optional</sup> <a name="whats_new_variant_input" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.whatsNewVariantInput"></a>

```python
whats_new_variant_input: str
```

- *Type:* str

---

##### `wiki_page_max_content_bytes_input`<sup>Optional</sup> <a name="wiki_page_max_content_bytes_input" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.wikiPageMaxContentBytesInput"></a>

```python
wiki_page_max_content_bytes_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `abuse_notification_email`<sup>Required</sup> <a name="abuse_notification_email" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.abuseNotificationEmail"></a>

```python
abuse_notification_email: str
```

- *Type:* str

---

##### `admin_mode`<sup>Required</sup> <a name="admin_mode" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.adminMode"></a>

```python
admin_mode: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `after_sign_out_path`<sup>Required</sup> <a name="after_sign_out_path" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.afterSignOutPath"></a>

```python
after_sign_out_path: str
```

- *Type:* str

---

##### `after_sign_up_text`<sup>Required</sup> <a name="after_sign_up_text" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.afterSignUpText"></a>

```python
after_sign_up_text: str
```

- *Type:* str

---

##### `akismet_api_key`<sup>Required</sup> <a name="akismet_api_key" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.akismetApiKey"></a>

```python
akismet_api_key: str
```

- *Type:* str

---

##### `akismet_enabled`<sup>Required</sup> <a name="akismet_enabled" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.akismetEnabled"></a>

```python
akismet_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `allow_group_owners_to_manage_ldap`<sup>Required</sup> <a name="allow_group_owners_to_manage_ldap" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.allowGroupOwnersToManageLdap"></a>

```python
allow_group_owners_to_manage_ldap: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `allow_local_requests_from_system_hooks`<sup>Required</sup> <a name="allow_local_requests_from_system_hooks" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.allowLocalRequestsFromSystemHooks"></a>

```python
allow_local_requests_from_system_hooks: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `allow_local_requests_from_web_hooks_and_services`<sup>Required</sup> <a name="allow_local_requests_from_web_hooks_and_services" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.allowLocalRequestsFromWebHooksAndServices"></a>

```python
allow_local_requests_from_web_hooks_and_services: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `archive_builds_in_human_readable`<sup>Required</sup> <a name="archive_builds_in_human_readable" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.archiveBuildsInHumanReadable"></a>

```python
archive_builds_in_human_readable: str
```

- *Type:* str

---

##### `asset_proxy_allowlist`<sup>Required</sup> <a name="asset_proxy_allowlist" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.assetProxyAllowlist"></a>

```python
asset_proxy_allowlist: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `asset_proxy_enabled`<sup>Required</sup> <a name="asset_proxy_enabled" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.assetProxyEnabled"></a>

```python
asset_proxy_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `asset_proxy_secret_key`<sup>Required</sup> <a name="asset_proxy_secret_key" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.assetProxySecretKey"></a>

```python
asset_proxy_secret_key: str
```

- *Type:* str

---

##### `asset_proxy_url`<sup>Required</sup> <a name="asset_proxy_url" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.assetProxyUrl"></a>

```python
asset_proxy_url: str
```

- *Type:* str

---

##### `authorized_keys_enabled`<sup>Required</sup> <a name="authorized_keys_enabled" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.authorizedKeysEnabled"></a>

```python
authorized_keys_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `auto_devops_domain`<sup>Required</sup> <a name="auto_devops_domain" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.autoDevopsDomain"></a>

```python
auto_devops_domain: str
```

- *Type:* str

---

##### `auto_devops_enabled`<sup>Required</sup> <a name="auto_devops_enabled" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.autoDevopsEnabled"></a>

```python
auto_devops_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `automatic_purchased_storage_allocation`<sup>Required</sup> <a name="automatic_purchased_storage_allocation" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.automaticPurchasedStorageAllocation"></a>

```python
automatic_purchased_storage_allocation: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `can_create_group`<sup>Required</sup> <a name="can_create_group" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.canCreateGroup"></a>

```python
can_create_group: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `check_namespace_plan`<sup>Required</sup> <a name="check_namespace_plan" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.checkNamespacePlan"></a>

```python
check_namespace_plan: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `commit_email_hostname`<sup>Required</sup> <a name="commit_email_hostname" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.commitEmailHostname"></a>

```python
commit_email_hostname: str
```

- *Type:* str

---

##### `container_expiration_policies_enable_historic_entries`<sup>Required</sup> <a name="container_expiration_policies_enable_historic_entries" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.containerExpirationPoliciesEnableHistoricEntries"></a>

```python
container_expiration_policies_enable_historic_entries: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `container_registry_cleanup_tags_service_max_list_size`<sup>Required</sup> <a name="container_registry_cleanup_tags_service_max_list_size" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.containerRegistryCleanupTagsServiceMaxListSize"></a>

```python
container_registry_cleanup_tags_service_max_list_size: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `container_registry_delete_tags_service_timeout`<sup>Required</sup> <a name="container_registry_delete_tags_service_timeout" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.containerRegistryDeleteTagsServiceTimeout"></a>

```python
container_registry_delete_tags_service_timeout: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `container_registry_expiration_policies_caching`<sup>Required</sup> <a name="container_registry_expiration_policies_caching" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.containerRegistryExpirationPoliciesCaching"></a>

```python
container_registry_expiration_policies_caching: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `container_registry_expiration_policies_worker_capacity`<sup>Required</sup> <a name="container_registry_expiration_policies_worker_capacity" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.containerRegistryExpirationPoliciesWorkerCapacity"></a>

```python
container_registry_expiration_policies_worker_capacity: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `container_registry_token_expire_delay`<sup>Required</sup> <a name="container_registry_token_expire_delay" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.containerRegistryTokenExpireDelay"></a>

```python
container_registry_token_expire_delay: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `deactivate_dormant_users`<sup>Required</sup> <a name="deactivate_dormant_users" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.deactivateDormantUsers"></a>

```python
deactivate_dormant_users: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `default_artifacts_expire_in`<sup>Required</sup> <a name="default_artifacts_expire_in" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.defaultArtifactsExpireIn"></a>

```python
default_artifacts_expire_in: str
```

- *Type:* str

---

##### `default_branch_name`<sup>Required</sup> <a name="default_branch_name" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.defaultBranchName"></a>

```python
default_branch_name: str
```

- *Type:* str

---

##### `default_branch_protection`<sup>Required</sup> <a name="default_branch_protection" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.defaultBranchProtection"></a>

```python
default_branch_protection: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `default_ci_config_path`<sup>Required</sup> <a name="default_ci_config_path" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.defaultCiConfigPath"></a>

```python
default_ci_config_path: str
```

- *Type:* str

---

##### `default_group_visibility`<sup>Required</sup> <a name="default_group_visibility" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.defaultGroupVisibility"></a>

```python
default_group_visibility: str
```

- *Type:* str

---

##### `default_project_creation`<sup>Required</sup> <a name="default_project_creation" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.defaultProjectCreation"></a>

```python
default_project_creation: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `default_projects_limit`<sup>Required</sup> <a name="default_projects_limit" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.defaultProjectsLimit"></a>

```python
default_projects_limit: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `default_project_visibility`<sup>Required</sup> <a name="default_project_visibility" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.defaultProjectVisibility"></a>

```python
default_project_visibility: str
```

- *Type:* str

---

##### `default_snippet_visibility`<sup>Required</sup> <a name="default_snippet_visibility" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.defaultSnippetVisibility"></a>

```python
default_snippet_visibility: str
```

- *Type:* str

---

##### `delayed_group_deletion`<sup>Required</sup> <a name="delayed_group_deletion" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.delayedGroupDeletion"></a>

```python
delayed_group_deletion: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `delayed_project_deletion`<sup>Required</sup> <a name="delayed_project_deletion" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.delayedProjectDeletion"></a>

```python
delayed_project_deletion: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `delete_inactive_projects`<sup>Required</sup> <a name="delete_inactive_projects" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.deleteInactiveProjects"></a>

```python
delete_inactive_projects: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `deletion_adjourned_period`<sup>Required</sup> <a name="deletion_adjourned_period" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.deletionAdjournedPeriod"></a>

```python
deletion_adjourned_period: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `diff_max_files`<sup>Required</sup> <a name="diff_max_files" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.diffMaxFiles"></a>

```python
diff_max_files: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `diff_max_lines`<sup>Required</sup> <a name="diff_max_lines" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.diffMaxLines"></a>

```python
diff_max_lines: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `diff_max_patch_bytes`<sup>Required</sup> <a name="diff_max_patch_bytes" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.diffMaxPatchBytes"></a>

```python
diff_max_patch_bytes: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `disabled_oauth_sign_in_sources`<sup>Required</sup> <a name="disabled_oauth_sign_in_sources" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.disabledOauthSignInSources"></a>

```python
disabled_oauth_sign_in_sources: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `disable_feed_token`<sup>Required</sup> <a name="disable_feed_token" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.disableFeedToken"></a>

```python
disable_feed_token: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `dns_rebinding_protection_enabled`<sup>Required</sup> <a name="dns_rebinding_protection_enabled" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.dnsRebindingProtectionEnabled"></a>

```python
dns_rebinding_protection_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `domain_allowlist`<sup>Required</sup> <a name="domain_allowlist" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.domainAllowlist"></a>

```python
domain_allowlist: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `domain_denylist`<sup>Required</sup> <a name="domain_denylist" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.domainDenylist"></a>

```python
domain_denylist: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `domain_denylist_enabled`<sup>Required</sup> <a name="domain_denylist_enabled" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.domainDenylistEnabled"></a>

```python
domain_denylist_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `dsa_key_restriction`<sup>Required</sup> <a name="dsa_key_restriction" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.dsaKeyRestriction"></a>

```python
dsa_key_restriction: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `ecdsa_key_restriction`<sup>Required</sup> <a name="ecdsa_key_restriction" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.ecdsaKeyRestriction"></a>

```python
ecdsa_key_restriction: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `ecdsa_sk_key_restriction`<sup>Required</sup> <a name="ecdsa_sk_key_restriction" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.ecdsaSkKeyRestriction"></a>

```python
ecdsa_sk_key_restriction: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `ed25519_key_restriction`<sup>Required</sup> <a name="ed25519_key_restriction" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.ed25519KeyRestriction"></a>

```python
ed25519_key_restriction: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `ed25519_sk_key_restriction`<sup>Required</sup> <a name="ed25519_sk_key_restriction" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.ed25519SkKeyRestriction"></a>

```python
ed25519_sk_key_restriction: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `eks_access_key_id`<sup>Required</sup> <a name="eks_access_key_id" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.eksAccessKeyId"></a>

```python
eks_access_key_id: str
```

- *Type:* str

---

##### `eks_account_id`<sup>Required</sup> <a name="eks_account_id" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.eksAccountId"></a>

```python
eks_account_id: str
```

- *Type:* str

---

##### `eks_integration_enabled`<sup>Required</sup> <a name="eks_integration_enabled" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.eksIntegrationEnabled"></a>

```python
eks_integration_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `eks_secret_access_key`<sup>Required</sup> <a name="eks_secret_access_key" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.eksSecretAccessKey"></a>

```python
eks_secret_access_key: str
```

- *Type:* str

---

##### `elasticsearch_aws`<sup>Required</sup> <a name="elasticsearch_aws" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.elasticsearchAws"></a>

```python
elasticsearch_aws: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `elasticsearch_aws_access_key`<sup>Required</sup> <a name="elasticsearch_aws_access_key" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.elasticsearchAwsAccessKey"></a>

```python
elasticsearch_aws_access_key: str
```

- *Type:* str

---

##### `elasticsearch_aws_region`<sup>Required</sup> <a name="elasticsearch_aws_region" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.elasticsearchAwsRegion"></a>

```python
elasticsearch_aws_region: str
```

- *Type:* str

---

##### `elasticsearch_aws_secret_access_key`<sup>Required</sup> <a name="elasticsearch_aws_secret_access_key" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.elasticsearchAwsSecretAccessKey"></a>

```python
elasticsearch_aws_secret_access_key: str
```

- *Type:* str

---

##### `elasticsearch_indexed_field_length_limit`<sup>Required</sup> <a name="elasticsearch_indexed_field_length_limit" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.elasticsearchIndexedFieldLengthLimit"></a>

```python
elasticsearch_indexed_field_length_limit: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `elasticsearch_indexed_file_size_limit_kb`<sup>Required</sup> <a name="elasticsearch_indexed_file_size_limit_kb" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.elasticsearchIndexedFileSizeLimitKb"></a>

```python
elasticsearch_indexed_file_size_limit_kb: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `elasticsearch_indexing`<sup>Required</sup> <a name="elasticsearch_indexing" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.elasticsearchIndexing"></a>

```python
elasticsearch_indexing: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `elasticsearch_limit_indexing`<sup>Required</sup> <a name="elasticsearch_limit_indexing" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.elasticsearchLimitIndexing"></a>

```python
elasticsearch_limit_indexing: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `elasticsearch_max_bulk_concurrency`<sup>Required</sup> <a name="elasticsearch_max_bulk_concurrency" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.elasticsearchMaxBulkConcurrency"></a>

```python
elasticsearch_max_bulk_concurrency: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `elasticsearch_max_bulk_size_mb`<sup>Required</sup> <a name="elasticsearch_max_bulk_size_mb" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.elasticsearchMaxBulkSizeMb"></a>

```python
elasticsearch_max_bulk_size_mb: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `elasticsearch_namespace_ids`<sup>Required</sup> <a name="elasticsearch_namespace_ids" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.elasticsearchNamespaceIds"></a>

```python
elasticsearch_namespace_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `elasticsearch_password`<sup>Required</sup> <a name="elasticsearch_password" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.elasticsearchPassword"></a>

```python
elasticsearch_password: str
```

- *Type:* str

---

##### `elasticsearch_project_ids`<sup>Required</sup> <a name="elasticsearch_project_ids" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.elasticsearchProjectIds"></a>

```python
elasticsearch_project_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `elasticsearch_search`<sup>Required</sup> <a name="elasticsearch_search" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.elasticsearchSearch"></a>

```python
elasticsearch_search: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `elasticsearch_url`<sup>Required</sup> <a name="elasticsearch_url" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.elasticsearchUrl"></a>

```python
elasticsearch_url: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `elasticsearch_username`<sup>Required</sup> <a name="elasticsearch_username" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.elasticsearchUsername"></a>

```python
elasticsearch_username: str
```

- *Type:* str

---

##### `email_additional_text`<sup>Required</sup> <a name="email_additional_text" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.emailAdditionalText"></a>

```python
email_additional_text: str
```

- *Type:* str

---

##### `email_author_in_body`<sup>Required</sup> <a name="email_author_in_body" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.emailAuthorInBody"></a>

```python
email_author_in_body: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `enabled_git_access_protocol`<sup>Required</sup> <a name="enabled_git_access_protocol" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.enabledGitAccessProtocol"></a>

```python
enabled_git_access_protocol: str
```

- *Type:* str

---

##### `enforce_namespace_storage_limit`<sup>Required</sup> <a name="enforce_namespace_storage_limit" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.enforceNamespaceStorageLimit"></a>

```python
enforce_namespace_storage_limit: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `enforce_terms`<sup>Required</sup> <a name="enforce_terms" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.enforceTerms"></a>

```python
enforce_terms: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `external_auth_client_cert`<sup>Required</sup> <a name="external_auth_client_cert" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.externalAuthClientCert"></a>

```python
external_auth_client_cert: str
```

- *Type:* str

---

##### `external_auth_client_key`<sup>Required</sup> <a name="external_auth_client_key" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.externalAuthClientKey"></a>

```python
external_auth_client_key: str
```

- *Type:* str

---

##### `external_auth_client_key_pass`<sup>Required</sup> <a name="external_auth_client_key_pass" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.externalAuthClientKeyPass"></a>

```python
external_auth_client_key_pass: str
```

- *Type:* str

---

##### `external_authorization_service_default_label`<sup>Required</sup> <a name="external_authorization_service_default_label" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.externalAuthorizationServiceDefaultLabel"></a>

```python
external_authorization_service_default_label: str
```

- *Type:* str

---

##### `external_authorization_service_enabled`<sup>Required</sup> <a name="external_authorization_service_enabled" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.externalAuthorizationServiceEnabled"></a>

```python
external_authorization_service_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `external_authorization_service_timeout`<sup>Required</sup> <a name="external_authorization_service_timeout" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.externalAuthorizationServiceTimeout"></a>

```python
external_authorization_service_timeout: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `external_authorization_service_url`<sup>Required</sup> <a name="external_authorization_service_url" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.externalAuthorizationServiceUrl"></a>

```python
external_authorization_service_url: str
```

- *Type:* str

---

##### `external_pipeline_validation_service_timeout`<sup>Required</sup> <a name="external_pipeline_validation_service_timeout" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.externalPipelineValidationServiceTimeout"></a>

```python
external_pipeline_validation_service_timeout: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `external_pipeline_validation_service_token`<sup>Required</sup> <a name="external_pipeline_validation_service_token" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.externalPipelineValidationServiceToken"></a>

```python
external_pipeline_validation_service_token: str
```

- *Type:* str

---

##### `external_pipeline_validation_service_url`<sup>Required</sup> <a name="external_pipeline_validation_service_url" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.externalPipelineValidationServiceUrl"></a>

```python
external_pipeline_validation_service_url: str
```

- *Type:* str

---

##### `file_template_project_id`<sup>Required</sup> <a name="file_template_project_id" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.fileTemplateProjectId"></a>

```python
file_template_project_id: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `first_day_of_week`<sup>Required</sup> <a name="first_day_of_week" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.firstDayOfWeek"></a>

```python
first_day_of_week: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `geo_node_allowed_ips`<sup>Required</sup> <a name="geo_node_allowed_ips" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.geoNodeAllowedIps"></a>

```python
geo_node_allowed_ips: str
```

- *Type:* str

---

##### `geo_status_timeout`<sup>Required</sup> <a name="geo_status_timeout" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.geoStatusTimeout"></a>

```python
geo_status_timeout: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `gitaly_timeout_default`<sup>Required</sup> <a name="gitaly_timeout_default" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.gitalyTimeoutDefault"></a>

```python
gitaly_timeout_default: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `gitaly_timeout_fast`<sup>Required</sup> <a name="gitaly_timeout_fast" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.gitalyTimeoutFast"></a>

```python
gitaly_timeout_fast: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `gitaly_timeout_medium`<sup>Required</sup> <a name="gitaly_timeout_medium" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.gitalyTimeoutMedium"></a>

```python
gitaly_timeout_medium: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `git_rate_limit_users_allowlist`<sup>Required</sup> <a name="git_rate_limit_users_allowlist" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.gitRateLimitUsersAllowlist"></a>

```python
git_rate_limit_users_allowlist: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `git_two_factor_session_expiry`<sup>Required</sup> <a name="git_two_factor_session_expiry" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.gitTwoFactorSessionExpiry"></a>

```python
git_two_factor_session_expiry: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `grafana_enabled`<sup>Required</sup> <a name="grafana_enabled" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.grafanaEnabled"></a>

```python
grafana_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `grafana_url`<sup>Required</sup> <a name="grafana_url" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.grafanaUrl"></a>

```python
grafana_url: str
```

- *Type:* str

---

##### `gravatar_enabled`<sup>Required</sup> <a name="gravatar_enabled" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.gravatarEnabled"></a>

```python
gravatar_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `group_owners_can_manage_default_branch_protection`<sup>Required</sup> <a name="group_owners_can_manage_default_branch_protection" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.groupOwnersCanManageDefaultBranchProtection"></a>

```python
group_owners_can_manage_default_branch_protection: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `hashed_storage_enabled`<sup>Required</sup> <a name="hashed_storage_enabled" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.hashedStorageEnabled"></a>

```python
hashed_storage_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `help_page_hide_commercial_content`<sup>Required</sup> <a name="help_page_hide_commercial_content" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.helpPageHideCommercialContent"></a>

```python
help_page_hide_commercial_content: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `help_page_support_url`<sup>Required</sup> <a name="help_page_support_url" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.helpPageSupportUrl"></a>

```python
help_page_support_url: str
```

- *Type:* str

---

##### `help_page_text`<sup>Required</sup> <a name="help_page_text" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.helpPageText"></a>

```python
help_page_text: str
```

- *Type:* str

---

##### `help_text`<sup>Required</sup> <a name="help_text" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.helpText"></a>

```python
help_text: str
```

- *Type:* str

---

##### `hide_third_party_offers`<sup>Required</sup> <a name="hide_third_party_offers" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.hideThirdPartyOffers"></a>

```python
hide_third_party_offers: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `home_page_url`<sup>Required</sup> <a name="home_page_url" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.homePageUrl"></a>

```python
home_page_url: str
```

- *Type:* str

---

##### `housekeeping_enabled`<sup>Required</sup> <a name="housekeeping_enabled" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.housekeepingEnabled"></a>

```python
housekeeping_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `housekeeping_full_repack_period`<sup>Required</sup> <a name="housekeeping_full_repack_period" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.housekeepingFullRepackPeriod"></a>

```python
housekeeping_full_repack_period: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `housekeeping_gc_period`<sup>Required</sup> <a name="housekeeping_gc_period" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.housekeepingGcPeriod"></a>

```python
housekeeping_gc_period: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `housekeeping_incremental_repack_period`<sup>Required</sup> <a name="housekeeping_incremental_repack_period" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.housekeepingIncrementalRepackPeriod"></a>

```python
housekeeping_incremental_repack_period: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `html_emails_enabled`<sup>Required</sup> <a name="html_emails_enabled" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.htmlEmailsEnabled"></a>

```python
html_emails_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `import_sources`<sup>Required</sup> <a name="import_sources" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.importSources"></a>

```python
import_sources: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `inactive_projects_delete_after_months`<sup>Required</sup> <a name="inactive_projects_delete_after_months" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.inactiveProjectsDeleteAfterMonths"></a>

```python
inactive_projects_delete_after_months: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `inactive_projects_min_size_mb`<sup>Required</sup> <a name="inactive_projects_min_size_mb" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.inactiveProjectsMinSizeMb"></a>

```python
inactive_projects_min_size_mb: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `inactive_projects_send_warning_email_after_months`<sup>Required</sup> <a name="inactive_projects_send_warning_email_after_months" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.inactiveProjectsSendWarningEmailAfterMonths"></a>

```python
inactive_projects_send_warning_email_after_months: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `in_product_marketing_emails_enabled`<sup>Required</sup> <a name="in_product_marketing_emails_enabled" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.inProductMarketingEmailsEnabled"></a>

```python
in_product_marketing_emails_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `invisible_captcha_enabled`<sup>Required</sup> <a name="invisible_captcha_enabled" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.invisibleCaptchaEnabled"></a>

```python
invisible_captcha_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `issues_create_limit`<sup>Required</sup> <a name="issues_create_limit" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.issuesCreateLimit"></a>

```python
issues_create_limit: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `keep_latest_artifact`<sup>Required</sup> <a name="keep_latest_artifact" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.keepLatestArtifact"></a>

```python
keep_latest_artifact: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `local_markdown_version`<sup>Required</sup> <a name="local_markdown_version" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.localMarkdownVersion"></a>

```python
local_markdown_version: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `mailgun_events_enabled`<sup>Required</sup> <a name="mailgun_events_enabled" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.mailgunEventsEnabled"></a>

```python
mailgun_events_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `mailgun_signing_key`<sup>Required</sup> <a name="mailgun_signing_key" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.mailgunSigningKey"></a>

```python
mailgun_signing_key: str
```

- *Type:* str

---

##### `maintenance_mode`<sup>Required</sup> <a name="maintenance_mode" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.maintenanceMode"></a>

```python
maintenance_mode: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `maintenance_mode_message`<sup>Required</sup> <a name="maintenance_mode_message" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.maintenanceModeMessage"></a>

```python
maintenance_mode_message: str
```

- *Type:* str

---

##### `max_artifacts_size`<sup>Required</sup> <a name="max_artifacts_size" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.maxArtifactsSize"></a>

```python
max_artifacts_size: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max_attachment_size`<sup>Required</sup> <a name="max_attachment_size" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.maxAttachmentSize"></a>

```python
max_attachment_size: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max_export_size`<sup>Required</sup> <a name="max_export_size" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.maxExportSize"></a>

```python
max_export_size: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max_import_size`<sup>Required</sup> <a name="max_import_size" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.maxImportSize"></a>

```python
max_import_size: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max_number_of_repository_downloads`<sup>Required</sup> <a name="max_number_of_repository_downloads" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.maxNumberOfRepositoryDownloads"></a>

```python
max_number_of_repository_downloads: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max_number_of_repository_downloads_within_time_period`<sup>Required</sup> <a name="max_number_of_repository_downloads_within_time_period" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.maxNumberOfRepositoryDownloadsWithinTimePeriod"></a>

```python
max_number_of_repository_downloads_within_time_period: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max_pages_size`<sup>Required</sup> <a name="max_pages_size" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.maxPagesSize"></a>

```python
max_pages_size: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max_personal_access_token_lifetime`<sup>Required</sup> <a name="max_personal_access_token_lifetime" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.maxPersonalAccessTokenLifetime"></a>

```python
max_personal_access_token_lifetime: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max_ssh_key_lifetime`<sup>Required</sup> <a name="max_ssh_key_lifetime" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.maxSshKeyLifetime"></a>

```python
max_ssh_key_lifetime: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `metrics_method_call_threshold`<sup>Required</sup> <a name="metrics_method_call_threshold" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.metricsMethodCallThreshold"></a>

```python
metrics_method_call_threshold: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `mirror_available`<sup>Required</sup> <a name="mirror_available" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.mirrorAvailable"></a>

```python
mirror_available: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `mirror_capacity_threshold`<sup>Required</sup> <a name="mirror_capacity_threshold" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.mirrorCapacityThreshold"></a>

```python
mirror_capacity_threshold: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `mirror_max_capacity`<sup>Required</sup> <a name="mirror_max_capacity" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.mirrorMaxCapacity"></a>

```python
mirror_max_capacity: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `mirror_max_delay`<sup>Required</sup> <a name="mirror_max_delay" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.mirrorMaxDelay"></a>

```python
mirror_max_delay: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `npm_package_requests_forwarding`<sup>Required</sup> <a name="npm_package_requests_forwarding" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.npmPackageRequestsForwarding"></a>

```python
npm_package_requests_forwarding: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `outbound_local_requests_whitelist`<sup>Required</sup> <a name="outbound_local_requests_whitelist" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.outboundLocalRequestsWhitelist"></a>

```python
outbound_local_requests_whitelist: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `package_registry_cleanup_policies_worker_capacity`<sup>Required</sup> <a name="package_registry_cleanup_policies_worker_capacity" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.packageRegistryCleanupPoliciesWorkerCapacity"></a>

```python
package_registry_cleanup_policies_worker_capacity: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `pages_domain_verification_enabled`<sup>Required</sup> <a name="pages_domain_verification_enabled" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.pagesDomainVerificationEnabled"></a>

```python
pages_domain_verification_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `password_authentication_enabled_for_git`<sup>Required</sup> <a name="password_authentication_enabled_for_git" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.passwordAuthenticationEnabledForGit"></a>

```python
password_authentication_enabled_for_git: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `password_authentication_enabled_for_web`<sup>Required</sup> <a name="password_authentication_enabled_for_web" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.passwordAuthenticationEnabledForWeb"></a>

```python
password_authentication_enabled_for_web: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `password_lowercase_required`<sup>Required</sup> <a name="password_lowercase_required" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.passwordLowercaseRequired"></a>

```python
password_lowercase_required: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `password_number_required`<sup>Required</sup> <a name="password_number_required" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.passwordNumberRequired"></a>

```python
password_number_required: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `password_symbol_required`<sup>Required</sup> <a name="password_symbol_required" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.passwordSymbolRequired"></a>

```python
password_symbol_required: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `password_uppercase_required`<sup>Required</sup> <a name="password_uppercase_required" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.passwordUppercaseRequired"></a>

```python
password_uppercase_required: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `performance_bar_allowed_group_path`<sup>Required</sup> <a name="performance_bar_allowed_group_path" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.performanceBarAllowedGroupPath"></a>

```python
performance_bar_allowed_group_path: str
```

- *Type:* str

---

##### `personal_access_token_prefix`<sup>Required</sup> <a name="personal_access_token_prefix" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.personalAccessTokenPrefix"></a>

```python
personal_access_token_prefix: str
```

- *Type:* str

---

##### `pipeline_limit_per_project_user_sha`<sup>Required</sup> <a name="pipeline_limit_per_project_user_sha" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.pipelineLimitPerProjectUserSha"></a>

```python
pipeline_limit_per_project_user_sha: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `plantuml_enabled`<sup>Required</sup> <a name="plantuml_enabled" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.plantumlEnabled"></a>

```python
plantuml_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `plantuml_url`<sup>Required</sup> <a name="plantuml_url" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.plantumlUrl"></a>

```python
plantuml_url: str
```

- *Type:* str

---

##### `polling_interval_multiplier`<sup>Required</sup> <a name="polling_interval_multiplier" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.pollingIntervalMultiplier"></a>

```python
polling_interval_multiplier: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `project_export_enabled`<sup>Required</sup> <a name="project_export_enabled" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.projectExportEnabled"></a>

```python
project_export_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `prometheus_metrics_enabled`<sup>Required</sup> <a name="prometheus_metrics_enabled" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.prometheusMetricsEnabled"></a>

```python
prometheus_metrics_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `protected_ci_variables`<sup>Required</sup> <a name="protected_ci_variables" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.protectedCiVariables"></a>

```python
protected_ci_variables: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `push_event_activities_limit`<sup>Required</sup> <a name="push_event_activities_limit" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.pushEventActivitiesLimit"></a>

```python
push_event_activities_limit: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `push_event_hooks_limit`<sup>Required</sup> <a name="push_event_hooks_limit" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.pushEventHooksLimit"></a>

```python
push_event_hooks_limit: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `pypi_package_requests_forwarding`<sup>Required</sup> <a name="pypi_package_requests_forwarding" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.pypiPackageRequestsForwarding"></a>

```python
pypi_package_requests_forwarding: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `rate_limiting_response_text`<sup>Required</sup> <a name="rate_limiting_response_text" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.rateLimitingResponseText"></a>

```python
rate_limiting_response_text: str
```

- *Type:* str

---

##### `raw_blob_request_limit`<sup>Required</sup> <a name="raw_blob_request_limit" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.rawBlobRequestLimit"></a>

```python
raw_blob_request_limit: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `recaptcha_enabled`<sup>Required</sup> <a name="recaptcha_enabled" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.recaptchaEnabled"></a>

```python
recaptcha_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `recaptcha_private_key`<sup>Required</sup> <a name="recaptcha_private_key" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.recaptchaPrivateKey"></a>

```python
recaptcha_private_key: str
```

- *Type:* str

---

##### `recaptcha_site_key`<sup>Required</sup> <a name="recaptcha_site_key" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.recaptchaSiteKey"></a>

```python
recaptcha_site_key: str
```

- *Type:* str

---

##### `receive_max_input_size`<sup>Required</sup> <a name="receive_max_input_size" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.receiveMaxInputSize"></a>

```python
receive_max_input_size: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `repository_checks_enabled`<sup>Required</sup> <a name="repository_checks_enabled" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.repositoryChecksEnabled"></a>

```python
repository_checks_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `repository_size_limit`<sup>Required</sup> <a name="repository_size_limit" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.repositorySizeLimit"></a>

```python
repository_size_limit: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `repository_storages`<sup>Required</sup> <a name="repository_storages" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.repositoryStorages"></a>

```python
repository_storages: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `repository_storages_weighted`<sup>Required</sup> <a name="repository_storages_weighted" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.repositoryStoragesWeighted"></a>

```python
repository_storages_weighted: typing.Mapping[typing.Union[int, float]]
```

- *Type:* typing.Mapping[typing.Union[int, float]]

---

##### `require_admin_approval_after_user_signup`<sup>Required</sup> <a name="require_admin_approval_after_user_signup" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.requireAdminApprovalAfterUserSignup"></a>

```python
require_admin_approval_after_user_signup: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `require_two_factor_authentication`<sup>Required</sup> <a name="require_two_factor_authentication" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.requireTwoFactorAuthentication"></a>

```python
require_two_factor_authentication: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `restricted_visibility_levels`<sup>Required</sup> <a name="restricted_visibility_levels" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.restrictedVisibilityLevels"></a>

```python
restricted_visibility_levels: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `rsa_key_restriction`<sup>Required</sup> <a name="rsa_key_restriction" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.rsaKeyRestriction"></a>

```python
rsa_key_restriction: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `search_rate_limit`<sup>Required</sup> <a name="search_rate_limit" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.searchRateLimit"></a>

```python
search_rate_limit: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `search_rate_limit_unauthenticated`<sup>Required</sup> <a name="search_rate_limit_unauthenticated" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.searchRateLimitUnauthenticated"></a>

```python
search_rate_limit_unauthenticated: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `send_user_confirmation_email`<sup>Required</sup> <a name="send_user_confirmation_email" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.sendUserConfirmationEmail"></a>

```python
send_user_confirmation_email: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `session_expire_delay`<sup>Required</sup> <a name="session_expire_delay" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.sessionExpireDelay"></a>

```python
session_expire_delay: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `shared_runners_enabled`<sup>Required</sup> <a name="shared_runners_enabled" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.sharedRunnersEnabled"></a>

```python
shared_runners_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `shared_runners_minutes`<sup>Required</sup> <a name="shared_runners_minutes" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.sharedRunnersMinutes"></a>

```python
shared_runners_minutes: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `shared_runners_text`<sup>Required</sup> <a name="shared_runners_text" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.sharedRunnersText"></a>

```python
shared_runners_text: str
```

- *Type:* str

---

##### `sidekiq_job_limiter_compression_threshold_bytes`<sup>Required</sup> <a name="sidekiq_job_limiter_compression_threshold_bytes" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.sidekiqJobLimiterCompressionThresholdBytes"></a>

```python
sidekiq_job_limiter_compression_threshold_bytes: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `sidekiq_job_limiter_limit_bytes`<sup>Required</sup> <a name="sidekiq_job_limiter_limit_bytes" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.sidekiqJobLimiterLimitBytes"></a>

```python
sidekiq_job_limiter_limit_bytes: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `sidekiq_job_limiter_mode`<sup>Required</sup> <a name="sidekiq_job_limiter_mode" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.sidekiqJobLimiterMode"></a>

```python
sidekiq_job_limiter_mode: str
```

- *Type:* str

---

##### `sign_in_text`<sup>Required</sup> <a name="sign_in_text" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.signInText"></a>

```python
sign_in_text: str
```

- *Type:* str

---

##### `signup_enabled`<sup>Required</sup> <a name="signup_enabled" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.signupEnabled"></a>

```python
signup_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `slack_app_enabled`<sup>Required</sup> <a name="slack_app_enabled" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.slackAppEnabled"></a>

```python
slack_app_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `slack_app_id`<sup>Required</sup> <a name="slack_app_id" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.slackAppId"></a>

```python
slack_app_id: str
```

- *Type:* str

---

##### `slack_app_secret`<sup>Required</sup> <a name="slack_app_secret" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.slackAppSecret"></a>

```python
slack_app_secret: str
```

- *Type:* str

---

##### `slack_app_signing_secret`<sup>Required</sup> <a name="slack_app_signing_secret" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.slackAppSigningSecret"></a>

```python
slack_app_signing_secret: str
```

- *Type:* str

---

##### `slack_app_verification_token`<sup>Required</sup> <a name="slack_app_verification_token" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.slackAppVerificationToken"></a>

```python
slack_app_verification_token: str
```

- *Type:* str

---

##### `snippet_size_limit`<sup>Required</sup> <a name="snippet_size_limit" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.snippetSizeLimit"></a>

```python
snippet_size_limit: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `snowplow_app_id`<sup>Required</sup> <a name="snowplow_app_id" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.snowplowAppId"></a>

```python
snowplow_app_id: str
```

- *Type:* str

---

##### `snowplow_collector_hostname`<sup>Required</sup> <a name="snowplow_collector_hostname" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.snowplowCollectorHostname"></a>

```python
snowplow_collector_hostname: str
```

- *Type:* str

---

##### `snowplow_cookie_domain`<sup>Required</sup> <a name="snowplow_cookie_domain" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.snowplowCookieDomain"></a>

```python
snowplow_cookie_domain: str
```

- *Type:* str

---

##### `snowplow_enabled`<sup>Required</sup> <a name="snowplow_enabled" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.snowplowEnabled"></a>

```python
snowplow_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `sourcegraph_enabled`<sup>Required</sup> <a name="sourcegraph_enabled" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.sourcegraphEnabled"></a>

```python
sourcegraph_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `sourcegraph_public_only`<sup>Required</sup> <a name="sourcegraph_public_only" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.sourcegraphPublicOnly"></a>

```python
sourcegraph_public_only: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `sourcegraph_url`<sup>Required</sup> <a name="sourcegraph_url" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.sourcegraphUrl"></a>

```python
sourcegraph_url: str
```

- *Type:* str

---

##### `spam_check_api_key`<sup>Required</sup> <a name="spam_check_api_key" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.spamCheckApiKey"></a>

```python
spam_check_api_key: str
```

- *Type:* str

---

##### `spam_check_endpoint_enabled`<sup>Required</sup> <a name="spam_check_endpoint_enabled" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.spamCheckEndpointEnabled"></a>

```python
spam_check_endpoint_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `spam_check_endpoint_url`<sup>Required</sup> <a name="spam_check_endpoint_url" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.spamCheckEndpointUrl"></a>

```python
spam_check_endpoint_url: str
```

- *Type:* str

---

##### `suggest_pipeline_enabled`<sup>Required</sup> <a name="suggest_pipeline_enabled" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.suggestPipelineEnabled"></a>

```python
suggest_pipeline_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `terminal_max_session_time`<sup>Required</sup> <a name="terminal_max_session_time" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.terminalMaxSessionTime"></a>

```python
terminal_max_session_time: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `terms`<sup>Required</sup> <a name="terms" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.terms"></a>

```python
terms: str
```

- *Type:* str

---

##### `throttle_authenticated_api_enabled`<sup>Required</sup> <a name="throttle_authenticated_api_enabled" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.throttleAuthenticatedApiEnabled"></a>

```python
throttle_authenticated_api_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `throttle_authenticated_api_period_in_seconds`<sup>Required</sup> <a name="throttle_authenticated_api_period_in_seconds" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.throttleAuthenticatedApiPeriodInSeconds"></a>

```python
throttle_authenticated_api_period_in_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `throttle_authenticated_api_requests_per_period`<sup>Required</sup> <a name="throttle_authenticated_api_requests_per_period" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.throttleAuthenticatedApiRequestsPerPeriod"></a>

```python
throttle_authenticated_api_requests_per_period: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `throttle_authenticated_packages_api_enabled`<sup>Required</sup> <a name="throttle_authenticated_packages_api_enabled" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.throttleAuthenticatedPackagesApiEnabled"></a>

```python
throttle_authenticated_packages_api_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `throttle_authenticated_packages_api_period_in_seconds`<sup>Required</sup> <a name="throttle_authenticated_packages_api_period_in_seconds" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.throttleAuthenticatedPackagesApiPeriodInSeconds"></a>

```python
throttle_authenticated_packages_api_period_in_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `throttle_authenticated_packages_api_requests_per_period`<sup>Required</sup> <a name="throttle_authenticated_packages_api_requests_per_period" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.throttleAuthenticatedPackagesApiRequestsPerPeriod"></a>

```python
throttle_authenticated_packages_api_requests_per_period: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `throttle_authenticated_web_enabled`<sup>Required</sup> <a name="throttle_authenticated_web_enabled" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.throttleAuthenticatedWebEnabled"></a>

```python
throttle_authenticated_web_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `throttle_authenticated_web_period_in_seconds`<sup>Required</sup> <a name="throttle_authenticated_web_period_in_seconds" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.throttleAuthenticatedWebPeriodInSeconds"></a>

```python
throttle_authenticated_web_period_in_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `throttle_authenticated_web_requests_per_period`<sup>Required</sup> <a name="throttle_authenticated_web_requests_per_period" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.throttleAuthenticatedWebRequestsPerPeriod"></a>

```python
throttle_authenticated_web_requests_per_period: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `throttle_unauthenticated_api_enabled`<sup>Required</sup> <a name="throttle_unauthenticated_api_enabled" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.throttleUnauthenticatedApiEnabled"></a>

```python
throttle_unauthenticated_api_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `throttle_unauthenticated_api_period_in_seconds`<sup>Required</sup> <a name="throttle_unauthenticated_api_period_in_seconds" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.throttleUnauthenticatedApiPeriodInSeconds"></a>

```python
throttle_unauthenticated_api_period_in_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `throttle_unauthenticated_api_requests_per_period`<sup>Required</sup> <a name="throttle_unauthenticated_api_requests_per_period" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.throttleUnauthenticatedApiRequestsPerPeriod"></a>

```python
throttle_unauthenticated_api_requests_per_period: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `throttle_unauthenticated_packages_api_enabled`<sup>Required</sup> <a name="throttle_unauthenticated_packages_api_enabled" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.throttleUnauthenticatedPackagesApiEnabled"></a>

```python
throttle_unauthenticated_packages_api_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `throttle_unauthenticated_packages_api_period_in_seconds`<sup>Required</sup> <a name="throttle_unauthenticated_packages_api_period_in_seconds" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.throttleUnauthenticatedPackagesApiPeriodInSeconds"></a>

```python
throttle_unauthenticated_packages_api_period_in_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `throttle_unauthenticated_packages_api_requests_per_period`<sup>Required</sup> <a name="throttle_unauthenticated_packages_api_requests_per_period" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.throttleUnauthenticatedPackagesApiRequestsPerPeriod"></a>

```python
throttle_unauthenticated_packages_api_requests_per_period: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `throttle_unauthenticated_web_enabled`<sup>Required</sup> <a name="throttle_unauthenticated_web_enabled" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.throttleUnauthenticatedWebEnabled"></a>

```python
throttle_unauthenticated_web_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `throttle_unauthenticated_web_period_in_seconds`<sup>Required</sup> <a name="throttle_unauthenticated_web_period_in_seconds" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.throttleUnauthenticatedWebPeriodInSeconds"></a>

```python
throttle_unauthenticated_web_period_in_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `throttle_unauthenticated_web_requests_per_period`<sup>Required</sup> <a name="throttle_unauthenticated_web_requests_per_period" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.throttleUnauthenticatedWebRequestsPerPeriod"></a>

```python
throttle_unauthenticated_web_requests_per_period: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `time_tracking_limit_to_hours`<sup>Required</sup> <a name="time_tracking_limit_to_hours" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.timeTrackingLimitToHours"></a>

```python
time_tracking_limit_to_hours: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `two_factor_grace_period`<sup>Required</sup> <a name="two_factor_grace_period" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.twoFactorGracePeriod"></a>

```python
two_factor_grace_period: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `unique_ips_limit_enabled`<sup>Required</sup> <a name="unique_ips_limit_enabled" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.uniqueIpsLimitEnabled"></a>

```python
unique_ips_limit_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `unique_ips_limit_per_user`<sup>Required</sup> <a name="unique_ips_limit_per_user" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.uniqueIpsLimitPerUser"></a>

```python
unique_ips_limit_per_user: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `unique_ips_limit_time_window`<sup>Required</sup> <a name="unique_ips_limit_time_window" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.uniqueIpsLimitTimeWindow"></a>

```python
unique_ips_limit_time_window: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `usage_ping_enabled`<sup>Required</sup> <a name="usage_ping_enabled" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.usagePingEnabled"></a>

```python
usage_ping_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `user_deactivation_emails_enabled`<sup>Required</sup> <a name="user_deactivation_emails_enabled" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.userDeactivationEmailsEnabled"></a>

```python
user_deactivation_emails_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `user_default_external`<sup>Required</sup> <a name="user_default_external" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.userDefaultExternal"></a>

```python
user_default_external: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `user_default_internal_regex`<sup>Required</sup> <a name="user_default_internal_regex" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.userDefaultInternalRegex"></a>

```python
user_default_internal_regex: str
```

- *Type:* str

---

##### `user_oauth_applications`<sup>Required</sup> <a name="user_oauth_applications" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.userOauthApplications"></a>

```python
user_oauth_applications: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `user_show_add_ssh_key_message`<sup>Required</sup> <a name="user_show_add_ssh_key_message" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.userShowAddSshKeyMessage"></a>

```python
user_show_add_ssh_key_message: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `version_check_enabled`<sup>Required</sup> <a name="version_check_enabled" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.versionCheckEnabled"></a>

```python
version_check_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `web_ide_clientside_preview_enabled`<sup>Required</sup> <a name="web_ide_clientside_preview_enabled" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.webIdeClientsidePreviewEnabled"></a>

```python
web_ide_clientside_preview_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `whats_new_variant`<sup>Required</sup> <a name="whats_new_variant" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.whatsNewVariant"></a>

```python
whats_new_variant: str
```

- *Type:* str

---

##### `wiki_page_max_content_bytes`<sup>Required</sup> <a name="wiki_page_max_content_bytes" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.wikiPageMaxContentBytes"></a>

```python
wiki_page_max_content_bytes: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### ApplicationSettingsConfig <a name="ApplicationSettingsConfig" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_gitlab import application_settings

applicationSettings.ApplicationSettingsConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  abuse_notification_email: str = None,
  admin_mode: typing.Union[bool, IResolvable] = None,
  after_sign_out_path: str = None,
  after_sign_up_text: str = None,
  akismet_api_key: str = None,
  akismet_enabled: typing.Union[bool, IResolvable] = None,
  allow_group_owners_to_manage_ldap: typing.Union[bool, IResolvable] = None,
  allow_local_requests_from_system_hooks: typing.Union[bool, IResolvable] = None,
  allow_local_requests_from_web_hooks_and_services: typing.Union[bool, IResolvable] = None,
  archive_builds_in_human_readable: str = None,
  asset_proxy_allowlist: typing.List[str] = None,
  asset_proxy_enabled: typing.Union[bool, IResolvable] = None,
  asset_proxy_secret_key: str = None,
  asset_proxy_url: str = None,
  authorized_keys_enabled: typing.Union[bool, IResolvable] = None,
  auto_devops_domain: str = None,
  auto_devops_enabled: typing.Union[bool, IResolvable] = None,
  automatic_purchased_storage_allocation: typing.Union[bool, IResolvable] = None,
  can_create_group: typing.Union[bool, IResolvable] = None,
  check_namespace_plan: typing.Union[bool, IResolvable] = None,
  commit_email_hostname: str = None,
  container_expiration_policies_enable_historic_entries: typing.Union[bool, IResolvable] = None,
  container_registry_cleanup_tags_service_max_list_size: typing.Union[int, float] = None,
  container_registry_delete_tags_service_timeout: typing.Union[int, float] = None,
  container_registry_expiration_policies_caching: typing.Union[bool, IResolvable] = None,
  container_registry_expiration_policies_worker_capacity: typing.Union[int, float] = None,
  container_registry_token_expire_delay: typing.Union[int, float] = None,
  deactivate_dormant_users: typing.Union[bool, IResolvable] = None,
  default_artifacts_expire_in: str = None,
  default_branch_name: str = None,
  default_branch_protection: typing.Union[int, float] = None,
  default_ci_config_path: str = None,
  default_group_visibility: str = None,
  default_project_creation: typing.Union[int, float] = None,
  default_projects_limit: typing.Union[int, float] = None,
  default_project_visibility: str = None,
  default_snippet_visibility: str = None,
  delayed_group_deletion: typing.Union[bool, IResolvable] = None,
  delayed_project_deletion: typing.Union[bool, IResolvable] = None,
  delete_inactive_projects: typing.Union[bool, IResolvable] = None,
  deletion_adjourned_period: typing.Union[int, float] = None,
  diff_max_files: typing.Union[int, float] = None,
  diff_max_lines: typing.Union[int, float] = None,
  diff_max_patch_bytes: typing.Union[int, float] = None,
  disabled_oauth_sign_in_sources: typing.List[str] = None,
  disable_feed_token: typing.Union[bool, IResolvable] = None,
  dns_rebinding_protection_enabled: typing.Union[bool, IResolvable] = None,
  domain_allowlist: typing.List[str] = None,
  domain_denylist: typing.List[str] = None,
  domain_denylist_enabled: typing.Union[bool, IResolvable] = None,
  dsa_key_restriction: typing.Union[int, float] = None,
  ecdsa_key_restriction: typing.Union[int, float] = None,
  ecdsa_sk_key_restriction: typing.Union[int, float] = None,
  ed25519_key_restriction: typing.Union[int, float] = None,
  ed25519_sk_key_restriction: typing.Union[int, float] = None,
  eks_access_key_id: str = None,
  eks_account_id: str = None,
  eks_integration_enabled: typing.Union[bool, IResolvable] = None,
  eks_secret_access_key: str = None,
  elasticsearch_aws: typing.Union[bool, IResolvable] = None,
  elasticsearch_aws_access_key: str = None,
  elasticsearch_aws_region: str = None,
  elasticsearch_aws_secret_access_key: str = None,
  elasticsearch_indexed_field_length_limit: typing.Union[int, float] = None,
  elasticsearch_indexed_file_size_limit_kb: typing.Union[int, float] = None,
  elasticsearch_indexing: typing.Union[bool, IResolvable] = None,
  elasticsearch_limit_indexing: typing.Union[bool, IResolvable] = None,
  elasticsearch_max_bulk_concurrency: typing.Union[int, float] = None,
  elasticsearch_max_bulk_size_mb: typing.Union[int, float] = None,
  elasticsearch_namespace_ids: typing.List[str] = None,
  elasticsearch_password: str = None,
  elasticsearch_project_ids: typing.List[str] = None,
  elasticsearch_search: typing.Union[bool, IResolvable] = None,
  elasticsearch_url: typing.List[str] = None,
  elasticsearch_username: str = None,
  email_additional_text: str = None,
  email_author_in_body: typing.Union[bool, IResolvable] = None,
  enabled_git_access_protocol: str = None,
  enforce_namespace_storage_limit: typing.Union[bool, IResolvable] = None,
  enforce_terms: typing.Union[bool, IResolvable] = None,
  external_auth_client_cert: str = None,
  external_auth_client_key: str = None,
  external_auth_client_key_pass: str = None,
  external_authorization_service_default_label: str = None,
  external_authorization_service_enabled: typing.Union[bool, IResolvable] = None,
  external_authorization_service_timeout: typing.Union[int, float] = None,
  external_authorization_service_url: str = None,
  external_pipeline_validation_service_timeout: typing.Union[int, float] = None,
  external_pipeline_validation_service_token: str = None,
  external_pipeline_validation_service_url: str = None,
  file_template_project_id: typing.Union[int, float] = None,
  first_day_of_week: typing.Union[int, float] = None,
  geo_node_allowed_ips: str = None,
  geo_status_timeout: typing.Union[int, float] = None,
  gitaly_timeout_default: typing.Union[int, float] = None,
  gitaly_timeout_fast: typing.Union[int, float] = None,
  gitaly_timeout_medium: typing.Union[int, float] = None,
  git_rate_limit_users_allowlist: typing.List[str] = None,
  git_two_factor_session_expiry: typing.Union[int, float] = None,
  grafana_enabled: typing.Union[bool, IResolvable] = None,
  grafana_url: str = None,
  gravatar_enabled: typing.Union[bool, IResolvable] = None,
  group_owners_can_manage_default_branch_protection: typing.Union[bool, IResolvable] = None,
  hashed_storage_enabled: typing.Union[bool, IResolvable] = None,
  help_page_hide_commercial_content: typing.Union[bool, IResolvable] = None,
  help_page_support_url: str = None,
  help_page_text: str = None,
  help_text: str = None,
  hide_third_party_offers: typing.Union[bool, IResolvable] = None,
  home_page_url: str = None,
  housekeeping_enabled: typing.Union[bool, IResolvable] = None,
  housekeeping_full_repack_period: typing.Union[int, float] = None,
  housekeeping_gc_period: typing.Union[int, float] = None,
  housekeeping_incremental_repack_period: typing.Union[int, float] = None,
  html_emails_enabled: typing.Union[bool, IResolvable] = None,
  id: str = None,
  import_sources: typing.List[str] = None,
  inactive_projects_delete_after_months: typing.Union[int, float] = None,
  inactive_projects_min_size_mb: typing.Union[int, float] = None,
  inactive_projects_send_warning_email_after_months: typing.Union[int, float] = None,
  in_product_marketing_emails_enabled: typing.Union[bool, IResolvable] = None,
  invisible_captcha_enabled: typing.Union[bool, IResolvable] = None,
  issues_create_limit: typing.Union[int, float] = None,
  keep_latest_artifact: typing.Union[bool, IResolvable] = None,
  local_markdown_version: typing.Union[int, float] = None,
  mailgun_events_enabled: typing.Union[bool, IResolvable] = None,
  mailgun_signing_key: str = None,
  maintenance_mode: typing.Union[bool, IResolvable] = None,
  maintenance_mode_message: str = None,
  max_artifacts_size: typing.Union[int, float] = None,
  max_attachment_size: typing.Union[int, float] = None,
  max_export_size: typing.Union[int, float] = None,
  max_import_size: typing.Union[int, float] = None,
  max_number_of_repository_downloads: typing.Union[int, float] = None,
  max_number_of_repository_downloads_within_time_period: typing.Union[int, float] = None,
  max_pages_size: typing.Union[int, float] = None,
  max_personal_access_token_lifetime: typing.Union[int, float] = None,
  max_ssh_key_lifetime: typing.Union[int, float] = None,
  metrics_method_call_threshold: typing.Union[int, float] = None,
  mirror_available: typing.Union[bool, IResolvable] = None,
  mirror_capacity_threshold: typing.Union[int, float] = None,
  mirror_max_capacity: typing.Union[int, float] = None,
  mirror_max_delay: typing.Union[int, float] = None,
  npm_package_requests_forwarding: typing.Union[bool, IResolvable] = None,
  outbound_local_requests_whitelist: typing.List[str] = None,
  package_registry_cleanup_policies_worker_capacity: typing.Union[int, float] = None,
  pages_domain_verification_enabled: typing.Union[bool, IResolvable] = None,
  password_authentication_enabled_for_git: typing.Union[bool, IResolvable] = None,
  password_authentication_enabled_for_web: typing.Union[bool, IResolvable] = None,
  password_lowercase_required: typing.Union[bool, IResolvable] = None,
  password_number_required: typing.Union[bool, IResolvable] = None,
  password_symbol_required: typing.Union[bool, IResolvable] = None,
  password_uppercase_required: typing.Union[bool, IResolvable] = None,
  performance_bar_allowed_group_path: str = None,
  personal_access_token_prefix: str = None,
  pipeline_limit_per_project_user_sha: typing.Union[int, float] = None,
  plantuml_enabled: typing.Union[bool, IResolvable] = None,
  plantuml_url: str = None,
  polling_interval_multiplier: typing.Union[int, float] = None,
  project_export_enabled: typing.Union[bool, IResolvable] = None,
  prometheus_metrics_enabled: typing.Union[bool, IResolvable] = None,
  protected_ci_variables: typing.Union[bool, IResolvable] = None,
  push_event_activities_limit: typing.Union[int, float] = None,
  push_event_hooks_limit: typing.Union[int, float] = None,
  pypi_package_requests_forwarding: typing.Union[bool, IResolvable] = None,
  rate_limiting_response_text: str = None,
  raw_blob_request_limit: typing.Union[int, float] = None,
  recaptcha_enabled: typing.Union[bool, IResolvable] = None,
  recaptcha_private_key: str = None,
  recaptcha_site_key: str = None,
  receive_max_input_size: typing.Union[int, float] = None,
  repository_checks_enabled: typing.Union[bool, IResolvable] = None,
  repository_size_limit: typing.Union[int, float] = None,
  repository_storages: typing.List[str] = None,
  repository_storages_weighted: typing.Mapping[typing.Union[int, float]] = None,
  require_admin_approval_after_user_signup: typing.Union[bool, IResolvable] = None,
  require_two_factor_authentication: typing.Union[bool, IResolvable] = None,
  restricted_visibility_levels: typing.List[str] = None,
  rsa_key_restriction: typing.Union[int, float] = None,
  search_rate_limit: typing.Union[int, float] = None,
  search_rate_limit_unauthenticated: typing.Union[int, float] = None,
  send_user_confirmation_email: typing.Union[bool, IResolvable] = None,
  session_expire_delay: typing.Union[int, float] = None,
  shared_runners_enabled: typing.Union[bool, IResolvable] = None,
  shared_runners_minutes: typing.Union[int, float] = None,
  shared_runners_text: str = None,
  sidekiq_job_limiter_compression_threshold_bytes: typing.Union[int, float] = None,
  sidekiq_job_limiter_limit_bytes: typing.Union[int, float] = None,
  sidekiq_job_limiter_mode: str = None,
  sign_in_text: str = None,
  signup_enabled: typing.Union[bool, IResolvable] = None,
  slack_app_enabled: typing.Union[bool, IResolvable] = None,
  slack_app_id: str = None,
  slack_app_secret: str = None,
  slack_app_signing_secret: str = None,
  slack_app_verification_token: str = None,
  snippet_size_limit: typing.Union[int, float] = None,
  snowplow_app_id: str = None,
  snowplow_collector_hostname: str = None,
  snowplow_cookie_domain: str = None,
  snowplow_enabled: typing.Union[bool, IResolvable] = None,
  sourcegraph_enabled: typing.Union[bool, IResolvable] = None,
  sourcegraph_public_only: typing.Union[bool, IResolvable] = None,
  sourcegraph_url: str = None,
  spam_check_api_key: str = None,
  spam_check_endpoint_enabled: typing.Union[bool, IResolvable] = None,
  spam_check_endpoint_url: str = None,
  suggest_pipeline_enabled: typing.Union[bool, IResolvable] = None,
  terminal_max_session_time: typing.Union[int, float] = None,
  terms: str = None,
  throttle_authenticated_api_enabled: typing.Union[bool, IResolvable] = None,
  throttle_authenticated_api_period_in_seconds: typing.Union[int, float] = None,
  throttle_authenticated_api_requests_per_period: typing.Union[int, float] = None,
  throttle_authenticated_packages_api_enabled: typing.Union[bool, IResolvable] = None,
  throttle_authenticated_packages_api_period_in_seconds: typing.Union[int, float] = None,
  throttle_authenticated_packages_api_requests_per_period: typing.Union[int, float] = None,
  throttle_authenticated_web_enabled: typing.Union[bool, IResolvable] = None,
  throttle_authenticated_web_period_in_seconds: typing.Union[int, float] = None,
  throttle_authenticated_web_requests_per_period: typing.Union[int, float] = None,
  throttle_unauthenticated_api_enabled: typing.Union[bool, IResolvable] = None,
  throttle_unauthenticated_api_period_in_seconds: typing.Union[int, float] = None,
  throttle_unauthenticated_api_requests_per_period: typing.Union[int, float] = None,
  throttle_unauthenticated_packages_api_enabled: typing.Union[bool, IResolvable] = None,
  throttle_unauthenticated_packages_api_period_in_seconds: typing.Union[int, float] = None,
  throttle_unauthenticated_packages_api_requests_per_period: typing.Union[int, float] = None,
  throttle_unauthenticated_web_enabled: typing.Union[bool, IResolvable] = None,
  throttle_unauthenticated_web_period_in_seconds: typing.Union[int, float] = None,
  throttle_unauthenticated_web_requests_per_period: typing.Union[int, float] = None,
  time_tracking_limit_to_hours: typing.Union[bool, IResolvable] = None,
  two_factor_grace_period: typing.Union[int, float] = None,
  unique_ips_limit_enabled: typing.Union[bool, IResolvable] = None,
  unique_ips_limit_per_user: typing.Union[int, float] = None,
  unique_ips_limit_time_window: typing.Union[int, float] = None,
  usage_ping_enabled: typing.Union[bool, IResolvable] = None,
  user_deactivation_emails_enabled: typing.Union[bool, IResolvable] = None,
  user_default_external: typing.Union[bool, IResolvable] = None,
  user_default_internal_regex: str = None,
  user_oauth_applications: typing.Union[bool, IResolvable] = None,
  user_show_add_ssh_key_message: typing.Union[bool, IResolvable] = None,
  version_check_enabled: typing.Union[bool, IResolvable] = None,
  web_ide_clientside_preview_enabled: typing.Union[bool, IResolvable] = None,
  whats_new_variant: str = None,
  wiki_page_max_content_bytes: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.abuseNotificationEmail">abuse_notification_email</a></code> | <code>str</code> | If set, abuse reports are sent to this address. Abuse reports are always available in the Admin Area. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.adminMode">admin_mode</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Require administrators to enable Admin Mode by re-authenticating for administrative tasks. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.afterSignOutPath">after_sign_out_path</a></code> | <code>str</code> | Where to redirect users after logout. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.afterSignUpText">after_sign_up_text</a></code> | <code>str</code> | Text shown to the user after signing up. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.akismetApiKey">akismet_api_key</a></code> | <code>str</code> | API key for Akismet spam protection. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.akismetEnabled">akismet_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | (If enabled, requires: akismet_api_key) Enable or disable Akismet spam protection. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.allowGroupOwnersToManageLdap">allow_group_owners_to_manage_ldap</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Set to true to allow group owners to manage LDAP. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.allowLocalRequestsFromSystemHooks">allow_local_requests_from_system_hooks</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Allow requests to the local network from system hooks. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.allowLocalRequestsFromWebHooksAndServices">allow_local_requests_from_web_hooks_and_services</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Allow requests to the local network from web hooks and services. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.archiveBuildsInHumanReadable">archive_builds_in_human_readable</a></code> | <code>str</code> | Set the duration for which the jobs are considered as old and expired. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.assetProxyAllowlist">asset_proxy_allowlist</a></code> | <code>typing.List[str]</code> | Assets that match these domains are not proxied. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.assetProxyEnabled">asset_proxy_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | (If enabled, requires: asset_proxy_url) Enable proxying of assets. GitLab restart is required to apply changes. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.assetProxySecretKey">asset_proxy_secret_key</a></code> | <code>str</code> | Shared secret with the asset proxy server. GitLab restart is required to apply changes. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.assetProxyUrl">asset_proxy_url</a></code> | <code>str</code> | URL of the asset proxy server. GitLab restart is required to apply changes. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.authorizedKeysEnabled">authorized_keys_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | By default, we write to the authorized_keys file to support Git over SSH without additional configuration. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.autoDevopsDomain">auto_devops_domain</a></code> | <code>str</code> | Specify a domain to use by default for every project’s Auto Review Apps and Auto Deploy stages. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.autoDevopsEnabled">auto_devops_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Enable Auto DevOps for projects by default. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.automaticPurchasedStorageAllocation">automatic_purchased_storage_allocation</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Enabling this permits automatic allocation of purchased storage in a namespace. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.canCreateGroup">can_create_group</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Indicates whether users can create top-level groups. Introduced in GitLab 15.5. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.checkNamespacePlan">check_namespace_plan</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Enabling this makes only licensed EE features available to projects if the project namespace’s plan includes the feature or if the project is public. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.commitEmailHostname">commit_email_hostname</a></code> | <code>str</code> | Custom hostname (for private commit emails). |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.containerExpirationPoliciesEnableHistoricEntries">container_expiration_policies_enable_historic_entries</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Enable cleanup policies for all projects. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.containerRegistryCleanupTagsServiceMaxListSize">container_registry_cleanup_tags_service_max_list_size</a></code> | <code>typing.Union[int, float]</code> | The maximum number of tags that can be deleted in a single execution of cleanup policies. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.containerRegistryDeleteTagsServiceTimeout">container_registry_delete_tags_service_timeout</a></code> | <code>typing.Union[int, float]</code> | The maximum time, in seconds, that the cleanup process can take to delete a batch of tags for cleanup policies. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.containerRegistryExpirationPoliciesCaching">container_registry_expiration_policies_caching</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Caching during the execution of cleanup policies. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.containerRegistryExpirationPoliciesWorkerCapacity">container_registry_expiration_policies_worker_capacity</a></code> | <code>typing.Union[int, float]</code> | Number of workers for cleanup policies. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.containerRegistryTokenExpireDelay">container_registry_token_expire_delay</a></code> | <code>typing.Union[int, float]</code> | Container Registry token duration in minutes. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.deactivateDormantUsers">deactivate_dormant_users</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Enable automatic deactivation of dormant users. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.defaultArtifactsExpireIn">default_artifacts_expire_in</a></code> | <code>str</code> | Set the default expiration time for each job’s artifacts. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.defaultBranchName">default_branch_name</a></code> | <code>str</code> | Instance-level custom initial branch name (introduced in GitLab 13.2). |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.defaultBranchProtection">default_branch_protection</a></code> | <code>typing.Union[int, float]</code> | Determine if developers can push to the default branch. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.defaultCiConfigPath">default_ci_config_path</a></code> | <code>str</code> | Default CI/CD configuration file and path for new projects (.gitlab-ci.yml if not set). |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.defaultGroupVisibility">default_group_visibility</a></code> | <code>str</code> | What visibility level new groups receive. Can take private, internal and public as a parameter. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.defaultProjectCreation">default_project_creation</a></code> | <code>typing.Union[int, float]</code> | Default project creation protection. Can take: 0 (No one), 1 (Maintainers) or 2 (Developers + Maintainers). |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.defaultProjectsLimit">default_projects_limit</a></code> | <code>typing.Union[int, float]</code> | Project limit per user. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.defaultProjectVisibility">default_project_visibility</a></code> | <code>str</code> | What visibility level new projects receive. Can take private, internal and public as a parameter. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.defaultSnippetVisibility">default_snippet_visibility</a></code> | <code>str</code> | What visibility level new snippets receive. Can take private, internal and public as a parameter. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.delayedGroupDeletion">delayed_group_deletion</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Enable delayed group deletion. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.delayedProjectDeletion">delayed_project_deletion</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Enable delayed project deletion by default in new groups. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.deleteInactiveProjects">delete_inactive_projects</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Enable inactive project deletion feature. Introduced in GitLab 14.10. Became operational in GitLab 15.0 (with feature flag inactive_projects_deletion). |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.deletionAdjournedPeriod">deletion_adjourned_period</a></code> | <code>typing.Union[int, float]</code> | The number of days to wait before deleting a project or group that is marked for deletion. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.diffMaxFiles">diff_max_files</a></code> | <code>typing.Union[int, float]</code> | Maximum files in a diff. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.diffMaxLines">diff_max_lines</a></code> | <code>typing.Union[int, float]</code> | Maximum lines in a diff. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.diffMaxPatchBytes">diff_max_patch_bytes</a></code> | <code>typing.Union[int, float]</code> | Maximum diff patch size, in bytes. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.disabledOauthSignInSources">disabled_oauth_sign_in_sources</a></code> | <code>typing.List[str]</code> | Disabled OAuth sign-in sources. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.disableFeedToken">disable_feed_token</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Disable display of RSS/Atom and calendar feed tokens (introduced in GitLab 13.7). |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.dnsRebindingProtectionEnabled">dns_rebinding_protection_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Enforce DNS rebinding attack protection. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.domainAllowlist">domain_allowlist</a></code> | <code>typing.List[str]</code> | Force people to use only corporate emails for sign-up. Null means there is no restriction. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.domainDenylist">domain_denylist</a></code> | <code>typing.List[str]</code> | Users with email addresses that match these domains cannot sign up. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.domainDenylistEnabled">domain_denylist_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | (If enabled, requires: domain_denylist) Allows blocking sign-ups from emails from specific domains. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.dsaKeyRestriction">dsa_key_restriction</a></code> | <code>typing.Union[int, float]</code> | The minimum allowed bit length of an uploaded DSA key. 0 means no restriction. -1 disables DSA keys. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.ecdsaKeyRestriction">ecdsa_key_restriction</a></code> | <code>typing.Union[int, float]</code> | The minimum allowed curve size (in bits) of an uploaded ECDSA key. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.ecdsaSkKeyRestriction">ecdsa_sk_key_restriction</a></code> | <code>typing.Union[int, float]</code> | The minimum allowed curve size (in bits) of an uploaded ECDSA_SK key. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.ed25519KeyRestriction">ed25519_key_restriction</a></code> | <code>typing.Union[int, float]</code> | The minimum allowed curve size (in bits) of an uploaded ED25519 key. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.ed25519SkKeyRestriction">ed25519_sk_key_restriction</a></code> | <code>typing.Union[int, float]</code> | The minimum allowed curve size (in bits) of an uploaded ED25519_SK key. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.eksAccessKeyId">eks_access_key_id</a></code> | <code>str</code> | AWS IAM access key ID. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.eksAccountId">eks_account_id</a></code> | <code>str</code> | Amazon account ID. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.eksIntegrationEnabled">eks_integration_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Enable integration with Amazon EKS. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.eksSecretAccessKey">eks_secret_access_key</a></code> | <code>str</code> | AWS IAM secret access key. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.elasticsearchAws">elasticsearch_aws</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Enable the use of AWS hosted Elasticsearch. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.elasticsearchAwsAccessKey">elasticsearch_aws_access_key</a></code> | <code>str</code> | AWS IAM access key. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.elasticsearchAwsRegion">elasticsearch_aws_region</a></code> | <code>str</code> | The AWS region the Elasticsearch domain is configured. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.elasticsearchAwsSecretAccessKey">elasticsearch_aws_secret_access_key</a></code> | <code>str</code> | AWS IAM secret access key. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.elasticsearchIndexedFieldLengthLimit">elasticsearch_indexed_field_length_limit</a></code> | <code>typing.Union[int, float]</code> | Maximum size of text fields to index by Elasticsearch. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.elasticsearchIndexedFileSizeLimitKb">elasticsearch_indexed_file_size_limit_kb</a></code> | <code>typing.Union[int, float]</code> | Maximum size of repository and wiki files that are indexed by Elasticsearch. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.elasticsearchIndexing">elasticsearch_indexing</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Enable Elasticsearch indexing. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.elasticsearchLimitIndexing">elasticsearch_limit_indexing</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Limit Elasticsearch to index certain namespaces and projects. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.elasticsearchMaxBulkConcurrency">elasticsearch_max_bulk_concurrency</a></code> | <code>typing.Union[int, float]</code> | Maximum concurrency of Elasticsearch bulk requests per indexing operation. This only applies to repository indexing operations. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.elasticsearchMaxBulkSizeMb">elasticsearch_max_bulk_size_mb</a></code> | <code>typing.Union[int, float]</code> | Maximum size of Elasticsearch bulk indexing requests in MB. This only applies to repository indexing operations. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.elasticsearchNamespaceIds">elasticsearch_namespace_ids</a></code> | <code>typing.List[str]</code> | The namespaces to index via Elasticsearch if elasticsearch_limit_indexing is enabled. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.elasticsearchPassword">elasticsearch_password</a></code> | <code>str</code> | The password of your Elasticsearch instance. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.elasticsearchProjectIds">elasticsearch_project_ids</a></code> | <code>typing.List[str]</code> | The projects to index via Elasticsearch if elasticsearch_limit_indexing is enabled. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.elasticsearchSearch">elasticsearch_search</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Enable Elasticsearch search. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.elasticsearchUrl">elasticsearch_url</a></code> | <code>typing.List[str]</code> | The URL to use for connecting to Elasticsearch. Use a comma-separated list to support cluster (for example, http://localhost:9200, http://localhost:9201). |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.elasticsearchUsername">elasticsearch_username</a></code> | <code>str</code> | The username of your Elasticsearch instance. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.emailAdditionalText">email_additional_text</a></code> | <code>str</code> | Additional text added to the bottom of every email for legal/auditing/compliance reasons. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.emailAuthorInBody">email_author_in_body</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Some email servers do not support overriding the email sender name. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.enabledGitAccessProtocol">enabled_git_access_protocol</a></code> | <code>str</code> | Enabled protocols for Git access. Allowed values are: ssh, http, and nil to allow both protocols. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.enforceNamespaceStorageLimit">enforce_namespace_storage_limit</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Enabling this permits enforcement of namespace storage limits. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.enforceTerms">enforce_terms</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | (If enabled, requires: terms) Enforce application ToS to all users. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.externalAuthClientCert">external_auth_client_cert</a></code> | <code>str</code> | (If enabled, requires: external_auth_client_key) The certificate to use to authenticate with the external authorization service. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.externalAuthClientKey">external_auth_client_key</a></code> | <code>str</code> | Private key for the certificate when authentication is required for the external authorization service, this is encrypted when stored. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.externalAuthClientKeyPass">external_auth_client_key_pass</a></code> | <code>str</code> | Passphrase to use for the private key when authenticating with the external service this is encrypted when stored. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.externalAuthorizationServiceDefaultLabel">external_authorization_service_default_label</a></code> | <code>str</code> | The default classification label to use when requesting authorization and no classification label has been specified on the project. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.externalAuthorizationServiceEnabled">external_authorization_service_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | (If enabled, requires: external_authorization_service_default_label, external_authorization_service_timeout and external_authorization_service_url) Enable using an external authorization service for accessing projects. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.externalAuthorizationServiceTimeout">external_authorization_service_timeout</a></code> | <code>typing.Union[int, float]</code> | The timeout after which an authorization request is aborted, in seconds. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.externalAuthorizationServiceUrl">external_authorization_service_url</a></code> | <code>str</code> | URL to which authorization requests are directed. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.externalPipelineValidationServiceTimeout">external_pipeline_validation_service_timeout</a></code> | <code>typing.Union[int, float]</code> | How long to wait for a response from the pipeline validation service. Assumes OK if it times out. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.externalPipelineValidationServiceToken">external_pipeline_validation_service_token</a></code> | <code>str</code> | Optional. Token to include as the X-Gitlab-Token header in requests to the URL in external_pipeline_validation_service_url. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.externalPipelineValidationServiceUrl">external_pipeline_validation_service_url</a></code> | <code>str</code> | URL to use for pipeline validation requests. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.fileTemplateProjectId">file_template_project_id</a></code> | <code>typing.Union[int, float]</code> | The ID of a project to load custom file templates from. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.firstDayOfWeek">first_day_of_week</a></code> | <code>typing.Union[int, float]</code> | Start day of the week for calendar views and date pickers. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.geoNodeAllowedIps">geo_node_allowed_ips</a></code> | <code>str</code> | Comma-separated list of IPs and CIDRs of allowed secondary nodes. For example, 1.1.1.1, 2.2.2.0/24. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.geoStatusTimeout">geo_status_timeout</a></code> | <code>typing.Union[int, float]</code> | The amount of seconds after which a request to get a secondary node status times out. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.gitalyTimeoutDefault">gitaly_timeout_default</a></code> | <code>typing.Union[int, float]</code> | Default Gitaly timeout, in seconds. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.gitalyTimeoutFast">gitaly_timeout_fast</a></code> | <code>typing.Union[int, float]</code> | Gitaly fast operation timeout, in seconds. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.gitalyTimeoutMedium">gitaly_timeout_medium</a></code> | <code>typing.Union[int, float]</code> | Medium Gitaly timeout, in seconds. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.gitRateLimitUsersAllowlist">git_rate_limit_users_allowlist</a></code> | <code>typing.List[str]</code> | List of usernames excluded from Git anti-abuse rate limits. Maximum: 100 usernames. Introduced in GitLab 15.2. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.gitTwoFactorSessionExpiry">git_two_factor_session_expiry</a></code> | <code>typing.Union[int, float]</code> | Maximum duration (in minutes) of a session for Git operations when 2FA is enabled. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.grafanaEnabled">grafana_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Enable Grafana. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.grafanaUrl">grafana_url</a></code> | <code>str</code> | Grafana URL. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.gravatarEnabled">gravatar_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Enable Gravatar. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.groupOwnersCanManageDefaultBranchProtection">group_owners_can_manage_default_branch_protection</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Prevent overrides of default branch protection. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.hashedStorageEnabled">hashed_storage_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Create new projects using hashed storage paths: Enable immutable, hash-based paths and repository names to store repositories on disk. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.helpPageHideCommercialContent">help_page_hide_commercial_content</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Hide marketing-related entries from help. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.helpPageSupportUrl">help_page_support_url</a></code> | <code>str</code> | Alternate support URL for help page and help dropdown. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.helpPageText">help_page_text</a></code> | <code>str</code> | Custom text displayed on the help page. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.helpText">help_text</a></code> | <code>str</code> | GitLab server administrator information. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.hideThirdPartyOffers">hide_third_party_offers</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Do not display offers from third parties in GitLab. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.homePageUrl">home_page_url</a></code> | <code>str</code> | Redirect to this URL when not logged in. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.housekeepingEnabled">housekeeping_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | (If enabled, requires: housekeeping_bitmaps_enabled, housekeeping_full_repack_period, housekeeping_gc_period, and housekeeping_incremental_repack_period) Enable or disable Git housekeeping. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.housekeepingFullRepackPeriod">housekeeping_full_repack_period</a></code> | <code>typing.Union[int, float]</code> | Number of Git pushes after which an incremental git repack is run. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.housekeepingGcPeriod">housekeeping_gc_period</a></code> | <code>typing.Union[int, float]</code> | Number of Git pushes after which git gc is run. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.housekeepingIncrementalRepackPeriod">housekeeping_incremental_repack_period</a></code> | <code>typing.Union[int, float]</code> | Number of Git pushes after which an incremental git repack is run. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.htmlEmailsEnabled">html_emails_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Enable HTML emails. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.4.0/docs/resources/application_settings#id ApplicationSettings#id}. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.importSources">import_sources</a></code> | <code>typing.List[str]</code> | Sources to allow project import from. Valid values are: `github`, `bitbucket`, `bitbucket_server`, `fogbugz`, `git`, `gitlab_project`, `gitea`, `manifest`. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.inactiveProjectsDeleteAfterMonths">inactive_projects_delete_after_months</a></code> | <code>typing.Union[int, float]</code> | If delete_inactive_projects is true, the time (in months) to wait before deleting inactive projects. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.inactiveProjectsMinSizeMb">inactive_projects_min_size_mb</a></code> | <code>typing.Union[int, float]</code> | If delete_inactive_projects is true, the minimum repository size for projects to be checked for inactivity. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.inactiveProjectsSendWarningEmailAfterMonths">inactive_projects_send_warning_email_after_months</a></code> | <code>typing.Union[int, float]</code> | If delete_inactive_projects is true, sets the time (in months) to wait before emailing maintainers that the project is scheduled be deleted because it is inactive. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.inProductMarketingEmailsEnabled">in_product_marketing_emails_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Enable in-product marketing emails. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.invisibleCaptchaEnabled">invisible_captcha_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Enable Invisible CAPTCHA spam detection during sign-up. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.issuesCreateLimit">issues_create_limit</a></code> | <code>typing.Union[int, float]</code> | Max number of issue creation requests per minute per user. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.keepLatestArtifact">keep_latest_artifact</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Prevent the deletion of the artifacts from the most recent successful jobs, regardless of the expiry time. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.localMarkdownVersion">local_markdown_version</a></code> | <code>typing.Union[int, float]</code> | Increase this value when any cached Markdown should be invalidated. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.mailgunEventsEnabled">mailgun_events_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Enable Mailgun event receiver. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.mailgunSigningKey">mailgun_signing_key</a></code> | <code>str</code> | The Mailgun HTTP webhook signing key for receiving events from webhook. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.maintenanceMode">maintenance_mode</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | When instance is in maintenance mode, non-administrative users can sign in with read-only access and make read-only API requests. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.maintenanceModeMessage">maintenance_mode_message</a></code> | <code>str</code> | Message displayed when instance is in maintenance mode. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.maxArtifactsSize">max_artifacts_size</a></code> | <code>typing.Union[int, float]</code> | Maximum artifacts size in MB. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.maxAttachmentSize">max_attachment_size</a></code> | <code>typing.Union[int, float]</code> | Limit attachment size in MB. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.maxExportSize">max_export_size</a></code> | <code>typing.Union[int, float]</code> | Maximum export size in MB. 0 for unlimited. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.maxImportSize">max_import_size</a></code> | <code>typing.Union[int, float]</code> | Maximum import size in MB. 0 for unlimited. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.maxNumberOfRepositoryDownloads">max_number_of_repository_downloads</a></code> | <code>typing.Union[int, float]</code> | Maximum number of unique repositories a user can download in the specified time period before they are banned. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.maxNumberOfRepositoryDownloadsWithinTimePeriod">max_number_of_repository_downloads_within_time_period</a></code> | <code>typing.Union[int, float]</code> | Reporting time period (in seconds). Maximum: 864000 seconds (10 days). Introduced in GitLab 15.1. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.maxPagesSize">max_pages_size</a></code> | <code>typing.Union[int, float]</code> | Maximum size of pages repositories in MB. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.maxPersonalAccessTokenLifetime">max_personal_access_token_lifetime</a></code> | <code>typing.Union[int, float]</code> | Maximum allowable lifetime for access tokens in days. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.maxSshKeyLifetime">max_ssh_key_lifetime</a></code> | <code>typing.Union[int, float]</code> | Maximum allowable lifetime for SSH keys in days. Introduced in GitLab 14.6. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.metricsMethodCallThreshold">metrics_method_call_threshold</a></code> | <code>typing.Union[int, float]</code> | A method call is only tracked when it takes longer than the given amount of milliseconds. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.mirrorAvailable">mirror_available</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Allow repository mirroring to configured by project Maintainers. If disabled, only Administrators can configure repository mirroring. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.mirrorCapacityThreshold">mirror_capacity_threshold</a></code> | <code>typing.Union[int, float]</code> | Minimum capacity to be available before scheduling more mirrors preemptively. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.mirrorMaxCapacity">mirror_max_capacity</a></code> | <code>typing.Union[int, float]</code> | Maximum number of mirrors that can be synchronizing at the same time. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.mirrorMaxDelay">mirror_max_delay</a></code> | <code>typing.Union[int, float]</code> | Maximum time (in minutes) between updates that a mirror can have when scheduled to synchronize. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.npmPackageRequestsForwarding">npm_package_requests_forwarding</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Use npmjs.org as a default remote repository when the package is not found in the GitLab Package Registry for npm. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.outboundLocalRequestsWhitelist">outbound_local_requests_whitelist</a></code> | <code>typing.List[str]</code> | Define a list of trusted domains or IP addresses to which local requests are allowed when local requests for hooks and services are disabled. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.packageRegistryCleanupPoliciesWorkerCapacity">package_registry_cleanup_policies_worker_capacity</a></code> | <code>typing.Union[int, float]</code> | Number of workers assigned to the packages cleanup policies. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.pagesDomainVerificationEnabled">pages_domain_verification_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Require users to prove ownership of custom domains. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.passwordAuthenticationEnabledForGit">password_authentication_enabled_for_git</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Enable authentication for Git over HTTP(S) via a GitLab account password. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.passwordAuthenticationEnabledForWeb">password_authentication_enabled_for_web</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Enable authentication for the web interface via a GitLab account password. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.passwordLowercaseRequired">password_lowercase_required</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Indicates whether passwords require at least one lowercase letter. Introduced in GitLab 15.1. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.passwordNumberRequired">password_number_required</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Indicates whether passwords require at least one number. Introduced in GitLab 15.1. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.passwordSymbolRequired">password_symbol_required</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Indicates whether passwords require at least one symbol character. Introduced in GitLab 15.1. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.passwordUppercaseRequired">password_uppercase_required</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Indicates whether passwords require at least one uppercase letter. Introduced in GitLab 15.1. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.performanceBarAllowedGroupPath">performance_bar_allowed_group_path</a></code> | <code>str</code> | Path of the group that is allowed to toggle the performance bar. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.personalAccessTokenPrefix">personal_access_token_prefix</a></code> | <code>str</code> | Prefix for all generated personal access tokens. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.pipelineLimitPerProjectUserSha">pipeline_limit_per_project_user_sha</a></code> | <code>typing.Union[int, float]</code> | Maximum number of pipeline creation requests per minute per user and commit. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.plantumlEnabled">plantuml_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | (If enabled, requires: plantuml_url) Enable PlantUML integration. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.plantumlUrl">plantuml_url</a></code> | <code>str</code> | The PlantUML instance URL for integration. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.pollingIntervalMultiplier">polling_interval_multiplier</a></code> | <code>typing.Union[int, float]</code> | Interval multiplier used by endpoints that perform polling. Set to 0 to disable polling. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.projectExportEnabled">project_export_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Enable project export. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.prometheusMetricsEnabled">prometheus_metrics_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Enable Prometheus metrics. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.protectedCiVariables">protected_ci_variables</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | CI/CD variables are protected by default. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.pushEventActivitiesLimit">push_event_activities_limit</a></code> | <code>typing.Union[int, float]</code> | Number of changes (branches or tags) in a single push to determine whether individual push events or bulk push events are created. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.pushEventHooksLimit">push_event_hooks_limit</a></code> | <code>typing.Union[int, float]</code> | Number of changes (branches or tags) in a single push to determine whether webhooks and services fire or not. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.pypiPackageRequestsForwarding">pypi_package_requests_forwarding</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Use pypi.org as a default remote repository when the package is not found in the GitLab Package Registry for PyPI. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.rateLimitingResponseText">rate_limiting_response_text</a></code> | <code>str</code> | When rate limiting is enabled via the throttle_* settings, send this plain text response when a rate limit is exceeded. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.rawBlobRequestLimit">raw_blob_request_limit</a></code> | <code>typing.Union[int, float]</code> | Max number of requests per minute for each raw path. To disable throttling set to 0. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.recaptchaEnabled">recaptcha_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | (If enabled, requires: recaptcha_private_key and recaptcha_site_key) Enable reCAPTCHA. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.recaptchaPrivateKey">recaptcha_private_key</a></code> | <code>str</code> | Private key for reCAPTCHA. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.recaptchaSiteKey">recaptcha_site_key</a></code> | <code>str</code> | Site key for reCAPTCHA. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.receiveMaxInputSize">receive_max_input_size</a></code> | <code>typing.Union[int, float]</code> | Maximum push size (MB). |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.repositoryChecksEnabled">repository_checks_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | GitLab periodically runs git fsck in all project and wiki repositories to look for silent disk corruption issues. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.repositorySizeLimit">repository_size_limit</a></code> | <code>typing.Union[int, float]</code> | Size limit per repository (MB). |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.repositoryStorages">repository_storages</a></code> | <code>typing.List[str]</code> | (GitLab 13.0 and earlier) List of names of enabled storage paths, taken from gitlab.yml. New projects are created in one of these stores, chosen at random. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.repositoryStoragesWeighted">repository_storages_weighted</a></code> | <code>typing.Mapping[typing.Union[int, float]]</code> | (GitLab 13.1 and later) Hash of names of taken from gitlab.yml to weights. New projects are created in one of these stores, chosen by a weighted random selection. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.requireAdminApprovalAfterUserSignup">require_admin_approval_after_user_signup</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | When enabled, any user that signs up for an account using the registration form is placed under a Pending approval state and has to be explicitly approved by an administrator. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.requireTwoFactorAuthentication">require_two_factor_authentication</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | (If enabled, requires: two_factor_grace_period) Require all users to set up Two-factor authentication. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.restrictedVisibilityLevels">restricted_visibility_levels</a></code> | <code>typing.List[str]</code> | Selected levels cannot be used by non-Administrator users for groups, projects or snippets. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.rsaKeyRestriction">rsa_key_restriction</a></code> | <code>typing.Union[int, float]</code> | The minimum allowed bit length of an uploaded RSA key. 0 means no restriction. -1 disables RSA keys. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.searchRateLimit">search_rate_limit</a></code> | <code>typing.Union[int, float]</code> | Max number of requests per minute for performing a search while authenticated. To disable throttling set to 0. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.searchRateLimitUnauthenticated">search_rate_limit_unauthenticated</a></code> | <code>typing.Union[int, float]</code> | Max number of requests per minute for performing a search while unauthenticated. To disable throttling set to 0. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.sendUserConfirmationEmail">send_user_confirmation_email</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Send confirmation email on sign-up. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.sessionExpireDelay">session_expire_delay</a></code> | <code>typing.Union[int, float]</code> | Session duration in minutes. GitLab restart is required to apply changes. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.sharedRunnersEnabled">shared_runners_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | (If enabled, requires: shared_runners_text and shared_runners_minutes) Enable shared runners for new projects. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.sharedRunnersMinutes">shared_runners_minutes</a></code> | <code>typing.Union[int, float]</code> | Set the maximum number of CI/CD minutes that a group can use on shared runners per month. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.sharedRunnersText">shared_runners_text</a></code> | <code>str</code> | Shared runners text. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.sidekiqJobLimiterCompressionThresholdBytes">sidekiq_job_limiter_compression_threshold_bytes</a></code> | <code>typing.Union[int, float]</code> | The threshold in bytes at which Sidekiq jobs are compressed before being stored in Redis. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.sidekiqJobLimiterLimitBytes">sidekiq_job_limiter_limit_bytes</a></code> | <code>typing.Union[int, float]</code> | The threshold in bytes at which Sidekiq jobs are rejected. 0 means do not reject any job. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.sidekiqJobLimiterMode">sidekiq_job_limiter_mode</a></code> | <code>str</code> | track or compress. Sets the behavior for Sidekiq job size limits. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.signInText">sign_in_text</a></code> | <code>str</code> | Text on the login page. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.signupEnabled">signup_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Enable registration. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.slackAppEnabled">slack_app_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | (If enabled, requires: slack_app_id, slack_app_secret and slack_app_secret) Enable Slack app. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.slackAppId">slack_app_id</a></code> | <code>str</code> | The app ID of the Slack-app. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.slackAppSecret">slack_app_secret</a></code> | <code>str</code> | The app secret of the Slack-app. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.slackAppSigningSecret">slack_app_signing_secret</a></code> | <code>str</code> | The signing secret of the Slack-app. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.slackAppVerificationToken">slack_app_verification_token</a></code> | <code>str</code> | The verification token of the Slack-app. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.snippetSizeLimit">snippet_size_limit</a></code> | <code>typing.Union[int, float]</code> | Max snippet content size in bytes. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.snowplowAppId">snowplow_app_id</a></code> | <code>str</code> | The Snowplow site name / application ID. (for example, gitlab). |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.snowplowCollectorHostname">snowplow_collector_hostname</a></code> | <code>str</code> | The Snowplow collector hostname. (for example, snowplow.trx.gitlab.net). |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.snowplowCookieDomain">snowplow_cookie_domain</a></code> | <code>str</code> | The Snowplow cookie domain. (for example, .gitlab.com). |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.snowplowEnabled">snowplow_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Enable snowplow tracking. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.sourcegraphEnabled">sourcegraph_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Enables Sourcegraph integration. If enabled, requires sourcegraph_url. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.sourcegraphPublicOnly">sourcegraph_public_only</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Blocks Sourcegraph from being loaded on private and internal projects. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.sourcegraphUrl">sourcegraph_url</a></code> | <code>str</code> | The Sourcegraph instance URL for integration. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.spamCheckApiKey">spam_check_api_key</a></code> | <code>str</code> | API key used by GitLab for accessing the Spam Check service endpoint. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.spamCheckEndpointEnabled">spam_check_endpoint_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Enables spam checking using external Spam Check API endpoint. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.spamCheckEndpointUrl">spam_check_endpoint_url</a></code> | <code>str</code> | URL of the external Spamcheck service endpoint. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.suggestPipelineEnabled">suggest_pipeline_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Enable pipeline suggestion banner. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.terminalMaxSessionTime">terminal_max_session_time</a></code> | <code>typing.Union[int, float]</code> | Maximum time for web terminal websocket connection (in seconds). Set to 0 for unlimited time. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.terms">terms</a></code> | <code>str</code> | (Required by: enforce_terms) Markdown content for the ToS. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.throttleAuthenticatedApiEnabled">throttle_authenticated_api_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | (If enabled, requires: throttle_authenticated_api_period_in_seconds and throttle_authenticated_api_requests_per_period) Enable authenticated API request rate limit. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.throttleAuthenticatedApiPeriodInSeconds">throttle_authenticated_api_period_in_seconds</a></code> | <code>typing.Union[int, float]</code> | Rate limit period (in seconds). |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.throttleAuthenticatedApiRequestsPerPeriod">throttle_authenticated_api_requests_per_period</a></code> | <code>typing.Union[int, float]</code> | Maximum requests per period per user. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.throttleAuthenticatedPackagesApiEnabled">throttle_authenticated_packages_api_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | (If enabled, requires: throttle_authenticated_packages_api_period_in_seconds and throttle_authenticated_packages_api_requests_per_period) Enable authenticated API request rate limit. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.throttleAuthenticatedPackagesApiPeriodInSeconds">throttle_authenticated_packages_api_period_in_seconds</a></code> | <code>typing.Union[int, float]</code> | Rate limit period (in seconds). View Package Registry rate limits for more details. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.throttleAuthenticatedPackagesApiRequestsPerPeriod">throttle_authenticated_packages_api_requests_per_period</a></code> | <code>typing.Union[int, float]</code> | Maximum requests per period per user. View Package Registry rate limits for more details. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.throttleAuthenticatedWebEnabled">throttle_authenticated_web_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | (If enabled, requires: throttle_authenticated_web_period_in_seconds and throttle_authenticated_web_requests_per_period) Enable authenticated web request rate limit. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.throttleAuthenticatedWebPeriodInSeconds">throttle_authenticated_web_period_in_seconds</a></code> | <code>typing.Union[int, float]</code> | Rate limit period (in seconds). |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.throttleAuthenticatedWebRequestsPerPeriod">throttle_authenticated_web_requests_per_period</a></code> | <code>typing.Union[int, float]</code> | Maximum requests per period per user. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.throttleUnauthenticatedApiEnabled">throttle_unauthenticated_api_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | (If enabled, requires: throttle_unauthenticated_api_period_in_seconds and throttle_unauthenticated_api_requests_per_period) Enable unauthenticated API request rate limit. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.throttleUnauthenticatedApiPeriodInSeconds">throttle_unauthenticated_api_period_in_seconds</a></code> | <code>typing.Union[int, float]</code> | Rate limit period in seconds. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.throttleUnauthenticatedApiRequestsPerPeriod">throttle_unauthenticated_api_requests_per_period</a></code> | <code>typing.Union[int, float]</code> | Max requests per period per IP. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.throttleUnauthenticatedPackagesApiEnabled">throttle_unauthenticated_packages_api_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | (If enabled, requires: throttle_unauthenticated_packages_api_period_in_seconds and throttle_unauthenticated_packages_api_requests_per_period) Enable authenticated API request rate limit. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.throttleUnauthenticatedPackagesApiPeriodInSeconds">throttle_unauthenticated_packages_api_period_in_seconds</a></code> | <code>typing.Union[int, float]</code> | Rate limit period (in seconds). View Package Registry rate limits for more details. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.throttleUnauthenticatedPackagesApiRequestsPerPeriod">throttle_unauthenticated_packages_api_requests_per_period</a></code> | <code>typing.Union[int, float]</code> | Maximum requests per period per user. View Package Registry rate limits for more details. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.throttleUnauthenticatedWebEnabled">throttle_unauthenticated_web_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | (If enabled, requires: throttle_unauthenticated_web_period_in_seconds and throttle_unauthenticated_web_requests_per_period) Enable unauthenticated web request rate limit. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.throttleUnauthenticatedWebPeriodInSeconds">throttle_unauthenticated_web_period_in_seconds</a></code> | <code>typing.Union[int, float]</code> | Rate limit period in seconds. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.throttleUnauthenticatedWebRequestsPerPeriod">throttle_unauthenticated_web_requests_per_period</a></code> | <code>typing.Union[int, float]</code> | Max requests per period per IP. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.timeTrackingLimitToHours">time_tracking_limit_to_hours</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Limit display of time tracking units to hours. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.twoFactorGracePeriod">two_factor_grace_period</a></code> | <code>typing.Union[int, float]</code> | Amount of time (in hours) that users are allowed to skip forced configuration of two-factor authentication. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.uniqueIpsLimitEnabled">unique_ips_limit_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | (If enabled, requires: unique_ips_limit_per_user and unique_ips_limit_time_window) Limit sign in from multiple IPs. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.uniqueIpsLimitPerUser">unique_ips_limit_per_user</a></code> | <code>typing.Union[int, float]</code> | Maximum number of IPs per user. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.uniqueIpsLimitTimeWindow">unique_ips_limit_time_window</a></code> | <code>typing.Union[int, float]</code> | How many seconds an IP is counted towards the limit. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.usagePingEnabled">usage_ping_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Every week GitLab reports license usage back to GitLab, Inc. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.userDeactivationEmailsEnabled">user_deactivation_emails_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Send an email to users upon account deactivation. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.userDefaultExternal">user_default_external</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Newly registered users are external by default. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.userDefaultInternalRegex">user_default_internal_regex</a></code> | <code>str</code> | Specify an email address regex pattern to identify default internal users. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.userOauthApplications">user_oauth_applications</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Allow users to register any application to use GitLab as an OAuth provider. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.userShowAddSshKeyMessage">user_show_add_ssh_key_message</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | When set to false disable the You won't be able to pull or push project code via SSH warning shown to users with no uploaded SSH key. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.versionCheckEnabled">version_check_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Let GitLab inform you when an update is available. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.webIdeClientsidePreviewEnabled">web_ide_clientside_preview_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Live Preview (allow live previews of JavaScript projects in the Web IDE using CodeSandbox Live Preview). |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.whatsNewVariant">whats_new_variant</a></code> | <code>str</code> | What’s new variant, possible values: all_tiers, current_tier, and disabled. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.wikiPageMaxContentBytes">wiki_page_max_content_bytes</a></code> | <code>typing.Union[int, float]</code> | Maximum wiki page content size in bytes. The minimum value is 1024 bytes. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `abuse_notification_email`<sup>Optional</sup> <a name="abuse_notification_email" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.abuseNotificationEmail"></a>

```python
abuse_notification_email: str
```

- *Type:* str

If set, abuse reports are sent to this address. Abuse reports are always available in the Admin Area.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.4.0/docs/resources/application_settings#abuse_notification_email ApplicationSettings#abuse_notification_email}

---

##### `admin_mode`<sup>Optional</sup> <a name="admin_mode" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.adminMode"></a>

```python
admin_mode: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Require administrators to enable Admin Mode by re-authenticating for administrative tasks.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.4.0/docs/resources/application_settings#admin_mode ApplicationSettings#admin_mode}

---

##### `after_sign_out_path`<sup>Optional</sup> <a name="after_sign_out_path" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.afterSignOutPath"></a>

```python
after_sign_out_path: str
```

- *Type:* str

Where to redirect users after logout.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.4.0/docs/resources/application_settings#after_sign_out_path ApplicationSettings#after_sign_out_path}

---

##### `after_sign_up_text`<sup>Optional</sup> <a name="after_sign_up_text" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.afterSignUpText"></a>

```python
after_sign_up_text: str
```

- *Type:* str

Text shown to the user after signing up.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.4.0/docs/resources/application_settings#after_sign_up_text ApplicationSettings#after_sign_up_text}

---

##### `akismet_api_key`<sup>Optional</sup> <a name="akismet_api_key" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.akismetApiKey"></a>

```python
akismet_api_key: str
```

- *Type:* str

API key for Akismet spam protection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.4.0/docs/resources/application_settings#akismet_api_key ApplicationSettings#akismet_api_key}

---

##### `akismet_enabled`<sup>Optional</sup> <a name="akismet_enabled" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.akismetEnabled"></a>

```python
akismet_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

(If enabled, requires: akismet_api_key) Enable or disable Akismet spam protection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.4.0/docs/resources/application_settings#akismet_enabled ApplicationSettings#akismet_enabled}

---

##### `allow_group_owners_to_manage_ldap`<sup>Optional</sup> <a name="allow_group_owners_to_manage_ldap" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.allowGroupOwnersToManageLdap"></a>

```python
allow_group_owners_to_manage_ldap: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Set to true to allow group owners to manage LDAP.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.4.0/docs/resources/application_settings#allow_group_owners_to_manage_ldap ApplicationSettings#allow_group_owners_to_manage_ldap}

---

##### `allow_local_requests_from_system_hooks`<sup>Optional</sup> <a name="allow_local_requests_from_system_hooks" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.allowLocalRequestsFromSystemHooks"></a>

```python
allow_local_requests_from_system_hooks: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Allow requests to the local network from system hooks.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.4.0/docs/resources/application_settings#allow_local_requests_from_system_hooks ApplicationSettings#allow_local_requests_from_system_hooks}

---

##### `allow_local_requests_from_web_hooks_and_services`<sup>Optional</sup> <a name="allow_local_requests_from_web_hooks_and_services" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.allowLocalRequestsFromWebHooksAndServices"></a>

```python
allow_local_requests_from_web_hooks_and_services: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Allow requests to the local network from web hooks and services.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.4.0/docs/resources/application_settings#allow_local_requests_from_web_hooks_and_services ApplicationSettings#allow_local_requests_from_web_hooks_and_services}

---

##### `archive_builds_in_human_readable`<sup>Optional</sup> <a name="archive_builds_in_human_readable" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.archiveBuildsInHumanReadable"></a>

```python
archive_builds_in_human_readable: str
```

- *Type:* str

Set the duration for which the jobs are considered as old and expired.

After that time passes, the jobs are archived and no longer able to be retried. Make it empty to never expire jobs. It has to be no less than 1 day, for example: 15 days, 1 month, 2 years.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.4.0/docs/resources/application_settings#archive_builds_in_human_readable ApplicationSettings#archive_builds_in_human_readable}

---

##### `asset_proxy_allowlist`<sup>Optional</sup> <a name="asset_proxy_allowlist" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.assetProxyAllowlist"></a>

```python
asset_proxy_allowlist: typing.List[str]
```

- *Type:* typing.List[str]

Assets that match these domains are not proxied.

Wildcards allowed. Your GitLab installation URL is automatically allowlisted. GitLab restart is required to apply changes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.4.0/docs/resources/application_settings#asset_proxy_allowlist ApplicationSettings#asset_proxy_allowlist}

---

##### `asset_proxy_enabled`<sup>Optional</sup> <a name="asset_proxy_enabled" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.assetProxyEnabled"></a>

```python
asset_proxy_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

(If enabled, requires: asset_proxy_url) Enable proxying of assets. GitLab restart is required to apply changes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.4.0/docs/resources/application_settings#asset_proxy_enabled ApplicationSettings#asset_proxy_enabled}

---

##### `asset_proxy_secret_key`<sup>Optional</sup> <a name="asset_proxy_secret_key" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.assetProxySecretKey"></a>

```python
asset_proxy_secret_key: str
```

- *Type:* str

Shared secret with the asset proxy server. GitLab restart is required to apply changes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.4.0/docs/resources/application_settings#asset_proxy_secret_key ApplicationSettings#asset_proxy_secret_key}

---

##### `asset_proxy_url`<sup>Optional</sup> <a name="asset_proxy_url" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.assetProxyUrl"></a>

```python
asset_proxy_url: str
```

- *Type:* str

URL of the asset proxy server. GitLab restart is required to apply changes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.4.0/docs/resources/application_settings#asset_proxy_url ApplicationSettings#asset_proxy_url}

---

##### `authorized_keys_enabled`<sup>Optional</sup> <a name="authorized_keys_enabled" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.authorizedKeysEnabled"></a>

```python
authorized_keys_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

By default, we write to the authorized_keys file to support Git over SSH without additional configuration.

GitLab can be optimized to authenticate SSH keys via the database file. Only disable this if you have configured your OpenSSH server to use the AuthorizedKeysCommand.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.4.0/docs/resources/application_settings#authorized_keys_enabled ApplicationSettings#authorized_keys_enabled}

---

##### `auto_devops_domain`<sup>Optional</sup> <a name="auto_devops_domain" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.autoDevopsDomain"></a>

```python
auto_devops_domain: str
```

- *Type:* str

Specify a domain to use by default for every project’s Auto Review Apps and Auto Deploy stages.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.4.0/docs/resources/application_settings#auto_devops_domain ApplicationSettings#auto_devops_domain}

---

##### `auto_devops_enabled`<sup>Optional</sup> <a name="auto_devops_enabled" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.autoDevopsEnabled"></a>

```python
auto_devops_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Enable Auto DevOps for projects by default.

It automatically builds, tests, and deploys applications based on a predefined CI/CD configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.4.0/docs/resources/application_settings#auto_devops_enabled ApplicationSettings#auto_devops_enabled}

---

##### `automatic_purchased_storage_allocation`<sup>Optional</sup> <a name="automatic_purchased_storage_allocation" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.automaticPurchasedStorageAllocation"></a>

```python
automatic_purchased_storage_allocation: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Enabling this permits automatic allocation of purchased storage in a namespace.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.4.0/docs/resources/application_settings#automatic_purchased_storage_allocation ApplicationSettings#automatic_purchased_storage_allocation}

---

##### `can_create_group`<sup>Optional</sup> <a name="can_create_group" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.canCreateGroup"></a>

```python
can_create_group: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Indicates whether users can create top-level groups. Introduced in GitLab 15.5.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.4.0/docs/resources/application_settings#can_create_group ApplicationSettings#can_create_group}

---

##### `check_namespace_plan`<sup>Optional</sup> <a name="check_namespace_plan" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.checkNamespacePlan"></a>

```python
check_namespace_plan: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Enabling this makes only licensed EE features available to projects if the project namespace’s plan includes the feature or if the project is public.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.4.0/docs/resources/application_settings#check_namespace_plan ApplicationSettings#check_namespace_plan}

---

##### `commit_email_hostname`<sup>Optional</sup> <a name="commit_email_hostname" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.commitEmailHostname"></a>

```python
commit_email_hostname: str
```

- *Type:* str

Custom hostname (for private commit emails).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.4.0/docs/resources/application_settings#commit_email_hostname ApplicationSettings#commit_email_hostname}

---

##### `container_expiration_policies_enable_historic_entries`<sup>Optional</sup> <a name="container_expiration_policies_enable_historic_entries" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.containerExpirationPoliciesEnableHistoricEntries"></a>

```python
container_expiration_policies_enable_historic_entries: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Enable cleanup policies for all projects.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.4.0/docs/resources/application_settings#container_expiration_policies_enable_historic_entries ApplicationSettings#container_expiration_policies_enable_historic_entries}

---

##### `container_registry_cleanup_tags_service_max_list_size`<sup>Optional</sup> <a name="container_registry_cleanup_tags_service_max_list_size" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.containerRegistryCleanupTagsServiceMaxListSize"></a>

```python
container_registry_cleanup_tags_service_max_list_size: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The maximum number of tags that can be deleted in a single execution of cleanup policies.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.4.0/docs/resources/application_settings#container_registry_cleanup_tags_service_max_list_size ApplicationSettings#container_registry_cleanup_tags_service_max_list_size}

---

##### `container_registry_delete_tags_service_timeout`<sup>Optional</sup> <a name="container_registry_delete_tags_service_timeout" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.containerRegistryDeleteTagsServiceTimeout"></a>

```python
container_registry_delete_tags_service_timeout: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The maximum time, in seconds, that the cleanup process can take to delete a batch of tags for cleanup policies.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.4.0/docs/resources/application_settings#container_registry_delete_tags_service_timeout ApplicationSettings#container_registry_delete_tags_service_timeout}

---

##### `container_registry_expiration_policies_caching`<sup>Optional</sup> <a name="container_registry_expiration_policies_caching" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.containerRegistryExpirationPoliciesCaching"></a>

```python
container_registry_expiration_policies_caching: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Caching during the execution of cleanup policies.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.4.0/docs/resources/application_settings#container_registry_expiration_policies_caching ApplicationSettings#container_registry_expiration_policies_caching}

---

##### `container_registry_expiration_policies_worker_capacity`<sup>Optional</sup> <a name="container_registry_expiration_policies_worker_capacity" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.containerRegistryExpirationPoliciesWorkerCapacity"></a>

```python
container_registry_expiration_policies_worker_capacity: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Number of workers for cleanup policies.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.4.0/docs/resources/application_settings#container_registry_expiration_policies_worker_capacity ApplicationSettings#container_registry_expiration_policies_worker_capacity}

---

##### `container_registry_token_expire_delay`<sup>Optional</sup> <a name="container_registry_token_expire_delay" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.containerRegistryTokenExpireDelay"></a>

```python
container_registry_token_expire_delay: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Container Registry token duration in minutes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.4.0/docs/resources/application_settings#container_registry_token_expire_delay ApplicationSettings#container_registry_token_expire_delay}

---

##### `deactivate_dormant_users`<sup>Optional</sup> <a name="deactivate_dormant_users" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.deactivateDormantUsers"></a>

```python
deactivate_dormant_users: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Enable automatic deactivation of dormant users.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.4.0/docs/resources/application_settings#deactivate_dormant_users ApplicationSettings#deactivate_dormant_users}

---

##### `default_artifacts_expire_in`<sup>Optional</sup> <a name="default_artifacts_expire_in" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.defaultArtifactsExpireIn"></a>

```python
default_artifacts_expire_in: str
```

- *Type:* str

Set the default expiration time for each job’s artifacts.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.4.0/docs/resources/application_settings#default_artifacts_expire_in ApplicationSettings#default_artifacts_expire_in}

---

##### `default_branch_name`<sup>Optional</sup> <a name="default_branch_name" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.defaultBranchName"></a>

```python
default_branch_name: str
```

- *Type:* str

Instance-level custom initial branch name (introduced in GitLab 13.2).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.4.0/docs/resources/application_settings#default_branch_name ApplicationSettings#default_branch_name}

---

##### `default_branch_protection`<sup>Optional</sup> <a name="default_branch_protection" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.defaultBranchProtection"></a>

```python
default_branch_protection: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Determine if developers can push to the default branch.

Can take: 0 (not protected, both users with the Developer role or Maintainer role can push new commits and force push), 1 (partially protected, users with the Developer role or Maintainer role can push new commits, but cannot force push) or 2 (fully protected, users with the Developer or Maintainer role cannot push new commits, but users with the Developer or Maintainer role can; no one can force push) as a parameter. Default is 2.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.4.0/docs/resources/application_settings#default_branch_protection ApplicationSettings#default_branch_protection}

---

##### `default_ci_config_path`<sup>Optional</sup> <a name="default_ci_config_path" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.defaultCiConfigPath"></a>

```python
default_ci_config_path: str
```

- *Type:* str

Default CI/CD configuration file and path for new projects (.gitlab-ci.yml if not set).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.4.0/docs/resources/application_settings#default_ci_config_path ApplicationSettings#default_ci_config_path}

---

##### `default_group_visibility`<sup>Optional</sup> <a name="default_group_visibility" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.defaultGroupVisibility"></a>

```python
default_group_visibility: str
```

- *Type:* str

What visibility level new groups receive. Can take private, internal and public as a parameter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.4.0/docs/resources/application_settings#default_group_visibility ApplicationSettings#default_group_visibility}

---

##### `default_project_creation`<sup>Optional</sup> <a name="default_project_creation" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.defaultProjectCreation"></a>

```python
default_project_creation: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Default project creation protection. Can take: 0 (No one), 1 (Maintainers) or 2 (Developers + Maintainers).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.4.0/docs/resources/application_settings#default_project_creation ApplicationSettings#default_project_creation}

---

##### `default_projects_limit`<sup>Optional</sup> <a name="default_projects_limit" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.defaultProjectsLimit"></a>

```python
default_projects_limit: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Project limit per user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.4.0/docs/resources/application_settings#default_projects_limit ApplicationSettings#default_projects_limit}

---

##### `default_project_visibility`<sup>Optional</sup> <a name="default_project_visibility" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.defaultProjectVisibility"></a>

```python
default_project_visibility: str
```

- *Type:* str

What visibility level new projects receive. Can take private, internal and public as a parameter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.4.0/docs/resources/application_settings#default_project_visibility ApplicationSettings#default_project_visibility}

---

##### `default_snippet_visibility`<sup>Optional</sup> <a name="default_snippet_visibility" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.defaultSnippetVisibility"></a>

```python
default_snippet_visibility: str
```

- *Type:* str

What visibility level new snippets receive. Can take private, internal and public as a parameter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.4.0/docs/resources/application_settings#default_snippet_visibility ApplicationSettings#default_snippet_visibility}

---

##### `delayed_group_deletion`<sup>Optional</sup> <a name="delayed_group_deletion" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.delayedGroupDeletion"></a>

```python
delayed_group_deletion: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Enable delayed group deletion.

Introduced in GitLab 15.0. From GitLab 15.1, disables and locks the group-level setting for delayed protect deletion when set to false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.4.0/docs/resources/application_settings#delayed_group_deletion ApplicationSettings#delayed_group_deletion}

---

##### `delayed_project_deletion`<sup>Optional</sup> <a name="delayed_project_deletion" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.delayedProjectDeletion"></a>

```python
delayed_project_deletion: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Enable delayed project deletion by default in new groups.

From GitLab 15.1, can only be enabled when delayed_group_deletion is true.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.4.0/docs/resources/application_settings#delayed_project_deletion ApplicationSettings#delayed_project_deletion}

---

##### `delete_inactive_projects`<sup>Optional</sup> <a name="delete_inactive_projects" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.deleteInactiveProjects"></a>

```python
delete_inactive_projects: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Enable inactive project deletion feature. Introduced in GitLab 14.10. Became operational in GitLab 15.0 (with feature flag inactive_projects_deletion).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.4.0/docs/resources/application_settings#delete_inactive_projects ApplicationSettings#delete_inactive_projects}

---

##### `deletion_adjourned_period`<sup>Optional</sup> <a name="deletion_adjourned_period" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.deletionAdjournedPeriod"></a>

```python
deletion_adjourned_period: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The number of days to wait before deleting a project or group that is marked for deletion.

Value must be between 1 and 90. From GitLab 15.1, a hook on deletion_adjourned_period sets the period to 1 on every update, and sets both delayed_project_deletion and delayed_group_deletion to false if the period is 0.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.4.0/docs/resources/application_settings#deletion_adjourned_period ApplicationSettings#deletion_adjourned_period}

---

##### `diff_max_files`<sup>Optional</sup> <a name="diff_max_files" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.diffMaxFiles"></a>

```python
diff_max_files: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Maximum files in a diff.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.4.0/docs/resources/application_settings#diff_max_files ApplicationSettings#diff_max_files}

---

##### `diff_max_lines`<sup>Optional</sup> <a name="diff_max_lines" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.diffMaxLines"></a>

```python
diff_max_lines: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Maximum lines in a diff.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.4.0/docs/resources/application_settings#diff_max_lines ApplicationSettings#diff_max_lines}

---

##### `diff_max_patch_bytes`<sup>Optional</sup> <a name="diff_max_patch_bytes" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.diffMaxPatchBytes"></a>

```python
diff_max_patch_bytes: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Maximum diff patch size, in bytes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.4.0/docs/resources/application_settings#diff_max_patch_bytes ApplicationSettings#diff_max_patch_bytes}

---

##### `disabled_oauth_sign_in_sources`<sup>Optional</sup> <a name="disabled_oauth_sign_in_sources" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.disabledOauthSignInSources"></a>

```python
disabled_oauth_sign_in_sources: typing.List[str]
```

- *Type:* typing.List[str]

Disabled OAuth sign-in sources.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.4.0/docs/resources/application_settings#disabled_oauth_sign_in_sources ApplicationSettings#disabled_oauth_sign_in_sources}

---

##### `disable_feed_token`<sup>Optional</sup> <a name="disable_feed_token" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.disableFeedToken"></a>

```python
disable_feed_token: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Disable display of RSS/Atom and calendar feed tokens (introduced in GitLab 13.7).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.4.0/docs/resources/application_settings#disable_feed_token ApplicationSettings#disable_feed_token}

---

##### `dns_rebinding_protection_enabled`<sup>Optional</sup> <a name="dns_rebinding_protection_enabled" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.dnsRebindingProtectionEnabled"></a>

```python
dns_rebinding_protection_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Enforce DNS rebinding attack protection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.4.0/docs/resources/application_settings#dns_rebinding_protection_enabled ApplicationSettings#dns_rebinding_protection_enabled}

---

##### `domain_allowlist`<sup>Optional</sup> <a name="domain_allowlist" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.domainAllowlist"></a>

```python
domain_allowlist: typing.List[str]
```

- *Type:* typing.List[str]

Force people to use only corporate emails for sign-up. Null means there is no restriction.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.4.0/docs/resources/application_settings#domain_allowlist ApplicationSettings#domain_allowlist}

---

##### `domain_denylist`<sup>Optional</sup> <a name="domain_denylist" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.domainDenylist"></a>

```python
domain_denylist: typing.List[str]
```

- *Type:* typing.List[str]

Users with email addresses that match these domains cannot sign up.

Wildcards allowed. Use separate lines for multiple entries. Ex: domain.com, *.domain.com.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.4.0/docs/resources/application_settings#domain_denylist ApplicationSettings#domain_denylist}

---

##### `domain_denylist_enabled`<sup>Optional</sup> <a name="domain_denylist_enabled" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.domainDenylistEnabled"></a>

```python
domain_denylist_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

(If enabled, requires: domain_denylist) Allows blocking sign-ups from emails from specific domains.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.4.0/docs/resources/application_settings#domain_denylist_enabled ApplicationSettings#domain_denylist_enabled}

---

##### `dsa_key_restriction`<sup>Optional</sup> <a name="dsa_key_restriction" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.dsaKeyRestriction"></a>

```python
dsa_key_restriction: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The minimum allowed bit length of an uploaded DSA key. 0 means no restriction. -1 disables DSA keys.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.4.0/docs/resources/application_settings#dsa_key_restriction ApplicationSettings#dsa_key_restriction}

---

##### `ecdsa_key_restriction`<sup>Optional</sup> <a name="ecdsa_key_restriction" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.ecdsaKeyRestriction"></a>

```python
ecdsa_key_restriction: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The minimum allowed curve size (in bits) of an uploaded ECDSA key.

0 means no restriction. -1 disables ECDSA keys.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.4.0/docs/resources/application_settings#ecdsa_key_restriction ApplicationSettings#ecdsa_key_restriction}

---

##### `ecdsa_sk_key_restriction`<sup>Optional</sup> <a name="ecdsa_sk_key_restriction" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.ecdsaSkKeyRestriction"></a>

```python
ecdsa_sk_key_restriction: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The minimum allowed curve size (in bits) of an uploaded ECDSA_SK key.

0 means no restriction. -1 disables ECDSA_SK keys.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.4.0/docs/resources/application_settings#ecdsa_sk_key_restriction ApplicationSettings#ecdsa_sk_key_restriction}

---

##### `ed25519_key_restriction`<sup>Optional</sup> <a name="ed25519_key_restriction" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.ed25519KeyRestriction"></a>

```python
ed25519_key_restriction: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The minimum allowed curve size (in bits) of an uploaded ED25519 key.

0 means no restriction. -1 disables ED25519 keys.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.4.0/docs/resources/application_settings#ed25519_key_restriction ApplicationSettings#ed25519_key_restriction}

---

##### `ed25519_sk_key_restriction`<sup>Optional</sup> <a name="ed25519_sk_key_restriction" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.ed25519SkKeyRestriction"></a>

```python
ed25519_sk_key_restriction: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The minimum allowed curve size (in bits) of an uploaded ED25519_SK key.

0 means no restriction. -1 disables ED25519_SK keys.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.4.0/docs/resources/application_settings#ed25519_sk_key_restriction ApplicationSettings#ed25519_sk_key_restriction}

---

##### `eks_access_key_id`<sup>Optional</sup> <a name="eks_access_key_id" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.eksAccessKeyId"></a>

```python
eks_access_key_id: str
```

- *Type:* str

AWS IAM access key ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.4.0/docs/resources/application_settings#eks_access_key_id ApplicationSettings#eks_access_key_id}

---

##### `eks_account_id`<sup>Optional</sup> <a name="eks_account_id" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.eksAccountId"></a>

```python
eks_account_id: str
```

- *Type:* str

Amazon account ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.4.0/docs/resources/application_settings#eks_account_id ApplicationSettings#eks_account_id}

---

##### `eks_integration_enabled`<sup>Optional</sup> <a name="eks_integration_enabled" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.eksIntegrationEnabled"></a>

```python
eks_integration_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Enable integration with Amazon EKS.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.4.0/docs/resources/application_settings#eks_integration_enabled ApplicationSettings#eks_integration_enabled}

---

##### `eks_secret_access_key`<sup>Optional</sup> <a name="eks_secret_access_key" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.eksSecretAccessKey"></a>

```python
eks_secret_access_key: str
```

- *Type:* str

AWS IAM secret access key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.4.0/docs/resources/application_settings#eks_secret_access_key ApplicationSettings#eks_secret_access_key}

---

##### `elasticsearch_aws`<sup>Optional</sup> <a name="elasticsearch_aws" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.elasticsearchAws"></a>

```python
elasticsearch_aws: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Enable the use of AWS hosted Elasticsearch.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.4.0/docs/resources/application_settings#elasticsearch_aws ApplicationSettings#elasticsearch_aws}

---

##### `elasticsearch_aws_access_key`<sup>Optional</sup> <a name="elasticsearch_aws_access_key" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.elasticsearchAwsAccessKey"></a>

```python
elasticsearch_aws_access_key: str
```

- *Type:* str

AWS IAM access key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.4.0/docs/resources/application_settings#elasticsearch_aws_access_key ApplicationSettings#elasticsearch_aws_access_key}

---

##### `elasticsearch_aws_region`<sup>Optional</sup> <a name="elasticsearch_aws_region" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.elasticsearchAwsRegion"></a>

```python
elasticsearch_aws_region: str
```

- *Type:* str

The AWS region the Elasticsearch domain is configured.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.4.0/docs/resources/application_settings#elasticsearch_aws_region ApplicationSettings#elasticsearch_aws_region}

---

##### `elasticsearch_aws_secret_access_key`<sup>Optional</sup> <a name="elasticsearch_aws_secret_access_key" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.elasticsearchAwsSecretAccessKey"></a>

```python
elasticsearch_aws_secret_access_key: str
```

- *Type:* str

AWS IAM secret access key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.4.0/docs/resources/application_settings#elasticsearch_aws_secret_access_key ApplicationSettings#elasticsearch_aws_secret_access_key}

---

##### `elasticsearch_indexed_field_length_limit`<sup>Optional</sup> <a name="elasticsearch_indexed_field_length_limit" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.elasticsearchIndexedFieldLengthLimit"></a>

```python
elasticsearch_indexed_field_length_limit: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Maximum size of text fields to index by Elasticsearch.

0 value means no limit. This does not apply to repository and wiki indexing.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.4.0/docs/resources/application_settings#elasticsearch_indexed_field_length_limit ApplicationSettings#elasticsearch_indexed_field_length_limit}

---

##### `elasticsearch_indexed_file_size_limit_kb`<sup>Optional</sup> <a name="elasticsearch_indexed_file_size_limit_kb" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.elasticsearchIndexedFileSizeLimitKb"></a>

```python
elasticsearch_indexed_file_size_limit_kb: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Maximum size of repository and wiki files that are indexed by Elasticsearch.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.4.0/docs/resources/application_settings#elasticsearch_indexed_file_size_limit_kb ApplicationSettings#elasticsearch_indexed_file_size_limit_kb}

---

##### `elasticsearch_indexing`<sup>Optional</sup> <a name="elasticsearch_indexing" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.elasticsearchIndexing"></a>

```python
elasticsearch_indexing: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Enable Elasticsearch indexing.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.4.0/docs/resources/application_settings#elasticsearch_indexing ApplicationSettings#elasticsearch_indexing}

---

##### `elasticsearch_limit_indexing`<sup>Optional</sup> <a name="elasticsearch_limit_indexing" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.elasticsearchLimitIndexing"></a>

```python
elasticsearch_limit_indexing: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Limit Elasticsearch to index certain namespaces and projects.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.4.0/docs/resources/application_settings#elasticsearch_limit_indexing ApplicationSettings#elasticsearch_limit_indexing}

---

##### `elasticsearch_max_bulk_concurrency`<sup>Optional</sup> <a name="elasticsearch_max_bulk_concurrency" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.elasticsearchMaxBulkConcurrency"></a>

```python
elasticsearch_max_bulk_concurrency: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Maximum concurrency of Elasticsearch bulk requests per indexing operation. This only applies to repository indexing operations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.4.0/docs/resources/application_settings#elasticsearch_max_bulk_concurrency ApplicationSettings#elasticsearch_max_bulk_concurrency}

---

##### `elasticsearch_max_bulk_size_mb`<sup>Optional</sup> <a name="elasticsearch_max_bulk_size_mb" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.elasticsearchMaxBulkSizeMb"></a>

```python
elasticsearch_max_bulk_size_mb: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Maximum size of Elasticsearch bulk indexing requests in MB. This only applies to repository indexing operations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.4.0/docs/resources/application_settings#elasticsearch_max_bulk_size_mb ApplicationSettings#elasticsearch_max_bulk_size_mb}

---

##### `elasticsearch_namespace_ids`<sup>Optional</sup> <a name="elasticsearch_namespace_ids" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.elasticsearchNamespaceIds"></a>

```python
elasticsearch_namespace_ids: typing.List[str]
```

- *Type:* typing.List[str]

The namespaces to index via Elasticsearch if elasticsearch_limit_indexing is enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.4.0/docs/resources/application_settings#elasticsearch_namespace_ids ApplicationSettings#elasticsearch_namespace_ids}

---

##### `elasticsearch_password`<sup>Optional</sup> <a name="elasticsearch_password" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.elasticsearchPassword"></a>

```python
elasticsearch_password: str
```

- *Type:* str

The password of your Elasticsearch instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.4.0/docs/resources/application_settings#elasticsearch_password ApplicationSettings#elasticsearch_password}

---

##### `elasticsearch_project_ids`<sup>Optional</sup> <a name="elasticsearch_project_ids" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.elasticsearchProjectIds"></a>

```python
elasticsearch_project_ids: typing.List[str]
```

- *Type:* typing.List[str]

The projects to index via Elasticsearch if elasticsearch_limit_indexing is enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.4.0/docs/resources/application_settings#elasticsearch_project_ids ApplicationSettings#elasticsearch_project_ids}

---

##### `elasticsearch_search`<sup>Optional</sup> <a name="elasticsearch_search" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.elasticsearchSearch"></a>

```python
elasticsearch_search: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Enable Elasticsearch search.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.4.0/docs/resources/application_settings#elasticsearch_search ApplicationSettings#elasticsearch_search}

---

##### `elasticsearch_url`<sup>Optional</sup> <a name="elasticsearch_url" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.elasticsearchUrl"></a>

```python
elasticsearch_url: typing.List[str]
```

- *Type:* typing.List[str]

The URL to use for connecting to Elasticsearch. Use a comma-separated list to support cluster (for example, http://localhost:9200, http://localhost:9201).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.4.0/docs/resources/application_settings#elasticsearch_url ApplicationSettings#elasticsearch_url}

---

##### `elasticsearch_username`<sup>Optional</sup> <a name="elasticsearch_username" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.elasticsearchUsername"></a>

```python
elasticsearch_username: str
```

- *Type:* str

The username of your Elasticsearch instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.4.0/docs/resources/application_settings#elasticsearch_username ApplicationSettings#elasticsearch_username}

---

##### `email_additional_text`<sup>Optional</sup> <a name="email_additional_text" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.emailAdditionalText"></a>

```python
email_additional_text: str
```

- *Type:* str

Additional text added to the bottom of every email for legal/auditing/compliance reasons.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.4.0/docs/resources/application_settings#email_additional_text ApplicationSettings#email_additional_text}

---

##### `email_author_in_body`<sup>Optional</sup> <a name="email_author_in_body" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.emailAuthorInBody"></a>

```python
email_author_in_body: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Some email servers do not support overriding the email sender name.

Enable this option to include the name of the author of the issue, merge request or comment in the email body instead.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.4.0/docs/resources/application_settings#email_author_in_body ApplicationSettings#email_author_in_body}

---

##### `enabled_git_access_protocol`<sup>Optional</sup> <a name="enabled_git_access_protocol" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.enabledGitAccessProtocol"></a>

```python
enabled_git_access_protocol: str
```

- *Type:* str

Enabled protocols for Git access. Allowed values are: ssh, http, and nil to allow both protocols.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.4.0/docs/resources/application_settings#enabled_git_access_protocol ApplicationSettings#enabled_git_access_protocol}

---

##### `enforce_namespace_storage_limit`<sup>Optional</sup> <a name="enforce_namespace_storage_limit" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.enforceNamespaceStorageLimit"></a>

```python
enforce_namespace_storage_limit: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Enabling this permits enforcement of namespace storage limits.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.4.0/docs/resources/application_settings#enforce_namespace_storage_limit ApplicationSettings#enforce_namespace_storage_limit}

---

##### `enforce_terms`<sup>Optional</sup> <a name="enforce_terms" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.enforceTerms"></a>

```python
enforce_terms: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

(If enabled, requires: terms) Enforce application ToS to all users.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.4.0/docs/resources/application_settings#enforce_terms ApplicationSettings#enforce_terms}

---

##### `external_auth_client_cert`<sup>Optional</sup> <a name="external_auth_client_cert" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.externalAuthClientCert"></a>

```python
external_auth_client_cert: str
```

- *Type:* str

(If enabled, requires: external_auth_client_key) The certificate to use to authenticate with the external authorization service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.4.0/docs/resources/application_settings#external_auth_client_cert ApplicationSettings#external_auth_client_cert}

---

##### `external_auth_client_key`<sup>Optional</sup> <a name="external_auth_client_key" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.externalAuthClientKey"></a>

```python
external_auth_client_key: str
```

- *Type:* str

Private key for the certificate when authentication is required for the external authorization service, this is encrypted when stored.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.4.0/docs/resources/application_settings#external_auth_client_key ApplicationSettings#external_auth_client_key}

---

##### `external_auth_client_key_pass`<sup>Optional</sup> <a name="external_auth_client_key_pass" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.externalAuthClientKeyPass"></a>

```python
external_auth_client_key_pass: str
```

- *Type:* str

Passphrase to use for the private key when authenticating with the external service this is encrypted when stored.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.4.0/docs/resources/application_settings#external_auth_client_key_pass ApplicationSettings#external_auth_client_key_pass}

---

##### `external_authorization_service_default_label`<sup>Optional</sup> <a name="external_authorization_service_default_label" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.externalAuthorizationServiceDefaultLabel"></a>

```python
external_authorization_service_default_label: str
```

- *Type:* str

The default classification label to use when requesting authorization and no classification label has been specified on the project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.4.0/docs/resources/application_settings#external_authorization_service_default_label ApplicationSettings#external_authorization_service_default_label}

---

##### `external_authorization_service_enabled`<sup>Optional</sup> <a name="external_authorization_service_enabled" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.externalAuthorizationServiceEnabled"></a>

```python
external_authorization_service_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

(If enabled, requires: external_authorization_service_default_label, external_authorization_service_timeout and external_authorization_service_url) Enable using an external authorization service for accessing projects.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.4.0/docs/resources/application_settings#external_authorization_service_enabled ApplicationSettings#external_authorization_service_enabled}

---

##### `external_authorization_service_timeout`<sup>Optional</sup> <a name="external_authorization_service_timeout" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.externalAuthorizationServiceTimeout"></a>

```python
external_authorization_service_timeout: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The timeout after which an authorization request is aborted, in seconds.

When a request times out, access is denied to the user. (min: 0.001, max: 10, step: 0.001).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.4.0/docs/resources/application_settings#external_authorization_service_timeout ApplicationSettings#external_authorization_service_timeout}

---

##### `external_authorization_service_url`<sup>Optional</sup> <a name="external_authorization_service_url" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.externalAuthorizationServiceUrl"></a>

```python
external_authorization_service_url: str
```

- *Type:* str

URL to which authorization requests are directed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.4.0/docs/resources/application_settings#external_authorization_service_url ApplicationSettings#external_authorization_service_url}

---

##### `external_pipeline_validation_service_timeout`<sup>Optional</sup> <a name="external_pipeline_validation_service_timeout" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.externalPipelineValidationServiceTimeout"></a>

```python
external_pipeline_validation_service_timeout: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

How long to wait for a response from the pipeline validation service. Assumes OK if it times out.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.4.0/docs/resources/application_settings#external_pipeline_validation_service_timeout ApplicationSettings#external_pipeline_validation_service_timeout}

---

##### `external_pipeline_validation_service_token`<sup>Optional</sup> <a name="external_pipeline_validation_service_token" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.externalPipelineValidationServiceToken"></a>

```python
external_pipeline_validation_service_token: str
```

- *Type:* str

Optional. Token to include as the X-Gitlab-Token header in requests to the URL in external_pipeline_validation_service_url.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.4.0/docs/resources/application_settings#external_pipeline_validation_service_token ApplicationSettings#external_pipeline_validation_service_token}

---

##### `external_pipeline_validation_service_url`<sup>Optional</sup> <a name="external_pipeline_validation_service_url" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.externalPipelineValidationServiceUrl"></a>

```python
external_pipeline_validation_service_url: str
```

- *Type:* str

URL to use for pipeline validation requests.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.4.0/docs/resources/application_settings#external_pipeline_validation_service_url ApplicationSettings#external_pipeline_validation_service_url}

---

##### `file_template_project_id`<sup>Optional</sup> <a name="file_template_project_id" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.fileTemplateProjectId"></a>

```python
file_template_project_id: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The ID of a project to load custom file templates from.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.4.0/docs/resources/application_settings#file_template_project_id ApplicationSettings#file_template_project_id}

---

##### `first_day_of_week`<sup>Optional</sup> <a name="first_day_of_week" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.firstDayOfWeek"></a>

```python
first_day_of_week: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Start day of the week for calendar views and date pickers.

Valid values are 0 for Sunday, 1 for Monday, and 6 for Saturday.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.4.0/docs/resources/application_settings#first_day_of_week ApplicationSettings#first_day_of_week}

---

##### `geo_node_allowed_ips`<sup>Optional</sup> <a name="geo_node_allowed_ips" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.geoNodeAllowedIps"></a>

```python
geo_node_allowed_ips: str
```

- *Type:* str

Comma-separated list of IPs and CIDRs of allowed secondary nodes. For example, 1.1.1.1, 2.2.2.0/24.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.4.0/docs/resources/application_settings#geo_node_allowed_ips ApplicationSettings#geo_node_allowed_ips}

---

##### `geo_status_timeout`<sup>Optional</sup> <a name="geo_status_timeout" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.geoStatusTimeout"></a>

```python
geo_status_timeout: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The amount of seconds after which a request to get a secondary node status times out.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.4.0/docs/resources/application_settings#geo_status_timeout ApplicationSettings#geo_status_timeout}

---

##### `gitaly_timeout_default`<sup>Optional</sup> <a name="gitaly_timeout_default" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.gitalyTimeoutDefault"></a>

```python
gitaly_timeout_default: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Default Gitaly timeout, in seconds.

This timeout is not enforced for Git fetch/push operations or Sidekiq jobs. Set to 0 to disable timeouts.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.4.0/docs/resources/application_settings#gitaly_timeout_default ApplicationSettings#gitaly_timeout_default}

---

##### `gitaly_timeout_fast`<sup>Optional</sup> <a name="gitaly_timeout_fast" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.gitalyTimeoutFast"></a>

```python
gitaly_timeout_fast: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Gitaly fast operation timeout, in seconds.

Some Gitaly operations are expected to be fast. If they exceed this threshold, there may be a problem with a storage shard and ‘failing fast’ can help maintain the stability of the GitLab instance. Set to 0 to disable timeouts.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.4.0/docs/resources/application_settings#gitaly_timeout_fast ApplicationSettings#gitaly_timeout_fast}

---

##### `gitaly_timeout_medium`<sup>Optional</sup> <a name="gitaly_timeout_medium" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.gitalyTimeoutMedium"></a>

```python
gitaly_timeout_medium: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Medium Gitaly timeout, in seconds.

This should be a value between the Fast and the Default timeout. Set to 0 to disable timeouts.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.4.0/docs/resources/application_settings#gitaly_timeout_medium ApplicationSettings#gitaly_timeout_medium}

---

##### `git_rate_limit_users_allowlist`<sup>Optional</sup> <a name="git_rate_limit_users_allowlist" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.gitRateLimitUsersAllowlist"></a>

```python
git_rate_limit_users_allowlist: typing.List[str]
```

- *Type:* typing.List[str]

List of usernames excluded from Git anti-abuse rate limits. Maximum: 100 usernames. Introduced in GitLab 15.2.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.4.0/docs/resources/application_settings#git_rate_limit_users_allowlist ApplicationSettings#git_rate_limit_users_allowlist}

---

##### `git_two_factor_session_expiry`<sup>Optional</sup> <a name="git_two_factor_session_expiry" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.gitTwoFactorSessionExpiry"></a>

```python
git_two_factor_session_expiry: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Maximum duration (in minutes) of a session for Git operations when 2FA is enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.4.0/docs/resources/application_settings#git_two_factor_session_expiry ApplicationSettings#git_two_factor_session_expiry}

---

##### `grafana_enabled`<sup>Optional</sup> <a name="grafana_enabled" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.grafanaEnabled"></a>

```python
grafana_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Enable Grafana.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.4.0/docs/resources/application_settings#grafana_enabled ApplicationSettings#grafana_enabled}

---

##### `grafana_url`<sup>Optional</sup> <a name="grafana_url" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.grafanaUrl"></a>

```python
grafana_url: str
```

- *Type:* str

Grafana URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.4.0/docs/resources/application_settings#grafana_url ApplicationSettings#grafana_url}

---

##### `gravatar_enabled`<sup>Optional</sup> <a name="gravatar_enabled" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.gravatarEnabled"></a>

```python
gravatar_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Enable Gravatar.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.4.0/docs/resources/application_settings#gravatar_enabled ApplicationSettings#gravatar_enabled}

---

##### `group_owners_can_manage_default_branch_protection`<sup>Optional</sup> <a name="group_owners_can_manage_default_branch_protection" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.groupOwnersCanManageDefaultBranchProtection"></a>

```python
group_owners_can_manage_default_branch_protection: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Prevent overrides of default branch protection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.4.0/docs/resources/application_settings#group_owners_can_manage_default_branch_protection ApplicationSettings#group_owners_can_manage_default_branch_protection}

---

##### `hashed_storage_enabled`<sup>Optional</sup> <a name="hashed_storage_enabled" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.hashedStorageEnabled"></a>

```python
hashed_storage_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Create new projects using hashed storage paths: Enable immutable, hash-based paths and repository names to store repositories on disk.

This prevents repositories from having to be moved or renamed when the Project URL changes and may improve disk I/O performance. (Always enabled in GitLab versions 13.0 and later, configuration is scheduled for removal in 14.0).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.4.0/docs/resources/application_settings#hashed_storage_enabled ApplicationSettings#hashed_storage_enabled}

---

##### `help_page_hide_commercial_content`<sup>Optional</sup> <a name="help_page_hide_commercial_content" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.helpPageHideCommercialContent"></a>

```python
help_page_hide_commercial_content: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Hide marketing-related entries from help.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.4.0/docs/resources/application_settings#help_page_hide_commercial_content ApplicationSettings#help_page_hide_commercial_content}

---

##### `help_page_support_url`<sup>Optional</sup> <a name="help_page_support_url" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.helpPageSupportUrl"></a>

```python
help_page_support_url: str
```

- *Type:* str

Alternate support URL for help page and help dropdown.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.4.0/docs/resources/application_settings#help_page_support_url ApplicationSettings#help_page_support_url}

---

##### `help_page_text`<sup>Optional</sup> <a name="help_page_text" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.helpPageText"></a>

```python
help_page_text: str
```

- *Type:* str

Custom text displayed on the help page.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.4.0/docs/resources/application_settings#help_page_text ApplicationSettings#help_page_text}

---

##### `help_text`<sup>Optional</sup> <a name="help_text" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.helpText"></a>

```python
help_text: str
```

- *Type:* str

GitLab server administrator information.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.4.0/docs/resources/application_settings#help_text ApplicationSettings#help_text}

---

##### `hide_third_party_offers`<sup>Optional</sup> <a name="hide_third_party_offers" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.hideThirdPartyOffers"></a>

```python
hide_third_party_offers: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Do not display offers from third parties in GitLab.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.4.0/docs/resources/application_settings#hide_third_party_offers ApplicationSettings#hide_third_party_offers}

---

##### `home_page_url`<sup>Optional</sup> <a name="home_page_url" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.homePageUrl"></a>

```python
home_page_url: str
```

- *Type:* str

Redirect to this URL when not logged in.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.4.0/docs/resources/application_settings#home_page_url ApplicationSettings#home_page_url}

---

##### `housekeeping_enabled`<sup>Optional</sup> <a name="housekeeping_enabled" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.housekeepingEnabled"></a>

```python
housekeeping_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

(If enabled, requires: housekeeping_bitmaps_enabled, housekeeping_full_repack_period, housekeeping_gc_period, and housekeeping_incremental_repack_period) Enable or disable Git housekeeping.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.4.0/docs/resources/application_settings#housekeeping_enabled ApplicationSettings#housekeeping_enabled}

---

##### `housekeeping_full_repack_period`<sup>Optional</sup> <a name="housekeeping_full_repack_period" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.housekeepingFullRepackPeriod"></a>

```python
housekeeping_full_repack_period: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Number of Git pushes after which an incremental git repack is run.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.4.0/docs/resources/application_settings#housekeeping_full_repack_period ApplicationSettings#housekeeping_full_repack_period}

---

##### `housekeeping_gc_period`<sup>Optional</sup> <a name="housekeeping_gc_period" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.housekeepingGcPeriod"></a>

```python
housekeeping_gc_period: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Number of Git pushes after which git gc is run.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.4.0/docs/resources/application_settings#housekeeping_gc_period ApplicationSettings#housekeeping_gc_period}

---

##### `housekeeping_incremental_repack_period`<sup>Optional</sup> <a name="housekeeping_incremental_repack_period" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.housekeepingIncrementalRepackPeriod"></a>

```python
housekeeping_incremental_repack_period: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Number of Git pushes after which an incremental git repack is run.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.4.0/docs/resources/application_settings#housekeeping_incremental_repack_period ApplicationSettings#housekeeping_incremental_repack_period}

---

##### `html_emails_enabled`<sup>Optional</sup> <a name="html_emails_enabled" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.htmlEmailsEnabled"></a>

```python
html_emails_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Enable HTML emails.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.4.0/docs/resources/application_settings#html_emails_enabled ApplicationSettings#html_emails_enabled}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.4.0/docs/resources/application_settings#id ApplicationSettings#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `import_sources`<sup>Optional</sup> <a name="import_sources" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.importSources"></a>

```python
import_sources: typing.List[str]
```

- *Type:* typing.List[str]

Sources to allow project import from. Valid values are: `github`, `bitbucket`, `bitbucket_server`, `fogbugz`, `git`, `gitlab_project`, `gitea`, `manifest`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.4.0/docs/resources/application_settings#import_sources ApplicationSettings#import_sources}

---

##### `inactive_projects_delete_after_months`<sup>Optional</sup> <a name="inactive_projects_delete_after_months" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.inactiveProjectsDeleteAfterMonths"></a>

```python
inactive_projects_delete_after_months: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

If delete_inactive_projects is true, the time (in months) to wait before deleting inactive projects.

Introduced in GitLab 14.10. Became operational in GitLab 15.0.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.4.0/docs/resources/application_settings#inactive_projects_delete_after_months ApplicationSettings#inactive_projects_delete_after_months}

---

##### `inactive_projects_min_size_mb`<sup>Optional</sup> <a name="inactive_projects_min_size_mb" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.inactiveProjectsMinSizeMb"></a>

```python
inactive_projects_min_size_mb: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

If delete_inactive_projects is true, the minimum repository size for projects to be checked for inactivity.

Introduced in GitLab 14.10. Became operational in GitLab 15.0.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.4.0/docs/resources/application_settings#inactive_projects_min_size_mb ApplicationSettings#inactive_projects_min_size_mb}

---

##### `inactive_projects_send_warning_email_after_months`<sup>Optional</sup> <a name="inactive_projects_send_warning_email_after_months" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.inactiveProjectsSendWarningEmailAfterMonths"></a>

```python
inactive_projects_send_warning_email_after_months: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

If delete_inactive_projects is true, sets the time (in months) to wait before emailing maintainers that the project is scheduled be deleted because it is inactive.

Introduced in GitLab 14.10. Became operational in GitLab 15.0.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.4.0/docs/resources/application_settings#inactive_projects_send_warning_email_after_months ApplicationSettings#inactive_projects_send_warning_email_after_months}

---

##### `in_product_marketing_emails_enabled`<sup>Optional</sup> <a name="in_product_marketing_emails_enabled" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.inProductMarketingEmailsEnabled"></a>

```python
in_product_marketing_emails_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Enable in-product marketing emails.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.4.0/docs/resources/application_settings#in_product_marketing_emails_enabled ApplicationSettings#in_product_marketing_emails_enabled}

---

##### `invisible_captcha_enabled`<sup>Optional</sup> <a name="invisible_captcha_enabled" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.invisibleCaptchaEnabled"></a>

```python
invisible_captcha_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Enable Invisible CAPTCHA spam detection during sign-up.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.4.0/docs/resources/application_settings#invisible_captcha_enabled ApplicationSettings#invisible_captcha_enabled}

---

##### `issues_create_limit`<sup>Optional</sup> <a name="issues_create_limit" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.issuesCreateLimit"></a>

```python
issues_create_limit: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Max number of issue creation requests per minute per user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.4.0/docs/resources/application_settings#issues_create_limit ApplicationSettings#issues_create_limit}

---

##### `keep_latest_artifact`<sup>Optional</sup> <a name="keep_latest_artifact" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.keepLatestArtifact"></a>

```python
keep_latest_artifact: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Prevent the deletion of the artifacts from the most recent successful jobs, regardless of the expiry time.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.4.0/docs/resources/application_settings#keep_latest_artifact ApplicationSettings#keep_latest_artifact}

---

##### `local_markdown_version`<sup>Optional</sup> <a name="local_markdown_version" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.localMarkdownVersion"></a>

```python
local_markdown_version: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Increase this value when any cached Markdown should be invalidated.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.4.0/docs/resources/application_settings#local_markdown_version ApplicationSettings#local_markdown_version}

---

##### `mailgun_events_enabled`<sup>Optional</sup> <a name="mailgun_events_enabled" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.mailgunEventsEnabled"></a>

```python
mailgun_events_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Enable Mailgun event receiver.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.4.0/docs/resources/application_settings#mailgun_events_enabled ApplicationSettings#mailgun_events_enabled}

---

##### `mailgun_signing_key`<sup>Optional</sup> <a name="mailgun_signing_key" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.mailgunSigningKey"></a>

```python
mailgun_signing_key: str
```

- *Type:* str

The Mailgun HTTP webhook signing key for receiving events from webhook.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.4.0/docs/resources/application_settings#mailgun_signing_key ApplicationSettings#mailgun_signing_key}

---

##### `maintenance_mode`<sup>Optional</sup> <a name="maintenance_mode" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.maintenanceMode"></a>

```python
maintenance_mode: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

When instance is in maintenance mode, non-administrative users can sign in with read-only access and make read-only API requests.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.4.0/docs/resources/application_settings#maintenance_mode ApplicationSettings#maintenance_mode}

---

##### `maintenance_mode_message`<sup>Optional</sup> <a name="maintenance_mode_message" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.maintenanceModeMessage"></a>

```python
maintenance_mode_message: str
```

- *Type:* str

Message displayed when instance is in maintenance mode.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.4.0/docs/resources/application_settings#maintenance_mode_message ApplicationSettings#maintenance_mode_message}

---

##### `max_artifacts_size`<sup>Optional</sup> <a name="max_artifacts_size" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.maxArtifactsSize"></a>

```python
max_artifacts_size: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Maximum artifacts size in MB.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.4.0/docs/resources/application_settings#max_artifacts_size ApplicationSettings#max_artifacts_size}

---

##### `max_attachment_size`<sup>Optional</sup> <a name="max_attachment_size" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.maxAttachmentSize"></a>

```python
max_attachment_size: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Limit attachment size in MB.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.4.0/docs/resources/application_settings#max_attachment_size ApplicationSettings#max_attachment_size}

---

##### `max_export_size`<sup>Optional</sup> <a name="max_export_size" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.maxExportSize"></a>

```python
max_export_size: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Maximum export size in MB. 0 for unlimited.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.4.0/docs/resources/application_settings#max_export_size ApplicationSettings#max_export_size}

---

##### `max_import_size`<sup>Optional</sup> <a name="max_import_size" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.maxImportSize"></a>

```python
max_import_size: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Maximum import size in MB. 0 for unlimited.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.4.0/docs/resources/application_settings#max_import_size ApplicationSettings#max_import_size}

---

##### `max_number_of_repository_downloads`<sup>Optional</sup> <a name="max_number_of_repository_downloads" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.maxNumberOfRepositoryDownloads"></a>

```python
max_number_of_repository_downloads: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Maximum number of unique repositories a user can download in the specified time period before they are banned.

Maximum: 10,000 repositories. Introduced in GitLab 15.1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.4.0/docs/resources/application_settings#max_number_of_repository_downloads ApplicationSettings#max_number_of_repository_downloads}

---

##### `max_number_of_repository_downloads_within_time_period`<sup>Optional</sup> <a name="max_number_of_repository_downloads_within_time_period" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.maxNumberOfRepositoryDownloadsWithinTimePeriod"></a>

```python
max_number_of_repository_downloads_within_time_period: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Reporting time period (in seconds). Maximum: 864000 seconds (10 days). Introduced in GitLab 15.1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.4.0/docs/resources/application_settings#max_number_of_repository_downloads_within_time_period ApplicationSettings#max_number_of_repository_downloads_within_time_period}

---

##### `max_pages_size`<sup>Optional</sup> <a name="max_pages_size" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.maxPagesSize"></a>

```python
max_pages_size: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Maximum size of pages repositories in MB.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.4.0/docs/resources/application_settings#max_pages_size ApplicationSettings#max_pages_size}

---

##### `max_personal_access_token_lifetime`<sup>Optional</sup> <a name="max_personal_access_token_lifetime" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.maxPersonalAccessTokenLifetime"></a>

```python
max_personal_access_token_lifetime: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Maximum allowable lifetime for access tokens in days.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.4.0/docs/resources/application_settings#max_personal_access_token_lifetime ApplicationSettings#max_personal_access_token_lifetime}

---

##### `max_ssh_key_lifetime`<sup>Optional</sup> <a name="max_ssh_key_lifetime" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.maxSshKeyLifetime"></a>

```python
max_ssh_key_lifetime: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Maximum allowable lifetime for SSH keys in days. Introduced in GitLab 14.6.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.4.0/docs/resources/application_settings#max_ssh_key_lifetime ApplicationSettings#max_ssh_key_lifetime}

---

##### `metrics_method_call_threshold`<sup>Optional</sup> <a name="metrics_method_call_threshold" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.metricsMethodCallThreshold"></a>

```python
metrics_method_call_threshold: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

A method call is only tracked when it takes longer than the given amount of milliseconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.4.0/docs/resources/application_settings#metrics_method_call_threshold ApplicationSettings#metrics_method_call_threshold}

---

##### `mirror_available`<sup>Optional</sup> <a name="mirror_available" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.mirrorAvailable"></a>

```python
mirror_available: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Allow repository mirroring to configured by project Maintainers. If disabled, only Administrators can configure repository mirroring.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.4.0/docs/resources/application_settings#mirror_available ApplicationSettings#mirror_available}

---

##### `mirror_capacity_threshold`<sup>Optional</sup> <a name="mirror_capacity_threshold" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.mirrorCapacityThreshold"></a>

```python
mirror_capacity_threshold: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Minimum capacity to be available before scheduling more mirrors preemptively.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.4.0/docs/resources/application_settings#mirror_capacity_threshold ApplicationSettings#mirror_capacity_threshold}

---

##### `mirror_max_capacity`<sup>Optional</sup> <a name="mirror_max_capacity" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.mirrorMaxCapacity"></a>

```python
mirror_max_capacity: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Maximum number of mirrors that can be synchronizing at the same time.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.4.0/docs/resources/application_settings#mirror_max_capacity ApplicationSettings#mirror_max_capacity}

---

##### `mirror_max_delay`<sup>Optional</sup> <a name="mirror_max_delay" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.mirrorMaxDelay"></a>

```python
mirror_max_delay: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Maximum time (in minutes) between updates that a mirror can have when scheduled to synchronize.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.4.0/docs/resources/application_settings#mirror_max_delay ApplicationSettings#mirror_max_delay}

---

##### `npm_package_requests_forwarding`<sup>Optional</sup> <a name="npm_package_requests_forwarding" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.npmPackageRequestsForwarding"></a>

```python
npm_package_requests_forwarding: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Use npmjs.org as a default remote repository when the package is not found in the GitLab Package Registry for npm.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.4.0/docs/resources/application_settings#npm_package_requests_forwarding ApplicationSettings#npm_package_requests_forwarding}

---

##### `outbound_local_requests_whitelist`<sup>Optional</sup> <a name="outbound_local_requests_whitelist" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.outboundLocalRequestsWhitelist"></a>

```python
outbound_local_requests_whitelist: typing.List[str]
```

- *Type:* typing.List[str]

Define a list of trusted domains or IP addresses to which local requests are allowed when local requests for hooks and services are disabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.4.0/docs/resources/application_settings#outbound_local_requests_whitelist ApplicationSettings#outbound_local_requests_whitelist}

---

##### `package_registry_cleanup_policies_worker_capacity`<sup>Optional</sup> <a name="package_registry_cleanup_policies_worker_capacity" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.packageRegistryCleanupPoliciesWorkerCapacity"></a>

```python
package_registry_cleanup_policies_worker_capacity: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Number of workers assigned to the packages cleanup policies.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.4.0/docs/resources/application_settings#package_registry_cleanup_policies_worker_capacity ApplicationSettings#package_registry_cleanup_policies_worker_capacity}

---

##### `pages_domain_verification_enabled`<sup>Optional</sup> <a name="pages_domain_verification_enabled" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.pagesDomainVerificationEnabled"></a>

```python
pages_domain_verification_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Require users to prove ownership of custom domains.

Domain verification is an essential security measure for public GitLab sites. Users are required to demonstrate they control a domain before it is enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.4.0/docs/resources/application_settings#pages_domain_verification_enabled ApplicationSettings#pages_domain_verification_enabled}

---

##### `password_authentication_enabled_for_git`<sup>Optional</sup> <a name="password_authentication_enabled_for_git" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.passwordAuthenticationEnabledForGit"></a>

```python
password_authentication_enabled_for_git: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Enable authentication for Git over HTTP(S) via a GitLab account password.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.4.0/docs/resources/application_settings#password_authentication_enabled_for_git ApplicationSettings#password_authentication_enabled_for_git}

---

##### `password_authentication_enabled_for_web`<sup>Optional</sup> <a name="password_authentication_enabled_for_web" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.passwordAuthenticationEnabledForWeb"></a>

```python
password_authentication_enabled_for_web: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Enable authentication for the web interface via a GitLab account password.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.4.0/docs/resources/application_settings#password_authentication_enabled_for_web ApplicationSettings#password_authentication_enabled_for_web}

---

##### `password_lowercase_required`<sup>Optional</sup> <a name="password_lowercase_required" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.passwordLowercaseRequired"></a>

```python
password_lowercase_required: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Indicates whether passwords require at least one lowercase letter. Introduced in GitLab 15.1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.4.0/docs/resources/application_settings#password_lowercase_required ApplicationSettings#password_lowercase_required}

---

##### `password_number_required`<sup>Optional</sup> <a name="password_number_required" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.passwordNumberRequired"></a>

```python
password_number_required: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Indicates whether passwords require at least one number. Introduced in GitLab 15.1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.4.0/docs/resources/application_settings#password_number_required ApplicationSettings#password_number_required}

---

##### `password_symbol_required`<sup>Optional</sup> <a name="password_symbol_required" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.passwordSymbolRequired"></a>

```python
password_symbol_required: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Indicates whether passwords require at least one symbol character. Introduced in GitLab 15.1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.4.0/docs/resources/application_settings#password_symbol_required ApplicationSettings#password_symbol_required}

---

##### `password_uppercase_required`<sup>Optional</sup> <a name="password_uppercase_required" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.passwordUppercaseRequired"></a>

```python
password_uppercase_required: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Indicates whether passwords require at least one uppercase letter. Introduced in GitLab 15.1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.4.0/docs/resources/application_settings#password_uppercase_required ApplicationSettings#password_uppercase_required}

---

##### `performance_bar_allowed_group_path`<sup>Optional</sup> <a name="performance_bar_allowed_group_path" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.performanceBarAllowedGroupPath"></a>

```python
performance_bar_allowed_group_path: str
```

- *Type:* str

Path of the group that is allowed to toggle the performance bar.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.4.0/docs/resources/application_settings#performance_bar_allowed_group_path ApplicationSettings#performance_bar_allowed_group_path}

---

##### `personal_access_token_prefix`<sup>Optional</sup> <a name="personal_access_token_prefix" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.personalAccessTokenPrefix"></a>

```python
personal_access_token_prefix: str
```

- *Type:* str

Prefix for all generated personal access tokens.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.4.0/docs/resources/application_settings#personal_access_token_prefix ApplicationSettings#personal_access_token_prefix}

---

##### `pipeline_limit_per_project_user_sha`<sup>Optional</sup> <a name="pipeline_limit_per_project_user_sha" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.pipelineLimitPerProjectUserSha"></a>

```python
pipeline_limit_per_project_user_sha: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Maximum number of pipeline creation requests per minute per user and commit.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.4.0/docs/resources/application_settings#pipeline_limit_per_project_user_sha ApplicationSettings#pipeline_limit_per_project_user_sha}

---

##### `plantuml_enabled`<sup>Optional</sup> <a name="plantuml_enabled" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.plantumlEnabled"></a>

```python
plantuml_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

(If enabled, requires: plantuml_url) Enable PlantUML integration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.4.0/docs/resources/application_settings#plantuml_enabled ApplicationSettings#plantuml_enabled}

---

##### `plantuml_url`<sup>Optional</sup> <a name="plantuml_url" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.plantumlUrl"></a>

```python
plantuml_url: str
```

- *Type:* str

The PlantUML instance URL for integration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.4.0/docs/resources/application_settings#plantuml_url ApplicationSettings#plantuml_url}

---

##### `polling_interval_multiplier`<sup>Optional</sup> <a name="polling_interval_multiplier" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.pollingIntervalMultiplier"></a>

```python
polling_interval_multiplier: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Interval multiplier used by endpoints that perform polling. Set to 0 to disable polling.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.4.0/docs/resources/application_settings#polling_interval_multiplier ApplicationSettings#polling_interval_multiplier}

---

##### `project_export_enabled`<sup>Optional</sup> <a name="project_export_enabled" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.projectExportEnabled"></a>

```python
project_export_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Enable project export.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.4.0/docs/resources/application_settings#project_export_enabled ApplicationSettings#project_export_enabled}

---

##### `prometheus_metrics_enabled`<sup>Optional</sup> <a name="prometheus_metrics_enabled" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.prometheusMetricsEnabled"></a>

```python
prometheus_metrics_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Enable Prometheus metrics.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.4.0/docs/resources/application_settings#prometheus_metrics_enabled ApplicationSettings#prometheus_metrics_enabled}

---

##### `protected_ci_variables`<sup>Optional</sup> <a name="protected_ci_variables" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.protectedCiVariables"></a>

```python
protected_ci_variables: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

CI/CD variables are protected by default.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.4.0/docs/resources/application_settings#protected_ci_variables ApplicationSettings#protected_ci_variables}

---

##### `push_event_activities_limit`<sup>Optional</sup> <a name="push_event_activities_limit" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.pushEventActivitiesLimit"></a>

```python
push_event_activities_limit: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Number of changes (branches or tags) in a single push to determine whether individual push events or bulk push events are created.

Bulk push events are created if it surpasses that value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.4.0/docs/resources/application_settings#push_event_activities_limit ApplicationSettings#push_event_activities_limit}

---

##### `push_event_hooks_limit`<sup>Optional</sup> <a name="push_event_hooks_limit" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.pushEventHooksLimit"></a>

```python
push_event_hooks_limit: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Number of changes (branches or tags) in a single push to determine whether webhooks and services fire or not.

Webhooks and services aren’t submitted if it surpasses that value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.4.0/docs/resources/application_settings#push_event_hooks_limit ApplicationSettings#push_event_hooks_limit}

---

##### `pypi_package_requests_forwarding`<sup>Optional</sup> <a name="pypi_package_requests_forwarding" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.pypiPackageRequestsForwarding"></a>

```python
pypi_package_requests_forwarding: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Use pypi.org as a default remote repository when the package is not found in the GitLab Package Registry for PyPI.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.4.0/docs/resources/application_settings#pypi_package_requests_forwarding ApplicationSettings#pypi_package_requests_forwarding}

---

##### `rate_limiting_response_text`<sup>Optional</sup> <a name="rate_limiting_response_text" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.rateLimitingResponseText"></a>

```python
rate_limiting_response_text: str
```

- *Type:* str

When rate limiting is enabled via the throttle_* settings, send this plain text response when a rate limit is exceeded.

‘Retry later’ is sent if this is blank.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.4.0/docs/resources/application_settings#rate_limiting_response_text ApplicationSettings#rate_limiting_response_text}

---

##### `raw_blob_request_limit`<sup>Optional</sup> <a name="raw_blob_request_limit" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.rawBlobRequestLimit"></a>

```python
raw_blob_request_limit: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Max number of requests per minute for each raw path. To disable throttling set to 0.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.4.0/docs/resources/application_settings#raw_blob_request_limit ApplicationSettings#raw_blob_request_limit}

---

##### `recaptcha_enabled`<sup>Optional</sup> <a name="recaptcha_enabled" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.recaptchaEnabled"></a>

```python
recaptcha_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

(If enabled, requires: recaptcha_private_key and recaptcha_site_key) Enable reCAPTCHA.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.4.0/docs/resources/application_settings#recaptcha_enabled ApplicationSettings#recaptcha_enabled}

---

##### `recaptcha_private_key`<sup>Optional</sup> <a name="recaptcha_private_key" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.recaptchaPrivateKey"></a>

```python
recaptcha_private_key: str
```

- *Type:* str

Private key for reCAPTCHA.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.4.0/docs/resources/application_settings#recaptcha_private_key ApplicationSettings#recaptcha_private_key}

---

##### `recaptcha_site_key`<sup>Optional</sup> <a name="recaptcha_site_key" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.recaptchaSiteKey"></a>

```python
recaptcha_site_key: str
```

- *Type:* str

Site key for reCAPTCHA.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.4.0/docs/resources/application_settings#recaptcha_site_key ApplicationSettings#recaptcha_site_key}

---

##### `receive_max_input_size`<sup>Optional</sup> <a name="receive_max_input_size" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.receiveMaxInputSize"></a>

```python
receive_max_input_size: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Maximum push size (MB).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.4.0/docs/resources/application_settings#receive_max_input_size ApplicationSettings#receive_max_input_size}

---

##### `repository_checks_enabled`<sup>Optional</sup> <a name="repository_checks_enabled" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.repositoryChecksEnabled"></a>

```python
repository_checks_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

GitLab periodically runs git fsck in all project and wiki repositories to look for silent disk corruption issues.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.4.0/docs/resources/application_settings#repository_checks_enabled ApplicationSettings#repository_checks_enabled}

---

##### `repository_size_limit`<sup>Optional</sup> <a name="repository_size_limit" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.repositorySizeLimit"></a>

```python
repository_size_limit: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Size limit per repository (MB).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.4.0/docs/resources/application_settings#repository_size_limit ApplicationSettings#repository_size_limit}

---

##### `repository_storages`<sup>Optional</sup> <a name="repository_storages" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.repositoryStorages"></a>

```python
repository_storages: typing.List[str]
```

- *Type:* typing.List[str]

(GitLab 13.0 and earlier) List of names of enabled storage paths, taken from gitlab.yml. New projects are created in one of these stores, chosen at random.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.4.0/docs/resources/application_settings#repository_storages ApplicationSettings#repository_storages}

---

##### `repository_storages_weighted`<sup>Optional</sup> <a name="repository_storages_weighted" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.repositoryStoragesWeighted"></a>

```python
repository_storages_weighted: typing.Mapping[typing.Union[int, float]]
```

- *Type:* typing.Mapping[typing.Union[int, float]]

(GitLab 13.1 and later) Hash of names of taken from gitlab.yml to weights. New projects are created in one of these stores, chosen by a weighted random selection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.4.0/docs/resources/application_settings#repository_storages_weighted ApplicationSettings#repository_storages_weighted}

---

##### `require_admin_approval_after_user_signup`<sup>Optional</sup> <a name="require_admin_approval_after_user_signup" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.requireAdminApprovalAfterUserSignup"></a>

```python
require_admin_approval_after_user_signup: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

When enabled, any user that signs up for an account using the registration form is placed under a Pending approval state and has to be explicitly approved by an administrator.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.4.0/docs/resources/application_settings#require_admin_approval_after_user_signup ApplicationSettings#require_admin_approval_after_user_signup}

---

##### `require_two_factor_authentication`<sup>Optional</sup> <a name="require_two_factor_authentication" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.requireTwoFactorAuthentication"></a>

```python
require_two_factor_authentication: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

(If enabled, requires: two_factor_grace_period) Require all users to set up Two-factor authentication.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.4.0/docs/resources/application_settings#require_two_factor_authentication ApplicationSettings#require_two_factor_authentication}

---

##### `restricted_visibility_levels`<sup>Optional</sup> <a name="restricted_visibility_levels" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.restrictedVisibilityLevels"></a>

```python
restricted_visibility_levels: typing.List[str]
```

- *Type:* typing.List[str]

Selected levels cannot be used by non-Administrator users for groups, projects or snippets.

Can take private, internal and public as a parameter. Null means there is no restriction.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.4.0/docs/resources/application_settings#restricted_visibility_levels ApplicationSettings#restricted_visibility_levels}

---

##### `rsa_key_restriction`<sup>Optional</sup> <a name="rsa_key_restriction" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.rsaKeyRestriction"></a>

```python
rsa_key_restriction: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The minimum allowed bit length of an uploaded RSA key. 0 means no restriction. -1 disables RSA keys.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.4.0/docs/resources/application_settings#rsa_key_restriction ApplicationSettings#rsa_key_restriction}

---

##### `search_rate_limit`<sup>Optional</sup> <a name="search_rate_limit" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.searchRateLimit"></a>

```python
search_rate_limit: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Max number of requests per minute for performing a search while authenticated. To disable throttling set to 0.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.4.0/docs/resources/application_settings#search_rate_limit ApplicationSettings#search_rate_limit}

---

##### `search_rate_limit_unauthenticated`<sup>Optional</sup> <a name="search_rate_limit_unauthenticated" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.searchRateLimitUnauthenticated"></a>

```python
search_rate_limit_unauthenticated: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Max number of requests per minute for performing a search while unauthenticated. To disable throttling set to 0.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.4.0/docs/resources/application_settings#search_rate_limit_unauthenticated ApplicationSettings#search_rate_limit_unauthenticated}

---

##### `send_user_confirmation_email`<sup>Optional</sup> <a name="send_user_confirmation_email" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.sendUserConfirmationEmail"></a>

```python
send_user_confirmation_email: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Send confirmation email on sign-up.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.4.0/docs/resources/application_settings#send_user_confirmation_email ApplicationSettings#send_user_confirmation_email}

---

##### `session_expire_delay`<sup>Optional</sup> <a name="session_expire_delay" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.sessionExpireDelay"></a>

```python
session_expire_delay: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Session duration in minutes. GitLab restart is required to apply changes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.4.0/docs/resources/application_settings#session_expire_delay ApplicationSettings#session_expire_delay}

---

##### `shared_runners_enabled`<sup>Optional</sup> <a name="shared_runners_enabled" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.sharedRunnersEnabled"></a>

```python
shared_runners_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

(If enabled, requires: shared_runners_text and shared_runners_minutes) Enable shared runners for new projects.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.4.0/docs/resources/application_settings#shared_runners_enabled ApplicationSettings#shared_runners_enabled}

---

##### `shared_runners_minutes`<sup>Optional</sup> <a name="shared_runners_minutes" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.sharedRunnersMinutes"></a>

```python
shared_runners_minutes: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Set the maximum number of CI/CD minutes that a group can use on shared runners per month.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.4.0/docs/resources/application_settings#shared_runners_minutes ApplicationSettings#shared_runners_minutes}

---

##### `shared_runners_text`<sup>Optional</sup> <a name="shared_runners_text" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.sharedRunnersText"></a>

```python
shared_runners_text: str
```

- *Type:* str

Shared runners text.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.4.0/docs/resources/application_settings#shared_runners_text ApplicationSettings#shared_runners_text}

---

##### `sidekiq_job_limiter_compression_threshold_bytes`<sup>Optional</sup> <a name="sidekiq_job_limiter_compression_threshold_bytes" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.sidekiqJobLimiterCompressionThresholdBytes"></a>

```python
sidekiq_job_limiter_compression_threshold_bytes: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The threshold in bytes at which Sidekiq jobs are compressed before being stored in Redis.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.4.0/docs/resources/application_settings#sidekiq_job_limiter_compression_threshold_bytes ApplicationSettings#sidekiq_job_limiter_compression_threshold_bytes}

---

##### `sidekiq_job_limiter_limit_bytes`<sup>Optional</sup> <a name="sidekiq_job_limiter_limit_bytes" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.sidekiqJobLimiterLimitBytes"></a>

```python
sidekiq_job_limiter_limit_bytes: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The threshold in bytes at which Sidekiq jobs are rejected. 0 means do not reject any job.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.4.0/docs/resources/application_settings#sidekiq_job_limiter_limit_bytes ApplicationSettings#sidekiq_job_limiter_limit_bytes}

---

##### `sidekiq_job_limiter_mode`<sup>Optional</sup> <a name="sidekiq_job_limiter_mode" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.sidekiqJobLimiterMode"></a>

```python
sidekiq_job_limiter_mode: str
```

- *Type:* str

track or compress. Sets the behavior for Sidekiq job size limits.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.4.0/docs/resources/application_settings#sidekiq_job_limiter_mode ApplicationSettings#sidekiq_job_limiter_mode}

---

##### `sign_in_text`<sup>Optional</sup> <a name="sign_in_text" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.signInText"></a>

```python
sign_in_text: str
```

- *Type:* str

Text on the login page.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.4.0/docs/resources/application_settings#sign_in_text ApplicationSettings#sign_in_text}

---

##### `signup_enabled`<sup>Optional</sup> <a name="signup_enabled" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.signupEnabled"></a>

```python
signup_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Enable registration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.4.0/docs/resources/application_settings#signup_enabled ApplicationSettings#signup_enabled}

---

##### `slack_app_enabled`<sup>Optional</sup> <a name="slack_app_enabled" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.slackAppEnabled"></a>

```python
slack_app_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

(If enabled, requires: slack_app_id, slack_app_secret and slack_app_secret) Enable Slack app.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.4.0/docs/resources/application_settings#slack_app_enabled ApplicationSettings#slack_app_enabled}

---

##### `slack_app_id`<sup>Optional</sup> <a name="slack_app_id" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.slackAppId"></a>

```python
slack_app_id: str
```

- *Type:* str

The app ID of the Slack-app.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.4.0/docs/resources/application_settings#slack_app_id ApplicationSettings#slack_app_id}

---

##### `slack_app_secret`<sup>Optional</sup> <a name="slack_app_secret" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.slackAppSecret"></a>

```python
slack_app_secret: str
```

- *Type:* str

The app secret of the Slack-app.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.4.0/docs/resources/application_settings#slack_app_secret ApplicationSettings#slack_app_secret}

---

##### `slack_app_signing_secret`<sup>Optional</sup> <a name="slack_app_signing_secret" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.slackAppSigningSecret"></a>

```python
slack_app_signing_secret: str
```

- *Type:* str

The signing secret of the Slack-app.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.4.0/docs/resources/application_settings#slack_app_signing_secret ApplicationSettings#slack_app_signing_secret}

---

##### `slack_app_verification_token`<sup>Optional</sup> <a name="slack_app_verification_token" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.slackAppVerificationToken"></a>

```python
slack_app_verification_token: str
```

- *Type:* str

The verification token of the Slack-app.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.4.0/docs/resources/application_settings#slack_app_verification_token ApplicationSettings#slack_app_verification_token}

---

##### `snippet_size_limit`<sup>Optional</sup> <a name="snippet_size_limit" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.snippetSizeLimit"></a>

```python
snippet_size_limit: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Max snippet content size in bytes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.4.0/docs/resources/application_settings#snippet_size_limit ApplicationSettings#snippet_size_limit}

---

##### `snowplow_app_id`<sup>Optional</sup> <a name="snowplow_app_id" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.snowplowAppId"></a>

```python
snowplow_app_id: str
```

- *Type:* str

The Snowplow site name / application ID. (for example, gitlab).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.4.0/docs/resources/application_settings#snowplow_app_id ApplicationSettings#snowplow_app_id}

---

##### `snowplow_collector_hostname`<sup>Optional</sup> <a name="snowplow_collector_hostname" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.snowplowCollectorHostname"></a>

```python
snowplow_collector_hostname: str
```

- *Type:* str

The Snowplow collector hostname. (for example, snowplow.trx.gitlab.net).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.4.0/docs/resources/application_settings#snowplow_collector_hostname ApplicationSettings#snowplow_collector_hostname}

---

##### `snowplow_cookie_domain`<sup>Optional</sup> <a name="snowplow_cookie_domain" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.snowplowCookieDomain"></a>

```python
snowplow_cookie_domain: str
```

- *Type:* str

The Snowplow cookie domain. (for example, .gitlab.com).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.4.0/docs/resources/application_settings#snowplow_cookie_domain ApplicationSettings#snowplow_cookie_domain}

---

##### `snowplow_enabled`<sup>Optional</sup> <a name="snowplow_enabled" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.snowplowEnabled"></a>

```python
snowplow_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Enable snowplow tracking.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.4.0/docs/resources/application_settings#snowplow_enabled ApplicationSettings#snowplow_enabled}

---

##### `sourcegraph_enabled`<sup>Optional</sup> <a name="sourcegraph_enabled" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.sourcegraphEnabled"></a>

```python
sourcegraph_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Enables Sourcegraph integration. If enabled, requires sourcegraph_url.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.4.0/docs/resources/application_settings#sourcegraph_enabled ApplicationSettings#sourcegraph_enabled}

---

##### `sourcegraph_public_only`<sup>Optional</sup> <a name="sourcegraph_public_only" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.sourcegraphPublicOnly"></a>

```python
sourcegraph_public_only: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Blocks Sourcegraph from being loaded on private and internal projects.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.4.0/docs/resources/application_settings#sourcegraph_public_only ApplicationSettings#sourcegraph_public_only}

---

##### `sourcegraph_url`<sup>Optional</sup> <a name="sourcegraph_url" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.sourcegraphUrl"></a>

```python
sourcegraph_url: str
```

- *Type:* str

The Sourcegraph instance URL for integration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.4.0/docs/resources/application_settings#sourcegraph_url ApplicationSettings#sourcegraph_url}

---

##### `spam_check_api_key`<sup>Optional</sup> <a name="spam_check_api_key" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.spamCheckApiKey"></a>

```python
spam_check_api_key: str
```

- *Type:* str

API key used by GitLab for accessing the Spam Check service endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.4.0/docs/resources/application_settings#spam_check_api_key ApplicationSettings#spam_check_api_key}

---

##### `spam_check_endpoint_enabled`<sup>Optional</sup> <a name="spam_check_endpoint_enabled" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.spamCheckEndpointEnabled"></a>

```python
spam_check_endpoint_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Enables spam checking using external Spam Check API endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.4.0/docs/resources/application_settings#spam_check_endpoint_enabled ApplicationSettings#spam_check_endpoint_enabled}

---

##### `spam_check_endpoint_url`<sup>Optional</sup> <a name="spam_check_endpoint_url" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.spamCheckEndpointUrl"></a>

```python
spam_check_endpoint_url: str
```

- *Type:* str

URL of the external Spamcheck service endpoint.

Valid URI schemes are grpc or tls. Specifying tls forces communication to be encrypted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.4.0/docs/resources/application_settings#spam_check_endpoint_url ApplicationSettings#spam_check_endpoint_url}

---

##### `suggest_pipeline_enabled`<sup>Optional</sup> <a name="suggest_pipeline_enabled" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.suggestPipelineEnabled"></a>

```python
suggest_pipeline_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Enable pipeline suggestion banner.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.4.0/docs/resources/application_settings#suggest_pipeline_enabled ApplicationSettings#suggest_pipeline_enabled}

---

##### `terminal_max_session_time`<sup>Optional</sup> <a name="terminal_max_session_time" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.terminalMaxSessionTime"></a>

```python
terminal_max_session_time: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Maximum time for web terminal websocket connection (in seconds). Set to 0 for unlimited time.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.4.0/docs/resources/application_settings#terminal_max_session_time ApplicationSettings#terminal_max_session_time}

---

##### `terms`<sup>Optional</sup> <a name="terms" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.terms"></a>

```python
terms: str
```

- *Type:* str

(Required by: enforce_terms) Markdown content for the ToS.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.4.0/docs/resources/application_settings#terms ApplicationSettings#terms}

---

##### `throttle_authenticated_api_enabled`<sup>Optional</sup> <a name="throttle_authenticated_api_enabled" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.throttleAuthenticatedApiEnabled"></a>

```python
throttle_authenticated_api_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

(If enabled, requires: throttle_authenticated_api_period_in_seconds and throttle_authenticated_api_requests_per_period) Enable authenticated API request rate limit.

Helps reduce request volume (for example, from crawlers or abusive bots).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.4.0/docs/resources/application_settings#throttle_authenticated_api_enabled ApplicationSettings#throttle_authenticated_api_enabled}

---

##### `throttle_authenticated_api_period_in_seconds`<sup>Optional</sup> <a name="throttle_authenticated_api_period_in_seconds" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.throttleAuthenticatedApiPeriodInSeconds"></a>

```python
throttle_authenticated_api_period_in_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Rate limit period (in seconds).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.4.0/docs/resources/application_settings#throttle_authenticated_api_period_in_seconds ApplicationSettings#throttle_authenticated_api_period_in_seconds}

---

##### `throttle_authenticated_api_requests_per_period`<sup>Optional</sup> <a name="throttle_authenticated_api_requests_per_period" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.throttleAuthenticatedApiRequestsPerPeriod"></a>

```python
throttle_authenticated_api_requests_per_period: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Maximum requests per period per user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.4.0/docs/resources/application_settings#throttle_authenticated_api_requests_per_period ApplicationSettings#throttle_authenticated_api_requests_per_period}

---

##### `throttle_authenticated_packages_api_enabled`<sup>Optional</sup> <a name="throttle_authenticated_packages_api_enabled" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.throttleAuthenticatedPackagesApiEnabled"></a>

```python
throttle_authenticated_packages_api_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

(If enabled, requires: throttle_authenticated_packages_api_period_in_seconds and throttle_authenticated_packages_api_requests_per_period) Enable authenticated API request rate limit.

Helps reduce request volume (for example, from crawlers or abusive bots). View Package Registry rate limits for more details.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.4.0/docs/resources/application_settings#throttle_authenticated_packages_api_enabled ApplicationSettings#throttle_authenticated_packages_api_enabled}

---

##### `throttle_authenticated_packages_api_period_in_seconds`<sup>Optional</sup> <a name="throttle_authenticated_packages_api_period_in_seconds" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.throttleAuthenticatedPackagesApiPeriodInSeconds"></a>

```python
throttle_authenticated_packages_api_period_in_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Rate limit period (in seconds). View Package Registry rate limits for more details.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.4.0/docs/resources/application_settings#throttle_authenticated_packages_api_period_in_seconds ApplicationSettings#throttle_authenticated_packages_api_period_in_seconds}

---

##### `throttle_authenticated_packages_api_requests_per_period`<sup>Optional</sup> <a name="throttle_authenticated_packages_api_requests_per_period" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.throttleAuthenticatedPackagesApiRequestsPerPeriod"></a>

```python
throttle_authenticated_packages_api_requests_per_period: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Maximum requests per period per user. View Package Registry rate limits for more details.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.4.0/docs/resources/application_settings#throttle_authenticated_packages_api_requests_per_period ApplicationSettings#throttle_authenticated_packages_api_requests_per_period}

---

##### `throttle_authenticated_web_enabled`<sup>Optional</sup> <a name="throttle_authenticated_web_enabled" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.throttleAuthenticatedWebEnabled"></a>

```python
throttle_authenticated_web_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

(If enabled, requires: throttle_authenticated_web_period_in_seconds and throttle_authenticated_web_requests_per_period) Enable authenticated web request rate limit.

Helps reduce request volume (for example, from crawlers or abusive bots).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.4.0/docs/resources/application_settings#throttle_authenticated_web_enabled ApplicationSettings#throttle_authenticated_web_enabled}

---

##### `throttle_authenticated_web_period_in_seconds`<sup>Optional</sup> <a name="throttle_authenticated_web_period_in_seconds" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.throttleAuthenticatedWebPeriodInSeconds"></a>

```python
throttle_authenticated_web_period_in_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Rate limit period (in seconds).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.4.0/docs/resources/application_settings#throttle_authenticated_web_period_in_seconds ApplicationSettings#throttle_authenticated_web_period_in_seconds}

---

##### `throttle_authenticated_web_requests_per_period`<sup>Optional</sup> <a name="throttle_authenticated_web_requests_per_period" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.throttleAuthenticatedWebRequestsPerPeriod"></a>

```python
throttle_authenticated_web_requests_per_period: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Maximum requests per period per user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.4.0/docs/resources/application_settings#throttle_authenticated_web_requests_per_period ApplicationSettings#throttle_authenticated_web_requests_per_period}

---

##### `throttle_unauthenticated_api_enabled`<sup>Optional</sup> <a name="throttle_unauthenticated_api_enabled" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.throttleUnauthenticatedApiEnabled"></a>

```python
throttle_unauthenticated_api_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

(If enabled, requires: throttle_unauthenticated_api_period_in_seconds and throttle_unauthenticated_api_requests_per_period) Enable unauthenticated API request rate limit.

Helps reduce request volume (for example, from crawlers or abusive bots).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.4.0/docs/resources/application_settings#throttle_unauthenticated_api_enabled ApplicationSettings#throttle_unauthenticated_api_enabled}

---

##### `throttle_unauthenticated_api_period_in_seconds`<sup>Optional</sup> <a name="throttle_unauthenticated_api_period_in_seconds" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.throttleUnauthenticatedApiPeriodInSeconds"></a>

```python
throttle_unauthenticated_api_period_in_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Rate limit period in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.4.0/docs/resources/application_settings#throttle_unauthenticated_api_period_in_seconds ApplicationSettings#throttle_unauthenticated_api_period_in_seconds}

---

##### `throttle_unauthenticated_api_requests_per_period`<sup>Optional</sup> <a name="throttle_unauthenticated_api_requests_per_period" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.throttleUnauthenticatedApiRequestsPerPeriod"></a>

```python
throttle_unauthenticated_api_requests_per_period: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Max requests per period per IP.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.4.0/docs/resources/application_settings#throttle_unauthenticated_api_requests_per_period ApplicationSettings#throttle_unauthenticated_api_requests_per_period}

---

##### `throttle_unauthenticated_packages_api_enabled`<sup>Optional</sup> <a name="throttle_unauthenticated_packages_api_enabled" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.throttleUnauthenticatedPackagesApiEnabled"></a>

```python
throttle_unauthenticated_packages_api_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

(If enabled, requires: throttle_unauthenticated_packages_api_period_in_seconds and throttle_unauthenticated_packages_api_requests_per_period) Enable authenticated API request rate limit.

Helps reduce request volume (for example, from crawlers or abusive bots). View Package Registry rate limits for more details.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.4.0/docs/resources/application_settings#throttle_unauthenticated_packages_api_enabled ApplicationSettings#throttle_unauthenticated_packages_api_enabled}

---

##### `throttle_unauthenticated_packages_api_period_in_seconds`<sup>Optional</sup> <a name="throttle_unauthenticated_packages_api_period_in_seconds" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.throttleUnauthenticatedPackagesApiPeriodInSeconds"></a>

```python
throttle_unauthenticated_packages_api_period_in_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Rate limit period (in seconds). View Package Registry rate limits for more details.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.4.0/docs/resources/application_settings#throttle_unauthenticated_packages_api_period_in_seconds ApplicationSettings#throttle_unauthenticated_packages_api_period_in_seconds}

---

##### `throttle_unauthenticated_packages_api_requests_per_period`<sup>Optional</sup> <a name="throttle_unauthenticated_packages_api_requests_per_period" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.throttleUnauthenticatedPackagesApiRequestsPerPeriod"></a>

```python
throttle_unauthenticated_packages_api_requests_per_period: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Maximum requests per period per user. View Package Registry rate limits for more details.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.4.0/docs/resources/application_settings#throttle_unauthenticated_packages_api_requests_per_period ApplicationSettings#throttle_unauthenticated_packages_api_requests_per_period}

---

##### `throttle_unauthenticated_web_enabled`<sup>Optional</sup> <a name="throttle_unauthenticated_web_enabled" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.throttleUnauthenticatedWebEnabled"></a>

```python
throttle_unauthenticated_web_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

(If enabled, requires: throttle_unauthenticated_web_period_in_seconds and throttle_unauthenticated_web_requests_per_period) Enable unauthenticated web request rate limit.

Helps reduce request volume (for example, from crawlers or abusive bots).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.4.0/docs/resources/application_settings#throttle_unauthenticated_web_enabled ApplicationSettings#throttle_unauthenticated_web_enabled}

---

##### `throttle_unauthenticated_web_period_in_seconds`<sup>Optional</sup> <a name="throttle_unauthenticated_web_period_in_seconds" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.throttleUnauthenticatedWebPeriodInSeconds"></a>

```python
throttle_unauthenticated_web_period_in_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Rate limit period in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.4.0/docs/resources/application_settings#throttle_unauthenticated_web_period_in_seconds ApplicationSettings#throttle_unauthenticated_web_period_in_seconds}

---

##### `throttle_unauthenticated_web_requests_per_period`<sup>Optional</sup> <a name="throttle_unauthenticated_web_requests_per_period" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.throttleUnauthenticatedWebRequestsPerPeriod"></a>

```python
throttle_unauthenticated_web_requests_per_period: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Max requests per period per IP.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.4.0/docs/resources/application_settings#throttle_unauthenticated_web_requests_per_period ApplicationSettings#throttle_unauthenticated_web_requests_per_period}

---

##### `time_tracking_limit_to_hours`<sup>Optional</sup> <a name="time_tracking_limit_to_hours" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.timeTrackingLimitToHours"></a>

```python
time_tracking_limit_to_hours: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Limit display of time tracking units to hours.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.4.0/docs/resources/application_settings#time_tracking_limit_to_hours ApplicationSettings#time_tracking_limit_to_hours}

---

##### `two_factor_grace_period`<sup>Optional</sup> <a name="two_factor_grace_period" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.twoFactorGracePeriod"></a>

```python
two_factor_grace_period: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Amount of time (in hours) that users are allowed to skip forced configuration of two-factor authentication.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.4.0/docs/resources/application_settings#two_factor_grace_period ApplicationSettings#two_factor_grace_period}

---

##### `unique_ips_limit_enabled`<sup>Optional</sup> <a name="unique_ips_limit_enabled" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.uniqueIpsLimitEnabled"></a>

```python
unique_ips_limit_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

(If enabled, requires: unique_ips_limit_per_user and unique_ips_limit_time_window) Limit sign in from multiple IPs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.4.0/docs/resources/application_settings#unique_ips_limit_enabled ApplicationSettings#unique_ips_limit_enabled}

---

##### `unique_ips_limit_per_user`<sup>Optional</sup> <a name="unique_ips_limit_per_user" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.uniqueIpsLimitPerUser"></a>

```python
unique_ips_limit_per_user: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Maximum number of IPs per user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.4.0/docs/resources/application_settings#unique_ips_limit_per_user ApplicationSettings#unique_ips_limit_per_user}

---

##### `unique_ips_limit_time_window`<sup>Optional</sup> <a name="unique_ips_limit_time_window" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.uniqueIpsLimitTimeWindow"></a>

```python
unique_ips_limit_time_window: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

How many seconds an IP is counted towards the limit.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.4.0/docs/resources/application_settings#unique_ips_limit_time_window ApplicationSettings#unique_ips_limit_time_window}

---

##### `usage_ping_enabled`<sup>Optional</sup> <a name="usage_ping_enabled" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.usagePingEnabled"></a>

```python
usage_ping_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Every week GitLab reports license usage back to GitLab, Inc.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.4.0/docs/resources/application_settings#usage_ping_enabled ApplicationSettings#usage_ping_enabled}

---

##### `user_deactivation_emails_enabled`<sup>Optional</sup> <a name="user_deactivation_emails_enabled" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.userDeactivationEmailsEnabled"></a>

```python
user_deactivation_emails_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Send an email to users upon account deactivation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.4.0/docs/resources/application_settings#user_deactivation_emails_enabled ApplicationSettings#user_deactivation_emails_enabled}

---

##### `user_default_external`<sup>Optional</sup> <a name="user_default_external" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.userDefaultExternal"></a>

```python
user_default_external: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Newly registered users are external by default.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.4.0/docs/resources/application_settings#user_default_external ApplicationSettings#user_default_external}

---

##### `user_default_internal_regex`<sup>Optional</sup> <a name="user_default_internal_regex" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.userDefaultInternalRegex"></a>

```python
user_default_internal_regex: str
```

- *Type:* str

Specify an email address regex pattern to identify default internal users.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.4.0/docs/resources/application_settings#user_default_internal_regex ApplicationSettings#user_default_internal_regex}

---

##### `user_oauth_applications`<sup>Optional</sup> <a name="user_oauth_applications" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.userOauthApplications"></a>

```python
user_oauth_applications: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Allow users to register any application to use GitLab as an OAuth provider.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.4.0/docs/resources/application_settings#user_oauth_applications ApplicationSettings#user_oauth_applications}

---

##### `user_show_add_ssh_key_message`<sup>Optional</sup> <a name="user_show_add_ssh_key_message" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.userShowAddSshKeyMessage"></a>

```python
user_show_add_ssh_key_message: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

When set to false disable the You won't be able to pull or push project code via SSH warning shown to users with no uploaded SSH key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.4.0/docs/resources/application_settings#user_show_add_ssh_key_message ApplicationSettings#user_show_add_ssh_key_message}

---

##### `version_check_enabled`<sup>Optional</sup> <a name="version_check_enabled" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.versionCheckEnabled"></a>

```python
version_check_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Let GitLab inform you when an update is available.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.4.0/docs/resources/application_settings#version_check_enabled ApplicationSettings#version_check_enabled}

---

##### `web_ide_clientside_preview_enabled`<sup>Optional</sup> <a name="web_ide_clientside_preview_enabled" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.webIdeClientsidePreviewEnabled"></a>

```python
web_ide_clientside_preview_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Live Preview (allow live previews of JavaScript projects in the Web IDE using CodeSandbox Live Preview).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.4.0/docs/resources/application_settings#web_ide_clientside_preview_enabled ApplicationSettings#web_ide_clientside_preview_enabled}

---

##### `whats_new_variant`<sup>Optional</sup> <a name="whats_new_variant" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.whatsNewVariant"></a>

```python
whats_new_variant: str
```

- *Type:* str

What’s new variant, possible values: all_tiers, current_tier, and disabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.4.0/docs/resources/application_settings#whats_new_variant ApplicationSettings#whats_new_variant}

---

##### `wiki_page_max_content_bytes`<sup>Optional</sup> <a name="wiki_page_max_content_bytes" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.wikiPageMaxContentBytes"></a>

```python
wiki_page_max_content_bytes: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Maximum wiki page content size in bytes. The minimum value is 1024 bytes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.4.0/docs/resources/application_settings#wiki_page_max_content_bytes ApplicationSettings#wiki_page_max_content_bytes}

---



