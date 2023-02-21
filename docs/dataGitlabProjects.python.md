# `dataGitlabProjects` Submodule <a name="`dataGitlabProjects` Submodule" id="@cdktf/provider-gitlab.dataGitlabProjects"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataGitlabProjects <a name="DataGitlabProjects" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects"></a>

Represents a {@link https://www.terraform.io/docs/providers/gitlab/d/projects gitlab_projects}.

#### Initializers <a name="Initializers" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.Initializer"></a>

```python
from cdktf_cdktf_provider_gitlab import data_gitlab_projects

dataGitlabProjects.DataGitlabProjects(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  archived: typing.Union[bool, IResolvable] = None,
  group_id: typing.Union[int, float] = None,
  id: str = None,
  include_subgroups: typing.Union[bool, IResolvable] = None,
  max_queryable_pages: typing.Union[int, float] = None,
  membership: typing.Union[bool, IResolvable] = None,
  min_access_level: typing.Union[int, float] = None,
  order_by: str = None,
  owned: typing.Union[bool, IResolvable] = None,
  page: typing.Union[int, float] = None,
  per_page: typing.Union[int, float] = None,
  search: str = None,
  simple: typing.Union[bool, IResolvable] = None,
  sort: str = None,
  starred: typing.Union[bool, IResolvable] = None,
  statistics: typing.Union[bool, IResolvable] = None,
  visibility: str = None,
  with_custom_attributes: typing.Union[bool, IResolvable] = None,
  with_issues_enabled: typing.Union[bool, IResolvable] = None,
  with_merge_requests_enabled: typing.Union[bool, IResolvable] = None,
  with_programming_language: str = None,
  with_shared: typing.Union[bool, IResolvable] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.Initializer.parameter.archived">archived</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Limit by archived status. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.Initializer.parameter.groupId">group_id</a></code> | <code>typing.Union[int, float]</code> | The ID of the group owned by the authenticated user to look projects for within. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/gitlab/d/projects#id DataGitlabProjects#id}. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.Initializer.parameter.includeSubgroups">include_subgroups</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Include projects in subgroups of this group. Default is `false`. Needs `group_id`. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.Initializer.parameter.maxQueryablePages">max_queryable_pages</a></code> | <code>typing.Union[int, float]</code> | The maximum number of project results pages that may be queried. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.Initializer.parameter.membership">membership</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Limit by projects that the current user is a member of. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.Initializer.parameter.minAccessLevel">min_access_level</a></code> | <code>typing.Union[int, float]</code> | Limit to projects where current user has at least this access level, refer to the [official documentation](https://docs.gitlab.com/ee/api/members.html) for values. Cannot be used with `group_id`. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.Initializer.parameter.orderBy">order_by</a></code> | <code>str</code> | Return projects ordered ordered by: `id`, `name`, `path`, `created_at`, `updated_at`, `last_activity_at`, `similarity`, `repository_size`, `storage_size`, `packages_size`, `wiki_size`. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.Initializer.parameter.owned">owned</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Limit by projects owned by the current user. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.Initializer.parameter.page">page</a></code> | <code>typing.Union[int, float]</code> | The first page to begin the query on. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.Initializer.parameter.perPage">per_page</a></code> | <code>typing.Union[int, float]</code> | The number of results to return per page. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.Initializer.parameter.search">search</a></code> | <code>str</code> | Return list of authorized projects matching the search criteria. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.Initializer.parameter.simple">simple</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Return only the ID, URL, name, and path of each project. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.Initializer.parameter.sort">sort</a></code> | <code>str</code> | Return projects sorted in `asc` or `desc` order. Default is `desc`. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.Initializer.parameter.starred">starred</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Limit by projects starred by the current user. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.Initializer.parameter.statistics">statistics</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Include project statistics. Cannot be used with `group_id`. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.Initializer.parameter.visibility">visibility</a></code> | <code>str</code> | Limit by visibility `public`, `internal`, or `private`. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.Initializer.parameter.withCustomAttributes">with_custom_attributes</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Include custom attributes in response _(admins only)_. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.Initializer.parameter.withIssuesEnabled">with_issues_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Limit by projects with issues feature enabled. Default is `false`. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.Initializer.parameter.withMergeRequestsEnabled">with_merge_requests_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Limit by projects with merge requests feature enabled. Default is `false`. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.Initializer.parameter.withProgrammingLanguage">with_programming_language</a></code> | <code>str</code> | Limit by projects which use the given programming language. Cannot be used with `group_id`. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.Initializer.parameter.withShared">with_shared</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Include projects shared to this group. Default is `true`. Needs `group_id`. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `archived`<sup>Optional</sup> <a name="archived" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.Initializer.parameter.archived"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Limit by archived status.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/gitlab/d/projects#archived DataGitlabProjects#archived}

---

##### `group_id`<sup>Optional</sup> <a name="group_id" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.Initializer.parameter.groupId"></a>

- *Type:* typing.Union[int, float]

The ID of the group owned by the authenticated user to look projects for within.

Cannot be used with `min_access_level`, `with_programming_language` or `statistics`.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/gitlab/d/projects#group_id DataGitlabProjects#group_id}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/gitlab/d/projects#id DataGitlabProjects#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `include_subgroups`<sup>Optional</sup> <a name="include_subgroups" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.Initializer.parameter.includeSubgroups"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Include projects in subgroups of this group. Default is `false`. Needs `group_id`.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/gitlab/d/projects#include_subgroups DataGitlabProjects#include_subgroups}

---

##### `max_queryable_pages`<sup>Optional</sup> <a name="max_queryable_pages" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.Initializer.parameter.maxQueryablePages"></a>

- *Type:* typing.Union[int, float]

The maximum number of project results pages that may be queried.

Prevents overloading your Gitlab instance in case of a misconfiguration.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/gitlab/d/projects#max_queryable_pages DataGitlabProjects#max_queryable_pages}

---

##### `membership`<sup>Optional</sup> <a name="membership" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.Initializer.parameter.membership"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Limit by projects that the current user is a member of.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/gitlab/d/projects#membership DataGitlabProjects#membership}

---

##### `min_access_level`<sup>Optional</sup> <a name="min_access_level" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.Initializer.parameter.minAccessLevel"></a>

- *Type:* typing.Union[int, float]

Limit to projects where current user has at least this access level, refer to the [official documentation](https://docs.gitlab.com/ee/api/members.html) for values. Cannot be used with `group_id`.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/gitlab/d/projects#min_access_level DataGitlabProjects#min_access_level}

---

##### `order_by`<sup>Optional</sup> <a name="order_by" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.Initializer.parameter.orderBy"></a>

- *Type:* str

Return projects ordered ordered by: `id`, `name`, `path`, `created_at`, `updated_at`, `last_activity_at`, `similarity`, `repository_size`, `storage_size`, `packages_size`, `wiki_size`.

Some values or only available in certain circumstances. See [upstream docs](https://docs.gitlab.com/ee/api/projects.html#list-all-projects) for details.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/gitlab/d/projects#order_by DataGitlabProjects#order_by}

---

##### `owned`<sup>Optional</sup> <a name="owned" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.Initializer.parameter.owned"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Limit by projects owned by the current user.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/gitlab/d/projects#owned DataGitlabProjects#owned}

---

##### `page`<sup>Optional</sup> <a name="page" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.Initializer.parameter.page"></a>

- *Type:* typing.Union[int, float]

The first page to begin the query on.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/gitlab/d/projects#page DataGitlabProjects#page}

---

##### `per_page`<sup>Optional</sup> <a name="per_page" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.Initializer.parameter.perPage"></a>

- *Type:* typing.Union[int, float]

The number of results to return per page.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/gitlab/d/projects#per_page DataGitlabProjects#per_page}

---

##### `search`<sup>Optional</sup> <a name="search" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.Initializer.parameter.search"></a>

- *Type:* str

Return list of authorized projects matching the search criteria.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/gitlab/d/projects#search DataGitlabProjects#search}

---

##### `simple`<sup>Optional</sup> <a name="simple" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.Initializer.parameter.simple"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Return only the ID, URL, name, and path of each project.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/gitlab/d/projects#simple DataGitlabProjects#simple}

---

##### `sort`<sup>Optional</sup> <a name="sort" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.Initializer.parameter.sort"></a>

- *Type:* str

Return projects sorted in `asc` or `desc` order. Default is `desc`.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/gitlab/d/projects#sort DataGitlabProjects#sort}

---

##### `starred`<sup>Optional</sup> <a name="starred" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.Initializer.parameter.starred"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Limit by projects starred by the current user.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/gitlab/d/projects#starred DataGitlabProjects#starred}

---

##### `statistics`<sup>Optional</sup> <a name="statistics" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.Initializer.parameter.statistics"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Include project statistics. Cannot be used with `group_id`.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/gitlab/d/projects#statistics DataGitlabProjects#statistics}

---

##### `visibility`<sup>Optional</sup> <a name="visibility" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.Initializer.parameter.visibility"></a>

- *Type:* str

Limit by visibility `public`, `internal`, or `private`.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/gitlab/d/projects#visibility DataGitlabProjects#visibility}

---

##### `with_custom_attributes`<sup>Optional</sup> <a name="with_custom_attributes" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.Initializer.parameter.withCustomAttributes"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Include custom attributes in response _(admins only)_.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/gitlab/d/projects#with_custom_attributes DataGitlabProjects#with_custom_attributes}

---

##### `with_issues_enabled`<sup>Optional</sup> <a name="with_issues_enabled" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.Initializer.parameter.withIssuesEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Limit by projects with issues feature enabled. Default is `false`.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/gitlab/d/projects#with_issues_enabled DataGitlabProjects#with_issues_enabled}

---

##### `with_merge_requests_enabled`<sup>Optional</sup> <a name="with_merge_requests_enabled" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.Initializer.parameter.withMergeRequestsEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Limit by projects with merge requests feature enabled. Default is `false`.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/gitlab/d/projects#with_merge_requests_enabled DataGitlabProjects#with_merge_requests_enabled}

---

##### `with_programming_language`<sup>Optional</sup> <a name="with_programming_language" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.Initializer.parameter.withProgrammingLanguage"></a>

- *Type:* str

Limit by projects which use the given programming language. Cannot be used with `group_id`.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/gitlab/d/projects#with_programming_language DataGitlabProjects#with_programming_language}

---

##### `with_shared`<sup>Optional</sup> <a name="with_shared" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.Initializer.parameter.withShared"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Include projects shared to this group. Default is `true`. Needs `group_id`.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/gitlab/d/projects#with_shared DataGitlabProjects#with_shared}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.resetArchived">reset_archived</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.resetGroupId">reset_group_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.resetIncludeSubgroups">reset_include_subgroups</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.resetMaxQueryablePages">reset_max_queryable_pages</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.resetMembership">reset_membership</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.resetMinAccessLevel">reset_min_access_level</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.resetOrderBy">reset_order_by</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.resetOwned">reset_owned</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.resetPage">reset_page</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.resetPerPage">reset_per_page</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.resetSearch">reset_search</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.resetSimple">reset_simple</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.resetSort">reset_sort</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.resetStarred">reset_starred</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.resetStatistics">reset_statistics</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.resetVisibility">reset_visibility</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.resetWithCustomAttributes">reset_with_custom_attributes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.resetWithIssuesEnabled">reset_with_issues_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.resetWithMergeRequestsEnabled">reset_with_merge_requests_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.resetWithProgrammingLanguage">reset_with_programming_language</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.resetWithShared">reset_with_shared</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_archived` <a name="reset_archived" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.resetArchived"></a>

```python
def reset_archived() -> None
```

##### `reset_group_id` <a name="reset_group_id" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.resetGroupId"></a>

```python
def reset_group_id() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_include_subgroups` <a name="reset_include_subgroups" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.resetIncludeSubgroups"></a>

```python
def reset_include_subgroups() -> None
```

##### `reset_max_queryable_pages` <a name="reset_max_queryable_pages" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.resetMaxQueryablePages"></a>

```python
def reset_max_queryable_pages() -> None
```

##### `reset_membership` <a name="reset_membership" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.resetMembership"></a>

```python
def reset_membership() -> None
```

##### `reset_min_access_level` <a name="reset_min_access_level" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.resetMinAccessLevel"></a>

```python
def reset_min_access_level() -> None
```

##### `reset_order_by` <a name="reset_order_by" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.resetOrderBy"></a>

```python
def reset_order_by() -> None
```

##### `reset_owned` <a name="reset_owned" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.resetOwned"></a>

```python
def reset_owned() -> None
```

##### `reset_page` <a name="reset_page" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.resetPage"></a>

```python
def reset_page() -> None
```

##### `reset_per_page` <a name="reset_per_page" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.resetPerPage"></a>

```python
def reset_per_page() -> None
```

##### `reset_search` <a name="reset_search" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.resetSearch"></a>

```python
def reset_search() -> None
```

##### `reset_simple` <a name="reset_simple" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.resetSimple"></a>

```python
def reset_simple() -> None
```

##### `reset_sort` <a name="reset_sort" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.resetSort"></a>

```python
def reset_sort() -> None
```

##### `reset_starred` <a name="reset_starred" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.resetStarred"></a>

```python
def reset_starred() -> None
```

##### `reset_statistics` <a name="reset_statistics" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.resetStatistics"></a>

```python
def reset_statistics() -> None
```

##### `reset_visibility` <a name="reset_visibility" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.resetVisibility"></a>

```python
def reset_visibility() -> None
```

##### `reset_with_custom_attributes` <a name="reset_with_custom_attributes" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.resetWithCustomAttributes"></a>

```python
def reset_with_custom_attributes() -> None
```

##### `reset_with_issues_enabled` <a name="reset_with_issues_enabled" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.resetWithIssuesEnabled"></a>

```python
def reset_with_issues_enabled() -> None
```

##### `reset_with_merge_requests_enabled` <a name="reset_with_merge_requests_enabled" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.resetWithMergeRequestsEnabled"></a>

```python
def reset_with_merge_requests_enabled() -> None
```

##### `reset_with_programming_language` <a name="reset_with_programming_language" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.resetWithProgrammingLanguage"></a>

```python
def reset_with_programming_language() -> None
```

##### `reset_with_shared` <a name="reset_with_shared" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.resetWithShared"></a>

```python
def reset_with_shared() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.isConstruct"></a>

```python
from cdktf_cdktf_provider_gitlab import data_gitlab_projects

dataGitlabProjects.DataGitlabProjects.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_gitlab import data_gitlab_projects

dataGitlabProjects.DataGitlabProjects.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.isTerraformDataSource"></a>

```python
from cdktf_cdktf_provider_gitlab import data_gitlab_projects

dataGitlabProjects.DataGitlabProjects.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.property.projects">projects</a></code> | <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsList">DataGitlabProjectsProjectsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.property.archivedInput">archived_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.property.groupIdInput">group_id_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.property.includeSubgroupsInput">include_subgroups_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.property.maxQueryablePagesInput">max_queryable_pages_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.property.membershipInput">membership_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.property.minAccessLevelInput">min_access_level_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.property.orderByInput">order_by_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.property.ownedInput">owned_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.property.pageInput">page_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.property.perPageInput">per_page_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.property.searchInput">search_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.property.simpleInput">simple_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.property.sortInput">sort_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.property.starredInput">starred_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.property.statisticsInput">statistics_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.property.visibilityInput">visibility_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.property.withCustomAttributesInput">with_custom_attributes_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.property.withIssuesEnabledInput">with_issues_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.property.withMergeRequestsEnabledInput">with_merge_requests_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.property.withProgrammingLanguageInput">with_programming_language_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.property.withSharedInput">with_shared_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.property.archived">archived</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.property.groupId">group_id</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.property.includeSubgroups">include_subgroups</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.property.maxQueryablePages">max_queryable_pages</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.property.membership">membership</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.property.minAccessLevel">min_access_level</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.property.orderBy">order_by</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.property.owned">owned</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.property.page">page</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.property.perPage">per_page</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.property.search">search</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.property.simple">simple</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.property.sort">sort</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.property.starred">starred</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.property.statistics">statistics</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.property.visibility">visibility</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.property.withCustomAttributes">with_custom_attributes</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.property.withIssuesEnabled">with_issues_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.property.withMergeRequestsEnabled">with_merge_requests_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.property.withProgrammingLanguage">with_programming_language</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.property.withShared">with_shared</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `projects`<sup>Required</sup> <a name="projects" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.property.projects"></a>

```python
projects: DataGitlabProjectsProjectsList
```

- *Type:* <a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsList">DataGitlabProjectsProjectsList</a>

---

##### `archived_input`<sup>Optional</sup> <a name="archived_input" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.property.archivedInput"></a>

```python
archived_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `group_id_input`<sup>Optional</sup> <a name="group_id_input" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.property.groupIdInput"></a>

```python
group_id_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `include_subgroups_input`<sup>Optional</sup> <a name="include_subgroups_input" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.property.includeSubgroupsInput"></a>

```python
include_subgroups_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `max_queryable_pages_input`<sup>Optional</sup> <a name="max_queryable_pages_input" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.property.maxQueryablePagesInput"></a>

```python
max_queryable_pages_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `membership_input`<sup>Optional</sup> <a name="membership_input" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.property.membershipInput"></a>

```python
membership_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `min_access_level_input`<sup>Optional</sup> <a name="min_access_level_input" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.property.minAccessLevelInput"></a>

```python
min_access_level_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `order_by_input`<sup>Optional</sup> <a name="order_by_input" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.property.orderByInput"></a>

```python
order_by_input: str
```

- *Type:* str

---

##### `owned_input`<sup>Optional</sup> <a name="owned_input" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.property.ownedInput"></a>

```python
owned_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `page_input`<sup>Optional</sup> <a name="page_input" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.property.pageInput"></a>

```python
page_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `per_page_input`<sup>Optional</sup> <a name="per_page_input" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.property.perPageInput"></a>

```python
per_page_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `search_input`<sup>Optional</sup> <a name="search_input" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.property.searchInput"></a>

```python
search_input: str
```

- *Type:* str

---

##### `simple_input`<sup>Optional</sup> <a name="simple_input" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.property.simpleInput"></a>

```python
simple_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `sort_input`<sup>Optional</sup> <a name="sort_input" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.property.sortInput"></a>

```python
sort_input: str
```

- *Type:* str

---

##### `starred_input`<sup>Optional</sup> <a name="starred_input" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.property.starredInput"></a>

```python
starred_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `statistics_input`<sup>Optional</sup> <a name="statistics_input" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.property.statisticsInput"></a>

```python
statistics_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `visibility_input`<sup>Optional</sup> <a name="visibility_input" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.property.visibilityInput"></a>

```python
visibility_input: str
```

- *Type:* str

---

##### `with_custom_attributes_input`<sup>Optional</sup> <a name="with_custom_attributes_input" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.property.withCustomAttributesInput"></a>

```python
with_custom_attributes_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `with_issues_enabled_input`<sup>Optional</sup> <a name="with_issues_enabled_input" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.property.withIssuesEnabledInput"></a>

```python
with_issues_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `with_merge_requests_enabled_input`<sup>Optional</sup> <a name="with_merge_requests_enabled_input" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.property.withMergeRequestsEnabledInput"></a>

```python
with_merge_requests_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `with_programming_language_input`<sup>Optional</sup> <a name="with_programming_language_input" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.property.withProgrammingLanguageInput"></a>

```python
with_programming_language_input: str
```

- *Type:* str

---

##### `with_shared_input`<sup>Optional</sup> <a name="with_shared_input" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.property.withSharedInput"></a>

```python
with_shared_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `archived`<sup>Required</sup> <a name="archived" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.property.archived"></a>

```python
archived: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `group_id`<sup>Required</sup> <a name="group_id" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.property.groupId"></a>

```python
group_id: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `include_subgroups`<sup>Required</sup> <a name="include_subgroups" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.property.includeSubgroups"></a>

```python
include_subgroups: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `max_queryable_pages`<sup>Required</sup> <a name="max_queryable_pages" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.property.maxQueryablePages"></a>

```python
max_queryable_pages: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `membership`<sup>Required</sup> <a name="membership" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.property.membership"></a>

```python
membership: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `min_access_level`<sup>Required</sup> <a name="min_access_level" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.property.minAccessLevel"></a>

```python
min_access_level: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `order_by`<sup>Required</sup> <a name="order_by" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.property.orderBy"></a>

```python
order_by: str
```

- *Type:* str

---

##### `owned`<sup>Required</sup> <a name="owned" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.property.owned"></a>

```python
owned: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `page`<sup>Required</sup> <a name="page" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.property.page"></a>

```python
page: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `per_page`<sup>Required</sup> <a name="per_page" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.property.perPage"></a>

```python
per_page: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `search`<sup>Required</sup> <a name="search" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.property.search"></a>

```python
search: str
```

- *Type:* str

---

##### `simple`<sup>Required</sup> <a name="simple" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.property.simple"></a>

```python
simple: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `sort`<sup>Required</sup> <a name="sort" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.property.sort"></a>

```python
sort: str
```

- *Type:* str

---

##### `starred`<sup>Required</sup> <a name="starred" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.property.starred"></a>

```python
starred: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `statistics`<sup>Required</sup> <a name="statistics" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.property.statistics"></a>

```python
statistics: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `visibility`<sup>Required</sup> <a name="visibility" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.property.visibility"></a>

```python
visibility: str
```

- *Type:* str

---

##### `with_custom_attributes`<sup>Required</sup> <a name="with_custom_attributes" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.property.withCustomAttributes"></a>

```python
with_custom_attributes: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `with_issues_enabled`<sup>Required</sup> <a name="with_issues_enabled" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.property.withIssuesEnabled"></a>

```python
with_issues_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `with_merge_requests_enabled`<sup>Required</sup> <a name="with_merge_requests_enabled" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.property.withMergeRequestsEnabled"></a>

```python
with_merge_requests_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `with_programming_language`<sup>Required</sup> <a name="with_programming_language" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.property.withProgrammingLanguage"></a>

```python
with_programming_language: str
```

- *Type:* str

---

##### `with_shared`<sup>Required</sup> <a name="with_shared" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.property.withShared"></a>

```python
with_shared: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataGitlabProjectsConfig <a name="DataGitlabProjectsConfig" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_gitlab import data_gitlab_projects

dataGitlabProjects.DataGitlabProjectsConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  archived: typing.Union[bool, IResolvable] = None,
  group_id: typing.Union[int, float] = None,
  id: str = None,
  include_subgroups: typing.Union[bool, IResolvable] = None,
  max_queryable_pages: typing.Union[int, float] = None,
  membership: typing.Union[bool, IResolvable] = None,
  min_access_level: typing.Union[int, float] = None,
  order_by: str = None,
  owned: typing.Union[bool, IResolvable] = None,
  page: typing.Union[int, float] = None,
  per_page: typing.Union[int, float] = None,
  search: str = None,
  simple: typing.Union[bool, IResolvable] = None,
  sort: str = None,
  starred: typing.Union[bool, IResolvable] = None,
  statistics: typing.Union[bool, IResolvable] = None,
  visibility: str = None,
  with_custom_attributes: typing.Union[bool, IResolvable] = None,
  with_issues_enabled: typing.Union[bool, IResolvable] = None,
  with_merge_requests_enabled: typing.Union[bool, IResolvable] = None,
  with_programming_language: str = None,
  with_shared: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsConfig.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsConfig.property.archived">archived</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Limit by archived status. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsConfig.property.groupId">group_id</a></code> | <code>typing.Union[int, float]</code> | The ID of the group owned by the authenticated user to look projects for within. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/gitlab/d/projects#id DataGitlabProjects#id}. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsConfig.property.includeSubgroups">include_subgroups</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Include projects in subgroups of this group. Default is `false`. Needs `group_id`. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsConfig.property.maxQueryablePages">max_queryable_pages</a></code> | <code>typing.Union[int, float]</code> | The maximum number of project results pages that may be queried. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsConfig.property.membership">membership</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Limit by projects that the current user is a member of. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsConfig.property.minAccessLevel">min_access_level</a></code> | <code>typing.Union[int, float]</code> | Limit to projects where current user has at least this access level, refer to the [official documentation](https://docs.gitlab.com/ee/api/members.html) for values. Cannot be used with `group_id`. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsConfig.property.orderBy">order_by</a></code> | <code>str</code> | Return projects ordered ordered by: `id`, `name`, `path`, `created_at`, `updated_at`, `last_activity_at`, `similarity`, `repository_size`, `storage_size`, `packages_size`, `wiki_size`. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsConfig.property.owned">owned</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Limit by projects owned by the current user. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsConfig.property.page">page</a></code> | <code>typing.Union[int, float]</code> | The first page to begin the query on. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsConfig.property.perPage">per_page</a></code> | <code>typing.Union[int, float]</code> | The number of results to return per page. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsConfig.property.search">search</a></code> | <code>str</code> | Return list of authorized projects matching the search criteria. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsConfig.property.simple">simple</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Return only the ID, URL, name, and path of each project. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsConfig.property.sort">sort</a></code> | <code>str</code> | Return projects sorted in `asc` or `desc` order. Default is `desc`. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsConfig.property.starred">starred</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Limit by projects starred by the current user. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsConfig.property.statistics">statistics</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Include project statistics. Cannot be used with `group_id`. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsConfig.property.visibility">visibility</a></code> | <code>str</code> | Limit by visibility `public`, `internal`, or `private`. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsConfig.property.withCustomAttributes">with_custom_attributes</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Include custom attributes in response _(admins only)_. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsConfig.property.withIssuesEnabled">with_issues_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Limit by projects with issues feature enabled. Default is `false`. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsConfig.property.withMergeRequestsEnabled">with_merge_requests_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Limit by projects with merge requests feature enabled. Default is `false`. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsConfig.property.withProgrammingLanguage">with_programming_language</a></code> | <code>str</code> | Limit by projects which use the given programming language. Cannot be used with `group_id`. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsConfig.property.withShared">with_shared</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Include projects shared to this group. Default is `true`. Needs `group_id`. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsConfig.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `archived`<sup>Optional</sup> <a name="archived" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsConfig.property.archived"></a>

```python
archived: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Limit by archived status.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/gitlab/d/projects#archived DataGitlabProjects#archived}

---

##### `group_id`<sup>Optional</sup> <a name="group_id" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsConfig.property.groupId"></a>

```python
group_id: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The ID of the group owned by the authenticated user to look projects for within.

Cannot be used with `min_access_level`, `with_programming_language` or `statistics`.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/gitlab/d/projects#group_id DataGitlabProjects#group_id}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/gitlab/d/projects#id DataGitlabProjects#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `include_subgroups`<sup>Optional</sup> <a name="include_subgroups" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsConfig.property.includeSubgroups"></a>

```python
include_subgroups: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Include projects in subgroups of this group. Default is `false`. Needs `group_id`.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/gitlab/d/projects#include_subgroups DataGitlabProjects#include_subgroups}

---

##### `max_queryable_pages`<sup>Optional</sup> <a name="max_queryable_pages" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsConfig.property.maxQueryablePages"></a>

```python
max_queryable_pages: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The maximum number of project results pages that may be queried.

Prevents overloading your Gitlab instance in case of a misconfiguration.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/gitlab/d/projects#max_queryable_pages DataGitlabProjects#max_queryable_pages}

---

##### `membership`<sup>Optional</sup> <a name="membership" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsConfig.property.membership"></a>

```python
membership: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Limit by projects that the current user is a member of.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/gitlab/d/projects#membership DataGitlabProjects#membership}

---

##### `min_access_level`<sup>Optional</sup> <a name="min_access_level" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsConfig.property.minAccessLevel"></a>

```python
min_access_level: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Limit to projects where current user has at least this access level, refer to the [official documentation](https://docs.gitlab.com/ee/api/members.html) for values. Cannot be used with `group_id`.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/gitlab/d/projects#min_access_level DataGitlabProjects#min_access_level}

---

##### `order_by`<sup>Optional</sup> <a name="order_by" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsConfig.property.orderBy"></a>

```python
order_by: str
```

- *Type:* str

Return projects ordered ordered by: `id`, `name`, `path`, `created_at`, `updated_at`, `last_activity_at`, `similarity`, `repository_size`, `storage_size`, `packages_size`, `wiki_size`.

Some values or only available in certain circumstances. See [upstream docs](https://docs.gitlab.com/ee/api/projects.html#list-all-projects) for details.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/gitlab/d/projects#order_by DataGitlabProjects#order_by}

---

##### `owned`<sup>Optional</sup> <a name="owned" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsConfig.property.owned"></a>

```python
owned: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Limit by projects owned by the current user.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/gitlab/d/projects#owned DataGitlabProjects#owned}

---

##### `page`<sup>Optional</sup> <a name="page" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsConfig.property.page"></a>

```python
page: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The first page to begin the query on.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/gitlab/d/projects#page DataGitlabProjects#page}

---

##### `per_page`<sup>Optional</sup> <a name="per_page" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsConfig.property.perPage"></a>

```python
per_page: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The number of results to return per page.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/gitlab/d/projects#per_page DataGitlabProjects#per_page}

---

##### `search`<sup>Optional</sup> <a name="search" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsConfig.property.search"></a>

```python
search: str
```

- *Type:* str

Return list of authorized projects matching the search criteria.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/gitlab/d/projects#search DataGitlabProjects#search}

---

##### `simple`<sup>Optional</sup> <a name="simple" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsConfig.property.simple"></a>

```python
simple: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Return only the ID, URL, name, and path of each project.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/gitlab/d/projects#simple DataGitlabProjects#simple}

---

##### `sort`<sup>Optional</sup> <a name="sort" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsConfig.property.sort"></a>

```python
sort: str
```

- *Type:* str

Return projects sorted in `asc` or `desc` order. Default is `desc`.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/gitlab/d/projects#sort DataGitlabProjects#sort}

---

##### `starred`<sup>Optional</sup> <a name="starred" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsConfig.property.starred"></a>

```python
starred: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Limit by projects starred by the current user.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/gitlab/d/projects#starred DataGitlabProjects#starred}

---

##### `statistics`<sup>Optional</sup> <a name="statistics" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsConfig.property.statistics"></a>

```python
statistics: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Include project statistics. Cannot be used with `group_id`.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/gitlab/d/projects#statistics DataGitlabProjects#statistics}

---

##### `visibility`<sup>Optional</sup> <a name="visibility" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsConfig.property.visibility"></a>

```python
visibility: str
```

- *Type:* str

Limit by visibility `public`, `internal`, or `private`.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/gitlab/d/projects#visibility DataGitlabProjects#visibility}

---

##### `with_custom_attributes`<sup>Optional</sup> <a name="with_custom_attributes" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsConfig.property.withCustomAttributes"></a>

```python
with_custom_attributes: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Include custom attributes in response _(admins only)_.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/gitlab/d/projects#with_custom_attributes DataGitlabProjects#with_custom_attributes}

---

##### `with_issues_enabled`<sup>Optional</sup> <a name="with_issues_enabled" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsConfig.property.withIssuesEnabled"></a>

```python
with_issues_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Limit by projects with issues feature enabled. Default is `false`.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/gitlab/d/projects#with_issues_enabled DataGitlabProjects#with_issues_enabled}

---

##### `with_merge_requests_enabled`<sup>Optional</sup> <a name="with_merge_requests_enabled" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsConfig.property.withMergeRequestsEnabled"></a>

```python
with_merge_requests_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Limit by projects with merge requests feature enabled. Default is `false`.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/gitlab/d/projects#with_merge_requests_enabled DataGitlabProjects#with_merge_requests_enabled}

---

##### `with_programming_language`<sup>Optional</sup> <a name="with_programming_language" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsConfig.property.withProgrammingLanguage"></a>

```python
with_programming_language: str
```

- *Type:* str

Limit by projects which use the given programming language. Cannot be used with `group_id`.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/gitlab/d/projects#with_programming_language DataGitlabProjects#with_programming_language}

---

##### `with_shared`<sup>Optional</sup> <a name="with_shared" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsConfig.property.withShared"></a>

```python
with_shared: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Include projects shared to this group. Default is `true`. Needs `group_id`.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/gitlab/d/projects#with_shared DataGitlabProjects#with_shared}

---

### DataGitlabProjectsProjects <a name="DataGitlabProjectsProjects" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjects"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjects.Initializer"></a>

```python
from cdktf_cdktf_provider_gitlab import data_gitlab_projects

dataGitlabProjects.DataGitlabProjectsProjects()
```


### DataGitlabProjectsProjectsContainerExpirationPolicy <a name="DataGitlabProjectsProjectsContainerExpirationPolicy" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsContainerExpirationPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsContainerExpirationPolicy.Initializer"></a>

```python
from cdktf_cdktf_provider_gitlab import data_gitlab_projects

dataGitlabProjects.DataGitlabProjectsProjectsContainerExpirationPolicy()
```


### DataGitlabProjectsProjectsForkedFromProject <a name="DataGitlabProjectsProjectsForkedFromProject" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsForkedFromProject"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsForkedFromProject.Initializer"></a>

```python
from cdktf_cdktf_provider_gitlab import data_gitlab_projects

dataGitlabProjects.DataGitlabProjectsProjectsForkedFromProject()
```


### DataGitlabProjectsProjectsNamespace <a name="DataGitlabProjectsProjectsNamespace" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsNamespace"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsNamespace.Initializer"></a>

```python
from cdktf_cdktf_provider_gitlab import data_gitlab_projects

dataGitlabProjects.DataGitlabProjectsProjectsNamespace()
```


### DataGitlabProjectsProjectsOwner <a name="DataGitlabProjectsProjectsOwner" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOwner"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOwner.Initializer"></a>

```python
from cdktf_cdktf_provider_gitlab import data_gitlab_projects

dataGitlabProjects.DataGitlabProjectsProjectsOwner()
```


### DataGitlabProjectsProjectsPermissions <a name="DataGitlabProjectsProjectsPermissions" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsPermissions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsPermissions.Initializer"></a>

```python
from cdktf_cdktf_provider_gitlab import data_gitlab_projects

dataGitlabProjects.DataGitlabProjectsProjectsPermissions()
```


### DataGitlabProjectsProjectsSharedWithGroups <a name="DataGitlabProjectsProjectsSharedWithGroups" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsSharedWithGroups"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsSharedWithGroups.Initializer"></a>

```python
from cdktf_cdktf_provider_gitlab import data_gitlab_projects

dataGitlabProjects.DataGitlabProjectsProjectsSharedWithGroups()
```


## Classes <a name="Classes" id="Classes"></a>

### DataGitlabProjectsProjectsContainerExpirationPolicyList <a name="DataGitlabProjectsProjectsContainerExpirationPolicyList" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsContainerExpirationPolicyList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsContainerExpirationPolicyList.Initializer"></a>

```python
from cdktf_cdktf_provider_gitlab import data_gitlab_projects

dataGitlabProjects.DataGitlabProjectsProjectsContainerExpirationPolicyList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsContainerExpirationPolicyList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsContainerExpirationPolicyList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsContainerExpirationPolicyList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsContainerExpirationPolicyList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsContainerExpirationPolicyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsContainerExpirationPolicyList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsContainerExpirationPolicyList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsContainerExpirationPolicyList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsContainerExpirationPolicyList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsContainerExpirationPolicyList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsContainerExpirationPolicyList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsContainerExpirationPolicyList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsContainerExpirationPolicyList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsContainerExpirationPolicyList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsContainerExpirationPolicyList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataGitlabProjectsProjectsContainerExpirationPolicyOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsContainerExpirationPolicyList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsContainerExpirationPolicyList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsContainerExpirationPolicyList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsContainerExpirationPolicyList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsContainerExpirationPolicyList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataGitlabProjectsProjectsContainerExpirationPolicyOutputReference <a name="DataGitlabProjectsProjectsContainerExpirationPolicyOutputReference" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsContainerExpirationPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsContainerExpirationPolicyOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_gitlab import data_gitlab_projects

dataGitlabProjects.DataGitlabProjectsProjectsContainerExpirationPolicyOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsContainerExpirationPolicyOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsContainerExpirationPolicyOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsContainerExpirationPolicyOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsContainerExpirationPolicyOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsContainerExpirationPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsContainerExpirationPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsContainerExpirationPolicyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsContainerExpirationPolicyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsContainerExpirationPolicyOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsContainerExpirationPolicyOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsContainerExpirationPolicyOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsContainerExpirationPolicyOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsContainerExpirationPolicyOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsContainerExpirationPolicyOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsContainerExpirationPolicyOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsContainerExpirationPolicyOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsContainerExpirationPolicyOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsContainerExpirationPolicyOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsContainerExpirationPolicyOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsContainerExpirationPolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsContainerExpirationPolicyOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsContainerExpirationPolicyOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsContainerExpirationPolicyOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsContainerExpirationPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsContainerExpirationPolicyOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsContainerExpirationPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsContainerExpirationPolicyOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsContainerExpirationPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsContainerExpirationPolicyOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsContainerExpirationPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsContainerExpirationPolicyOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsContainerExpirationPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsContainerExpirationPolicyOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsContainerExpirationPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsContainerExpirationPolicyOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsContainerExpirationPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsContainerExpirationPolicyOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsContainerExpirationPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsContainerExpirationPolicyOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsContainerExpirationPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsContainerExpirationPolicyOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsContainerExpirationPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsContainerExpirationPolicyOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsContainerExpirationPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsContainerExpirationPolicyOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsContainerExpirationPolicyOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsContainerExpirationPolicyOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsContainerExpirationPolicyOutputReference.property.cadence">cadence</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsContainerExpirationPolicyOutputReference.property.enabled">enabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsContainerExpirationPolicyOutputReference.property.keepN">keep_n</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsContainerExpirationPolicyOutputReference.property.nameRegexDelete">name_regex_delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsContainerExpirationPolicyOutputReference.property.nameRegexKeep">name_regex_keep</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsContainerExpirationPolicyOutputReference.property.nextRunAt">next_run_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsContainerExpirationPolicyOutputReference.property.olderThan">older_than</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsContainerExpirationPolicyOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsContainerExpirationPolicy">DataGitlabProjectsProjectsContainerExpirationPolicy</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsContainerExpirationPolicyOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsContainerExpirationPolicyOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `cadence`<sup>Required</sup> <a name="cadence" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsContainerExpirationPolicyOutputReference.property.cadence"></a>

```python
cadence: str
```

- *Type:* str

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsContainerExpirationPolicyOutputReference.property.enabled"></a>

```python
enabled: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `keep_n`<sup>Required</sup> <a name="keep_n" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsContainerExpirationPolicyOutputReference.property.keepN"></a>

```python
keep_n: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `name_regex_delete`<sup>Required</sup> <a name="name_regex_delete" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsContainerExpirationPolicyOutputReference.property.nameRegexDelete"></a>

```python
name_regex_delete: str
```

- *Type:* str

---

##### `name_regex_keep`<sup>Required</sup> <a name="name_regex_keep" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsContainerExpirationPolicyOutputReference.property.nameRegexKeep"></a>

```python
name_regex_keep: str
```

- *Type:* str

---

##### `next_run_at`<sup>Required</sup> <a name="next_run_at" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsContainerExpirationPolicyOutputReference.property.nextRunAt"></a>

```python
next_run_at: str
```

- *Type:* str

---

##### `older_than`<sup>Required</sup> <a name="older_than" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsContainerExpirationPolicyOutputReference.property.olderThan"></a>

```python
older_than: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsContainerExpirationPolicyOutputReference.property.internalValue"></a>

```python
internal_value: DataGitlabProjectsProjectsContainerExpirationPolicy
```

- *Type:* <a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsContainerExpirationPolicy">DataGitlabProjectsProjectsContainerExpirationPolicy</a>

---


### DataGitlabProjectsProjectsForkedFromProjectList <a name="DataGitlabProjectsProjectsForkedFromProjectList" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsForkedFromProjectList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsForkedFromProjectList.Initializer"></a>

```python
from cdktf_cdktf_provider_gitlab import data_gitlab_projects

dataGitlabProjects.DataGitlabProjectsProjectsForkedFromProjectList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsForkedFromProjectList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsForkedFromProjectList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsForkedFromProjectList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsForkedFromProjectList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsForkedFromProjectList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsForkedFromProjectList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsForkedFromProjectList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsForkedFromProjectList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsForkedFromProjectList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsForkedFromProjectList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsForkedFromProjectList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsForkedFromProjectList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsForkedFromProjectList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsForkedFromProjectList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsForkedFromProjectList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataGitlabProjectsProjectsForkedFromProjectOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsForkedFromProjectList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsForkedFromProjectList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsForkedFromProjectList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsForkedFromProjectList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsForkedFromProjectList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataGitlabProjectsProjectsForkedFromProjectOutputReference <a name="DataGitlabProjectsProjectsForkedFromProjectOutputReference" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsForkedFromProjectOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsForkedFromProjectOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_gitlab import data_gitlab_projects

dataGitlabProjects.DataGitlabProjectsProjectsForkedFromProjectOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsForkedFromProjectOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsForkedFromProjectOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsForkedFromProjectOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsForkedFromProjectOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsForkedFromProjectOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsForkedFromProjectOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsForkedFromProjectOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsForkedFromProjectOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsForkedFromProjectOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsForkedFromProjectOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsForkedFromProjectOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsForkedFromProjectOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsForkedFromProjectOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsForkedFromProjectOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsForkedFromProjectOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsForkedFromProjectOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsForkedFromProjectOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsForkedFromProjectOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsForkedFromProjectOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsForkedFromProjectOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsForkedFromProjectOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsForkedFromProjectOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsForkedFromProjectOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsForkedFromProjectOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsForkedFromProjectOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsForkedFromProjectOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsForkedFromProjectOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsForkedFromProjectOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsForkedFromProjectOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsForkedFromProjectOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsForkedFromProjectOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsForkedFromProjectOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsForkedFromProjectOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsForkedFromProjectOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsForkedFromProjectOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsForkedFromProjectOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsForkedFromProjectOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsForkedFromProjectOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsForkedFromProjectOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsForkedFromProjectOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsForkedFromProjectOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsForkedFromProjectOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsForkedFromProjectOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsForkedFromProjectOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsForkedFromProjectOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsForkedFromProjectOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsForkedFromProjectOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsForkedFromProjectOutputReference.property.httpUrlToRepo">http_url_to_repo</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsForkedFromProjectOutputReference.property.id">id</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsForkedFromProjectOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsForkedFromProjectOutputReference.property.nameWithNamespace">name_with_namespace</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsForkedFromProjectOutputReference.property.path">path</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsForkedFromProjectOutputReference.property.pathWithNamespace">path_with_namespace</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsForkedFromProjectOutputReference.property.webUrl">web_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsForkedFromProjectOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsForkedFromProject">DataGitlabProjectsProjectsForkedFromProject</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsForkedFromProjectOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsForkedFromProjectOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `http_url_to_repo`<sup>Required</sup> <a name="http_url_to_repo" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsForkedFromProjectOutputReference.property.httpUrlToRepo"></a>

```python
http_url_to_repo: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsForkedFromProjectOutputReference.property.id"></a>

```python
id: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsForkedFromProjectOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `name_with_namespace`<sup>Required</sup> <a name="name_with_namespace" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsForkedFromProjectOutputReference.property.nameWithNamespace"></a>

```python
name_with_namespace: str
```

- *Type:* str

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsForkedFromProjectOutputReference.property.path"></a>

```python
path: str
```

- *Type:* str

---

##### `path_with_namespace`<sup>Required</sup> <a name="path_with_namespace" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsForkedFromProjectOutputReference.property.pathWithNamespace"></a>

```python
path_with_namespace: str
```

- *Type:* str

---

##### `web_url`<sup>Required</sup> <a name="web_url" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsForkedFromProjectOutputReference.property.webUrl"></a>

```python
web_url: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsForkedFromProjectOutputReference.property.internalValue"></a>

```python
internal_value: DataGitlabProjectsProjectsForkedFromProject
```

- *Type:* <a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsForkedFromProject">DataGitlabProjectsProjectsForkedFromProject</a>

---


### DataGitlabProjectsProjectsList <a name="DataGitlabProjectsProjectsList" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsList.Initializer"></a>

```python
from cdktf_cdktf_provider_gitlab import data_gitlab_projects

dataGitlabProjects.DataGitlabProjectsProjectsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataGitlabProjectsProjectsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataGitlabProjectsProjectsNamespaceList <a name="DataGitlabProjectsProjectsNamespaceList" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsNamespaceList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsNamespaceList.Initializer"></a>

```python
from cdktf_cdktf_provider_gitlab import data_gitlab_projects

dataGitlabProjects.DataGitlabProjectsProjectsNamespaceList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsNamespaceList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsNamespaceList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsNamespaceList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsNamespaceList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsNamespaceList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsNamespaceList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsNamespaceList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsNamespaceList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsNamespaceList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsNamespaceList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsNamespaceList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsNamespaceList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsNamespaceList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsNamespaceList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsNamespaceList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataGitlabProjectsProjectsNamespaceOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsNamespaceList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsNamespaceList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsNamespaceList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsNamespaceList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsNamespaceList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataGitlabProjectsProjectsNamespaceOutputReference <a name="DataGitlabProjectsProjectsNamespaceOutputReference" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsNamespaceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsNamespaceOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_gitlab import data_gitlab_projects

dataGitlabProjects.DataGitlabProjectsProjectsNamespaceOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsNamespaceOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsNamespaceOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsNamespaceOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsNamespaceOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsNamespaceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsNamespaceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsNamespaceOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsNamespaceOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsNamespaceOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsNamespaceOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsNamespaceOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsNamespaceOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsNamespaceOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsNamespaceOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsNamespaceOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsNamespaceOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsNamespaceOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsNamespaceOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsNamespaceOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsNamespaceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsNamespaceOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsNamespaceOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsNamespaceOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsNamespaceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsNamespaceOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsNamespaceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsNamespaceOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsNamespaceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsNamespaceOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsNamespaceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsNamespaceOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsNamespaceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsNamespaceOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsNamespaceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsNamespaceOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsNamespaceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsNamespaceOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsNamespaceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsNamespaceOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsNamespaceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsNamespaceOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsNamespaceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsNamespaceOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsNamespaceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsNamespaceOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsNamespaceOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsNamespaceOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsNamespaceOutputReference.property.fullPath">full_path</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsNamespaceOutputReference.property.id">id</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsNamespaceOutputReference.property.kind">kind</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsNamespaceOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsNamespaceOutputReference.property.path">path</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsNamespaceOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsNamespace">DataGitlabProjectsProjectsNamespace</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsNamespaceOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsNamespaceOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `full_path`<sup>Required</sup> <a name="full_path" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsNamespaceOutputReference.property.fullPath"></a>

```python
full_path: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsNamespaceOutputReference.property.id"></a>

```python
id: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `kind`<sup>Required</sup> <a name="kind" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsNamespaceOutputReference.property.kind"></a>

```python
kind: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsNamespaceOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsNamespaceOutputReference.property.path"></a>

```python
path: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsNamespaceOutputReference.property.internalValue"></a>

```python
internal_value: DataGitlabProjectsProjectsNamespace
```

- *Type:* <a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsNamespace">DataGitlabProjectsProjectsNamespace</a>

---


### DataGitlabProjectsProjectsOutputReference <a name="DataGitlabProjectsProjectsOutputReference" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_gitlab import data_gitlab_projects

dataGitlabProjects.DataGitlabProjectsProjectsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.property.allowMergeOnSkippedPipeline">allow_merge_on_skipped_pipeline</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.property.analyticsAccessLevel">analytics_access_level</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.property.approvalsBeforeMerge">approvals_before_merge</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.property.archived">archived</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.property.autoCancelPendingPipelines">auto_cancel_pending_pipelines</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.property.autocloseReferencedIssues">autoclose_referenced_issues</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.property.autoDevopsDeployStrategy">auto_devops_deploy_strategy</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.property.autoDevopsEnabled">auto_devops_enabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.property.avatarUrl">avatar_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.property.buildCoverageRegex">build_coverage_regex</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.property.buildGitStrategy">build_git_strategy</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.property.buildsAccessLevel">builds_access_level</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.property.buildTimeout">build_timeout</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.property.ciConfigPath">ci_config_path</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.property.ciDefaultGitDepth">ci_default_git_depth</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.property.ciForwardDeploymentEnabled">ci_forward_deployment_enabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.property.containerExpirationPolicy">container_expiration_policy</a></code> | <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsContainerExpirationPolicyList">DataGitlabProjectsProjectsContainerExpirationPolicyList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.property.containerRegistryAccessLevel">container_registry_access_level</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.property.containerRegistryEnabled">container_registry_enabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.property.createdAt">created_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.property.creatorId">creator_id</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.property.customAttributes">custom_attributes</a></code> | <code>cdktf.StringMapList</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.property.defaultBranch">default_branch</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.property.emailsDisabled">emails_disabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.property.externalAuthorizationClassificationLabel">external_authorization_classification_label</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.property.forkedFromProject">forked_from_project</a></code> | <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsForkedFromProjectList">DataGitlabProjectsProjectsForkedFromProjectList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.property.forkingAccessLevel">forking_access_level</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.property.forksCount">forks_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.property.httpUrlToRepo">http_url_to_repo</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.property.id">id</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.property.importError">import_error</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.property.importStatus">import_status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.property.issuesAccessLevel">issues_access_level</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.property.issuesEnabled">issues_enabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.property.jobsEnabled">jobs_enabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.property.lastActivityAt">last_activity_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.property.lfsEnabled">lfs_enabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.property.links">links</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.property.mergeCommitTemplate">merge_commit_template</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.property.mergeMethod">merge_method</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.property.mergePipelinesEnabled">merge_pipelines_enabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.property.mergeRequestsAccessLevel">merge_requests_access_level</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.property.mergeRequestsEnabled">merge_requests_enabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.property.mergeTrainsEnabled">merge_trains_enabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.property.mirror">mirror</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.property.mirrorOverwritesDivergedBranches">mirror_overwrites_diverged_branches</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.property.mirrorTriggerBuilds">mirror_trigger_builds</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.property.mirrorUserId">mirror_user_id</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.property.namespace">namespace</a></code> | <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsNamespaceList">DataGitlabProjectsProjectsNamespaceList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.property.nameWithNamespace">name_with_namespace</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.property.onlyAllowMergeIfAllDiscussionsAreResolved">only_allow_merge_if_all_discussions_are_resolved</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.property.onlyAllowMergeIfPipelineSucceeds">only_allow_merge_if_pipeline_succeeds</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.property.onlyMirrorProtectedBranches">only_mirror_protected_branches</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.property.openIssuesCount">open_issues_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.property.operationsAccessLevel">operations_access_level</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.property.owner">owner</a></code> | <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOwnerList">DataGitlabProjectsProjectsOwnerList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.property.packagesEnabled">packages_enabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.property.path">path</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.property.pathWithNamespace">path_with_namespace</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.property.permissions">permissions</a></code> | <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsPermissionsList">DataGitlabProjectsProjectsPermissionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.property.public">public</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.property.publicBuilds">public_builds</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.property.readmeUrl">readme_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.property.repositoryAccessLevel">repository_access_level</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.property.repositoryStorage">repository_storage</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.property.requestAccessEnabled">request_access_enabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.property.requirementsAccessLevel">requirements_access_level</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.property.resolveOutdatedDiffDiscussions">resolve_outdated_diff_discussions</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.property.restrictUserDefinedVariables">restrict_user_defined_variables</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.property.runnersToken">runners_token</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.property.securityAndComplianceAccessLevel">security_and_compliance_access_level</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.property.sharedRunnersEnabled">shared_runners_enabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.property.sharedWithGroups">shared_with_groups</a></code> | <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsSharedWithGroupsList">DataGitlabProjectsProjectsSharedWithGroupsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.property.snippetsAccessLevel">snippets_access_level</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.property.snippetsEnabled">snippets_enabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.property.squashCommitTemplate">squash_commit_template</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.property.sshUrlToRepo">ssh_url_to_repo</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.property.starCount">star_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.property.statistics">statistics</a></code> | <code>cdktf.NumberMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.property.suggestionCommitMessage">suggestion_commit_message</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.property.tagList">tag_list</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.property.topics">topics</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.property.visibility">visibility</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.property.webUrl">web_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.property.wikiAccessLevel">wiki_access_level</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.property.wikiEnabled">wiki_enabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjects">DataGitlabProjectsProjects</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `allow_merge_on_skipped_pipeline`<sup>Required</sup> <a name="allow_merge_on_skipped_pipeline" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.property.allowMergeOnSkippedPipeline"></a>

```python
allow_merge_on_skipped_pipeline: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `analytics_access_level`<sup>Required</sup> <a name="analytics_access_level" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.property.analyticsAccessLevel"></a>

```python
analytics_access_level: str
```

- *Type:* str

---

##### `approvals_before_merge`<sup>Required</sup> <a name="approvals_before_merge" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.property.approvalsBeforeMerge"></a>

```python
approvals_before_merge: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `archived`<sup>Required</sup> <a name="archived" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.property.archived"></a>

```python
archived: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `auto_cancel_pending_pipelines`<sup>Required</sup> <a name="auto_cancel_pending_pipelines" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.property.autoCancelPendingPipelines"></a>

```python
auto_cancel_pending_pipelines: str
```

- *Type:* str

---

##### `autoclose_referenced_issues`<sup>Required</sup> <a name="autoclose_referenced_issues" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.property.autocloseReferencedIssues"></a>

```python
autoclose_referenced_issues: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `auto_devops_deploy_strategy`<sup>Required</sup> <a name="auto_devops_deploy_strategy" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.property.autoDevopsDeployStrategy"></a>

```python
auto_devops_deploy_strategy: str
```

- *Type:* str

---

##### `auto_devops_enabled`<sup>Required</sup> <a name="auto_devops_enabled" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.property.autoDevopsEnabled"></a>

```python
auto_devops_enabled: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `avatar_url`<sup>Required</sup> <a name="avatar_url" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.property.avatarUrl"></a>

```python
avatar_url: str
```

- *Type:* str

---

##### `build_coverage_regex`<sup>Required</sup> <a name="build_coverage_regex" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.property.buildCoverageRegex"></a>

```python
build_coverage_regex: str
```

- *Type:* str

---

##### `build_git_strategy`<sup>Required</sup> <a name="build_git_strategy" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.property.buildGitStrategy"></a>

```python
build_git_strategy: str
```

- *Type:* str

---

##### `builds_access_level`<sup>Required</sup> <a name="builds_access_level" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.property.buildsAccessLevel"></a>

```python
builds_access_level: str
```

- *Type:* str

---

##### `build_timeout`<sup>Required</sup> <a name="build_timeout" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.property.buildTimeout"></a>

```python
build_timeout: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `ci_config_path`<sup>Required</sup> <a name="ci_config_path" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.property.ciConfigPath"></a>

```python
ci_config_path: str
```

- *Type:* str

---

##### `ci_default_git_depth`<sup>Required</sup> <a name="ci_default_git_depth" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.property.ciDefaultGitDepth"></a>

```python
ci_default_git_depth: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `ci_forward_deployment_enabled`<sup>Required</sup> <a name="ci_forward_deployment_enabled" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.property.ciForwardDeploymentEnabled"></a>

```python
ci_forward_deployment_enabled: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `container_expiration_policy`<sup>Required</sup> <a name="container_expiration_policy" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.property.containerExpirationPolicy"></a>

```python
container_expiration_policy: DataGitlabProjectsProjectsContainerExpirationPolicyList
```

- *Type:* <a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsContainerExpirationPolicyList">DataGitlabProjectsProjectsContainerExpirationPolicyList</a>

---

##### `container_registry_access_level`<sup>Required</sup> <a name="container_registry_access_level" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.property.containerRegistryAccessLevel"></a>

```python
container_registry_access_level: str
```

- *Type:* str

---

##### `container_registry_enabled`<sup>Required</sup> <a name="container_registry_enabled" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.property.containerRegistryEnabled"></a>

```python
container_registry_enabled: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `created_at`<sup>Required</sup> <a name="created_at" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.property.createdAt"></a>

```python
created_at: str
```

- *Type:* str

---

##### `creator_id`<sup>Required</sup> <a name="creator_id" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.property.creatorId"></a>

```python
creator_id: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `custom_attributes`<sup>Required</sup> <a name="custom_attributes" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.property.customAttributes"></a>

```python
custom_attributes: StringMapList
```

- *Type:* cdktf.StringMapList

---

##### `default_branch`<sup>Required</sup> <a name="default_branch" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.property.defaultBranch"></a>

```python
default_branch: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `emails_disabled`<sup>Required</sup> <a name="emails_disabled" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.property.emailsDisabled"></a>

```python
emails_disabled: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `external_authorization_classification_label`<sup>Required</sup> <a name="external_authorization_classification_label" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.property.externalAuthorizationClassificationLabel"></a>

```python
external_authorization_classification_label: str
```

- *Type:* str

---

##### `forked_from_project`<sup>Required</sup> <a name="forked_from_project" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.property.forkedFromProject"></a>

```python
forked_from_project: DataGitlabProjectsProjectsForkedFromProjectList
```

- *Type:* <a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsForkedFromProjectList">DataGitlabProjectsProjectsForkedFromProjectList</a>

---

##### `forking_access_level`<sup>Required</sup> <a name="forking_access_level" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.property.forkingAccessLevel"></a>

```python
forking_access_level: str
```

- *Type:* str

---

##### `forks_count`<sup>Required</sup> <a name="forks_count" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.property.forksCount"></a>

```python
forks_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `http_url_to_repo`<sup>Required</sup> <a name="http_url_to_repo" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.property.httpUrlToRepo"></a>

```python
http_url_to_repo: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.property.id"></a>

```python
id: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `import_error`<sup>Required</sup> <a name="import_error" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.property.importError"></a>

```python
import_error: str
```

- *Type:* str

---

##### `import_status`<sup>Required</sup> <a name="import_status" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.property.importStatus"></a>

```python
import_status: str
```

- *Type:* str

---

##### `issues_access_level`<sup>Required</sup> <a name="issues_access_level" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.property.issuesAccessLevel"></a>

```python
issues_access_level: str
```

- *Type:* str

---

##### `issues_enabled`<sup>Required</sup> <a name="issues_enabled" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.property.issuesEnabled"></a>

```python
issues_enabled: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `jobs_enabled`<sup>Required</sup> <a name="jobs_enabled" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.property.jobsEnabled"></a>

```python
jobs_enabled: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `last_activity_at`<sup>Required</sup> <a name="last_activity_at" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.property.lastActivityAt"></a>

```python
last_activity_at: str
```

- *Type:* str

---

##### `lfs_enabled`<sup>Required</sup> <a name="lfs_enabled" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.property.lfsEnabled"></a>

```python
lfs_enabled: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `links`<sup>Required</sup> <a name="links" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.property.links"></a>

```python
links: StringMap
```

- *Type:* cdktf.StringMap

---

##### `merge_commit_template`<sup>Required</sup> <a name="merge_commit_template" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.property.mergeCommitTemplate"></a>

```python
merge_commit_template: str
```

- *Type:* str

---

##### `merge_method`<sup>Required</sup> <a name="merge_method" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.property.mergeMethod"></a>

```python
merge_method: str
```

- *Type:* str

---

##### `merge_pipelines_enabled`<sup>Required</sup> <a name="merge_pipelines_enabled" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.property.mergePipelinesEnabled"></a>

```python
merge_pipelines_enabled: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `merge_requests_access_level`<sup>Required</sup> <a name="merge_requests_access_level" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.property.mergeRequestsAccessLevel"></a>

```python
merge_requests_access_level: str
```

- *Type:* str

---

##### `merge_requests_enabled`<sup>Required</sup> <a name="merge_requests_enabled" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.property.mergeRequestsEnabled"></a>

```python
merge_requests_enabled: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `merge_trains_enabled`<sup>Required</sup> <a name="merge_trains_enabled" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.property.mergeTrainsEnabled"></a>

```python
merge_trains_enabled: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `mirror`<sup>Required</sup> <a name="mirror" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.property.mirror"></a>

```python
mirror: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `mirror_overwrites_diverged_branches`<sup>Required</sup> <a name="mirror_overwrites_diverged_branches" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.property.mirrorOverwritesDivergedBranches"></a>

```python
mirror_overwrites_diverged_branches: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `mirror_trigger_builds`<sup>Required</sup> <a name="mirror_trigger_builds" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.property.mirrorTriggerBuilds"></a>

```python
mirror_trigger_builds: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `mirror_user_id`<sup>Required</sup> <a name="mirror_user_id" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.property.mirrorUserId"></a>

```python
mirror_user_id: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.property.namespace"></a>

```python
namespace: DataGitlabProjectsProjectsNamespaceList
```

- *Type:* <a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsNamespaceList">DataGitlabProjectsProjectsNamespaceList</a>

---

##### `name_with_namespace`<sup>Required</sup> <a name="name_with_namespace" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.property.nameWithNamespace"></a>

```python
name_with_namespace: str
```

- *Type:* str

---

##### `only_allow_merge_if_all_discussions_are_resolved`<sup>Required</sup> <a name="only_allow_merge_if_all_discussions_are_resolved" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.property.onlyAllowMergeIfAllDiscussionsAreResolved"></a>

```python
only_allow_merge_if_all_discussions_are_resolved: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `only_allow_merge_if_pipeline_succeeds`<sup>Required</sup> <a name="only_allow_merge_if_pipeline_succeeds" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.property.onlyAllowMergeIfPipelineSucceeds"></a>

```python
only_allow_merge_if_pipeline_succeeds: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `only_mirror_protected_branches`<sup>Required</sup> <a name="only_mirror_protected_branches" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.property.onlyMirrorProtectedBranches"></a>

```python
only_mirror_protected_branches: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `open_issues_count`<sup>Required</sup> <a name="open_issues_count" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.property.openIssuesCount"></a>

```python
open_issues_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `operations_access_level`<sup>Required</sup> <a name="operations_access_level" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.property.operationsAccessLevel"></a>

```python
operations_access_level: str
```

- *Type:* str

---

##### `owner`<sup>Required</sup> <a name="owner" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.property.owner"></a>

```python
owner: DataGitlabProjectsProjectsOwnerList
```

- *Type:* <a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOwnerList">DataGitlabProjectsProjectsOwnerList</a>

---

##### `packages_enabled`<sup>Required</sup> <a name="packages_enabled" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.property.packagesEnabled"></a>

```python
packages_enabled: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.property.path"></a>

```python
path: str
```

- *Type:* str

---

##### `path_with_namespace`<sup>Required</sup> <a name="path_with_namespace" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.property.pathWithNamespace"></a>

```python
path_with_namespace: str
```

- *Type:* str

---

##### `permissions`<sup>Required</sup> <a name="permissions" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.property.permissions"></a>

```python
permissions: DataGitlabProjectsProjectsPermissionsList
```

- *Type:* <a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsPermissionsList">DataGitlabProjectsProjectsPermissionsList</a>

---

##### `public`<sup>Required</sup> <a name="public" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.property.public"></a>

```python
public: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `public_builds`<sup>Required</sup> <a name="public_builds" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.property.publicBuilds"></a>

```python
public_builds: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `readme_url`<sup>Required</sup> <a name="readme_url" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.property.readmeUrl"></a>

```python
readme_url: str
```

- *Type:* str

---

##### `repository_access_level`<sup>Required</sup> <a name="repository_access_level" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.property.repositoryAccessLevel"></a>

```python
repository_access_level: str
```

- *Type:* str

---

##### `repository_storage`<sup>Required</sup> <a name="repository_storage" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.property.repositoryStorage"></a>

```python
repository_storage: str
```

- *Type:* str

---

##### `request_access_enabled`<sup>Required</sup> <a name="request_access_enabled" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.property.requestAccessEnabled"></a>

```python
request_access_enabled: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `requirements_access_level`<sup>Required</sup> <a name="requirements_access_level" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.property.requirementsAccessLevel"></a>

```python
requirements_access_level: str
```

- *Type:* str

---

##### `resolve_outdated_diff_discussions`<sup>Required</sup> <a name="resolve_outdated_diff_discussions" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.property.resolveOutdatedDiffDiscussions"></a>

```python
resolve_outdated_diff_discussions: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `restrict_user_defined_variables`<sup>Required</sup> <a name="restrict_user_defined_variables" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.property.restrictUserDefinedVariables"></a>

```python
restrict_user_defined_variables: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `runners_token`<sup>Required</sup> <a name="runners_token" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.property.runnersToken"></a>

```python
runners_token: str
```

- *Type:* str

---

##### `security_and_compliance_access_level`<sup>Required</sup> <a name="security_and_compliance_access_level" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.property.securityAndComplianceAccessLevel"></a>

```python
security_and_compliance_access_level: str
```

- *Type:* str

---

##### `shared_runners_enabled`<sup>Required</sup> <a name="shared_runners_enabled" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.property.sharedRunnersEnabled"></a>

```python
shared_runners_enabled: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `shared_with_groups`<sup>Required</sup> <a name="shared_with_groups" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.property.sharedWithGroups"></a>

```python
shared_with_groups: DataGitlabProjectsProjectsSharedWithGroupsList
```

- *Type:* <a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsSharedWithGroupsList">DataGitlabProjectsProjectsSharedWithGroupsList</a>

---

##### `snippets_access_level`<sup>Required</sup> <a name="snippets_access_level" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.property.snippetsAccessLevel"></a>

```python
snippets_access_level: str
```

- *Type:* str

---

##### `snippets_enabled`<sup>Required</sup> <a name="snippets_enabled" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.property.snippetsEnabled"></a>

```python
snippets_enabled: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `squash_commit_template`<sup>Required</sup> <a name="squash_commit_template" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.property.squashCommitTemplate"></a>

```python
squash_commit_template: str
```

- *Type:* str

---

##### `ssh_url_to_repo`<sup>Required</sup> <a name="ssh_url_to_repo" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.property.sshUrlToRepo"></a>

```python
ssh_url_to_repo: str
```

- *Type:* str

---

##### `star_count`<sup>Required</sup> <a name="star_count" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.property.starCount"></a>

```python
star_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `statistics`<sup>Required</sup> <a name="statistics" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.property.statistics"></a>

```python
statistics: NumberMap
```

- *Type:* cdktf.NumberMap

---

##### `suggestion_commit_message`<sup>Required</sup> <a name="suggestion_commit_message" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.property.suggestionCommitMessage"></a>

```python
suggestion_commit_message: str
```

- *Type:* str

---

##### `tag_list`<sup>Required</sup> <a name="tag_list" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.property.tagList"></a>

```python
tag_list: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `topics`<sup>Required</sup> <a name="topics" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.property.topics"></a>

```python
topics: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `visibility`<sup>Required</sup> <a name="visibility" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.property.visibility"></a>

```python
visibility: str
```

- *Type:* str

---

##### `web_url`<sup>Required</sup> <a name="web_url" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.property.webUrl"></a>

```python
web_url: str
```

- *Type:* str

---

##### `wiki_access_level`<sup>Required</sup> <a name="wiki_access_level" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.property.wikiAccessLevel"></a>

```python
wiki_access_level: str
```

- *Type:* str

---

##### `wiki_enabled`<sup>Required</sup> <a name="wiki_enabled" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.property.wikiEnabled"></a>

```python
wiki_enabled: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.property.internalValue"></a>

```python
internal_value: DataGitlabProjectsProjects
```

- *Type:* <a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjects">DataGitlabProjectsProjects</a>

---


### DataGitlabProjectsProjectsOwnerList <a name="DataGitlabProjectsProjectsOwnerList" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOwnerList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOwnerList.Initializer"></a>

```python
from cdktf_cdktf_provider_gitlab import data_gitlab_projects

dataGitlabProjects.DataGitlabProjectsProjectsOwnerList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOwnerList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOwnerList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOwnerList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOwnerList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOwnerList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOwnerList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOwnerList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOwnerList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOwnerList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOwnerList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOwnerList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOwnerList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOwnerList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOwnerList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOwnerList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataGitlabProjectsProjectsOwnerOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOwnerList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOwnerList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOwnerList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOwnerList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOwnerList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataGitlabProjectsProjectsOwnerOutputReference <a name="DataGitlabProjectsProjectsOwnerOutputReference" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOwnerOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOwnerOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_gitlab import data_gitlab_projects

dataGitlabProjects.DataGitlabProjectsProjectsOwnerOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOwnerOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOwnerOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOwnerOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOwnerOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOwnerOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOwnerOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOwnerOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOwnerOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOwnerOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOwnerOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOwnerOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOwnerOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOwnerOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOwnerOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOwnerOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOwnerOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOwnerOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOwnerOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOwnerOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOwnerOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOwnerOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOwnerOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOwnerOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOwnerOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOwnerOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOwnerOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOwnerOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOwnerOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOwnerOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOwnerOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOwnerOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOwnerOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOwnerOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOwnerOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOwnerOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOwnerOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOwnerOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOwnerOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOwnerOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOwnerOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOwnerOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOwnerOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOwnerOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOwnerOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOwnerOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOwnerOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOwnerOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOwnerOutputReference.property.avatarUrl">avatar_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOwnerOutputReference.property.id">id</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOwnerOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOwnerOutputReference.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOwnerOutputReference.property.username">username</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOwnerOutputReference.property.websiteUrl">website_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOwnerOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOwner">DataGitlabProjectsProjectsOwner</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOwnerOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOwnerOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `avatar_url`<sup>Required</sup> <a name="avatar_url" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOwnerOutputReference.property.avatarUrl"></a>

```python
avatar_url: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOwnerOutputReference.property.id"></a>

```python
id: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOwnerOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOwnerOutputReference.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOwnerOutputReference.property.username"></a>

```python
username: str
```

- *Type:* str

---

##### `website_url`<sup>Required</sup> <a name="website_url" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOwnerOutputReference.property.websiteUrl"></a>

```python
website_url: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOwnerOutputReference.property.internalValue"></a>

```python
internal_value: DataGitlabProjectsProjectsOwner
```

- *Type:* <a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOwner">DataGitlabProjectsProjectsOwner</a>

---


### DataGitlabProjectsProjectsPermissionsList <a name="DataGitlabProjectsProjectsPermissionsList" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsPermissionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsPermissionsList.Initializer"></a>

```python
from cdktf_cdktf_provider_gitlab import data_gitlab_projects

dataGitlabProjects.DataGitlabProjectsProjectsPermissionsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsPermissionsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsPermissionsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsPermissionsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsPermissionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsPermissionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsPermissionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsPermissionsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsPermissionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsPermissionsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsPermissionsList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsPermissionsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsPermissionsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsPermissionsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsPermissionsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsPermissionsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataGitlabProjectsProjectsPermissionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsPermissionsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsPermissionsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsPermissionsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsPermissionsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsPermissionsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataGitlabProjectsProjectsPermissionsOutputReference <a name="DataGitlabProjectsProjectsPermissionsOutputReference" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsPermissionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsPermissionsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_gitlab import data_gitlab_projects

dataGitlabProjects.DataGitlabProjectsProjectsPermissionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsPermissionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsPermissionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsPermissionsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsPermissionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsPermissionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsPermissionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsPermissionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsPermissionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsPermissionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsPermissionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsPermissionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsPermissionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsPermissionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsPermissionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsPermissionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsPermissionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsPermissionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsPermissionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsPermissionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsPermissionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsPermissionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsPermissionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsPermissionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsPermissionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsPermissionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsPermissionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsPermissionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsPermissionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsPermissionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsPermissionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsPermissionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsPermissionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsPermissionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsPermissionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsPermissionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsPermissionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsPermissionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsPermissionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsPermissionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsPermissionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsPermissionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsPermissionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsPermissionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsPermissionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsPermissionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsPermissionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsPermissionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsPermissionsOutputReference.property.groupAccess">group_access</a></code> | <code>cdktf.NumberMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsPermissionsOutputReference.property.projectAccess">project_access</a></code> | <code>cdktf.NumberMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsPermissionsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsPermissions">DataGitlabProjectsProjectsPermissions</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsPermissionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsPermissionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `group_access`<sup>Required</sup> <a name="group_access" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsPermissionsOutputReference.property.groupAccess"></a>

```python
group_access: NumberMap
```

- *Type:* cdktf.NumberMap

---

##### `project_access`<sup>Required</sup> <a name="project_access" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsPermissionsOutputReference.property.projectAccess"></a>

```python
project_access: NumberMap
```

- *Type:* cdktf.NumberMap

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsPermissionsOutputReference.property.internalValue"></a>

```python
internal_value: DataGitlabProjectsProjectsPermissions
```

- *Type:* <a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsPermissions">DataGitlabProjectsProjectsPermissions</a>

---


### DataGitlabProjectsProjectsSharedWithGroupsList <a name="DataGitlabProjectsProjectsSharedWithGroupsList" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsSharedWithGroupsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsSharedWithGroupsList.Initializer"></a>

```python
from cdktf_cdktf_provider_gitlab import data_gitlab_projects

dataGitlabProjects.DataGitlabProjectsProjectsSharedWithGroupsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsSharedWithGroupsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsSharedWithGroupsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsSharedWithGroupsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsSharedWithGroupsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsSharedWithGroupsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsSharedWithGroupsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsSharedWithGroupsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsSharedWithGroupsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsSharedWithGroupsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsSharedWithGroupsList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsSharedWithGroupsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsSharedWithGroupsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsSharedWithGroupsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsSharedWithGroupsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsSharedWithGroupsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataGitlabProjectsProjectsSharedWithGroupsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsSharedWithGroupsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsSharedWithGroupsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsSharedWithGroupsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsSharedWithGroupsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsSharedWithGroupsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataGitlabProjectsProjectsSharedWithGroupsOutputReference <a name="DataGitlabProjectsProjectsSharedWithGroupsOutputReference" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsSharedWithGroupsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsSharedWithGroupsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_gitlab import data_gitlab_projects

dataGitlabProjects.DataGitlabProjectsProjectsSharedWithGroupsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsSharedWithGroupsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsSharedWithGroupsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsSharedWithGroupsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsSharedWithGroupsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsSharedWithGroupsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsSharedWithGroupsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsSharedWithGroupsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsSharedWithGroupsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsSharedWithGroupsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsSharedWithGroupsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsSharedWithGroupsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsSharedWithGroupsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsSharedWithGroupsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsSharedWithGroupsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsSharedWithGroupsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsSharedWithGroupsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsSharedWithGroupsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsSharedWithGroupsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsSharedWithGroupsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsSharedWithGroupsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsSharedWithGroupsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsSharedWithGroupsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsSharedWithGroupsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsSharedWithGroupsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsSharedWithGroupsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsSharedWithGroupsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsSharedWithGroupsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsSharedWithGroupsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsSharedWithGroupsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsSharedWithGroupsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsSharedWithGroupsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsSharedWithGroupsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsSharedWithGroupsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsSharedWithGroupsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsSharedWithGroupsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsSharedWithGroupsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsSharedWithGroupsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsSharedWithGroupsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsSharedWithGroupsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsSharedWithGroupsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsSharedWithGroupsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsSharedWithGroupsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsSharedWithGroupsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsSharedWithGroupsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsSharedWithGroupsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsSharedWithGroupsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsSharedWithGroupsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsSharedWithGroupsOutputReference.property.groupAccessLevel">group_access_level</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsSharedWithGroupsOutputReference.property.groupId">group_id</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsSharedWithGroupsOutputReference.property.groupName">group_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsSharedWithGroupsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsSharedWithGroups">DataGitlabProjectsProjectsSharedWithGroups</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsSharedWithGroupsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsSharedWithGroupsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `group_access_level`<sup>Required</sup> <a name="group_access_level" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsSharedWithGroupsOutputReference.property.groupAccessLevel"></a>

```python
group_access_level: str
```

- *Type:* str

---

##### `group_id`<sup>Required</sup> <a name="group_id" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsSharedWithGroupsOutputReference.property.groupId"></a>

```python
group_id: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `group_name`<sup>Required</sup> <a name="group_name" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsSharedWithGroupsOutputReference.property.groupName"></a>

```python
group_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsSharedWithGroupsOutputReference.property.internalValue"></a>

```python
internal_value: DataGitlabProjectsProjectsSharedWithGroups
```

- *Type:* <a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsSharedWithGroups">DataGitlabProjectsProjectsSharedWithGroups</a>

---



