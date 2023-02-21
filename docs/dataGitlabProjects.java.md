# `dataGitlabProjects` Submodule <a name="`dataGitlabProjects` Submodule" id="@cdktf/provider-gitlab.dataGitlabProjects"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataGitlabProjects <a name="DataGitlabProjects" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects"></a>

Represents a {@link https://www.terraform.io/docs/providers/gitlab/d/projects gitlab_projects}.

#### Initializers <a name="Initializers" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.gitlab.data_gitlab_projects.DataGitlabProjects;

DataGitlabProjects.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
//  .archived(java.lang.Boolean)
//  .archived(IResolvable)
//  .groupId(java.lang.Number)
//  .id(java.lang.String)
//  .includeSubgroups(java.lang.Boolean)
//  .includeSubgroups(IResolvable)
//  .maxQueryablePages(java.lang.Number)
//  .membership(java.lang.Boolean)
//  .membership(IResolvable)
//  .minAccessLevel(java.lang.Number)
//  .orderBy(java.lang.String)
//  .owned(java.lang.Boolean)
//  .owned(IResolvable)
//  .page(java.lang.Number)
//  .perPage(java.lang.Number)
//  .search(java.lang.String)
//  .simple(java.lang.Boolean)
//  .simple(IResolvable)
//  .sort(java.lang.String)
//  .starred(java.lang.Boolean)
//  .starred(IResolvable)
//  .statistics(java.lang.Boolean)
//  .statistics(IResolvable)
//  .visibility(java.lang.String)
//  .withCustomAttributes(java.lang.Boolean)
//  .withCustomAttributes(IResolvable)
//  .withIssuesEnabled(java.lang.Boolean)
//  .withIssuesEnabled(IResolvable)
//  .withMergeRequestsEnabled(java.lang.Boolean)
//  .withMergeRequestsEnabled(IResolvable)
//  .withProgrammingLanguage(java.lang.String)
//  .withShared(java.lang.Boolean)
//  .withShared(IResolvable)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.Initializer.parameter.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.Initializer.parameter.archived">archived</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Limit by archived status. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.Initializer.parameter.groupId">groupId</a></code> | <code>java.lang.Number</code> | The ID of the group owned by the authenticated user to look projects for within. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/gitlab/d/projects#id DataGitlabProjects#id}. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.Initializer.parameter.includeSubgroups">includeSubgroups</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Include projects in subgroups of this group. Default is `false`. Needs `group_id`. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.Initializer.parameter.maxQueryablePages">maxQueryablePages</a></code> | <code>java.lang.Number</code> | The maximum number of project results pages that may be queried. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.Initializer.parameter.membership">membership</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Limit by projects that the current user is a member of. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.Initializer.parameter.minAccessLevel">minAccessLevel</a></code> | <code>java.lang.Number</code> | Limit to projects where current user has at least this access level, refer to the [official documentation](https://docs.gitlab.com/ee/api/members.html) for values. Cannot be used with `group_id`. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.Initializer.parameter.orderBy">orderBy</a></code> | <code>java.lang.String</code> | Return projects ordered ordered by: `id`, `name`, `path`, `created_at`, `updated_at`, `last_activity_at`, `similarity`, `repository_size`, `storage_size`, `packages_size`, `wiki_size`. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.Initializer.parameter.owned">owned</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Limit by projects owned by the current user. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.Initializer.parameter.page">page</a></code> | <code>java.lang.Number</code> | The first page to begin the query on. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.Initializer.parameter.perPage">perPage</a></code> | <code>java.lang.Number</code> | The number of results to return per page. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.Initializer.parameter.search">search</a></code> | <code>java.lang.String</code> | Return list of authorized projects matching the search criteria. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.Initializer.parameter.simple">simple</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Return only the ID, URL, name, and path of each project. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.Initializer.parameter.sort">sort</a></code> | <code>java.lang.String</code> | Return projects sorted in `asc` or `desc` order. Default is `desc`. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.Initializer.parameter.starred">starred</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Limit by projects starred by the current user. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.Initializer.parameter.statistics">statistics</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Include project statistics. Cannot be used with `group_id`. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.Initializer.parameter.visibility">visibility</a></code> | <code>java.lang.String</code> | Limit by visibility `public`, `internal`, or `private`. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.Initializer.parameter.withCustomAttributes">withCustomAttributes</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Include custom attributes in response _(admins only)_. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.Initializer.parameter.withIssuesEnabled">withIssuesEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Limit by projects with issues feature enabled. Default is `false`. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.Initializer.parameter.withMergeRequestsEnabled">withMergeRequestsEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Limit by projects with merge requests feature enabled. Default is `false`. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.Initializer.parameter.withProgrammingLanguage">withProgrammingLanguage</a></code> | <code>java.lang.String</code> | Limit by projects which use the given programming language. Cannot be used with `group_id`. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.Initializer.parameter.withShared">withShared</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Include projects shared to this group. Default is `true`. Needs `group_id`. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.Initializer.parameter.count"></a>

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `archived`<sup>Optional</sup> <a name="archived" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.Initializer.parameter.archived"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Limit by archived status.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/gitlab/d/projects#archived DataGitlabProjects#archived}

---

##### `groupId`<sup>Optional</sup> <a name="groupId" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.Initializer.parameter.groupId"></a>

- *Type:* java.lang.Number

The ID of the group owned by the authenticated user to look projects for within.

Cannot be used with `min_access_level`, `with_programming_language` or `statistics`.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/gitlab/d/projects#group_id DataGitlabProjects#group_id}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/gitlab/d/projects#id DataGitlabProjects#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `includeSubgroups`<sup>Optional</sup> <a name="includeSubgroups" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.Initializer.parameter.includeSubgroups"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Include projects in subgroups of this group. Default is `false`. Needs `group_id`.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/gitlab/d/projects#include_subgroups DataGitlabProjects#include_subgroups}

---

##### `maxQueryablePages`<sup>Optional</sup> <a name="maxQueryablePages" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.Initializer.parameter.maxQueryablePages"></a>

- *Type:* java.lang.Number

The maximum number of project results pages that may be queried.

Prevents overloading your Gitlab instance in case of a misconfiguration.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/gitlab/d/projects#max_queryable_pages DataGitlabProjects#max_queryable_pages}

---

##### `membership`<sup>Optional</sup> <a name="membership" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.Initializer.parameter.membership"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Limit by projects that the current user is a member of.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/gitlab/d/projects#membership DataGitlabProjects#membership}

---

##### `minAccessLevel`<sup>Optional</sup> <a name="minAccessLevel" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.Initializer.parameter.minAccessLevel"></a>

- *Type:* java.lang.Number

Limit to projects where current user has at least this access level, refer to the [official documentation](https://docs.gitlab.com/ee/api/members.html) for values. Cannot be used with `group_id`.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/gitlab/d/projects#min_access_level DataGitlabProjects#min_access_level}

---

##### `orderBy`<sup>Optional</sup> <a name="orderBy" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.Initializer.parameter.orderBy"></a>

- *Type:* java.lang.String

Return projects ordered ordered by: `id`, `name`, `path`, `created_at`, `updated_at`, `last_activity_at`, `similarity`, `repository_size`, `storage_size`, `packages_size`, `wiki_size`.

Some values or only available in certain circumstances. See [upstream docs](https://docs.gitlab.com/ee/api/projects.html#list-all-projects) for details.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/gitlab/d/projects#order_by DataGitlabProjects#order_by}

---

##### `owned`<sup>Optional</sup> <a name="owned" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.Initializer.parameter.owned"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Limit by projects owned by the current user.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/gitlab/d/projects#owned DataGitlabProjects#owned}

---

##### `page`<sup>Optional</sup> <a name="page" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.Initializer.parameter.page"></a>

- *Type:* java.lang.Number

The first page to begin the query on.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/gitlab/d/projects#page DataGitlabProjects#page}

---

##### `perPage`<sup>Optional</sup> <a name="perPage" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.Initializer.parameter.perPage"></a>

- *Type:* java.lang.Number

The number of results to return per page.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/gitlab/d/projects#per_page DataGitlabProjects#per_page}

---

##### `search`<sup>Optional</sup> <a name="search" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.Initializer.parameter.search"></a>

- *Type:* java.lang.String

Return list of authorized projects matching the search criteria.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/gitlab/d/projects#search DataGitlabProjects#search}

---

##### `simple`<sup>Optional</sup> <a name="simple" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.Initializer.parameter.simple"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Return only the ID, URL, name, and path of each project.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/gitlab/d/projects#simple DataGitlabProjects#simple}

---

##### `sort`<sup>Optional</sup> <a name="sort" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.Initializer.parameter.sort"></a>

- *Type:* java.lang.String

Return projects sorted in `asc` or `desc` order. Default is `desc`.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/gitlab/d/projects#sort DataGitlabProjects#sort}

---

##### `starred`<sup>Optional</sup> <a name="starred" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.Initializer.parameter.starred"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Limit by projects starred by the current user.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/gitlab/d/projects#starred DataGitlabProjects#starred}

---

##### `statistics`<sup>Optional</sup> <a name="statistics" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.Initializer.parameter.statistics"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Include project statistics. Cannot be used with `group_id`.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/gitlab/d/projects#statistics DataGitlabProjects#statistics}

---

##### `visibility`<sup>Optional</sup> <a name="visibility" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.Initializer.parameter.visibility"></a>

- *Type:* java.lang.String

Limit by visibility `public`, `internal`, or `private`.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/gitlab/d/projects#visibility DataGitlabProjects#visibility}

---

##### `withCustomAttributes`<sup>Optional</sup> <a name="withCustomAttributes" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.Initializer.parameter.withCustomAttributes"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Include custom attributes in response _(admins only)_.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/gitlab/d/projects#with_custom_attributes DataGitlabProjects#with_custom_attributes}

---

##### `withIssuesEnabled`<sup>Optional</sup> <a name="withIssuesEnabled" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.Initializer.parameter.withIssuesEnabled"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Limit by projects with issues feature enabled. Default is `false`.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/gitlab/d/projects#with_issues_enabled DataGitlabProjects#with_issues_enabled}

---

##### `withMergeRequestsEnabled`<sup>Optional</sup> <a name="withMergeRequestsEnabled" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.Initializer.parameter.withMergeRequestsEnabled"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Limit by projects with merge requests feature enabled. Default is `false`.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/gitlab/d/projects#with_merge_requests_enabled DataGitlabProjects#with_merge_requests_enabled}

---

##### `withProgrammingLanguage`<sup>Optional</sup> <a name="withProgrammingLanguage" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.Initializer.parameter.withProgrammingLanguage"></a>

- *Type:* java.lang.String

Limit by projects which use the given programming language. Cannot be used with `group_id`.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/gitlab/d/projects#with_programming_language DataGitlabProjects#with_programming_language}

---

##### `withShared`<sup>Optional</sup> <a name="withShared" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.Initializer.parameter.withShared"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Include projects shared to this group. Default is `true`. Needs `group_id`.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/gitlab/d/projects#with_shared DataGitlabProjects#with_shared}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.resetArchived">resetArchived</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.resetGroupId">resetGroupId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.resetIncludeSubgroups">resetIncludeSubgroups</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.resetMaxQueryablePages">resetMaxQueryablePages</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.resetMembership">resetMembership</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.resetMinAccessLevel">resetMinAccessLevel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.resetOrderBy">resetOrderBy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.resetOwned">resetOwned</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.resetPage">resetPage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.resetPerPage">resetPerPage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.resetSearch">resetSearch</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.resetSimple">resetSimple</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.resetSort">resetSort</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.resetStarred">resetStarred</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.resetStatistics">resetStatistics</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.resetVisibility">resetVisibility</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.resetWithCustomAttributes">resetWithCustomAttributes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.resetWithIssuesEnabled">resetWithIssuesEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.resetWithMergeRequestsEnabled">resetWithMergeRequestsEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.resetWithProgrammingLanguage">resetWithProgrammingLanguage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.resetWithShared">resetWithShared</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `resetArchived` <a name="resetArchived" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.resetArchived"></a>

```java
public void resetArchived()
```

##### `resetGroupId` <a name="resetGroupId" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.resetGroupId"></a>

```java
public void resetGroupId()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.resetId"></a>

```java
public void resetId()
```

##### `resetIncludeSubgroups` <a name="resetIncludeSubgroups" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.resetIncludeSubgroups"></a>

```java
public void resetIncludeSubgroups()
```

##### `resetMaxQueryablePages` <a name="resetMaxQueryablePages" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.resetMaxQueryablePages"></a>

```java
public void resetMaxQueryablePages()
```

##### `resetMembership` <a name="resetMembership" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.resetMembership"></a>

```java
public void resetMembership()
```

##### `resetMinAccessLevel` <a name="resetMinAccessLevel" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.resetMinAccessLevel"></a>

```java
public void resetMinAccessLevel()
```

##### `resetOrderBy` <a name="resetOrderBy" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.resetOrderBy"></a>

```java
public void resetOrderBy()
```

##### `resetOwned` <a name="resetOwned" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.resetOwned"></a>

```java
public void resetOwned()
```

##### `resetPage` <a name="resetPage" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.resetPage"></a>

```java
public void resetPage()
```

##### `resetPerPage` <a name="resetPerPage" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.resetPerPage"></a>

```java
public void resetPerPage()
```

##### `resetSearch` <a name="resetSearch" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.resetSearch"></a>

```java
public void resetSearch()
```

##### `resetSimple` <a name="resetSimple" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.resetSimple"></a>

```java
public void resetSimple()
```

##### `resetSort` <a name="resetSort" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.resetSort"></a>

```java
public void resetSort()
```

##### `resetStarred` <a name="resetStarred" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.resetStarred"></a>

```java
public void resetStarred()
```

##### `resetStatistics` <a name="resetStatistics" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.resetStatistics"></a>

```java
public void resetStatistics()
```

##### `resetVisibility` <a name="resetVisibility" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.resetVisibility"></a>

```java
public void resetVisibility()
```

##### `resetWithCustomAttributes` <a name="resetWithCustomAttributes" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.resetWithCustomAttributes"></a>

```java
public void resetWithCustomAttributes()
```

##### `resetWithIssuesEnabled` <a name="resetWithIssuesEnabled" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.resetWithIssuesEnabled"></a>

```java
public void resetWithIssuesEnabled()
```

##### `resetWithMergeRequestsEnabled` <a name="resetWithMergeRequestsEnabled" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.resetWithMergeRequestsEnabled"></a>

```java
public void resetWithMergeRequestsEnabled()
```

##### `resetWithProgrammingLanguage` <a name="resetWithProgrammingLanguage" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.resetWithProgrammingLanguage"></a>

```java
public void resetWithProgrammingLanguage()
```

##### `resetWithShared` <a name="resetWithShared" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.resetWithShared"></a>

```java
public void resetWithShared()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.gitlab.data_gitlab_projects.DataGitlabProjects;

DataGitlabProjects.isConstruct(java.lang.Object x)
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

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.gitlab.data_gitlab_projects.DataGitlabProjects;

DataGitlabProjects.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.isTerraformDataSource"></a>

```java
import com.hashicorp.cdktf.providers.gitlab.data_gitlab_projects.DataGitlabProjects;

DataGitlabProjects.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.property.projects">projects</a></code> | <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsList">DataGitlabProjectsProjectsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.property.archivedInput">archivedInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.property.groupIdInput">groupIdInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.property.includeSubgroupsInput">includeSubgroupsInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.property.maxQueryablePagesInput">maxQueryablePagesInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.property.membershipInput">membershipInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.property.minAccessLevelInput">minAccessLevelInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.property.orderByInput">orderByInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.property.ownedInput">ownedInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.property.pageInput">pageInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.property.perPageInput">perPageInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.property.searchInput">searchInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.property.simpleInput">simpleInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.property.sortInput">sortInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.property.starredInput">starredInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.property.statisticsInput">statisticsInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.property.visibilityInput">visibilityInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.property.withCustomAttributesInput">withCustomAttributesInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.property.withIssuesEnabledInput">withIssuesEnabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.property.withMergeRequestsEnabledInput">withMergeRequestsEnabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.property.withProgrammingLanguageInput">withProgrammingLanguageInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.property.withSharedInput">withSharedInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.property.archived">archived</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.property.groupId">groupId</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.property.includeSubgroups">includeSubgroups</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.property.maxQueryablePages">maxQueryablePages</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.property.membership">membership</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.property.minAccessLevel">minAccessLevel</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.property.orderBy">orderBy</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.property.owned">owned</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.property.page">page</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.property.perPage">perPage</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.property.search">search</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.property.simple">simple</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.property.sort">sort</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.property.starred">starred</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.property.statistics">statistics</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.property.visibility">visibility</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.property.withCustomAttributes">withCustomAttributes</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.property.withIssuesEnabled">withIssuesEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.property.withMergeRequestsEnabled">withMergeRequestsEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.property.withProgrammingLanguage">withProgrammingLanguage</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.property.withShared">withShared</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `projects`<sup>Required</sup> <a name="projects" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.property.projects"></a>

```java
public DataGitlabProjectsProjectsList getProjects();
```

- *Type:* <a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsList">DataGitlabProjectsProjectsList</a>

---

##### `archivedInput`<sup>Optional</sup> <a name="archivedInput" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.property.archivedInput"></a>

```java
public java.lang.Object getArchivedInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `groupIdInput`<sup>Optional</sup> <a name="groupIdInput" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.property.groupIdInput"></a>

```java
public java.lang.Number getGroupIdInput();
```

- *Type:* java.lang.Number

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `includeSubgroupsInput`<sup>Optional</sup> <a name="includeSubgroupsInput" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.property.includeSubgroupsInput"></a>

```java
public java.lang.Object getIncludeSubgroupsInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `maxQueryablePagesInput`<sup>Optional</sup> <a name="maxQueryablePagesInput" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.property.maxQueryablePagesInput"></a>

```java
public java.lang.Number getMaxQueryablePagesInput();
```

- *Type:* java.lang.Number

---

##### `membershipInput`<sup>Optional</sup> <a name="membershipInput" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.property.membershipInput"></a>

```java
public java.lang.Object getMembershipInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `minAccessLevelInput`<sup>Optional</sup> <a name="minAccessLevelInput" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.property.minAccessLevelInput"></a>

```java
public java.lang.Number getMinAccessLevelInput();
```

- *Type:* java.lang.Number

---

##### `orderByInput`<sup>Optional</sup> <a name="orderByInput" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.property.orderByInput"></a>

```java
public java.lang.String getOrderByInput();
```

- *Type:* java.lang.String

---

##### `ownedInput`<sup>Optional</sup> <a name="ownedInput" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.property.ownedInput"></a>

```java
public java.lang.Object getOwnedInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `pageInput`<sup>Optional</sup> <a name="pageInput" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.property.pageInput"></a>

```java
public java.lang.Number getPageInput();
```

- *Type:* java.lang.Number

---

##### `perPageInput`<sup>Optional</sup> <a name="perPageInput" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.property.perPageInput"></a>

```java
public java.lang.Number getPerPageInput();
```

- *Type:* java.lang.Number

---

##### `searchInput`<sup>Optional</sup> <a name="searchInput" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.property.searchInput"></a>

```java
public java.lang.String getSearchInput();
```

- *Type:* java.lang.String

---

##### `simpleInput`<sup>Optional</sup> <a name="simpleInput" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.property.simpleInput"></a>

```java
public java.lang.Object getSimpleInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `sortInput`<sup>Optional</sup> <a name="sortInput" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.property.sortInput"></a>

```java
public java.lang.String getSortInput();
```

- *Type:* java.lang.String

---

##### `starredInput`<sup>Optional</sup> <a name="starredInput" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.property.starredInput"></a>

```java
public java.lang.Object getStarredInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `statisticsInput`<sup>Optional</sup> <a name="statisticsInput" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.property.statisticsInput"></a>

```java
public java.lang.Object getStatisticsInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `visibilityInput`<sup>Optional</sup> <a name="visibilityInput" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.property.visibilityInput"></a>

```java
public java.lang.String getVisibilityInput();
```

- *Type:* java.lang.String

---

##### `withCustomAttributesInput`<sup>Optional</sup> <a name="withCustomAttributesInput" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.property.withCustomAttributesInput"></a>

```java
public java.lang.Object getWithCustomAttributesInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `withIssuesEnabledInput`<sup>Optional</sup> <a name="withIssuesEnabledInput" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.property.withIssuesEnabledInput"></a>

```java
public java.lang.Object getWithIssuesEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `withMergeRequestsEnabledInput`<sup>Optional</sup> <a name="withMergeRequestsEnabledInput" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.property.withMergeRequestsEnabledInput"></a>

```java
public java.lang.Object getWithMergeRequestsEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `withProgrammingLanguageInput`<sup>Optional</sup> <a name="withProgrammingLanguageInput" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.property.withProgrammingLanguageInput"></a>

```java
public java.lang.String getWithProgrammingLanguageInput();
```

- *Type:* java.lang.String

---

##### `withSharedInput`<sup>Optional</sup> <a name="withSharedInput" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.property.withSharedInput"></a>

```java
public java.lang.Object getWithSharedInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `archived`<sup>Required</sup> <a name="archived" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.property.archived"></a>

```java
public java.lang.Object getArchived();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `groupId`<sup>Required</sup> <a name="groupId" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.property.groupId"></a>

```java
public java.lang.Number getGroupId();
```

- *Type:* java.lang.Number

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `includeSubgroups`<sup>Required</sup> <a name="includeSubgroups" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.property.includeSubgroups"></a>

```java
public java.lang.Object getIncludeSubgroups();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `maxQueryablePages`<sup>Required</sup> <a name="maxQueryablePages" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.property.maxQueryablePages"></a>

```java
public java.lang.Number getMaxQueryablePages();
```

- *Type:* java.lang.Number

---

##### `membership`<sup>Required</sup> <a name="membership" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.property.membership"></a>

```java
public java.lang.Object getMembership();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `minAccessLevel`<sup>Required</sup> <a name="minAccessLevel" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.property.minAccessLevel"></a>

```java
public java.lang.Number getMinAccessLevel();
```

- *Type:* java.lang.Number

---

##### `orderBy`<sup>Required</sup> <a name="orderBy" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.property.orderBy"></a>

```java
public java.lang.String getOrderBy();
```

- *Type:* java.lang.String

---

##### `owned`<sup>Required</sup> <a name="owned" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.property.owned"></a>

```java
public java.lang.Object getOwned();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `page`<sup>Required</sup> <a name="page" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.property.page"></a>

```java
public java.lang.Number getPage();
```

- *Type:* java.lang.Number

---

##### `perPage`<sup>Required</sup> <a name="perPage" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.property.perPage"></a>

```java
public java.lang.Number getPerPage();
```

- *Type:* java.lang.Number

---

##### `search`<sup>Required</sup> <a name="search" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.property.search"></a>

```java
public java.lang.String getSearch();
```

- *Type:* java.lang.String

---

##### `simple`<sup>Required</sup> <a name="simple" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.property.simple"></a>

```java
public java.lang.Object getSimple();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `sort`<sup>Required</sup> <a name="sort" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.property.sort"></a>

```java
public java.lang.String getSort();
```

- *Type:* java.lang.String

---

##### `starred`<sup>Required</sup> <a name="starred" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.property.starred"></a>

```java
public java.lang.Object getStarred();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `statistics`<sup>Required</sup> <a name="statistics" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.property.statistics"></a>

```java
public java.lang.Object getStatistics();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `visibility`<sup>Required</sup> <a name="visibility" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.property.visibility"></a>

```java
public java.lang.String getVisibility();
```

- *Type:* java.lang.String

---

##### `withCustomAttributes`<sup>Required</sup> <a name="withCustomAttributes" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.property.withCustomAttributes"></a>

```java
public java.lang.Object getWithCustomAttributes();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `withIssuesEnabled`<sup>Required</sup> <a name="withIssuesEnabled" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.property.withIssuesEnabled"></a>

```java
public java.lang.Object getWithIssuesEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `withMergeRequestsEnabled`<sup>Required</sup> <a name="withMergeRequestsEnabled" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.property.withMergeRequestsEnabled"></a>

```java
public java.lang.Object getWithMergeRequestsEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `withProgrammingLanguage`<sup>Required</sup> <a name="withProgrammingLanguage" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.property.withProgrammingLanguage"></a>

```java
public java.lang.String getWithProgrammingLanguage();
```

- *Type:* java.lang.String

---

##### `withShared`<sup>Required</sup> <a name="withShared" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.property.withShared"></a>

```java
public java.lang.Object getWithShared();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataGitlabProjectsConfig <a name="DataGitlabProjectsConfig" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.gitlab.data_gitlab_projects.DataGitlabProjectsConfig;

DataGitlabProjectsConfig.builder()
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
//  .archived(java.lang.Boolean)
//  .archived(IResolvable)
//  .groupId(java.lang.Number)
//  .id(java.lang.String)
//  .includeSubgroups(java.lang.Boolean)
//  .includeSubgroups(IResolvable)
//  .maxQueryablePages(java.lang.Number)
//  .membership(java.lang.Boolean)
//  .membership(IResolvable)
//  .minAccessLevel(java.lang.Number)
//  .orderBy(java.lang.String)
//  .owned(java.lang.Boolean)
//  .owned(IResolvable)
//  .page(java.lang.Number)
//  .perPage(java.lang.Number)
//  .search(java.lang.String)
//  .simple(java.lang.Boolean)
//  .simple(IResolvable)
//  .sort(java.lang.String)
//  .starred(java.lang.Boolean)
//  .starred(IResolvable)
//  .statistics(java.lang.Boolean)
//  .statistics(IResolvable)
//  .visibility(java.lang.String)
//  .withCustomAttributes(java.lang.Boolean)
//  .withCustomAttributes(IResolvable)
//  .withIssuesEnabled(java.lang.Boolean)
//  .withIssuesEnabled(IResolvable)
//  .withMergeRequestsEnabled(java.lang.Boolean)
//  .withMergeRequestsEnabled(IResolvable)
//  .withProgrammingLanguage(java.lang.String)
//  .withShared(java.lang.Boolean)
//  .withShared(IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsConfig.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsConfig.property.archived">archived</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Limit by archived status. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsConfig.property.groupId">groupId</a></code> | <code>java.lang.Number</code> | The ID of the group owned by the authenticated user to look projects for within. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/gitlab/d/projects#id DataGitlabProjects#id}. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsConfig.property.includeSubgroups">includeSubgroups</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Include projects in subgroups of this group. Default is `false`. Needs `group_id`. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsConfig.property.maxQueryablePages">maxQueryablePages</a></code> | <code>java.lang.Number</code> | The maximum number of project results pages that may be queried. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsConfig.property.membership">membership</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Limit by projects that the current user is a member of. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsConfig.property.minAccessLevel">minAccessLevel</a></code> | <code>java.lang.Number</code> | Limit to projects where current user has at least this access level, refer to the [official documentation](https://docs.gitlab.com/ee/api/members.html) for values. Cannot be used with `group_id`. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsConfig.property.orderBy">orderBy</a></code> | <code>java.lang.String</code> | Return projects ordered ordered by: `id`, `name`, `path`, `created_at`, `updated_at`, `last_activity_at`, `similarity`, `repository_size`, `storage_size`, `packages_size`, `wiki_size`. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsConfig.property.owned">owned</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Limit by projects owned by the current user. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsConfig.property.page">page</a></code> | <code>java.lang.Number</code> | The first page to begin the query on. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsConfig.property.perPage">perPage</a></code> | <code>java.lang.Number</code> | The number of results to return per page. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsConfig.property.search">search</a></code> | <code>java.lang.String</code> | Return list of authorized projects matching the search criteria. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsConfig.property.simple">simple</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Return only the ID, URL, name, and path of each project. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsConfig.property.sort">sort</a></code> | <code>java.lang.String</code> | Return projects sorted in `asc` or `desc` order. Default is `desc`. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsConfig.property.starred">starred</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Limit by projects starred by the current user. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsConfig.property.statistics">statistics</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Include project statistics. Cannot be used with `group_id`. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsConfig.property.visibility">visibility</a></code> | <code>java.lang.String</code> | Limit by visibility `public`, `internal`, or `private`. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsConfig.property.withCustomAttributes">withCustomAttributes</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Include custom attributes in response _(admins only)_. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsConfig.property.withIssuesEnabled">withIssuesEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Limit by projects with issues feature enabled. Default is `false`. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsConfig.property.withMergeRequestsEnabled">withMergeRequestsEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Limit by projects with merge requests feature enabled. Default is `false`. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsConfig.property.withProgrammingLanguage">withProgrammingLanguage</a></code> | <code>java.lang.String</code> | Limit by projects which use the given programming language. Cannot be used with `group_id`. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsConfig.property.withShared">withShared</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Include projects shared to this group. Default is `true`. Needs `group_id`. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsConfig.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `archived`<sup>Optional</sup> <a name="archived" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsConfig.property.archived"></a>

```java
public java.lang.Object getArchived();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Limit by archived status.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/gitlab/d/projects#archived DataGitlabProjects#archived}

---

##### `groupId`<sup>Optional</sup> <a name="groupId" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsConfig.property.groupId"></a>

```java
public java.lang.Number getGroupId();
```

- *Type:* java.lang.Number

The ID of the group owned by the authenticated user to look projects for within.

Cannot be used with `min_access_level`, `with_programming_language` or `statistics`.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/gitlab/d/projects#group_id DataGitlabProjects#group_id}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/gitlab/d/projects#id DataGitlabProjects#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `includeSubgroups`<sup>Optional</sup> <a name="includeSubgroups" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsConfig.property.includeSubgroups"></a>

```java
public java.lang.Object getIncludeSubgroups();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Include projects in subgroups of this group. Default is `false`. Needs `group_id`.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/gitlab/d/projects#include_subgroups DataGitlabProjects#include_subgroups}

---

##### `maxQueryablePages`<sup>Optional</sup> <a name="maxQueryablePages" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsConfig.property.maxQueryablePages"></a>

```java
public java.lang.Number getMaxQueryablePages();
```

- *Type:* java.lang.Number

The maximum number of project results pages that may be queried.

Prevents overloading your Gitlab instance in case of a misconfiguration.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/gitlab/d/projects#max_queryable_pages DataGitlabProjects#max_queryable_pages}

---

##### `membership`<sup>Optional</sup> <a name="membership" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsConfig.property.membership"></a>

```java
public java.lang.Object getMembership();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Limit by projects that the current user is a member of.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/gitlab/d/projects#membership DataGitlabProjects#membership}

---

##### `minAccessLevel`<sup>Optional</sup> <a name="minAccessLevel" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsConfig.property.minAccessLevel"></a>

```java
public java.lang.Number getMinAccessLevel();
```

- *Type:* java.lang.Number

Limit to projects where current user has at least this access level, refer to the [official documentation](https://docs.gitlab.com/ee/api/members.html) for values. Cannot be used with `group_id`.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/gitlab/d/projects#min_access_level DataGitlabProjects#min_access_level}

---

##### `orderBy`<sup>Optional</sup> <a name="orderBy" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsConfig.property.orderBy"></a>

```java
public java.lang.String getOrderBy();
```

- *Type:* java.lang.String

Return projects ordered ordered by: `id`, `name`, `path`, `created_at`, `updated_at`, `last_activity_at`, `similarity`, `repository_size`, `storage_size`, `packages_size`, `wiki_size`.

Some values or only available in certain circumstances. See [upstream docs](https://docs.gitlab.com/ee/api/projects.html#list-all-projects) for details.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/gitlab/d/projects#order_by DataGitlabProjects#order_by}

---

##### `owned`<sup>Optional</sup> <a name="owned" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsConfig.property.owned"></a>

```java
public java.lang.Object getOwned();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Limit by projects owned by the current user.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/gitlab/d/projects#owned DataGitlabProjects#owned}

---

##### `page`<sup>Optional</sup> <a name="page" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsConfig.property.page"></a>

```java
public java.lang.Number getPage();
```

- *Type:* java.lang.Number

The first page to begin the query on.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/gitlab/d/projects#page DataGitlabProjects#page}

---

##### `perPage`<sup>Optional</sup> <a name="perPage" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsConfig.property.perPage"></a>

```java
public java.lang.Number getPerPage();
```

- *Type:* java.lang.Number

The number of results to return per page.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/gitlab/d/projects#per_page DataGitlabProjects#per_page}

---

##### `search`<sup>Optional</sup> <a name="search" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsConfig.property.search"></a>

```java
public java.lang.String getSearch();
```

- *Type:* java.lang.String

Return list of authorized projects matching the search criteria.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/gitlab/d/projects#search DataGitlabProjects#search}

---

##### `simple`<sup>Optional</sup> <a name="simple" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsConfig.property.simple"></a>

```java
public java.lang.Object getSimple();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Return only the ID, URL, name, and path of each project.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/gitlab/d/projects#simple DataGitlabProjects#simple}

---

##### `sort`<sup>Optional</sup> <a name="sort" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsConfig.property.sort"></a>

```java
public java.lang.String getSort();
```

- *Type:* java.lang.String

Return projects sorted in `asc` or `desc` order. Default is `desc`.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/gitlab/d/projects#sort DataGitlabProjects#sort}

---

##### `starred`<sup>Optional</sup> <a name="starred" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsConfig.property.starred"></a>

```java
public java.lang.Object getStarred();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Limit by projects starred by the current user.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/gitlab/d/projects#starred DataGitlabProjects#starred}

---

##### `statistics`<sup>Optional</sup> <a name="statistics" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsConfig.property.statistics"></a>

```java
public java.lang.Object getStatistics();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Include project statistics. Cannot be used with `group_id`.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/gitlab/d/projects#statistics DataGitlabProjects#statistics}

---

##### `visibility`<sup>Optional</sup> <a name="visibility" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsConfig.property.visibility"></a>

```java
public java.lang.String getVisibility();
```

- *Type:* java.lang.String

Limit by visibility `public`, `internal`, or `private`.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/gitlab/d/projects#visibility DataGitlabProjects#visibility}

---

##### `withCustomAttributes`<sup>Optional</sup> <a name="withCustomAttributes" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsConfig.property.withCustomAttributes"></a>

```java
public java.lang.Object getWithCustomAttributes();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Include custom attributes in response _(admins only)_.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/gitlab/d/projects#with_custom_attributes DataGitlabProjects#with_custom_attributes}

---

##### `withIssuesEnabled`<sup>Optional</sup> <a name="withIssuesEnabled" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsConfig.property.withIssuesEnabled"></a>

```java
public java.lang.Object getWithIssuesEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Limit by projects with issues feature enabled. Default is `false`.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/gitlab/d/projects#with_issues_enabled DataGitlabProjects#with_issues_enabled}

---

##### `withMergeRequestsEnabled`<sup>Optional</sup> <a name="withMergeRequestsEnabled" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsConfig.property.withMergeRequestsEnabled"></a>

```java
public java.lang.Object getWithMergeRequestsEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Limit by projects with merge requests feature enabled. Default is `false`.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/gitlab/d/projects#with_merge_requests_enabled DataGitlabProjects#with_merge_requests_enabled}

---

##### `withProgrammingLanguage`<sup>Optional</sup> <a name="withProgrammingLanguage" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsConfig.property.withProgrammingLanguage"></a>

```java
public java.lang.String getWithProgrammingLanguage();
```

- *Type:* java.lang.String

Limit by projects which use the given programming language. Cannot be used with `group_id`.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/gitlab/d/projects#with_programming_language DataGitlabProjects#with_programming_language}

---

##### `withShared`<sup>Optional</sup> <a name="withShared" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsConfig.property.withShared"></a>

```java
public java.lang.Object getWithShared();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Include projects shared to this group. Default is `true`. Needs `group_id`.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/gitlab/d/projects#with_shared DataGitlabProjects#with_shared}

---

### DataGitlabProjectsProjects <a name="DataGitlabProjectsProjects" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjects"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjects.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.gitlab.data_gitlab_projects.DataGitlabProjectsProjects;

DataGitlabProjectsProjects.builder()
    .build();
```


### DataGitlabProjectsProjectsContainerExpirationPolicy <a name="DataGitlabProjectsProjectsContainerExpirationPolicy" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsContainerExpirationPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsContainerExpirationPolicy.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.gitlab.data_gitlab_projects.DataGitlabProjectsProjectsContainerExpirationPolicy;

DataGitlabProjectsProjectsContainerExpirationPolicy.builder()
    .build();
```


### DataGitlabProjectsProjectsForkedFromProject <a name="DataGitlabProjectsProjectsForkedFromProject" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsForkedFromProject"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsForkedFromProject.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.gitlab.data_gitlab_projects.DataGitlabProjectsProjectsForkedFromProject;

DataGitlabProjectsProjectsForkedFromProject.builder()
    .build();
```


### DataGitlabProjectsProjectsNamespace <a name="DataGitlabProjectsProjectsNamespace" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsNamespace"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsNamespace.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.gitlab.data_gitlab_projects.DataGitlabProjectsProjectsNamespace;

DataGitlabProjectsProjectsNamespace.builder()
    .build();
```


### DataGitlabProjectsProjectsOwner <a name="DataGitlabProjectsProjectsOwner" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOwner"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOwner.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.gitlab.data_gitlab_projects.DataGitlabProjectsProjectsOwner;

DataGitlabProjectsProjectsOwner.builder()
    .build();
```


### DataGitlabProjectsProjectsPermissions <a name="DataGitlabProjectsProjectsPermissions" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsPermissions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsPermissions.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.gitlab.data_gitlab_projects.DataGitlabProjectsProjectsPermissions;

DataGitlabProjectsProjectsPermissions.builder()
    .build();
```


### DataGitlabProjectsProjectsSharedWithGroups <a name="DataGitlabProjectsProjectsSharedWithGroups" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsSharedWithGroups"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsSharedWithGroups.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.gitlab.data_gitlab_projects.DataGitlabProjectsProjectsSharedWithGroups;

DataGitlabProjectsProjectsSharedWithGroups.builder()
    .build();
```


## Classes <a name="Classes" id="Classes"></a>

### DataGitlabProjectsProjectsContainerExpirationPolicyList <a name="DataGitlabProjectsProjectsContainerExpirationPolicyList" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsContainerExpirationPolicyList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsContainerExpirationPolicyList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.gitlab.data_gitlab_projects.DataGitlabProjectsProjectsContainerExpirationPolicyList;

new DataGitlabProjectsProjectsContainerExpirationPolicyList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsContainerExpirationPolicyList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsContainerExpirationPolicyList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsContainerExpirationPolicyList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsContainerExpirationPolicyList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsContainerExpirationPolicyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsContainerExpirationPolicyList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsContainerExpirationPolicyList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsContainerExpirationPolicyList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsContainerExpirationPolicyList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsContainerExpirationPolicyList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsContainerExpirationPolicyList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsContainerExpirationPolicyList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsContainerExpirationPolicyList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsContainerExpirationPolicyList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsContainerExpirationPolicyList.get"></a>

```java
public DataGitlabProjectsProjectsContainerExpirationPolicyOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsContainerExpirationPolicyList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsContainerExpirationPolicyList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsContainerExpirationPolicyList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsContainerExpirationPolicyList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsContainerExpirationPolicyList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataGitlabProjectsProjectsContainerExpirationPolicyOutputReference <a name="DataGitlabProjectsProjectsContainerExpirationPolicyOutputReference" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsContainerExpirationPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsContainerExpirationPolicyOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.gitlab.data_gitlab_projects.DataGitlabProjectsProjectsContainerExpirationPolicyOutputReference;

new DataGitlabProjectsProjectsContainerExpirationPolicyOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsContainerExpirationPolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsContainerExpirationPolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsContainerExpirationPolicyOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsContainerExpirationPolicyOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsContainerExpirationPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsContainerExpirationPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsContainerExpirationPolicyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsContainerExpirationPolicyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsContainerExpirationPolicyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsContainerExpirationPolicyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsContainerExpirationPolicyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsContainerExpirationPolicyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsContainerExpirationPolicyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsContainerExpirationPolicyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsContainerExpirationPolicyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsContainerExpirationPolicyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsContainerExpirationPolicyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsContainerExpirationPolicyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsContainerExpirationPolicyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsContainerExpirationPolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsContainerExpirationPolicyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsContainerExpirationPolicyOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsContainerExpirationPolicyOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsContainerExpirationPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsContainerExpirationPolicyOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsContainerExpirationPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsContainerExpirationPolicyOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsContainerExpirationPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsContainerExpirationPolicyOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsContainerExpirationPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsContainerExpirationPolicyOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsContainerExpirationPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsContainerExpirationPolicyOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsContainerExpirationPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsContainerExpirationPolicyOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsContainerExpirationPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsContainerExpirationPolicyOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsContainerExpirationPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsContainerExpirationPolicyOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsContainerExpirationPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsContainerExpirationPolicyOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsContainerExpirationPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsContainerExpirationPolicyOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsContainerExpirationPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsContainerExpirationPolicyOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsContainerExpirationPolicyOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsContainerExpirationPolicyOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsContainerExpirationPolicyOutputReference.property.cadence">cadence</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsContainerExpirationPolicyOutputReference.property.enabled">enabled</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsContainerExpirationPolicyOutputReference.property.keepN">keepN</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsContainerExpirationPolicyOutputReference.property.nameRegexDelete">nameRegexDelete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsContainerExpirationPolicyOutputReference.property.nameRegexKeep">nameRegexKeep</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsContainerExpirationPolicyOutputReference.property.nextRunAt">nextRunAt</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsContainerExpirationPolicyOutputReference.property.olderThan">olderThan</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsContainerExpirationPolicyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsContainerExpirationPolicy">DataGitlabProjectsProjectsContainerExpirationPolicy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsContainerExpirationPolicyOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsContainerExpirationPolicyOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `cadence`<sup>Required</sup> <a name="cadence" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsContainerExpirationPolicyOutputReference.property.cadence"></a>

```java
public java.lang.String getCadence();
```

- *Type:* java.lang.String

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsContainerExpirationPolicyOutputReference.property.enabled"></a>

```java
public IResolvable getEnabled();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `keepN`<sup>Required</sup> <a name="keepN" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsContainerExpirationPolicyOutputReference.property.keepN"></a>

```java
public java.lang.Number getKeepN();
```

- *Type:* java.lang.Number

---

##### `nameRegexDelete`<sup>Required</sup> <a name="nameRegexDelete" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsContainerExpirationPolicyOutputReference.property.nameRegexDelete"></a>

```java
public java.lang.String getNameRegexDelete();
```

- *Type:* java.lang.String

---

##### `nameRegexKeep`<sup>Required</sup> <a name="nameRegexKeep" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsContainerExpirationPolicyOutputReference.property.nameRegexKeep"></a>

```java
public java.lang.String getNameRegexKeep();
```

- *Type:* java.lang.String

---

##### `nextRunAt`<sup>Required</sup> <a name="nextRunAt" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsContainerExpirationPolicyOutputReference.property.nextRunAt"></a>

```java
public java.lang.String getNextRunAt();
```

- *Type:* java.lang.String

---

##### `olderThan`<sup>Required</sup> <a name="olderThan" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsContainerExpirationPolicyOutputReference.property.olderThan"></a>

```java
public java.lang.String getOlderThan();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsContainerExpirationPolicyOutputReference.property.internalValue"></a>

```java
public DataGitlabProjectsProjectsContainerExpirationPolicy getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsContainerExpirationPolicy">DataGitlabProjectsProjectsContainerExpirationPolicy</a>

---


### DataGitlabProjectsProjectsForkedFromProjectList <a name="DataGitlabProjectsProjectsForkedFromProjectList" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsForkedFromProjectList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsForkedFromProjectList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.gitlab.data_gitlab_projects.DataGitlabProjectsProjectsForkedFromProjectList;

new DataGitlabProjectsProjectsForkedFromProjectList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsForkedFromProjectList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsForkedFromProjectList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsForkedFromProjectList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsForkedFromProjectList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsForkedFromProjectList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsForkedFromProjectList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsForkedFromProjectList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsForkedFromProjectList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsForkedFromProjectList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsForkedFromProjectList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsForkedFromProjectList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsForkedFromProjectList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsForkedFromProjectList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsForkedFromProjectList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsForkedFromProjectList.get"></a>

```java
public DataGitlabProjectsProjectsForkedFromProjectOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsForkedFromProjectList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsForkedFromProjectList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsForkedFromProjectList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsForkedFromProjectList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsForkedFromProjectList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataGitlabProjectsProjectsForkedFromProjectOutputReference <a name="DataGitlabProjectsProjectsForkedFromProjectOutputReference" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsForkedFromProjectOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsForkedFromProjectOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.gitlab.data_gitlab_projects.DataGitlabProjectsProjectsForkedFromProjectOutputReference;

new DataGitlabProjectsProjectsForkedFromProjectOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsForkedFromProjectOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsForkedFromProjectOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsForkedFromProjectOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsForkedFromProjectOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsForkedFromProjectOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsForkedFromProjectOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsForkedFromProjectOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsForkedFromProjectOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsForkedFromProjectOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsForkedFromProjectOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsForkedFromProjectOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsForkedFromProjectOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsForkedFromProjectOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsForkedFromProjectOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsForkedFromProjectOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsForkedFromProjectOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsForkedFromProjectOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsForkedFromProjectOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsForkedFromProjectOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsForkedFromProjectOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsForkedFromProjectOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsForkedFromProjectOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsForkedFromProjectOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsForkedFromProjectOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsForkedFromProjectOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsForkedFromProjectOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsForkedFromProjectOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsForkedFromProjectOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsForkedFromProjectOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsForkedFromProjectOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsForkedFromProjectOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsForkedFromProjectOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsForkedFromProjectOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsForkedFromProjectOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsForkedFromProjectOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsForkedFromProjectOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsForkedFromProjectOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsForkedFromProjectOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsForkedFromProjectOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsForkedFromProjectOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsForkedFromProjectOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsForkedFromProjectOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsForkedFromProjectOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsForkedFromProjectOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsForkedFromProjectOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsForkedFromProjectOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsForkedFromProjectOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsForkedFromProjectOutputReference.property.httpUrlToRepo">httpUrlToRepo</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsForkedFromProjectOutputReference.property.id">id</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsForkedFromProjectOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsForkedFromProjectOutputReference.property.nameWithNamespace">nameWithNamespace</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsForkedFromProjectOutputReference.property.path">path</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsForkedFromProjectOutputReference.property.pathWithNamespace">pathWithNamespace</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsForkedFromProjectOutputReference.property.webUrl">webUrl</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsForkedFromProjectOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsForkedFromProject">DataGitlabProjectsProjectsForkedFromProject</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsForkedFromProjectOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsForkedFromProjectOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `httpUrlToRepo`<sup>Required</sup> <a name="httpUrlToRepo" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsForkedFromProjectOutputReference.property.httpUrlToRepo"></a>

```java
public java.lang.String getHttpUrlToRepo();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsForkedFromProjectOutputReference.property.id"></a>

```java
public java.lang.Number getId();
```

- *Type:* java.lang.Number

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsForkedFromProjectOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `nameWithNamespace`<sup>Required</sup> <a name="nameWithNamespace" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsForkedFromProjectOutputReference.property.nameWithNamespace"></a>

```java
public java.lang.String getNameWithNamespace();
```

- *Type:* java.lang.String

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsForkedFromProjectOutputReference.property.path"></a>

```java
public java.lang.String getPath();
```

- *Type:* java.lang.String

---

##### `pathWithNamespace`<sup>Required</sup> <a name="pathWithNamespace" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsForkedFromProjectOutputReference.property.pathWithNamespace"></a>

```java
public java.lang.String getPathWithNamespace();
```

- *Type:* java.lang.String

---

##### `webUrl`<sup>Required</sup> <a name="webUrl" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsForkedFromProjectOutputReference.property.webUrl"></a>

```java
public java.lang.String getWebUrl();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsForkedFromProjectOutputReference.property.internalValue"></a>

```java
public DataGitlabProjectsProjectsForkedFromProject getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsForkedFromProject">DataGitlabProjectsProjectsForkedFromProject</a>

---


### DataGitlabProjectsProjectsList <a name="DataGitlabProjectsProjectsList" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.gitlab.data_gitlab_projects.DataGitlabProjectsProjectsList;

new DataGitlabProjectsProjectsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsList.get"></a>

```java
public DataGitlabProjectsProjectsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataGitlabProjectsProjectsNamespaceList <a name="DataGitlabProjectsProjectsNamespaceList" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsNamespaceList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsNamespaceList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.gitlab.data_gitlab_projects.DataGitlabProjectsProjectsNamespaceList;

new DataGitlabProjectsProjectsNamespaceList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsNamespaceList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsNamespaceList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsNamespaceList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsNamespaceList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsNamespaceList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsNamespaceList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsNamespaceList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsNamespaceList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsNamespaceList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsNamespaceList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsNamespaceList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsNamespaceList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsNamespaceList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsNamespaceList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsNamespaceList.get"></a>

```java
public DataGitlabProjectsProjectsNamespaceOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsNamespaceList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsNamespaceList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsNamespaceList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsNamespaceList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsNamespaceList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataGitlabProjectsProjectsNamespaceOutputReference <a name="DataGitlabProjectsProjectsNamespaceOutputReference" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsNamespaceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsNamespaceOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.gitlab.data_gitlab_projects.DataGitlabProjectsProjectsNamespaceOutputReference;

new DataGitlabProjectsProjectsNamespaceOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsNamespaceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsNamespaceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsNamespaceOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsNamespaceOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsNamespaceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsNamespaceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsNamespaceOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsNamespaceOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsNamespaceOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsNamespaceOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsNamespaceOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsNamespaceOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsNamespaceOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsNamespaceOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsNamespaceOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsNamespaceOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsNamespaceOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsNamespaceOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsNamespaceOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsNamespaceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsNamespaceOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsNamespaceOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsNamespaceOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsNamespaceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsNamespaceOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsNamespaceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsNamespaceOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsNamespaceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsNamespaceOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsNamespaceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsNamespaceOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsNamespaceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsNamespaceOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsNamespaceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsNamespaceOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsNamespaceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsNamespaceOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsNamespaceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsNamespaceOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsNamespaceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsNamespaceOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsNamespaceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsNamespaceOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsNamespaceOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsNamespaceOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsNamespaceOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsNamespaceOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsNamespaceOutputReference.property.fullPath">fullPath</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsNamespaceOutputReference.property.id">id</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsNamespaceOutputReference.property.kind">kind</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsNamespaceOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsNamespaceOutputReference.property.path">path</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsNamespaceOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsNamespace">DataGitlabProjectsProjectsNamespace</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsNamespaceOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsNamespaceOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `fullPath`<sup>Required</sup> <a name="fullPath" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsNamespaceOutputReference.property.fullPath"></a>

```java
public java.lang.String getFullPath();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsNamespaceOutputReference.property.id"></a>

```java
public java.lang.Number getId();
```

- *Type:* java.lang.Number

---

##### `kind`<sup>Required</sup> <a name="kind" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsNamespaceOutputReference.property.kind"></a>

```java
public java.lang.String getKind();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsNamespaceOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsNamespaceOutputReference.property.path"></a>

```java
public java.lang.String getPath();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsNamespaceOutputReference.property.internalValue"></a>

```java
public DataGitlabProjectsProjectsNamespace getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsNamespace">DataGitlabProjectsProjectsNamespace</a>

---


### DataGitlabProjectsProjectsOutputReference <a name="DataGitlabProjectsProjectsOutputReference" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.gitlab.data_gitlab_projects.DataGitlabProjectsProjectsOutputReference;

new DataGitlabProjectsProjectsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.property.allowMergeOnSkippedPipeline">allowMergeOnSkippedPipeline</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.property.analyticsAccessLevel">analyticsAccessLevel</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.property.approvalsBeforeMerge">approvalsBeforeMerge</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.property.archived">archived</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.property.autoCancelPendingPipelines">autoCancelPendingPipelines</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.property.autocloseReferencedIssues">autocloseReferencedIssues</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.property.autoDevopsDeployStrategy">autoDevopsDeployStrategy</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.property.autoDevopsEnabled">autoDevopsEnabled</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.property.avatarUrl">avatarUrl</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.property.buildCoverageRegex">buildCoverageRegex</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.property.buildGitStrategy">buildGitStrategy</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.property.buildsAccessLevel">buildsAccessLevel</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.property.buildTimeout">buildTimeout</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.property.ciConfigPath">ciConfigPath</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.property.ciDefaultGitDepth">ciDefaultGitDepth</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.property.ciForwardDeploymentEnabled">ciForwardDeploymentEnabled</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.property.containerExpirationPolicy">containerExpirationPolicy</a></code> | <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsContainerExpirationPolicyList">DataGitlabProjectsProjectsContainerExpirationPolicyList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.property.containerRegistryAccessLevel">containerRegistryAccessLevel</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.property.containerRegistryEnabled">containerRegistryEnabled</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.property.createdAt">createdAt</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.property.creatorId">creatorId</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.property.customAttributes">customAttributes</a></code> | <code>com.hashicorp.cdktf.StringMapList</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.property.defaultBranch">defaultBranch</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.property.emailsDisabled">emailsDisabled</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.property.externalAuthorizationClassificationLabel">externalAuthorizationClassificationLabel</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.property.forkedFromProject">forkedFromProject</a></code> | <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsForkedFromProjectList">DataGitlabProjectsProjectsForkedFromProjectList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.property.forkingAccessLevel">forkingAccessLevel</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.property.forksCount">forksCount</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.property.httpUrlToRepo">httpUrlToRepo</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.property.id">id</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.property.importError">importError</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.property.importStatus">importStatus</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.property.issuesAccessLevel">issuesAccessLevel</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.property.issuesEnabled">issuesEnabled</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.property.jobsEnabled">jobsEnabled</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.property.lastActivityAt">lastActivityAt</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.property.lfsEnabled">lfsEnabled</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.property.links">links</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.property.mergeCommitTemplate">mergeCommitTemplate</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.property.mergeMethod">mergeMethod</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.property.mergePipelinesEnabled">mergePipelinesEnabled</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.property.mergeRequestsAccessLevel">mergeRequestsAccessLevel</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.property.mergeRequestsEnabled">mergeRequestsEnabled</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.property.mergeTrainsEnabled">mergeTrainsEnabled</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.property.mirror">mirror</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.property.mirrorOverwritesDivergedBranches">mirrorOverwritesDivergedBranches</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.property.mirrorTriggerBuilds">mirrorTriggerBuilds</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.property.mirrorUserId">mirrorUserId</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.property.namespace">namespace</a></code> | <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsNamespaceList">DataGitlabProjectsProjectsNamespaceList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.property.nameWithNamespace">nameWithNamespace</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.property.onlyAllowMergeIfAllDiscussionsAreResolved">onlyAllowMergeIfAllDiscussionsAreResolved</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.property.onlyAllowMergeIfPipelineSucceeds">onlyAllowMergeIfPipelineSucceeds</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.property.onlyMirrorProtectedBranches">onlyMirrorProtectedBranches</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.property.openIssuesCount">openIssuesCount</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.property.operationsAccessLevel">operationsAccessLevel</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.property.owner">owner</a></code> | <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOwnerList">DataGitlabProjectsProjectsOwnerList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.property.packagesEnabled">packagesEnabled</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.property.path">path</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.property.pathWithNamespace">pathWithNamespace</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.property.permissions">permissions</a></code> | <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsPermissionsList">DataGitlabProjectsProjectsPermissionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.property.public">public</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.property.publicBuilds">publicBuilds</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.property.readmeUrl">readmeUrl</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.property.repositoryAccessLevel">repositoryAccessLevel</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.property.repositoryStorage">repositoryStorage</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.property.requestAccessEnabled">requestAccessEnabled</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.property.requirementsAccessLevel">requirementsAccessLevel</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.property.resolveOutdatedDiffDiscussions">resolveOutdatedDiffDiscussions</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.property.restrictUserDefinedVariables">restrictUserDefinedVariables</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.property.runnersToken">runnersToken</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.property.securityAndComplianceAccessLevel">securityAndComplianceAccessLevel</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.property.sharedRunnersEnabled">sharedRunnersEnabled</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.property.sharedWithGroups">sharedWithGroups</a></code> | <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsSharedWithGroupsList">DataGitlabProjectsProjectsSharedWithGroupsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.property.snippetsAccessLevel">snippetsAccessLevel</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.property.snippetsEnabled">snippetsEnabled</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.property.squashCommitTemplate">squashCommitTemplate</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.property.sshUrlToRepo">sshUrlToRepo</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.property.starCount">starCount</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.property.statistics">statistics</a></code> | <code>com.hashicorp.cdktf.NumberMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.property.suggestionCommitMessage">suggestionCommitMessage</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.property.tagList">tagList</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.property.topics">topics</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.property.visibility">visibility</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.property.webUrl">webUrl</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.property.wikiAccessLevel">wikiAccessLevel</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.property.wikiEnabled">wikiEnabled</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjects">DataGitlabProjectsProjects</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `allowMergeOnSkippedPipeline`<sup>Required</sup> <a name="allowMergeOnSkippedPipeline" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.property.allowMergeOnSkippedPipeline"></a>

```java
public IResolvable getAllowMergeOnSkippedPipeline();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `analyticsAccessLevel`<sup>Required</sup> <a name="analyticsAccessLevel" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.property.analyticsAccessLevel"></a>

```java
public java.lang.String getAnalyticsAccessLevel();
```

- *Type:* java.lang.String

---

##### `approvalsBeforeMerge`<sup>Required</sup> <a name="approvalsBeforeMerge" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.property.approvalsBeforeMerge"></a>

```java
public java.lang.Number getApprovalsBeforeMerge();
```

- *Type:* java.lang.Number

---

##### `archived`<sup>Required</sup> <a name="archived" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.property.archived"></a>

```java
public IResolvable getArchived();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `autoCancelPendingPipelines`<sup>Required</sup> <a name="autoCancelPendingPipelines" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.property.autoCancelPendingPipelines"></a>

```java
public java.lang.String getAutoCancelPendingPipelines();
```

- *Type:* java.lang.String

---

##### `autocloseReferencedIssues`<sup>Required</sup> <a name="autocloseReferencedIssues" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.property.autocloseReferencedIssues"></a>

```java
public IResolvable getAutocloseReferencedIssues();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `autoDevopsDeployStrategy`<sup>Required</sup> <a name="autoDevopsDeployStrategy" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.property.autoDevopsDeployStrategy"></a>

```java
public java.lang.String getAutoDevopsDeployStrategy();
```

- *Type:* java.lang.String

---

##### `autoDevopsEnabled`<sup>Required</sup> <a name="autoDevopsEnabled" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.property.autoDevopsEnabled"></a>

```java
public IResolvable getAutoDevopsEnabled();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `avatarUrl`<sup>Required</sup> <a name="avatarUrl" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.property.avatarUrl"></a>

```java
public java.lang.String getAvatarUrl();
```

- *Type:* java.lang.String

---

##### `buildCoverageRegex`<sup>Required</sup> <a name="buildCoverageRegex" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.property.buildCoverageRegex"></a>

```java
public java.lang.String getBuildCoverageRegex();
```

- *Type:* java.lang.String

---

##### `buildGitStrategy`<sup>Required</sup> <a name="buildGitStrategy" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.property.buildGitStrategy"></a>

```java
public java.lang.String getBuildGitStrategy();
```

- *Type:* java.lang.String

---

##### `buildsAccessLevel`<sup>Required</sup> <a name="buildsAccessLevel" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.property.buildsAccessLevel"></a>

```java
public java.lang.String getBuildsAccessLevel();
```

- *Type:* java.lang.String

---

##### `buildTimeout`<sup>Required</sup> <a name="buildTimeout" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.property.buildTimeout"></a>

```java
public java.lang.Number getBuildTimeout();
```

- *Type:* java.lang.Number

---

##### `ciConfigPath`<sup>Required</sup> <a name="ciConfigPath" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.property.ciConfigPath"></a>

```java
public java.lang.String getCiConfigPath();
```

- *Type:* java.lang.String

---

##### `ciDefaultGitDepth`<sup>Required</sup> <a name="ciDefaultGitDepth" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.property.ciDefaultGitDepth"></a>

```java
public java.lang.Number getCiDefaultGitDepth();
```

- *Type:* java.lang.Number

---

##### `ciForwardDeploymentEnabled`<sup>Required</sup> <a name="ciForwardDeploymentEnabled" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.property.ciForwardDeploymentEnabled"></a>

```java
public IResolvable getCiForwardDeploymentEnabled();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `containerExpirationPolicy`<sup>Required</sup> <a name="containerExpirationPolicy" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.property.containerExpirationPolicy"></a>

```java
public DataGitlabProjectsProjectsContainerExpirationPolicyList getContainerExpirationPolicy();
```

- *Type:* <a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsContainerExpirationPolicyList">DataGitlabProjectsProjectsContainerExpirationPolicyList</a>

---

##### `containerRegistryAccessLevel`<sup>Required</sup> <a name="containerRegistryAccessLevel" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.property.containerRegistryAccessLevel"></a>

```java
public java.lang.String getContainerRegistryAccessLevel();
```

- *Type:* java.lang.String

---

##### `containerRegistryEnabled`<sup>Required</sup> <a name="containerRegistryEnabled" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.property.containerRegistryEnabled"></a>

```java
public IResolvable getContainerRegistryEnabled();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `createdAt`<sup>Required</sup> <a name="createdAt" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.property.createdAt"></a>

```java
public java.lang.String getCreatedAt();
```

- *Type:* java.lang.String

---

##### `creatorId`<sup>Required</sup> <a name="creatorId" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.property.creatorId"></a>

```java
public java.lang.Number getCreatorId();
```

- *Type:* java.lang.Number

---

##### `customAttributes`<sup>Required</sup> <a name="customAttributes" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.property.customAttributes"></a>

```java
public StringMapList getCustomAttributes();
```

- *Type:* com.hashicorp.cdktf.StringMapList

---

##### `defaultBranch`<sup>Required</sup> <a name="defaultBranch" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.property.defaultBranch"></a>

```java
public java.lang.String getDefaultBranch();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `emailsDisabled`<sup>Required</sup> <a name="emailsDisabled" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.property.emailsDisabled"></a>

```java
public IResolvable getEmailsDisabled();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `externalAuthorizationClassificationLabel`<sup>Required</sup> <a name="externalAuthorizationClassificationLabel" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.property.externalAuthorizationClassificationLabel"></a>

```java
public java.lang.String getExternalAuthorizationClassificationLabel();
```

- *Type:* java.lang.String

---

##### `forkedFromProject`<sup>Required</sup> <a name="forkedFromProject" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.property.forkedFromProject"></a>

```java
public DataGitlabProjectsProjectsForkedFromProjectList getForkedFromProject();
```

- *Type:* <a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsForkedFromProjectList">DataGitlabProjectsProjectsForkedFromProjectList</a>

---

##### `forkingAccessLevel`<sup>Required</sup> <a name="forkingAccessLevel" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.property.forkingAccessLevel"></a>

```java
public java.lang.String getForkingAccessLevel();
```

- *Type:* java.lang.String

---

##### `forksCount`<sup>Required</sup> <a name="forksCount" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.property.forksCount"></a>

```java
public java.lang.Number getForksCount();
```

- *Type:* java.lang.Number

---

##### `httpUrlToRepo`<sup>Required</sup> <a name="httpUrlToRepo" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.property.httpUrlToRepo"></a>

```java
public java.lang.String getHttpUrlToRepo();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.property.id"></a>

```java
public java.lang.Number getId();
```

- *Type:* java.lang.Number

---

##### `importError`<sup>Required</sup> <a name="importError" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.property.importError"></a>

```java
public java.lang.String getImportError();
```

- *Type:* java.lang.String

---

##### `importStatus`<sup>Required</sup> <a name="importStatus" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.property.importStatus"></a>

```java
public java.lang.String getImportStatus();
```

- *Type:* java.lang.String

---

##### `issuesAccessLevel`<sup>Required</sup> <a name="issuesAccessLevel" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.property.issuesAccessLevel"></a>

```java
public java.lang.String getIssuesAccessLevel();
```

- *Type:* java.lang.String

---

##### `issuesEnabled`<sup>Required</sup> <a name="issuesEnabled" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.property.issuesEnabled"></a>

```java
public IResolvable getIssuesEnabled();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `jobsEnabled`<sup>Required</sup> <a name="jobsEnabled" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.property.jobsEnabled"></a>

```java
public IResolvable getJobsEnabled();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `lastActivityAt`<sup>Required</sup> <a name="lastActivityAt" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.property.lastActivityAt"></a>

```java
public java.lang.String getLastActivityAt();
```

- *Type:* java.lang.String

---

##### `lfsEnabled`<sup>Required</sup> <a name="lfsEnabled" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.property.lfsEnabled"></a>

```java
public IResolvable getLfsEnabled();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `links`<sup>Required</sup> <a name="links" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.property.links"></a>

```java
public StringMap getLinks();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `mergeCommitTemplate`<sup>Required</sup> <a name="mergeCommitTemplate" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.property.mergeCommitTemplate"></a>

```java
public java.lang.String getMergeCommitTemplate();
```

- *Type:* java.lang.String

---

##### `mergeMethod`<sup>Required</sup> <a name="mergeMethod" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.property.mergeMethod"></a>

```java
public java.lang.String getMergeMethod();
```

- *Type:* java.lang.String

---

##### `mergePipelinesEnabled`<sup>Required</sup> <a name="mergePipelinesEnabled" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.property.mergePipelinesEnabled"></a>

```java
public IResolvable getMergePipelinesEnabled();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `mergeRequestsAccessLevel`<sup>Required</sup> <a name="mergeRequestsAccessLevel" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.property.mergeRequestsAccessLevel"></a>

```java
public java.lang.String getMergeRequestsAccessLevel();
```

- *Type:* java.lang.String

---

##### `mergeRequestsEnabled`<sup>Required</sup> <a name="mergeRequestsEnabled" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.property.mergeRequestsEnabled"></a>

```java
public IResolvable getMergeRequestsEnabled();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `mergeTrainsEnabled`<sup>Required</sup> <a name="mergeTrainsEnabled" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.property.mergeTrainsEnabled"></a>

```java
public IResolvable getMergeTrainsEnabled();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `mirror`<sup>Required</sup> <a name="mirror" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.property.mirror"></a>

```java
public IResolvable getMirror();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `mirrorOverwritesDivergedBranches`<sup>Required</sup> <a name="mirrorOverwritesDivergedBranches" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.property.mirrorOverwritesDivergedBranches"></a>

```java
public IResolvable getMirrorOverwritesDivergedBranches();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `mirrorTriggerBuilds`<sup>Required</sup> <a name="mirrorTriggerBuilds" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.property.mirrorTriggerBuilds"></a>

```java
public IResolvable getMirrorTriggerBuilds();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `mirrorUserId`<sup>Required</sup> <a name="mirrorUserId" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.property.mirrorUserId"></a>

```java
public java.lang.Number getMirrorUserId();
```

- *Type:* java.lang.Number

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.property.namespace"></a>

```java
public DataGitlabProjectsProjectsNamespaceList getNamespace();
```

- *Type:* <a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsNamespaceList">DataGitlabProjectsProjectsNamespaceList</a>

---

##### `nameWithNamespace`<sup>Required</sup> <a name="nameWithNamespace" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.property.nameWithNamespace"></a>

```java
public java.lang.String getNameWithNamespace();
```

- *Type:* java.lang.String

---

##### `onlyAllowMergeIfAllDiscussionsAreResolved`<sup>Required</sup> <a name="onlyAllowMergeIfAllDiscussionsAreResolved" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.property.onlyAllowMergeIfAllDiscussionsAreResolved"></a>

```java
public IResolvable getOnlyAllowMergeIfAllDiscussionsAreResolved();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `onlyAllowMergeIfPipelineSucceeds`<sup>Required</sup> <a name="onlyAllowMergeIfPipelineSucceeds" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.property.onlyAllowMergeIfPipelineSucceeds"></a>

```java
public IResolvable getOnlyAllowMergeIfPipelineSucceeds();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `onlyMirrorProtectedBranches`<sup>Required</sup> <a name="onlyMirrorProtectedBranches" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.property.onlyMirrorProtectedBranches"></a>

```java
public IResolvable getOnlyMirrorProtectedBranches();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `openIssuesCount`<sup>Required</sup> <a name="openIssuesCount" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.property.openIssuesCount"></a>

```java
public java.lang.Number getOpenIssuesCount();
```

- *Type:* java.lang.Number

---

##### `operationsAccessLevel`<sup>Required</sup> <a name="operationsAccessLevel" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.property.operationsAccessLevel"></a>

```java
public java.lang.String getOperationsAccessLevel();
```

- *Type:* java.lang.String

---

##### `owner`<sup>Required</sup> <a name="owner" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.property.owner"></a>

```java
public DataGitlabProjectsProjectsOwnerList getOwner();
```

- *Type:* <a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOwnerList">DataGitlabProjectsProjectsOwnerList</a>

---

##### `packagesEnabled`<sup>Required</sup> <a name="packagesEnabled" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.property.packagesEnabled"></a>

```java
public IResolvable getPackagesEnabled();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.property.path"></a>

```java
public java.lang.String getPath();
```

- *Type:* java.lang.String

---

##### `pathWithNamespace`<sup>Required</sup> <a name="pathWithNamespace" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.property.pathWithNamespace"></a>

```java
public java.lang.String getPathWithNamespace();
```

- *Type:* java.lang.String

---

##### `permissions`<sup>Required</sup> <a name="permissions" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.property.permissions"></a>

```java
public DataGitlabProjectsProjectsPermissionsList getPermissions();
```

- *Type:* <a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsPermissionsList">DataGitlabProjectsProjectsPermissionsList</a>

---

##### `public`<sup>Required</sup> <a name="public" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.property.public"></a>

```java
public IResolvable getPublic();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `publicBuilds`<sup>Required</sup> <a name="publicBuilds" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.property.publicBuilds"></a>

```java
public IResolvable getPublicBuilds();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `readmeUrl`<sup>Required</sup> <a name="readmeUrl" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.property.readmeUrl"></a>

```java
public java.lang.String getReadmeUrl();
```

- *Type:* java.lang.String

---

##### `repositoryAccessLevel`<sup>Required</sup> <a name="repositoryAccessLevel" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.property.repositoryAccessLevel"></a>

```java
public java.lang.String getRepositoryAccessLevel();
```

- *Type:* java.lang.String

---

##### `repositoryStorage`<sup>Required</sup> <a name="repositoryStorage" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.property.repositoryStorage"></a>

```java
public java.lang.String getRepositoryStorage();
```

- *Type:* java.lang.String

---

##### `requestAccessEnabled`<sup>Required</sup> <a name="requestAccessEnabled" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.property.requestAccessEnabled"></a>

```java
public IResolvable getRequestAccessEnabled();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `requirementsAccessLevel`<sup>Required</sup> <a name="requirementsAccessLevel" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.property.requirementsAccessLevel"></a>

```java
public java.lang.String getRequirementsAccessLevel();
```

- *Type:* java.lang.String

---

##### `resolveOutdatedDiffDiscussions`<sup>Required</sup> <a name="resolveOutdatedDiffDiscussions" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.property.resolveOutdatedDiffDiscussions"></a>

```java
public IResolvable getResolveOutdatedDiffDiscussions();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `restrictUserDefinedVariables`<sup>Required</sup> <a name="restrictUserDefinedVariables" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.property.restrictUserDefinedVariables"></a>

```java
public IResolvable getRestrictUserDefinedVariables();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `runnersToken`<sup>Required</sup> <a name="runnersToken" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.property.runnersToken"></a>

```java
public java.lang.String getRunnersToken();
```

- *Type:* java.lang.String

---

##### `securityAndComplianceAccessLevel`<sup>Required</sup> <a name="securityAndComplianceAccessLevel" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.property.securityAndComplianceAccessLevel"></a>

```java
public java.lang.String getSecurityAndComplianceAccessLevel();
```

- *Type:* java.lang.String

---

##### `sharedRunnersEnabled`<sup>Required</sup> <a name="sharedRunnersEnabled" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.property.sharedRunnersEnabled"></a>

```java
public IResolvable getSharedRunnersEnabled();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `sharedWithGroups`<sup>Required</sup> <a name="sharedWithGroups" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.property.sharedWithGroups"></a>

```java
public DataGitlabProjectsProjectsSharedWithGroupsList getSharedWithGroups();
```

- *Type:* <a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsSharedWithGroupsList">DataGitlabProjectsProjectsSharedWithGroupsList</a>

---

##### `snippetsAccessLevel`<sup>Required</sup> <a name="snippetsAccessLevel" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.property.snippetsAccessLevel"></a>

```java
public java.lang.String getSnippetsAccessLevel();
```

- *Type:* java.lang.String

---

##### `snippetsEnabled`<sup>Required</sup> <a name="snippetsEnabled" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.property.snippetsEnabled"></a>

```java
public IResolvable getSnippetsEnabled();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `squashCommitTemplate`<sup>Required</sup> <a name="squashCommitTemplate" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.property.squashCommitTemplate"></a>

```java
public java.lang.String getSquashCommitTemplate();
```

- *Type:* java.lang.String

---

##### `sshUrlToRepo`<sup>Required</sup> <a name="sshUrlToRepo" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.property.sshUrlToRepo"></a>

```java
public java.lang.String getSshUrlToRepo();
```

- *Type:* java.lang.String

---

##### `starCount`<sup>Required</sup> <a name="starCount" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.property.starCount"></a>

```java
public java.lang.Number getStarCount();
```

- *Type:* java.lang.Number

---

##### `statistics`<sup>Required</sup> <a name="statistics" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.property.statistics"></a>

```java
public NumberMap getStatistics();
```

- *Type:* com.hashicorp.cdktf.NumberMap

---

##### `suggestionCommitMessage`<sup>Required</sup> <a name="suggestionCommitMessage" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.property.suggestionCommitMessage"></a>

```java
public java.lang.String getSuggestionCommitMessage();
```

- *Type:* java.lang.String

---

##### `tagList`<sup>Required</sup> <a name="tagList" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.property.tagList"></a>

```java
public java.util.List<java.lang.String> getTagList();
```

- *Type:* java.util.List<java.lang.String>

---

##### `topics`<sup>Required</sup> <a name="topics" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.property.topics"></a>

```java
public java.util.List<java.lang.String> getTopics();
```

- *Type:* java.util.List<java.lang.String>

---

##### `visibility`<sup>Required</sup> <a name="visibility" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.property.visibility"></a>

```java
public java.lang.String getVisibility();
```

- *Type:* java.lang.String

---

##### `webUrl`<sup>Required</sup> <a name="webUrl" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.property.webUrl"></a>

```java
public java.lang.String getWebUrl();
```

- *Type:* java.lang.String

---

##### `wikiAccessLevel`<sup>Required</sup> <a name="wikiAccessLevel" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.property.wikiAccessLevel"></a>

```java
public java.lang.String getWikiAccessLevel();
```

- *Type:* java.lang.String

---

##### `wikiEnabled`<sup>Required</sup> <a name="wikiEnabled" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.property.wikiEnabled"></a>

```java
public IResolvable getWikiEnabled();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.property.internalValue"></a>

```java
public DataGitlabProjectsProjects getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjects">DataGitlabProjectsProjects</a>

---


### DataGitlabProjectsProjectsOwnerList <a name="DataGitlabProjectsProjectsOwnerList" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOwnerList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOwnerList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.gitlab.data_gitlab_projects.DataGitlabProjectsProjectsOwnerList;

new DataGitlabProjectsProjectsOwnerList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOwnerList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOwnerList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOwnerList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOwnerList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOwnerList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOwnerList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOwnerList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOwnerList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOwnerList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOwnerList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOwnerList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOwnerList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOwnerList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOwnerList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOwnerList.get"></a>

```java
public DataGitlabProjectsProjectsOwnerOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOwnerList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOwnerList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOwnerList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOwnerList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOwnerList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataGitlabProjectsProjectsOwnerOutputReference <a name="DataGitlabProjectsProjectsOwnerOutputReference" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOwnerOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOwnerOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.gitlab.data_gitlab_projects.DataGitlabProjectsProjectsOwnerOutputReference;

new DataGitlabProjectsProjectsOwnerOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOwnerOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOwnerOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOwnerOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOwnerOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOwnerOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOwnerOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOwnerOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOwnerOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOwnerOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOwnerOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOwnerOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOwnerOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOwnerOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOwnerOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOwnerOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOwnerOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOwnerOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOwnerOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOwnerOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOwnerOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOwnerOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOwnerOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOwnerOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOwnerOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOwnerOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOwnerOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOwnerOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOwnerOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOwnerOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOwnerOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOwnerOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOwnerOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOwnerOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOwnerOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOwnerOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOwnerOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOwnerOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOwnerOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOwnerOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOwnerOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOwnerOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOwnerOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOwnerOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOwnerOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOwnerOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOwnerOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOwnerOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOwnerOutputReference.property.avatarUrl">avatarUrl</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOwnerOutputReference.property.id">id</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOwnerOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOwnerOutputReference.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOwnerOutputReference.property.username">username</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOwnerOutputReference.property.websiteUrl">websiteUrl</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOwnerOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOwner">DataGitlabProjectsProjectsOwner</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOwnerOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOwnerOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `avatarUrl`<sup>Required</sup> <a name="avatarUrl" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOwnerOutputReference.property.avatarUrl"></a>

```java
public java.lang.String getAvatarUrl();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOwnerOutputReference.property.id"></a>

```java
public java.lang.Number getId();
```

- *Type:* java.lang.Number

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOwnerOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOwnerOutputReference.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOwnerOutputReference.property.username"></a>

```java
public java.lang.String getUsername();
```

- *Type:* java.lang.String

---

##### `websiteUrl`<sup>Required</sup> <a name="websiteUrl" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOwnerOutputReference.property.websiteUrl"></a>

```java
public java.lang.String getWebsiteUrl();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOwnerOutputReference.property.internalValue"></a>

```java
public DataGitlabProjectsProjectsOwner getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOwner">DataGitlabProjectsProjectsOwner</a>

---


### DataGitlabProjectsProjectsPermissionsList <a name="DataGitlabProjectsProjectsPermissionsList" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsPermissionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsPermissionsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.gitlab.data_gitlab_projects.DataGitlabProjectsProjectsPermissionsList;

new DataGitlabProjectsProjectsPermissionsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsPermissionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsPermissionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsPermissionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsPermissionsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsPermissionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsPermissionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsPermissionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsPermissionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsPermissionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsPermissionsList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsPermissionsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsPermissionsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsPermissionsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsPermissionsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsPermissionsList.get"></a>

```java
public DataGitlabProjectsProjectsPermissionsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsPermissionsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsPermissionsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsPermissionsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsPermissionsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsPermissionsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataGitlabProjectsProjectsPermissionsOutputReference <a name="DataGitlabProjectsProjectsPermissionsOutputReference" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsPermissionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsPermissionsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.gitlab.data_gitlab_projects.DataGitlabProjectsProjectsPermissionsOutputReference;

new DataGitlabProjectsProjectsPermissionsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsPermissionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsPermissionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsPermissionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsPermissionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsPermissionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsPermissionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsPermissionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsPermissionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsPermissionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsPermissionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsPermissionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsPermissionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsPermissionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsPermissionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsPermissionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsPermissionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsPermissionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsPermissionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsPermissionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsPermissionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsPermissionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsPermissionsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsPermissionsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsPermissionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsPermissionsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsPermissionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsPermissionsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsPermissionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsPermissionsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsPermissionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsPermissionsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsPermissionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsPermissionsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsPermissionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsPermissionsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsPermissionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsPermissionsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsPermissionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsPermissionsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsPermissionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsPermissionsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsPermissionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsPermissionsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsPermissionsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsPermissionsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsPermissionsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsPermissionsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsPermissionsOutputReference.property.groupAccess">groupAccess</a></code> | <code>com.hashicorp.cdktf.NumberMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsPermissionsOutputReference.property.projectAccess">projectAccess</a></code> | <code>com.hashicorp.cdktf.NumberMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsPermissionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsPermissions">DataGitlabProjectsProjectsPermissions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsPermissionsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsPermissionsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `groupAccess`<sup>Required</sup> <a name="groupAccess" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsPermissionsOutputReference.property.groupAccess"></a>

```java
public NumberMap getGroupAccess();
```

- *Type:* com.hashicorp.cdktf.NumberMap

---

##### `projectAccess`<sup>Required</sup> <a name="projectAccess" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsPermissionsOutputReference.property.projectAccess"></a>

```java
public NumberMap getProjectAccess();
```

- *Type:* com.hashicorp.cdktf.NumberMap

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsPermissionsOutputReference.property.internalValue"></a>

```java
public DataGitlabProjectsProjectsPermissions getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsPermissions">DataGitlabProjectsProjectsPermissions</a>

---


### DataGitlabProjectsProjectsSharedWithGroupsList <a name="DataGitlabProjectsProjectsSharedWithGroupsList" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsSharedWithGroupsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsSharedWithGroupsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.gitlab.data_gitlab_projects.DataGitlabProjectsProjectsSharedWithGroupsList;

new DataGitlabProjectsProjectsSharedWithGroupsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsSharedWithGroupsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsSharedWithGroupsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsSharedWithGroupsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsSharedWithGroupsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsSharedWithGroupsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsSharedWithGroupsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsSharedWithGroupsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsSharedWithGroupsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsSharedWithGroupsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsSharedWithGroupsList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsSharedWithGroupsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsSharedWithGroupsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsSharedWithGroupsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsSharedWithGroupsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsSharedWithGroupsList.get"></a>

```java
public DataGitlabProjectsProjectsSharedWithGroupsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsSharedWithGroupsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsSharedWithGroupsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsSharedWithGroupsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsSharedWithGroupsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsSharedWithGroupsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataGitlabProjectsProjectsSharedWithGroupsOutputReference <a name="DataGitlabProjectsProjectsSharedWithGroupsOutputReference" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsSharedWithGroupsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsSharedWithGroupsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.gitlab.data_gitlab_projects.DataGitlabProjectsProjectsSharedWithGroupsOutputReference;

new DataGitlabProjectsProjectsSharedWithGroupsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsSharedWithGroupsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsSharedWithGroupsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsSharedWithGroupsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsSharedWithGroupsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsSharedWithGroupsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsSharedWithGroupsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsSharedWithGroupsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsSharedWithGroupsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsSharedWithGroupsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsSharedWithGroupsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsSharedWithGroupsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsSharedWithGroupsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsSharedWithGroupsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsSharedWithGroupsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsSharedWithGroupsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsSharedWithGroupsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsSharedWithGroupsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsSharedWithGroupsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsSharedWithGroupsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsSharedWithGroupsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsSharedWithGroupsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsSharedWithGroupsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsSharedWithGroupsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsSharedWithGroupsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsSharedWithGroupsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsSharedWithGroupsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsSharedWithGroupsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsSharedWithGroupsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsSharedWithGroupsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsSharedWithGroupsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsSharedWithGroupsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsSharedWithGroupsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsSharedWithGroupsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsSharedWithGroupsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsSharedWithGroupsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsSharedWithGroupsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsSharedWithGroupsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsSharedWithGroupsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsSharedWithGroupsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsSharedWithGroupsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsSharedWithGroupsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsSharedWithGroupsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsSharedWithGroupsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsSharedWithGroupsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsSharedWithGroupsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsSharedWithGroupsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsSharedWithGroupsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsSharedWithGroupsOutputReference.property.groupAccessLevel">groupAccessLevel</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsSharedWithGroupsOutputReference.property.groupId">groupId</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsSharedWithGroupsOutputReference.property.groupName">groupName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsSharedWithGroupsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsSharedWithGroups">DataGitlabProjectsProjectsSharedWithGroups</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsSharedWithGroupsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsSharedWithGroupsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `groupAccessLevel`<sup>Required</sup> <a name="groupAccessLevel" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsSharedWithGroupsOutputReference.property.groupAccessLevel"></a>

```java
public java.lang.String getGroupAccessLevel();
```

- *Type:* java.lang.String

---

##### `groupId`<sup>Required</sup> <a name="groupId" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsSharedWithGroupsOutputReference.property.groupId"></a>

```java
public java.lang.Number getGroupId();
```

- *Type:* java.lang.Number

---

##### `groupName`<sup>Required</sup> <a name="groupName" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsSharedWithGroupsOutputReference.property.groupName"></a>

```java
public java.lang.String getGroupName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsSharedWithGroupsOutputReference.property.internalValue"></a>

```java
public DataGitlabProjectsProjectsSharedWithGroups getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsSharedWithGroups">DataGitlabProjectsProjectsSharedWithGroups</a>

---



