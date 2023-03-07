# `dataGitlabProjects` Submodule <a name="`dataGitlabProjects` Submodule" id="@cdktf/provider-gitlab.dataGitlabProjects"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataGitlabProjects <a name="DataGitlabProjects" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects"></a>

Represents a {@link https://www.terraform.io/docs/providers/gitlab/d/projects gitlab_projects}.

#### Initializers <a name="Initializers" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-gitlab-go/gitlab/datagitlabprojects"

datagitlabprojects.NewDataGitlabProjects(scope Construct, id *string, config DataGitlabProjectsConfig) DataGitlabProjects
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsConfig">DataGitlabProjectsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsConfig">DataGitlabProjectsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.resetArchived">ResetArchived</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.resetGroupId">ResetGroupId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.resetIncludeSubgroups">ResetIncludeSubgroups</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.resetMaxQueryablePages">ResetMaxQueryablePages</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.resetMembership">ResetMembership</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.resetMinAccessLevel">ResetMinAccessLevel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.resetOrderBy">ResetOrderBy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.resetOwned">ResetOwned</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.resetPage">ResetPage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.resetPerPage">ResetPerPage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.resetSearch">ResetSearch</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.resetSimple">ResetSimple</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.resetSort">ResetSort</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.resetStarred">ResetStarred</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.resetStatistics">ResetStatistics</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.resetVisibility">ResetVisibility</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.resetWithCustomAttributes">ResetWithCustomAttributes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.resetWithIssuesEnabled">ResetWithIssuesEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.resetWithMergeRequestsEnabled">ResetWithMergeRequestsEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.resetWithProgrammingLanguage">ResetWithProgrammingLanguage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.resetWithShared">ResetWithShared</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ResetArchived` <a name="ResetArchived" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.resetArchived"></a>

```go
func ResetArchived()
```

##### `ResetGroupId` <a name="ResetGroupId" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.resetGroupId"></a>

```go
func ResetGroupId()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.resetId"></a>

```go
func ResetId()
```

##### `ResetIncludeSubgroups` <a name="ResetIncludeSubgroups" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.resetIncludeSubgroups"></a>

```go
func ResetIncludeSubgroups()
```

##### `ResetMaxQueryablePages` <a name="ResetMaxQueryablePages" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.resetMaxQueryablePages"></a>

```go
func ResetMaxQueryablePages()
```

##### `ResetMembership` <a name="ResetMembership" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.resetMembership"></a>

```go
func ResetMembership()
```

##### `ResetMinAccessLevel` <a name="ResetMinAccessLevel" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.resetMinAccessLevel"></a>

```go
func ResetMinAccessLevel()
```

##### `ResetOrderBy` <a name="ResetOrderBy" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.resetOrderBy"></a>

```go
func ResetOrderBy()
```

##### `ResetOwned` <a name="ResetOwned" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.resetOwned"></a>

```go
func ResetOwned()
```

##### `ResetPage` <a name="ResetPage" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.resetPage"></a>

```go
func ResetPage()
```

##### `ResetPerPage` <a name="ResetPerPage" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.resetPerPage"></a>

```go
func ResetPerPage()
```

##### `ResetSearch` <a name="ResetSearch" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.resetSearch"></a>

```go
func ResetSearch()
```

##### `ResetSimple` <a name="ResetSimple" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.resetSimple"></a>

```go
func ResetSimple()
```

##### `ResetSort` <a name="ResetSort" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.resetSort"></a>

```go
func ResetSort()
```

##### `ResetStarred` <a name="ResetStarred" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.resetStarred"></a>

```go
func ResetStarred()
```

##### `ResetStatistics` <a name="ResetStatistics" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.resetStatistics"></a>

```go
func ResetStatistics()
```

##### `ResetVisibility` <a name="ResetVisibility" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.resetVisibility"></a>

```go
func ResetVisibility()
```

##### `ResetWithCustomAttributes` <a name="ResetWithCustomAttributes" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.resetWithCustomAttributes"></a>

```go
func ResetWithCustomAttributes()
```

##### `ResetWithIssuesEnabled` <a name="ResetWithIssuesEnabled" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.resetWithIssuesEnabled"></a>

```go
func ResetWithIssuesEnabled()
```

##### `ResetWithMergeRequestsEnabled` <a name="ResetWithMergeRequestsEnabled" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.resetWithMergeRequestsEnabled"></a>

```go
func ResetWithMergeRequestsEnabled()
```

##### `ResetWithProgrammingLanguage` <a name="ResetWithProgrammingLanguage" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.resetWithProgrammingLanguage"></a>

```go
func ResetWithProgrammingLanguage()
```

##### `ResetWithShared` <a name="ResetWithShared" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.resetWithShared"></a>

```go
func ResetWithShared()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-gitlab-go/gitlab/datagitlabprojects"

datagitlabprojects.DataGitlabProjects_IsConstruct(x interface{}) *bool
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

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-gitlab-go/gitlab/datagitlabprojects"

datagitlabprojects.DataGitlabProjects_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.isTerraformDataSource"></a>

```go
import "github.com/cdktf/cdktf-provider-gitlab-go/gitlab/datagitlabprojects"

datagitlabprojects.DataGitlabProjects_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.property.projects">Projects</a></code> | <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsList">DataGitlabProjectsProjectsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.property.archivedInput">ArchivedInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.property.groupIdInput">GroupIdInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.property.includeSubgroupsInput">IncludeSubgroupsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.property.maxQueryablePagesInput">MaxQueryablePagesInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.property.membershipInput">MembershipInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.property.minAccessLevelInput">MinAccessLevelInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.property.orderByInput">OrderByInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.property.ownedInput">OwnedInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.property.pageInput">PageInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.property.perPageInput">PerPageInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.property.searchInput">SearchInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.property.simpleInput">SimpleInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.property.sortInput">SortInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.property.starredInput">StarredInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.property.statisticsInput">StatisticsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.property.visibilityInput">VisibilityInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.property.withCustomAttributesInput">WithCustomAttributesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.property.withIssuesEnabledInput">WithIssuesEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.property.withMergeRequestsEnabledInput">WithMergeRequestsEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.property.withProgrammingLanguageInput">WithProgrammingLanguageInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.property.withSharedInput">WithSharedInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.property.archived">Archived</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.property.groupId">GroupId</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.property.includeSubgroups">IncludeSubgroups</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.property.maxQueryablePages">MaxQueryablePages</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.property.membership">Membership</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.property.minAccessLevel">MinAccessLevel</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.property.orderBy">OrderBy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.property.owned">Owned</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.property.page">Page</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.property.perPage">PerPage</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.property.search">Search</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.property.simple">Simple</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.property.sort">Sort</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.property.starred">Starred</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.property.statistics">Statistics</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.property.visibility">Visibility</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.property.withCustomAttributes">WithCustomAttributes</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.property.withIssuesEnabled">WithIssuesEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.property.withMergeRequestsEnabled">WithMergeRequestsEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.property.withProgrammingLanguage">WithProgrammingLanguage</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.property.withShared">WithShared</a></code> | <code>interface{}</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.property.count"></a>

```go
func Count() *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Projects`<sup>Required</sup> <a name="Projects" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.property.projects"></a>

```go
func Projects() DataGitlabProjectsProjectsList
```

- *Type:* <a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsList">DataGitlabProjectsProjectsList</a>

---

##### `ArchivedInput`<sup>Optional</sup> <a name="ArchivedInput" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.property.archivedInput"></a>

```go
func ArchivedInput() interface{}
```

- *Type:* interface{}

---

##### `GroupIdInput`<sup>Optional</sup> <a name="GroupIdInput" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.property.groupIdInput"></a>

```go
func GroupIdInput() *f64
```

- *Type:* *f64

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `IncludeSubgroupsInput`<sup>Optional</sup> <a name="IncludeSubgroupsInput" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.property.includeSubgroupsInput"></a>

```go
func IncludeSubgroupsInput() interface{}
```

- *Type:* interface{}

---

##### `MaxQueryablePagesInput`<sup>Optional</sup> <a name="MaxQueryablePagesInput" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.property.maxQueryablePagesInput"></a>

```go
func MaxQueryablePagesInput() *f64
```

- *Type:* *f64

---

##### `MembershipInput`<sup>Optional</sup> <a name="MembershipInput" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.property.membershipInput"></a>

```go
func MembershipInput() interface{}
```

- *Type:* interface{}

---

##### `MinAccessLevelInput`<sup>Optional</sup> <a name="MinAccessLevelInput" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.property.minAccessLevelInput"></a>

```go
func MinAccessLevelInput() *f64
```

- *Type:* *f64

---

##### `OrderByInput`<sup>Optional</sup> <a name="OrderByInput" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.property.orderByInput"></a>

```go
func OrderByInput() *string
```

- *Type:* *string

---

##### `OwnedInput`<sup>Optional</sup> <a name="OwnedInput" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.property.ownedInput"></a>

```go
func OwnedInput() interface{}
```

- *Type:* interface{}

---

##### `PageInput`<sup>Optional</sup> <a name="PageInput" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.property.pageInput"></a>

```go
func PageInput() *f64
```

- *Type:* *f64

---

##### `PerPageInput`<sup>Optional</sup> <a name="PerPageInput" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.property.perPageInput"></a>

```go
func PerPageInput() *f64
```

- *Type:* *f64

---

##### `SearchInput`<sup>Optional</sup> <a name="SearchInput" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.property.searchInput"></a>

```go
func SearchInput() *string
```

- *Type:* *string

---

##### `SimpleInput`<sup>Optional</sup> <a name="SimpleInput" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.property.simpleInput"></a>

```go
func SimpleInput() interface{}
```

- *Type:* interface{}

---

##### `SortInput`<sup>Optional</sup> <a name="SortInput" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.property.sortInput"></a>

```go
func SortInput() *string
```

- *Type:* *string

---

##### `StarredInput`<sup>Optional</sup> <a name="StarredInput" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.property.starredInput"></a>

```go
func StarredInput() interface{}
```

- *Type:* interface{}

---

##### `StatisticsInput`<sup>Optional</sup> <a name="StatisticsInput" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.property.statisticsInput"></a>

```go
func StatisticsInput() interface{}
```

- *Type:* interface{}

---

##### `VisibilityInput`<sup>Optional</sup> <a name="VisibilityInput" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.property.visibilityInput"></a>

```go
func VisibilityInput() *string
```

- *Type:* *string

---

##### `WithCustomAttributesInput`<sup>Optional</sup> <a name="WithCustomAttributesInput" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.property.withCustomAttributesInput"></a>

```go
func WithCustomAttributesInput() interface{}
```

- *Type:* interface{}

---

##### `WithIssuesEnabledInput`<sup>Optional</sup> <a name="WithIssuesEnabledInput" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.property.withIssuesEnabledInput"></a>

```go
func WithIssuesEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `WithMergeRequestsEnabledInput`<sup>Optional</sup> <a name="WithMergeRequestsEnabledInput" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.property.withMergeRequestsEnabledInput"></a>

```go
func WithMergeRequestsEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `WithProgrammingLanguageInput`<sup>Optional</sup> <a name="WithProgrammingLanguageInput" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.property.withProgrammingLanguageInput"></a>

```go
func WithProgrammingLanguageInput() *string
```

- *Type:* *string

---

##### `WithSharedInput`<sup>Optional</sup> <a name="WithSharedInput" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.property.withSharedInput"></a>

```go
func WithSharedInput() interface{}
```

- *Type:* interface{}

---

##### `Archived`<sup>Required</sup> <a name="Archived" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.property.archived"></a>

```go
func Archived() interface{}
```

- *Type:* interface{}

---

##### `GroupId`<sup>Required</sup> <a name="GroupId" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.property.groupId"></a>

```go
func GroupId() *f64
```

- *Type:* *f64

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `IncludeSubgroups`<sup>Required</sup> <a name="IncludeSubgroups" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.property.includeSubgroups"></a>

```go
func IncludeSubgroups() interface{}
```

- *Type:* interface{}

---

##### `MaxQueryablePages`<sup>Required</sup> <a name="MaxQueryablePages" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.property.maxQueryablePages"></a>

```go
func MaxQueryablePages() *f64
```

- *Type:* *f64

---

##### `Membership`<sup>Required</sup> <a name="Membership" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.property.membership"></a>

```go
func Membership() interface{}
```

- *Type:* interface{}

---

##### `MinAccessLevel`<sup>Required</sup> <a name="MinAccessLevel" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.property.minAccessLevel"></a>

```go
func MinAccessLevel() *f64
```

- *Type:* *f64

---

##### `OrderBy`<sup>Required</sup> <a name="OrderBy" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.property.orderBy"></a>

```go
func OrderBy() *string
```

- *Type:* *string

---

##### `Owned`<sup>Required</sup> <a name="Owned" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.property.owned"></a>

```go
func Owned() interface{}
```

- *Type:* interface{}

---

##### `Page`<sup>Required</sup> <a name="Page" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.property.page"></a>

```go
func Page() *f64
```

- *Type:* *f64

---

##### `PerPage`<sup>Required</sup> <a name="PerPage" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.property.perPage"></a>

```go
func PerPage() *f64
```

- *Type:* *f64

---

##### `Search`<sup>Required</sup> <a name="Search" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.property.search"></a>

```go
func Search() *string
```

- *Type:* *string

---

##### `Simple`<sup>Required</sup> <a name="Simple" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.property.simple"></a>

```go
func Simple() interface{}
```

- *Type:* interface{}

---

##### `Sort`<sup>Required</sup> <a name="Sort" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.property.sort"></a>

```go
func Sort() *string
```

- *Type:* *string

---

##### `Starred`<sup>Required</sup> <a name="Starred" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.property.starred"></a>

```go
func Starred() interface{}
```

- *Type:* interface{}

---

##### `Statistics`<sup>Required</sup> <a name="Statistics" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.property.statistics"></a>

```go
func Statistics() interface{}
```

- *Type:* interface{}

---

##### `Visibility`<sup>Required</sup> <a name="Visibility" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.property.visibility"></a>

```go
func Visibility() *string
```

- *Type:* *string

---

##### `WithCustomAttributes`<sup>Required</sup> <a name="WithCustomAttributes" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.property.withCustomAttributes"></a>

```go
func WithCustomAttributes() interface{}
```

- *Type:* interface{}

---

##### `WithIssuesEnabled`<sup>Required</sup> <a name="WithIssuesEnabled" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.property.withIssuesEnabled"></a>

```go
func WithIssuesEnabled() interface{}
```

- *Type:* interface{}

---

##### `WithMergeRequestsEnabled`<sup>Required</sup> <a name="WithMergeRequestsEnabled" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.property.withMergeRequestsEnabled"></a>

```go
func WithMergeRequestsEnabled() interface{}
```

- *Type:* interface{}

---

##### `WithProgrammingLanguage`<sup>Required</sup> <a name="WithProgrammingLanguage" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.property.withProgrammingLanguage"></a>

```go
func WithProgrammingLanguage() *string
```

- *Type:* *string

---

##### `WithShared`<sup>Required</sup> <a name="WithShared" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.property.withShared"></a>

```go
func WithShared() interface{}
```

- *Type:* interface{}

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataGitlabProjectsConfig <a name="DataGitlabProjectsConfig" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-gitlab-go/gitlab/datagitlabprojects"

&datagitlabprojects.DataGitlabProjectsConfig {
	Connection: interface{},
	Count: *f64,
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Archived: interface{},
	GroupId: *f64,
	Id: *string,
	IncludeSubgroups: interface{},
	MaxQueryablePages: *f64,
	Membership: interface{},
	MinAccessLevel: *f64,
	OrderBy: *string,
	Owned: interface{},
	Page: *f64,
	PerPage: *f64,
	Search: *string,
	Simple: interface{},
	Sort: *string,
	Starred: interface{},
	Statistics: interface{},
	Visibility: *string,
	WithCustomAttributes: interface{},
	WithIssuesEnabled: interface{},
	WithMergeRequestsEnabled: interface{},
	WithProgrammingLanguage: *string,
	WithShared: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsConfig.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsConfig.property.archived">Archived</a></code> | <code>interface{}</code> | Limit by archived status. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsConfig.property.groupId">GroupId</a></code> | <code>*f64</code> | The ID of the group owned by the authenticated user to look projects for within. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/gitlab/d/projects#id DataGitlabProjects#id}. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsConfig.property.includeSubgroups">IncludeSubgroups</a></code> | <code>interface{}</code> | Include projects in subgroups of this group. Default is `false`. Needs `group_id`. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsConfig.property.maxQueryablePages">MaxQueryablePages</a></code> | <code>*f64</code> | The maximum number of project results pages that may be queried. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsConfig.property.membership">Membership</a></code> | <code>interface{}</code> | Limit by projects that the current user is a member of. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsConfig.property.minAccessLevel">MinAccessLevel</a></code> | <code>*f64</code> | Limit to projects where current user has at least this access level, refer to the [official documentation](https://docs.gitlab.com/ee/api/members.html) for values. Cannot be used with `group_id`. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsConfig.property.orderBy">OrderBy</a></code> | <code>*string</code> | Return projects ordered ordered by: `id`, `name`, `path`, `created_at`, `updated_at`, `last_activity_at`, `similarity`, `repository_size`, `storage_size`, `packages_size`, `wiki_size`. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsConfig.property.owned">Owned</a></code> | <code>interface{}</code> | Limit by projects owned by the current user. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsConfig.property.page">Page</a></code> | <code>*f64</code> | The first page to begin the query on. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsConfig.property.perPage">PerPage</a></code> | <code>*f64</code> | The number of results to return per page. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsConfig.property.search">Search</a></code> | <code>*string</code> | Return list of authorized projects matching the search criteria. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsConfig.property.simple">Simple</a></code> | <code>interface{}</code> | Return only the ID, URL, name, and path of each project. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsConfig.property.sort">Sort</a></code> | <code>*string</code> | Return projects sorted in `asc` or `desc` order. Default is `desc`. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsConfig.property.starred">Starred</a></code> | <code>interface{}</code> | Limit by projects starred by the current user. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsConfig.property.statistics">Statistics</a></code> | <code>interface{}</code> | Include project statistics. Cannot be used with `group_id`. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsConfig.property.visibility">Visibility</a></code> | <code>*string</code> | Limit by visibility `public`, `internal`, or `private`. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsConfig.property.withCustomAttributes">WithCustomAttributes</a></code> | <code>interface{}</code> | Include custom attributes in response _(admins only)_. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsConfig.property.withIssuesEnabled">WithIssuesEnabled</a></code> | <code>interface{}</code> | Limit by projects with issues feature enabled. Default is `false`. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsConfig.property.withMergeRequestsEnabled">WithMergeRequestsEnabled</a></code> | <code>interface{}</code> | Limit by projects with merge requests feature enabled. Default is `false`. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsConfig.property.withProgrammingLanguage">WithProgrammingLanguage</a></code> | <code>*string</code> | Limit by projects which use the given programming language. Cannot be used with `group_id`. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsConfig.property.withShared">WithShared</a></code> | <code>interface{}</code> | Include projects shared to this group. Default is `true`. Needs `group_id`. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsConfig.property.count"></a>

```go
Count *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Archived`<sup>Optional</sup> <a name="Archived" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsConfig.property.archived"></a>

```go
Archived interface{}
```

- *Type:* interface{}

Limit by archived status.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/gitlab/d/projects#archived DataGitlabProjects#archived}

---

##### `GroupId`<sup>Optional</sup> <a name="GroupId" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsConfig.property.groupId"></a>

```go
GroupId *f64
```

- *Type:* *f64

The ID of the group owned by the authenticated user to look projects for within.

Cannot be used with `min_access_level`, `with_programming_language` or `statistics`.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/gitlab/d/projects#group_id DataGitlabProjects#group_id}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/gitlab/d/projects#id DataGitlabProjects#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `IncludeSubgroups`<sup>Optional</sup> <a name="IncludeSubgroups" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsConfig.property.includeSubgroups"></a>

```go
IncludeSubgroups interface{}
```

- *Type:* interface{}

Include projects in subgroups of this group. Default is `false`. Needs `group_id`.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/gitlab/d/projects#include_subgroups DataGitlabProjects#include_subgroups}

---

##### `MaxQueryablePages`<sup>Optional</sup> <a name="MaxQueryablePages" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsConfig.property.maxQueryablePages"></a>

```go
MaxQueryablePages *f64
```

- *Type:* *f64

The maximum number of project results pages that may be queried.

Prevents overloading your Gitlab instance in case of a misconfiguration.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/gitlab/d/projects#max_queryable_pages DataGitlabProjects#max_queryable_pages}

---

##### `Membership`<sup>Optional</sup> <a name="Membership" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsConfig.property.membership"></a>

```go
Membership interface{}
```

- *Type:* interface{}

Limit by projects that the current user is a member of.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/gitlab/d/projects#membership DataGitlabProjects#membership}

---

##### `MinAccessLevel`<sup>Optional</sup> <a name="MinAccessLevel" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsConfig.property.minAccessLevel"></a>

```go
MinAccessLevel *f64
```

- *Type:* *f64

Limit to projects where current user has at least this access level, refer to the [official documentation](https://docs.gitlab.com/ee/api/members.html) for values. Cannot be used with `group_id`.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/gitlab/d/projects#min_access_level DataGitlabProjects#min_access_level}

---

##### `OrderBy`<sup>Optional</sup> <a name="OrderBy" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsConfig.property.orderBy"></a>

```go
OrderBy *string
```

- *Type:* *string

Return projects ordered ordered by: `id`, `name`, `path`, `created_at`, `updated_at`, `last_activity_at`, `similarity`, `repository_size`, `storage_size`, `packages_size`, `wiki_size`.

Some values or only available in certain circumstances. See [upstream docs](https://docs.gitlab.com/ee/api/projects.html#list-all-projects) for details.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/gitlab/d/projects#order_by DataGitlabProjects#order_by}

---

##### `Owned`<sup>Optional</sup> <a name="Owned" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsConfig.property.owned"></a>

```go
Owned interface{}
```

- *Type:* interface{}

Limit by projects owned by the current user.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/gitlab/d/projects#owned DataGitlabProjects#owned}

---

##### `Page`<sup>Optional</sup> <a name="Page" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsConfig.property.page"></a>

```go
Page *f64
```

- *Type:* *f64

The first page to begin the query on.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/gitlab/d/projects#page DataGitlabProjects#page}

---

##### `PerPage`<sup>Optional</sup> <a name="PerPage" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsConfig.property.perPage"></a>

```go
PerPage *f64
```

- *Type:* *f64

The number of results to return per page.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/gitlab/d/projects#per_page DataGitlabProjects#per_page}

---

##### `Search`<sup>Optional</sup> <a name="Search" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsConfig.property.search"></a>

```go
Search *string
```

- *Type:* *string

Return list of authorized projects matching the search criteria.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/gitlab/d/projects#search DataGitlabProjects#search}

---

##### `Simple`<sup>Optional</sup> <a name="Simple" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsConfig.property.simple"></a>

```go
Simple interface{}
```

- *Type:* interface{}

Return only the ID, URL, name, and path of each project.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/gitlab/d/projects#simple DataGitlabProjects#simple}

---

##### `Sort`<sup>Optional</sup> <a name="Sort" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsConfig.property.sort"></a>

```go
Sort *string
```

- *Type:* *string

Return projects sorted in `asc` or `desc` order. Default is `desc`.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/gitlab/d/projects#sort DataGitlabProjects#sort}

---

##### `Starred`<sup>Optional</sup> <a name="Starred" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsConfig.property.starred"></a>

```go
Starred interface{}
```

- *Type:* interface{}

Limit by projects starred by the current user.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/gitlab/d/projects#starred DataGitlabProjects#starred}

---

##### `Statistics`<sup>Optional</sup> <a name="Statistics" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsConfig.property.statistics"></a>

```go
Statistics interface{}
```

- *Type:* interface{}

Include project statistics. Cannot be used with `group_id`.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/gitlab/d/projects#statistics DataGitlabProjects#statistics}

---

##### `Visibility`<sup>Optional</sup> <a name="Visibility" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsConfig.property.visibility"></a>

```go
Visibility *string
```

- *Type:* *string

Limit by visibility `public`, `internal`, or `private`.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/gitlab/d/projects#visibility DataGitlabProjects#visibility}

---

##### `WithCustomAttributes`<sup>Optional</sup> <a name="WithCustomAttributes" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsConfig.property.withCustomAttributes"></a>

```go
WithCustomAttributes interface{}
```

- *Type:* interface{}

Include custom attributes in response _(admins only)_.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/gitlab/d/projects#with_custom_attributes DataGitlabProjects#with_custom_attributes}

---

##### `WithIssuesEnabled`<sup>Optional</sup> <a name="WithIssuesEnabled" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsConfig.property.withIssuesEnabled"></a>

```go
WithIssuesEnabled interface{}
```

- *Type:* interface{}

Limit by projects with issues feature enabled. Default is `false`.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/gitlab/d/projects#with_issues_enabled DataGitlabProjects#with_issues_enabled}

---

##### `WithMergeRequestsEnabled`<sup>Optional</sup> <a name="WithMergeRequestsEnabled" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsConfig.property.withMergeRequestsEnabled"></a>

```go
WithMergeRequestsEnabled interface{}
```

- *Type:* interface{}

Limit by projects with merge requests feature enabled. Default is `false`.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/gitlab/d/projects#with_merge_requests_enabled DataGitlabProjects#with_merge_requests_enabled}

---

##### `WithProgrammingLanguage`<sup>Optional</sup> <a name="WithProgrammingLanguage" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsConfig.property.withProgrammingLanguage"></a>

```go
WithProgrammingLanguage *string
```

- *Type:* *string

Limit by projects which use the given programming language. Cannot be used with `group_id`.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/gitlab/d/projects#with_programming_language DataGitlabProjects#with_programming_language}

---

##### `WithShared`<sup>Optional</sup> <a name="WithShared" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsConfig.property.withShared"></a>

```go
WithShared interface{}
```

- *Type:* interface{}

Include projects shared to this group. Default is `true`. Needs `group_id`.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/gitlab/d/projects#with_shared DataGitlabProjects#with_shared}

---

### DataGitlabProjectsProjects <a name="DataGitlabProjectsProjects" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjects"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjects.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-gitlab-go/gitlab/datagitlabprojects"

&datagitlabprojects.DataGitlabProjectsProjects {

}
```


### DataGitlabProjectsProjectsContainerExpirationPolicy <a name="DataGitlabProjectsProjectsContainerExpirationPolicy" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsContainerExpirationPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsContainerExpirationPolicy.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-gitlab-go/gitlab/datagitlabprojects"

&datagitlabprojects.DataGitlabProjectsProjectsContainerExpirationPolicy {

}
```


### DataGitlabProjectsProjectsForkedFromProject <a name="DataGitlabProjectsProjectsForkedFromProject" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsForkedFromProject"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsForkedFromProject.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-gitlab-go/gitlab/datagitlabprojects"

&datagitlabprojects.DataGitlabProjectsProjectsForkedFromProject {

}
```


### DataGitlabProjectsProjectsNamespace <a name="DataGitlabProjectsProjectsNamespace" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsNamespace"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsNamespace.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-gitlab-go/gitlab/datagitlabprojects"

&datagitlabprojects.DataGitlabProjectsProjectsNamespace {

}
```


### DataGitlabProjectsProjectsOwner <a name="DataGitlabProjectsProjectsOwner" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOwner"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOwner.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-gitlab-go/gitlab/datagitlabprojects"

&datagitlabprojects.DataGitlabProjectsProjectsOwner {

}
```


### DataGitlabProjectsProjectsPermissions <a name="DataGitlabProjectsProjectsPermissions" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsPermissions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsPermissions.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-gitlab-go/gitlab/datagitlabprojects"

&datagitlabprojects.DataGitlabProjectsProjectsPermissions {

}
```


### DataGitlabProjectsProjectsSharedWithGroups <a name="DataGitlabProjectsProjectsSharedWithGroups" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsSharedWithGroups"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsSharedWithGroups.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-gitlab-go/gitlab/datagitlabprojects"

&datagitlabprojects.DataGitlabProjectsProjectsSharedWithGroups {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataGitlabProjectsProjectsContainerExpirationPolicyList <a name="DataGitlabProjectsProjectsContainerExpirationPolicyList" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsContainerExpirationPolicyList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsContainerExpirationPolicyList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-gitlab-go/gitlab/datagitlabprojects"

datagitlabprojects.NewDataGitlabProjectsProjectsContainerExpirationPolicyList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataGitlabProjectsProjectsContainerExpirationPolicyList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsContainerExpirationPolicyList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsContainerExpirationPolicyList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsContainerExpirationPolicyList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsContainerExpirationPolicyList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsContainerExpirationPolicyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsContainerExpirationPolicyList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsContainerExpirationPolicyList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsContainerExpirationPolicyList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsContainerExpirationPolicyList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsContainerExpirationPolicyList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsContainerExpirationPolicyList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsContainerExpirationPolicyList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsContainerExpirationPolicyList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsContainerExpirationPolicyList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsContainerExpirationPolicyList.get"></a>

```go
func Get(index *f64) DataGitlabProjectsProjectsContainerExpirationPolicyOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsContainerExpirationPolicyList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsContainerExpirationPolicyList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsContainerExpirationPolicyList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsContainerExpirationPolicyList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsContainerExpirationPolicyList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataGitlabProjectsProjectsContainerExpirationPolicyOutputReference <a name="DataGitlabProjectsProjectsContainerExpirationPolicyOutputReference" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsContainerExpirationPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsContainerExpirationPolicyOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-gitlab-go/gitlab/datagitlabprojects"

datagitlabprojects.NewDataGitlabProjectsProjectsContainerExpirationPolicyOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataGitlabProjectsProjectsContainerExpirationPolicyOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsContainerExpirationPolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsContainerExpirationPolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsContainerExpirationPolicyOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsContainerExpirationPolicyOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsContainerExpirationPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsContainerExpirationPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsContainerExpirationPolicyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsContainerExpirationPolicyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsContainerExpirationPolicyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsContainerExpirationPolicyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsContainerExpirationPolicyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsContainerExpirationPolicyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsContainerExpirationPolicyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsContainerExpirationPolicyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsContainerExpirationPolicyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsContainerExpirationPolicyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsContainerExpirationPolicyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsContainerExpirationPolicyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsContainerExpirationPolicyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsContainerExpirationPolicyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsContainerExpirationPolicyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsContainerExpirationPolicyOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsContainerExpirationPolicyOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsContainerExpirationPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsContainerExpirationPolicyOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsContainerExpirationPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsContainerExpirationPolicyOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsContainerExpirationPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsContainerExpirationPolicyOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsContainerExpirationPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsContainerExpirationPolicyOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsContainerExpirationPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsContainerExpirationPolicyOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsContainerExpirationPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsContainerExpirationPolicyOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsContainerExpirationPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsContainerExpirationPolicyOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsContainerExpirationPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsContainerExpirationPolicyOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsContainerExpirationPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsContainerExpirationPolicyOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsContainerExpirationPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsContainerExpirationPolicyOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsContainerExpirationPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsContainerExpirationPolicyOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsContainerExpirationPolicyOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsContainerExpirationPolicyOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsContainerExpirationPolicyOutputReference.property.cadence">Cadence</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsContainerExpirationPolicyOutputReference.property.enabled">Enabled</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsContainerExpirationPolicyOutputReference.property.keepN">KeepN</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsContainerExpirationPolicyOutputReference.property.nameRegexDelete">NameRegexDelete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsContainerExpirationPolicyOutputReference.property.nameRegexKeep">NameRegexKeep</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsContainerExpirationPolicyOutputReference.property.nextRunAt">NextRunAt</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsContainerExpirationPolicyOutputReference.property.olderThan">OlderThan</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsContainerExpirationPolicyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsContainerExpirationPolicy">DataGitlabProjectsProjectsContainerExpirationPolicy</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsContainerExpirationPolicyOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsContainerExpirationPolicyOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Cadence`<sup>Required</sup> <a name="Cadence" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsContainerExpirationPolicyOutputReference.property.cadence"></a>

```go
func Cadence() *string
```

- *Type:* *string

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsContainerExpirationPolicyOutputReference.property.enabled"></a>

```go
func Enabled() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `KeepN`<sup>Required</sup> <a name="KeepN" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsContainerExpirationPolicyOutputReference.property.keepN"></a>

```go
func KeepN() *f64
```

- *Type:* *f64

---

##### `NameRegexDelete`<sup>Required</sup> <a name="NameRegexDelete" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsContainerExpirationPolicyOutputReference.property.nameRegexDelete"></a>

```go
func NameRegexDelete() *string
```

- *Type:* *string

---

##### `NameRegexKeep`<sup>Required</sup> <a name="NameRegexKeep" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsContainerExpirationPolicyOutputReference.property.nameRegexKeep"></a>

```go
func NameRegexKeep() *string
```

- *Type:* *string

---

##### `NextRunAt`<sup>Required</sup> <a name="NextRunAt" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsContainerExpirationPolicyOutputReference.property.nextRunAt"></a>

```go
func NextRunAt() *string
```

- *Type:* *string

---

##### `OlderThan`<sup>Required</sup> <a name="OlderThan" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsContainerExpirationPolicyOutputReference.property.olderThan"></a>

```go
func OlderThan() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsContainerExpirationPolicyOutputReference.property.internalValue"></a>

```go
func InternalValue() DataGitlabProjectsProjectsContainerExpirationPolicy
```

- *Type:* <a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsContainerExpirationPolicy">DataGitlabProjectsProjectsContainerExpirationPolicy</a>

---


### DataGitlabProjectsProjectsForkedFromProjectList <a name="DataGitlabProjectsProjectsForkedFromProjectList" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsForkedFromProjectList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsForkedFromProjectList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-gitlab-go/gitlab/datagitlabprojects"

datagitlabprojects.NewDataGitlabProjectsProjectsForkedFromProjectList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataGitlabProjectsProjectsForkedFromProjectList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsForkedFromProjectList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsForkedFromProjectList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsForkedFromProjectList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsForkedFromProjectList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsForkedFromProjectList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsForkedFromProjectList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsForkedFromProjectList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsForkedFromProjectList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsForkedFromProjectList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsForkedFromProjectList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsForkedFromProjectList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsForkedFromProjectList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsForkedFromProjectList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsForkedFromProjectList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsForkedFromProjectList.get"></a>

```go
func Get(index *f64) DataGitlabProjectsProjectsForkedFromProjectOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsForkedFromProjectList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsForkedFromProjectList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsForkedFromProjectList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsForkedFromProjectList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsForkedFromProjectList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataGitlabProjectsProjectsForkedFromProjectOutputReference <a name="DataGitlabProjectsProjectsForkedFromProjectOutputReference" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsForkedFromProjectOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsForkedFromProjectOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-gitlab-go/gitlab/datagitlabprojects"

datagitlabprojects.NewDataGitlabProjectsProjectsForkedFromProjectOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataGitlabProjectsProjectsForkedFromProjectOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsForkedFromProjectOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsForkedFromProjectOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsForkedFromProjectOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsForkedFromProjectOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsForkedFromProjectOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsForkedFromProjectOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsForkedFromProjectOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsForkedFromProjectOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsForkedFromProjectOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsForkedFromProjectOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsForkedFromProjectOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsForkedFromProjectOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsForkedFromProjectOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsForkedFromProjectOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsForkedFromProjectOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsForkedFromProjectOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsForkedFromProjectOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsForkedFromProjectOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsForkedFromProjectOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsForkedFromProjectOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsForkedFromProjectOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsForkedFromProjectOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsForkedFromProjectOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsForkedFromProjectOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsForkedFromProjectOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsForkedFromProjectOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsForkedFromProjectOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsForkedFromProjectOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsForkedFromProjectOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsForkedFromProjectOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsForkedFromProjectOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsForkedFromProjectOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsForkedFromProjectOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsForkedFromProjectOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsForkedFromProjectOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsForkedFromProjectOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsForkedFromProjectOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsForkedFromProjectOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsForkedFromProjectOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsForkedFromProjectOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsForkedFromProjectOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsForkedFromProjectOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsForkedFromProjectOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsForkedFromProjectOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsForkedFromProjectOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsForkedFromProjectOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsForkedFromProjectOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsForkedFromProjectOutputReference.property.httpUrlToRepo">HttpUrlToRepo</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsForkedFromProjectOutputReference.property.id">Id</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsForkedFromProjectOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsForkedFromProjectOutputReference.property.nameWithNamespace">NameWithNamespace</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsForkedFromProjectOutputReference.property.path">Path</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsForkedFromProjectOutputReference.property.pathWithNamespace">PathWithNamespace</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsForkedFromProjectOutputReference.property.webUrl">WebUrl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsForkedFromProjectOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsForkedFromProject">DataGitlabProjectsProjectsForkedFromProject</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsForkedFromProjectOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsForkedFromProjectOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `HttpUrlToRepo`<sup>Required</sup> <a name="HttpUrlToRepo" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsForkedFromProjectOutputReference.property.httpUrlToRepo"></a>

```go
func HttpUrlToRepo() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsForkedFromProjectOutputReference.property.id"></a>

```go
func Id() *f64
```

- *Type:* *f64

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsForkedFromProjectOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `NameWithNamespace`<sup>Required</sup> <a name="NameWithNamespace" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsForkedFromProjectOutputReference.property.nameWithNamespace"></a>

```go
func NameWithNamespace() *string
```

- *Type:* *string

---

##### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsForkedFromProjectOutputReference.property.path"></a>

```go
func Path() *string
```

- *Type:* *string

---

##### `PathWithNamespace`<sup>Required</sup> <a name="PathWithNamespace" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsForkedFromProjectOutputReference.property.pathWithNamespace"></a>

```go
func PathWithNamespace() *string
```

- *Type:* *string

---

##### `WebUrl`<sup>Required</sup> <a name="WebUrl" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsForkedFromProjectOutputReference.property.webUrl"></a>

```go
func WebUrl() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsForkedFromProjectOutputReference.property.internalValue"></a>

```go
func InternalValue() DataGitlabProjectsProjectsForkedFromProject
```

- *Type:* <a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsForkedFromProject">DataGitlabProjectsProjectsForkedFromProject</a>

---


### DataGitlabProjectsProjectsList <a name="DataGitlabProjectsProjectsList" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-gitlab-go/gitlab/datagitlabprojects"

datagitlabprojects.NewDataGitlabProjectsProjectsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataGitlabProjectsProjectsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsList.get"></a>

```go
func Get(index *f64) DataGitlabProjectsProjectsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataGitlabProjectsProjectsNamespaceList <a name="DataGitlabProjectsProjectsNamespaceList" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsNamespaceList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsNamespaceList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-gitlab-go/gitlab/datagitlabprojects"

datagitlabprojects.NewDataGitlabProjectsProjectsNamespaceList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataGitlabProjectsProjectsNamespaceList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsNamespaceList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsNamespaceList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsNamespaceList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsNamespaceList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsNamespaceList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsNamespaceList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsNamespaceList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsNamespaceList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsNamespaceList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsNamespaceList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsNamespaceList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsNamespaceList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsNamespaceList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsNamespaceList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsNamespaceList.get"></a>

```go
func Get(index *f64) DataGitlabProjectsProjectsNamespaceOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsNamespaceList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsNamespaceList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsNamespaceList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsNamespaceList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsNamespaceList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataGitlabProjectsProjectsNamespaceOutputReference <a name="DataGitlabProjectsProjectsNamespaceOutputReference" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsNamespaceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsNamespaceOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-gitlab-go/gitlab/datagitlabprojects"

datagitlabprojects.NewDataGitlabProjectsProjectsNamespaceOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataGitlabProjectsProjectsNamespaceOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsNamespaceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsNamespaceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsNamespaceOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsNamespaceOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsNamespaceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsNamespaceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsNamespaceOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsNamespaceOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsNamespaceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsNamespaceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsNamespaceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsNamespaceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsNamespaceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsNamespaceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsNamespaceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsNamespaceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsNamespaceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsNamespaceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsNamespaceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsNamespaceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsNamespaceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsNamespaceOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsNamespaceOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsNamespaceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsNamespaceOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsNamespaceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsNamespaceOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsNamespaceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsNamespaceOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsNamespaceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsNamespaceOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsNamespaceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsNamespaceOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsNamespaceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsNamespaceOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsNamespaceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsNamespaceOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsNamespaceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsNamespaceOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsNamespaceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsNamespaceOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsNamespaceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsNamespaceOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsNamespaceOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsNamespaceOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsNamespaceOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsNamespaceOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsNamespaceOutputReference.property.fullPath">FullPath</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsNamespaceOutputReference.property.id">Id</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsNamespaceOutputReference.property.kind">Kind</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsNamespaceOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsNamespaceOutputReference.property.path">Path</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsNamespaceOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsNamespace">DataGitlabProjectsProjectsNamespace</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsNamespaceOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsNamespaceOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FullPath`<sup>Required</sup> <a name="FullPath" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsNamespaceOutputReference.property.fullPath"></a>

```go
func FullPath() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsNamespaceOutputReference.property.id"></a>

```go
func Id() *f64
```

- *Type:* *f64

---

##### `Kind`<sup>Required</sup> <a name="Kind" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsNamespaceOutputReference.property.kind"></a>

```go
func Kind() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsNamespaceOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsNamespaceOutputReference.property.path"></a>

```go
func Path() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsNamespaceOutputReference.property.internalValue"></a>

```go
func InternalValue() DataGitlabProjectsProjectsNamespace
```

- *Type:* <a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsNamespace">DataGitlabProjectsProjectsNamespace</a>

---


### DataGitlabProjectsProjectsOutputReference <a name="DataGitlabProjectsProjectsOutputReference" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-gitlab-go/gitlab/datagitlabprojects"

datagitlabprojects.NewDataGitlabProjectsProjectsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataGitlabProjectsProjectsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.property.allowMergeOnSkippedPipeline">AllowMergeOnSkippedPipeline</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.property.analyticsAccessLevel">AnalyticsAccessLevel</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.property.approvalsBeforeMerge">ApprovalsBeforeMerge</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.property.archived">Archived</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.property.autoCancelPendingPipelines">AutoCancelPendingPipelines</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.property.autocloseReferencedIssues">AutocloseReferencedIssues</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.property.autoDevopsDeployStrategy">AutoDevopsDeployStrategy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.property.autoDevopsEnabled">AutoDevopsEnabled</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.property.avatarUrl">AvatarUrl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.property.buildCoverageRegex">BuildCoverageRegex</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.property.buildGitStrategy">BuildGitStrategy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.property.buildsAccessLevel">BuildsAccessLevel</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.property.buildTimeout">BuildTimeout</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.property.ciConfigPath">CiConfigPath</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.property.ciDefaultGitDepth">CiDefaultGitDepth</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.property.ciForwardDeploymentEnabled">CiForwardDeploymentEnabled</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.property.containerExpirationPolicy">ContainerExpirationPolicy</a></code> | <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsContainerExpirationPolicyList">DataGitlabProjectsProjectsContainerExpirationPolicyList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.property.containerRegistryAccessLevel">ContainerRegistryAccessLevel</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.property.containerRegistryEnabled">ContainerRegistryEnabled</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.property.createdAt">CreatedAt</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.property.creatorId">CreatorId</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.property.customAttributes">CustomAttributes</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMapList</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.property.defaultBranch">DefaultBranch</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.property.emailsDisabled">EmailsDisabled</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.property.externalAuthorizationClassificationLabel">ExternalAuthorizationClassificationLabel</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.property.forkedFromProject">ForkedFromProject</a></code> | <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsForkedFromProjectList">DataGitlabProjectsProjectsForkedFromProjectList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.property.forkingAccessLevel">ForkingAccessLevel</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.property.forksCount">ForksCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.property.httpUrlToRepo">HttpUrlToRepo</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.property.id">Id</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.property.importError">ImportError</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.property.importStatus">ImportStatus</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.property.importUrl">ImportUrl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.property.issuesAccessLevel">IssuesAccessLevel</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.property.issuesEnabled">IssuesEnabled</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.property.jobsEnabled">JobsEnabled</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.property.lastActivityAt">LastActivityAt</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.property.lfsEnabled">LfsEnabled</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.property.links">Links</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.property.mergeCommitTemplate">MergeCommitTemplate</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.property.mergeMethod">MergeMethod</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.property.mergePipelinesEnabled">MergePipelinesEnabled</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.property.mergeRequestsAccessLevel">MergeRequestsAccessLevel</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.property.mergeRequestsEnabled">MergeRequestsEnabled</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.property.mergeTrainsEnabled">MergeTrainsEnabled</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.property.mirror">Mirror</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.property.mirrorOverwritesDivergedBranches">MirrorOverwritesDivergedBranches</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.property.mirrorTriggerBuilds">MirrorTriggerBuilds</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.property.mirrorUserId">MirrorUserId</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.property.namespace">Namespace</a></code> | <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsNamespaceList">DataGitlabProjectsProjectsNamespaceList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.property.nameWithNamespace">NameWithNamespace</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.property.onlyAllowMergeIfAllDiscussionsAreResolved">OnlyAllowMergeIfAllDiscussionsAreResolved</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.property.onlyAllowMergeIfPipelineSucceeds">OnlyAllowMergeIfPipelineSucceeds</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.property.onlyMirrorProtectedBranches">OnlyMirrorProtectedBranches</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.property.openIssuesCount">OpenIssuesCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.property.operationsAccessLevel">OperationsAccessLevel</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.property.owner">Owner</a></code> | <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOwnerList">DataGitlabProjectsProjectsOwnerList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.property.packagesEnabled">PackagesEnabled</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.property.path">Path</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.property.pathWithNamespace">PathWithNamespace</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.property.permissions">Permissions</a></code> | <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsPermissionsList">DataGitlabProjectsProjectsPermissionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.property.public">Public</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.property.publicBuilds">PublicBuilds</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.property.readmeUrl">ReadmeUrl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.property.repositoryAccessLevel">RepositoryAccessLevel</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.property.repositoryStorage">RepositoryStorage</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.property.requestAccessEnabled">RequestAccessEnabled</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.property.requirementsAccessLevel">RequirementsAccessLevel</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.property.resolveOutdatedDiffDiscussions">ResolveOutdatedDiffDiscussions</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.property.restrictUserDefinedVariables">RestrictUserDefinedVariables</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.property.runnersToken">RunnersToken</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.property.securityAndComplianceAccessLevel">SecurityAndComplianceAccessLevel</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.property.sharedRunnersEnabled">SharedRunnersEnabled</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.property.sharedWithGroups">SharedWithGroups</a></code> | <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsSharedWithGroupsList">DataGitlabProjectsProjectsSharedWithGroupsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.property.snippetsAccessLevel">SnippetsAccessLevel</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.property.snippetsEnabled">SnippetsEnabled</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.property.squashCommitTemplate">SquashCommitTemplate</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.property.sshUrlToRepo">SshUrlToRepo</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.property.starCount">StarCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.property.statistics">Statistics</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.NumberMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.property.suggestionCommitMessage">SuggestionCommitMessage</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.property.tagList">TagList</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.property.topics">Topics</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.property.visibility">Visibility</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.property.webUrl">WebUrl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.property.wikiAccessLevel">WikiAccessLevel</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.property.wikiEnabled">WikiEnabled</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjects">DataGitlabProjectsProjects</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AllowMergeOnSkippedPipeline`<sup>Required</sup> <a name="AllowMergeOnSkippedPipeline" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.property.allowMergeOnSkippedPipeline"></a>

```go
func AllowMergeOnSkippedPipeline() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `AnalyticsAccessLevel`<sup>Required</sup> <a name="AnalyticsAccessLevel" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.property.analyticsAccessLevel"></a>

```go
func AnalyticsAccessLevel() *string
```

- *Type:* *string

---

##### `ApprovalsBeforeMerge`<sup>Required</sup> <a name="ApprovalsBeforeMerge" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.property.approvalsBeforeMerge"></a>

```go
func ApprovalsBeforeMerge() *f64
```

- *Type:* *f64

---

##### `Archived`<sup>Required</sup> <a name="Archived" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.property.archived"></a>

```go
func Archived() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `AutoCancelPendingPipelines`<sup>Required</sup> <a name="AutoCancelPendingPipelines" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.property.autoCancelPendingPipelines"></a>

```go
func AutoCancelPendingPipelines() *string
```

- *Type:* *string

---

##### `AutocloseReferencedIssues`<sup>Required</sup> <a name="AutocloseReferencedIssues" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.property.autocloseReferencedIssues"></a>

```go
func AutocloseReferencedIssues() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `AutoDevopsDeployStrategy`<sup>Required</sup> <a name="AutoDevopsDeployStrategy" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.property.autoDevopsDeployStrategy"></a>

```go
func AutoDevopsDeployStrategy() *string
```

- *Type:* *string

---

##### `AutoDevopsEnabled`<sup>Required</sup> <a name="AutoDevopsEnabled" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.property.autoDevopsEnabled"></a>

```go
func AutoDevopsEnabled() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `AvatarUrl`<sup>Required</sup> <a name="AvatarUrl" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.property.avatarUrl"></a>

```go
func AvatarUrl() *string
```

- *Type:* *string

---

##### `BuildCoverageRegex`<sup>Required</sup> <a name="BuildCoverageRegex" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.property.buildCoverageRegex"></a>

```go
func BuildCoverageRegex() *string
```

- *Type:* *string

---

##### `BuildGitStrategy`<sup>Required</sup> <a name="BuildGitStrategy" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.property.buildGitStrategy"></a>

```go
func BuildGitStrategy() *string
```

- *Type:* *string

---

##### `BuildsAccessLevel`<sup>Required</sup> <a name="BuildsAccessLevel" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.property.buildsAccessLevel"></a>

```go
func BuildsAccessLevel() *string
```

- *Type:* *string

---

##### `BuildTimeout`<sup>Required</sup> <a name="BuildTimeout" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.property.buildTimeout"></a>

```go
func BuildTimeout() *f64
```

- *Type:* *f64

---

##### `CiConfigPath`<sup>Required</sup> <a name="CiConfigPath" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.property.ciConfigPath"></a>

```go
func CiConfigPath() *string
```

- *Type:* *string

---

##### `CiDefaultGitDepth`<sup>Required</sup> <a name="CiDefaultGitDepth" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.property.ciDefaultGitDepth"></a>

```go
func CiDefaultGitDepth() *f64
```

- *Type:* *f64

---

##### `CiForwardDeploymentEnabled`<sup>Required</sup> <a name="CiForwardDeploymentEnabled" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.property.ciForwardDeploymentEnabled"></a>

```go
func CiForwardDeploymentEnabled() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `ContainerExpirationPolicy`<sup>Required</sup> <a name="ContainerExpirationPolicy" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.property.containerExpirationPolicy"></a>

```go
func ContainerExpirationPolicy() DataGitlabProjectsProjectsContainerExpirationPolicyList
```

- *Type:* <a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsContainerExpirationPolicyList">DataGitlabProjectsProjectsContainerExpirationPolicyList</a>

---

##### `ContainerRegistryAccessLevel`<sup>Required</sup> <a name="ContainerRegistryAccessLevel" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.property.containerRegistryAccessLevel"></a>

```go
func ContainerRegistryAccessLevel() *string
```

- *Type:* *string

---

##### `ContainerRegistryEnabled`<sup>Required</sup> <a name="ContainerRegistryEnabled" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.property.containerRegistryEnabled"></a>

```go
func ContainerRegistryEnabled() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `CreatedAt`<sup>Required</sup> <a name="CreatedAt" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.property.createdAt"></a>

```go
func CreatedAt() *string
```

- *Type:* *string

---

##### `CreatorId`<sup>Required</sup> <a name="CreatorId" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.property.creatorId"></a>

```go
func CreatorId() *f64
```

- *Type:* *f64

---

##### `CustomAttributes`<sup>Required</sup> <a name="CustomAttributes" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.property.customAttributes"></a>

```go
func CustomAttributes() StringMapList
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMapList

---

##### `DefaultBranch`<sup>Required</sup> <a name="DefaultBranch" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.property.defaultBranch"></a>

```go
func DefaultBranch() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `EmailsDisabled`<sup>Required</sup> <a name="EmailsDisabled" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.property.emailsDisabled"></a>

```go
func EmailsDisabled() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `ExternalAuthorizationClassificationLabel`<sup>Required</sup> <a name="ExternalAuthorizationClassificationLabel" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.property.externalAuthorizationClassificationLabel"></a>

```go
func ExternalAuthorizationClassificationLabel() *string
```

- *Type:* *string

---

##### `ForkedFromProject`<sup>Required</sup> <a name="ForkedFromProject" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.property.forkedFromProject"></a>

```go
func ForkedFromProject() DataGitlabProjectsProjectsForkedFromProjectList
```

- *Type:* <a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsForkedFromProjectList">DataGitlabProjectsProjectsForkedFromProjectList</a>

---

##### `ForkingAccessLevel`<sup>Required</sup> <a name="ForkingAccessLevel" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.property.forkingAccessLevel"></a>

```go
func ForkingAccessLevel() *string
```

- *Type:* *string

---

##### `ForksCount`<sup>Required</sup> <a name="ForksCount" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.property.forksCount"></a>

```go
func ForksCount() *f64
```

- *Type:* *f64

---

##### `HttpUrlToRepo`<sup>Required</sup> <a name="HttpUrlToRepo" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.property.httpUrlToRepo"></a>

```go
func HttpUrlToRepo() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.property.id"></a>

```go
func Id() *f64
```

- *Type:* *f64

---

##### `ImportError`<sup>Required</sup> <a name="ImportError" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.property.importError"></a>

```go
func ImportError() *string
```

- *Type:* *string

---

##### `ImportStatus`<sup>Required</sup> <a name="ImportStatus" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.property.importStatus"></a>

```go
func ImportStatus() *string
```

- *Type:* *string

---

##### `ImportUrl`<sup>Required</sup> <a name="ImportUrl" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.property.importUrl"></a>

```go
func ImportUrl() *string
```

- *Type:* *string

---

##### `IssuesAccessLevel`<sup>Required</sup> <a name="IssuesAccessLevel" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.property.issuesAccessLevel"></a>

```go
func IssuesAccessLevel() *string
```

- *Type:* *string

---

##### `IssuesEnabled`<sup>Required</sup> <a name="IssuesEnabled" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.property.issuesEnabled"></a>

```go
func IssuesEnabled() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `JobsEnabled`<sup>Required</sup> <a name="JobsEnabled" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.property.jobsEnabled"></a>

```go
func JobsEnabled() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `LastActivityAt`<sup>Required</sup> <a name="LastActivityAt" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.property.lastActivityAt"></a>

```go
func LastActivityAt() *string
```

- *Type:* *string

---

##### `LfsEnabled`<sup>Required</sup> <a name="LfsEnabled" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.property.lfsEnabled"></a>

```go
func LfsEnabled() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `Links`<sup>Required</sup> <a name="Links" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.property.links"></a>

```go
func Links() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `MergeCommitTemplate`<sup>Required</sup> <a name="MergeCommitTemplate" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.property.mergeCommitTemplate"></a>

```go
func MergeCommitTemplate() *string
```

- *Type:* *string

---

##### `MergeMethod`<sup>Required</sup> <a name="MergeMethod" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.property.mergeMethod"></a>

```go
func MergeMethod() *string
```

- *Type:* *string

---

##### `MergePipelinesEnabled`<sup>Required</sup> <a name="MergePipelinesEnabled" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.property.mergePipelinesEnabled"></a>

```go
func MergePipelinesEnabled() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `MergeRequestsAccessLevel`<sup>Required</sup> <a name="MergeRequestsAccessLevel" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.property.mergeRequestsAccessLevel"></a>

```go
func MergeRequestsAccessLevel() *string
```

- *Type:* *string

---

##### `MergeRequestsEnabled`<sup>Required</sup> <a name="MergeRequestsEnabled" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.property.mergeRequestsEnabled"></a>

```go
func MergeRequestsEnabled() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `MergeTrainsEnabled`<sup>Required</sup> <a name="MergeTrainsEnabled" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.property.mergeTrainsEnabled"></a>

```go
func MergeTrainsEnabled() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `Mirror`<sup>Required</sup> <a name="Mirror" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.property.mirror"></a>

```go
func Mirror() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `MirrorOverwritesDivergedBranches`<sup>Required</sup> <a name="MirrorOverwritesDivergedBranches" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.property.mirrorOverwritesDivergedBranches"></a>

```go
func MirrorOverwritesDivergedBranches() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `MirrorTriggerBuilds`<sup>Required</sup> <a name="MirrorTriggerBuilds" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.property.mirrorTriggerBuilds"></a>

```go
func MirrorTriggerBuilds() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `MirrorUserId`<sup>Required</sup> <a name="MirrorUserId" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.property.mirrorUserId"></a>

```go
func MirrorUserId() *f64
```

- *Type:* *f64

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.property.namespace"></a>

```go
func Namespace() DataGitlabProjectsProjectsNamespaceList
```

- *Type:* <a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsNamespaceList">DataGitlabProjectsProjectsNamespaceList</a>

---

##### `NameWithNamespace`<sup>Required</sup> <a name="NameWithNamespace" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.property.nameWithNamespace"></a>

```go
func NameWithNamespace() *string
```

- *Type:* *string

---

##### `OnlyAllowMergeIfAllDiscussionsAreResolved`<sup>Required</sup> <a name="OnlyAllowMergeIfAllDiscussionsAreResolved" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.property.onlyAllowMergeIfAllDiscussionsAreResolved"></a>

```go
func OnlyAllowMergeIfAllDiscussionsAreResolved() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `OnlyAllowMergeIfPipelineSucceeds`<sup>Required</sup> <a name="OnlyAllowMergeIfPipelineSucceeds" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.property.onlyAllowMergeIfPipelineSucceeds"></a>

```go
func OnlyAllowMergeIfPipelineSucceeds() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `OnlyMirrorProtectedBranches`<sup>Required</sup> <a name="OnlyMirrorProtectedBranches" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.property.onlyMirrorProtectedBranches"></a>

```go
func OnlyMirrorProtectedBranches() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `OpenIssuesCount`<sup>Required</sup> <a name="OpenIssuesCount" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.property.openIssuesCount"></a>

```go
func OpenIssuesCount() *f64
```

- *Type:* *f64

---

##### `OperationsAccessLevel`<sup>Required</sup> <a name="OperationsAccessLevel" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.property.operationsAccessLevel"></a>

```go
func OperationsAccessLevel() *string
```

- *Type:* *string

---

##### `Owner`<sup>Required</sup> <a name="Owner" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.property.owner"></a>

```go
func Owner() DataGitlabProjectsProjectsOwnerList
```

- *Type:* <a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOwnerList">DataGitlabProjectsProjectsOwnerList</a>

---

##### `PackagesEnabled`<sup>Required</sup> <a name="PackagesEnabled" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.property.packagesEnabled"></a>

```go
func PackagesEnabled() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.property.path"></a>

```go
func Path() *string
```

- *Type:* *string

---

##### `PathWithNamespace`<sup>Required</sup> <a name="PathWithNamespace" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.property.pathWithNamespace"></a>

```go
func PathWithNamespace() *string
```

- *Type:* *string

---

##### `Permissions`<sup>Required</sup> <a name="Permissions" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.property.permissions"></a>

```go
func Permissions() DataGitlabProjectsProjectsPermissionsList
```

- *Type:* <a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsPermissionsList">DataGitlabProjectsProjectsPermissionsList</a>

---

##### `Public`<sup>Required</sup> <a name="Public" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.property.public"></a>

```go
func Public() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `PublicBuilds`<sup>Required</sup> <a name="PublicBuilds" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.property.publicBuilds"></a>

```go
func PublicBuilds() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `ReadmeUrl`<sup>Required</sup> <a name="ReadmeUrl" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.property.readmeUrl"></a>

```go
func ReadmeUrl() *string
```

- *Type:* *string

---

##### `RepositoryAccessLevel`<sup>Required</sup> <a name="RepositoryAccessLevel" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.property.repositoryAccessLevel"></a>

```go
func RepositoryAccessLevel() *string
```

- *Type:* *string

---

##### `RepositoryStorage`<sup>Required</sup> <a name="RepositoryStorage" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.property.repositoryStorage"></a>

```go
func RepositoryStorage() *string
```

- *Type:* *string

---

##### `RequestAccessEnabled`<sup>Required</sup> <a name="RequestAccessEnabled" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.property.requestAccessEnabled"></a>

```go
func RequestAccessEnabled() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `RequirementsAccessLevel`<sup>Required</sup> <a name="RequirementsAccessLevel" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.property.requirementsAccessLevel"></a>

```go
func RequirementsAccessLevel() *string
```

- *Type:* *string

---

##### `ResolveOutdatedDiffDiscussions`<sup>Required</sup> <a name="ResolveOutdatedDiffDiscussions" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.property.resolveOutdatedDiffDiscussions"></a>

```go
func ResolveOutdatedDiffDiscussions() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `RestrictUserDefinedVariables`<sup>Required</sup> <a name="RestrictUserDefinedVariables" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.property.restrictUserDefinedVariables"></a>

```go
func RestrictUserDefinedVariables() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `RunnersToken`<sup>Required</sup> <a name="RunnersToken" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.property.runnersToken"></a>

```go
func RunnersToken() *string
```

- *Type:* *string

---

##### `SecurityAndComplianceAccessLevel`<sup>Required</sup> <a name="SecurityAndComplianceAccessLevel" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.property.securityAndComplianceAccessLevel"></a>

```go
func SecurityAndComplianceAccessLevel() *string
```

- *Type:* *string

---

##### `SharedRunnersEnabled`<sup>Required</sup> <a name="SharedRunnersEnabled" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.property.sharedRunnersEnabled"></a>

```go
func SharedRunnersEnabled() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `SharedWithGroups`<sup>Required</sup> <a name="SharedWithGroups" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.property.sharedWithGroups"></a>

```go
func SharedWithGroups() DataGitlabProjectsProjectsSharedWithGroupsList
```

- *Type:* <a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsSharedWithGroupsList">DataGitlabProjectsProjectsSharedWithGroupsList</a>

---

##### `SnippetsAccessLevel`<sup>Required</sup> <a name="SnippetsAccessLevel" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.property.snippetsAccessLevel"></a>

```go
func SnippetsAccessLevel() *string
```

- *Type:* *string

---

##### `SnippetsEnabled`<sup>Required</sup> <a name="SnippetsEnabled" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.property.snippetsEnabled"></a>

```go
func SnippetsEnabled() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `SquashCommitTemplate`<sup>Required</sup> <a name="SquashCommitTemplate" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.property.squashCommitTemplate"></a>

```go
func SquashCommitTemplate() *string
```

- *Type:* *string

---

##### `SshUrlToRepo`<sup>Required</sup> <a name="SshUrlToRepo" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.property.sshUrlToRepo"></a>

```go
func SshUrlToRepo() *string
```

- *Type:* *string

---

##### `StarCount`<sup>Required</sup> <a name="StarCount" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.property.starCount"></a>

```go
func StarCount() *f64
```

- *Type:* *f64

---

##### `Statistics`<sup>Required</sup> <a name="Statistics" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.property.statistics"></a>

```go
func Statistics() NumberMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.NumberMap

---

##### `SuggestionCommitMessage`<sup>Required</sup> <a name="SuggestionCommitMessage" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.property.suggestionCommitMessage"></a>

```go
func SuggestionCommitMessage() *string
```

- *Type:* *string

---

##### `TagList`<sup>Required</sup> <a name="TagList" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.property.tagList"></a>

```go
func TagList() *[]*string
```

- *Type:* *[]*string

---

##### `Topics`<sup>Required</sup> <a name="Topics" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.property.topics"></a>

```go
func Topics() *[]*string
```

- *Type:* *[]*string

---

##### `Visibility`<sup>Required</sup> <a name="Visibility" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.property.visibility"></a>

```go
func Visibility() *string
```

- *Type:* *string

---

##### `WebUrl`<sup>Required</sup> <a name="WebUrl" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.property.webUrl"></a>

```go
func WebUrl() *string
```

- *Type:* *string

---

##### `WikiAccessLevel`<sup>Required</sup> <a name="WikiAccessLevel" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.property.wikiAccessLevel"></a>

```go
func WikiAccessLevel() *string
```

- *Type:* *string

---

##### `WikiEnabled`<sup>Required</sup> <a name="WikiEnabled" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.property.wikiEnabled"></a>

```go
func WikiEnabled() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataGitlabProjectsProjects
```

- *Type:* <a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjects">DataGitlabProjectsProjects</a>

---


### DataGitlabProjectsProjectsOwnerList <a name="DataGitlabProjectsProjectsOwnerList" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOwnerList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOwnerList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-gitlab-go/gitlab/datagitlabprojects"

datagitlabprojects.NewDataGitlabProjectsProjectsOwnerList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataGitlabProjectsProjectsOwnerList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOwnerList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOwnerList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOwnerList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOwnerList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOwnerList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOwnerList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOwnerList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOwnerList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOwnerList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOwnerList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOwnerList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOwnerList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOwnerList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOwnerList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOwnerList.get"></a>

```go
func Get(index *f64) DataGitlabProjectsProjectsOwnerOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOwnerList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOwnerList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOwnerList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOwnerList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOwnerList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataGitlabProjectsProjectsOwnerOutputReference <a name="DataGitlabProjectsProjectsOwnerOutputReference" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOwnerOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOwnerOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-gitlab-go/gitlab/datagitlabprojects"

datagitlabprojects.NewDataGitlabProjectsProjectsOwnerOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataGitlabProjectsProjectsOwnerOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOwnerOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOwnerOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOwnerOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOwnerOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOwnerOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOwnerOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOwnerOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOwnerOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOwnerOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOwnerOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOwnerOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOwnerOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOwnerOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOwnerOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOwnerOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOwnerOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOwnerOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOwnerOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOwnerOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOwnerOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOwnerOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOwnerOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOwnerOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOwnerOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOwnerOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOwnerOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOwnerOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOwnerOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOwnerOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOwnerOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOwnerOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOwnerOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOwnerOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOwnerOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOwnerOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOwnerOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOwnerOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOwnerOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOwnerOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOwnerOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOwnerOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOwnerOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOwnerOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOwnerOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOwnerOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOwnerOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOwnerOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOwnerOutputReference.property.avatarUrl">AvatarUrl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOwnerOutputReference.property.id">Id</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOwnerOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOwnerOutputReference.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOwnerOutputReference.property.username">Username</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOwnerOutputReference.property.websiteUrl">WebsiteUrl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOwnerOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOwner">DataGitlabProjectsProjectsOwner</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOwnerOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOwnerOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AvatarUrl`<sup>Required</sup> <a name="AvatarUrl" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOwnerOutputReference.property.avatarUrl"></a>

```go
func AvatarUrl() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOwnerOutputReference.property.id"></a>

```go
func Id() *f64
```

- *Type:* *f64

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOwnerOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOwnerOutputReference.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `Username`<sup>Required</sup> <a name="Username" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOwnerOutputReference.property.username"></a>

```go
func Username() *string
```

- *Type:* *string

---

##### `WebsiteUrl`<sup>Required</sup> <a name="WebsiteUrl" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOwnerOutputReference.property.websiteUrl"></a>

```go
func WebsiteUrl() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOwnerOutputReference.property.internalValue"></a>

```go
func InternalValue() DataGitlabProjectsProjectsOwner
```

- *Type:* <a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOwner">DataGitlabProjectsProjectsOwner</a>

---


### DataGitlabProjectsProjectsPermissionsList <a name="DataGitlabProjectsProjectsPermissionsList" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsPermissionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsPermissionsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-gitlab-go/gitlab/datagitlabprojects"

datagitlabprojects.NewDataGitlabProjectsProjectsPermissionsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataGitlabProjectsProjectsPermissionsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsPermissionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsPermissionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsPermissionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsPermissionsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsPermissionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsPermissionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsPermissionsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsPermissionsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsPermissionsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsPermissionsList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsPermissionsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsPermissionsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsPermissionsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsPermissionsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsPermissionsList.get"></a>

```go
func Get(index *f64) DataGitlabProjectsProjectsPermissionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsPermissionsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsPermissionsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsPermissionsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsPermissionsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsPermissionsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataGitlabProjectsProjectsPermissionsOutputReference <a name="DataGitlabProjectsProjectsPermissionsOutputReference" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsPermissionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsPermissionsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-gitlab-go/gitlab/datagitlabprojects"

datagitlabprojects.NewDataGitlabProjectsProjectsPermissionsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataGitlabProjectsProjectsPermissionsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsPermissionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsPermissionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsPermissionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsPermissionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsPermissionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsPermissionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsPermissionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsPermissionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsPermissionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsPermissionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsPermissionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsPermissionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsPermissionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsPermissionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsPermissionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsPermissionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsPermissionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsPermissionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsPermissionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsPermissionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsPermissionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsPermissionsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsPermissionsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsPermissionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsPermissionsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsPermissionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsPermissionsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsPermissionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsPermissionsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsPermissionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsPermissionsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsPermissionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsPermissionsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsPermissionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsPermissionsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsPermissionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsPermissionsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsPermissionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsPermissionsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsPermissionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsPermissionsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsPermissionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsPermissionsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsPermissionsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsPermissionsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsPermissionsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsPermissionsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsPermissionsOutputReference.property.groupAccess">GroupAccess</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.NumberMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsPermissionsOutputReference.property.projectAccess">ProjectAccess</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.NumberMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsPermissionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsPermissions">DataGitlabProjectsProjectsPermissions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsPermissionsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsPermissionsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `GroupAccess`<sup>Required</sup> <a name="GroupAccess" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsPermissionsOutputReference.property.groupAccess"></a>

```go
func GroupAccess() NumberMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.NumberMap

---

##### `ProjectAccess`<sup>Required</sup> <a name="ProjectAccess" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsPermissionsOutputReference.property.projectAccess"></a>

```go
func ProjectAccess() NumberMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.NumberMap

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsPermissionsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataGitlabProjectsProjectsPermissions
```

- *Type:* <a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsPermissions">DataGitlabProjectsProjectsPermissions</a>

---


### DataGitlabProjectsProjectsSharedWithGroupsList <a name="DataGitlabProjectsProjectsSharedWithGroupsList" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsSharedWithGroupsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsSharedWithGroupsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-gitlab-go/gitlab/datagitlabprojects"

datagitlabprojects.NewDataGitlabProjectsProjectsSharedWithGroupsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataGitlabProjectsProjectsSharedWithGroupsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsSharedWithGroupsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsSharedWithGroupsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsSharedWithGroupsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsSharedWithGroupsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsSharedWithGroupsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsSharedWithGroupsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsSharedWithGroupsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsSharedWithGroupsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsSharedWithGroupsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsSharedWithGroupsList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsSharedWithGroupsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsSharedWithGroupsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsSharedWithGroupsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsSharedWithGroupsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsSharedWithGroupsList.get"></a>

```go
func Get(index *f64) DataGitlabProjectsProjectsSharedWithGroupsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsSharedWithGroupsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsSharedWithGroupsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsSharedWithGroupsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsSharedWithGroupsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsSharedWithGroupsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataGitlabProjectsProjectsSharedWithGroupsOutputReference <a name="DataGitlabProjectsProjectsSharedWithGroupsOutputReference" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsSharedWithGroupsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsSharedWithGroupsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-gitlab-go/gitlab/datagitlabprojects"

datagitlabprojects.NewDataGitlabProjectsProjectsSharedWithGroupsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataGitlabProjectsProjectsSharedWithGroupsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsSharedWithGroupsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsSharedWithGroupsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsSharedWithGroupsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsSharedWithGroupsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsSharedWithGroupsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsSharedWithGroupsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsSharedWithGroupsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsSharedWithGroupsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsSharedWithGroupsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsSharedWithGroupsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsSharedWithGroupsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsSharedWithGroupsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsSharedWithGroupsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsSharedWithGroupsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsSharedWithGroupsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsSharedWithGroupsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsSharedWithGroupsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsSharedWithGroupsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsSharedWithGroupsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsSharedWithGroupsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsSharedWithGroupsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsSharedWithGroupsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsSharedWithGroupsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsSharedWithGroupsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsSharedWithGroupsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsSharedWithGroupsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsSharedWithGroupsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsSharedWithGroupsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsSharedWithGroupsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsSharedWithGroupsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsSharedWithGroupsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsSharedWithGroupsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsSharedWithGroupsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsSharedWithGroupsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsSharedWithGroupsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsSharedWithGroupsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsSharedWithGroupsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsSharedWithGroupsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsSharedWithGroupsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsSharedWithGroupsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsSharedWithGroupsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsSharedWithGroupsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsSharedWithGroupsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsSharedWithGroupsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsSharedWithGroupsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsSharedWithGroupsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsSharedWithGroupsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsSharedWithGroupsOutputReference.property.groupAccessLevel">GroupAccessLevel</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsSharedWithGroupsOutputReference.property.groupId">GroupId</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsSharedWithGroupsOutputReference.property.groupName">GroupName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsSharedWithGroupsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsSharedWithGroups">DataGitlabProjectsProjectsSharedWithGroups</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsSharedWithGroupsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsSharedWithGroupsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `GroupAccessLevel`<sup>Required</sup> <a name="GroupAccessLevel" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsSharedWithGroupsOutputReference.property.groupAccessLevel"></a>

```go
func GroupAccessLevel() *string
```

- *Type:* *string

---

##### `GroupId`<sup>Required</sup> <a name="GroupId" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsSharedWithGroupsOutputReference.property.groupId"></a>

```go
func GroupId() *f64
```

- *Type:* *f64

---

##### `GroupName`<sup>Required</sup> <a name="GroupName" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsSharedWithGroupsOutputReference.property.groupName"></a>

```go
func GroupName() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsSharedWithGroupsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataGitlabProjectsProjectsSharedWithGroups
```

- *Type:* <a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsSharedWithGroups">DataGitlabProjectsProjectsSharedWithGroups</a>

---



