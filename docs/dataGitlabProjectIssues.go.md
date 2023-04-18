# `data_gitlab_project_issues`

Refer to the Terraform Registory for docs: [`data_gitlab_project_issues`](https://www.terraform.io/docs/providers/gitlab/d/project_issues).

# `dataGitlabProjectIssues` Submodule <a name="`dataGitlabProjectIssues` Submodule" id="@cdktf/provider-gitlab.dataGitlabProjectIssues"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataGitlabProjectIssues <a name="DataGitlabProjectIssues" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues"></a>

Represents a {@link https://www.terraform.io/docs/providers/gitlab/d/project_issues gitlab_project_issues}.

#### Initializers <a name="Initializers" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-gitlab-go/gitlab/v7/datagitlabprojectissues"

datagitlabprojectissues.NewDataGitlabProjectIssues(scope Construct, id *string, config DataGitlabProjectIssuesConfig) DataGitlabProjectIssues
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesConfig">DataGitlabProjectIssuesConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesConfig">DataGitlabProjectIssuesConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.resetAssigneeId">ResetAssigneeId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.resetAssigneeUsername">ResetAssigneeUsername</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.resetAuthorId">ResetAuthorId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.resetConfidential">ResetConfidential</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.resetCreatedAfter">ResetCreatedAfter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.resetCreatedBefore">ResetCreatedBefore</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.resetDueDate">ResetDueDate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.resetIids">ResetIids</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.resetIssueType">ResetIssueType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.resetLabels">ResetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.resetMilestone">ResetMilestone</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.resetMyReactionEmoji">ResetMyReactionEmoji</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.resetNotAssigneeId">ResetNotAssigneeId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.resetNotAuthorId">ResetNotAuthorId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.resetNotLabels">ResetNotLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.resetNotMilestone">ResetNotMilestone</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.resetNotMyReactionEmoji">ResetNotMyReactionEmoji</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.resetOrderBy">ResetOrderBy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.resetScope">ResetScope</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.resetSearch">ResetSearch</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.resetSort">ResetSort</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.resetUpdatedAfter">ResetUpdatedAfter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.resetUpdatedBefore">ResetUpdatedBefore</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.resetWeight">ResetWeight</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.resetWithLabelsDetails">ResetWithLabelsDetails</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ResetAssigneeId` <a name="ResetAssigneeId" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.resetAssigneeId"></a>

```go
func ResetAssigneeId()
```

##### `ResetAssigneeUsername` <a name="ResetAssigneeUsername" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.resetAssigneeUsername"></a>

```go
func ResetAssigneeUsername()
```

##### `ResetAuthorId` <a name="ResetAuthorId" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.resetAuthorId"></a>

```go
func ResetAuthorId()
```

##### `ResetConfidential` <a name="ResetConfidential" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.resetConfidential"></a>

```go
func ResetConfidential()
```

##### `ResetCreatedAfter` <a name="ResetCreatedAfter" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.resetCreatedAfter"></a>

```go
func ResetCreatedAfter()
```

##### `ResetCreatedBefore` <a name="ResetCreatedBefore" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.resetCreatedBefore"></a>

```go
func ResetCreatedBefore()
```

##### `ResetDueDate` <a name="ResetDueDate" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.resetDueDate"></a>

```go
func ResetDueDate()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.resetId"></a>

```go
func ResetId()
```

##### `ResetIids` <a name="ResetIids" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.resetIids"></a>

```go
func ResetIids()
```

##### `ResetIssueType` <a name="ResetIssueType" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.resetIssueType"></a>

```go
func ResetIssueType()
```

##### `ResetLabels` <a name="ResetLabels" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.resetLabels"></a>

```go
func ResetLabels()
```

##### `ResetMilestone` <a name="ResetMilestone" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.resetMilestone"></a>

```go
func ResetMilestone()
```

##### `ResetMyReactionEmoji` <a name="ResetMyReactionEmoji" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.resetMyReactionEmoji"></a>

```go
func ResetMyReactionEmoji()
```

##### `ResetNotAssigneeId` <a name="ResetNotAssigneeId" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.resetNotAssigneeId"></a>

```go
func ResetNotAssigneeId()
```

##### `ResetNotAuthorId` <a name="ResetNotAuthorId" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.resetNotAuthorId"></a>

```go
func ResetNotAuthorId()
```

##### `ResetNotLabels` <a name="ResetNotLabels" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.resetNotLabels"></a>

```go
func ResetNotLabels()
```

##### `ResetNotMilestone` <a name="ResetNotMilestone" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.resetNotMilestone"></a>

```go
func ResetNotMilestone()
```

##### `ResetNotMyReactionEmoji` <a name="ResetNotMyReactionEmoji" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.resetNotMyReactionEmoji"></a>

```go
func ResetNotMyReactionEmoji()
```

##### `ResetOrderBy` <a name="ResetOrderBy" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.resetOrderBy"></a>

```go
func ResetOrderBy()
```

##### `ResetScope` <a name="ResetScope" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.resetScope"></a>

```go
func ResetScope()
```

##### `ResetSearch` <a name="ResetSearch" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.resetSearch"></a>

```go
func ResetSearch()
```

##### `ResetSort` <a name="ResetSort" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.resetSort"></a>

```go
func ResetSort()
```

##### `ResetUpdatedAfter` <a name="ResetUpdatedAfter" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.resetUpdatedAfter"></a>

```go
func ResetUpdatedAfter()
```

##### `ResetUpdatedBefore` <a name="ResetUpdatedBefore" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.resetUpdatedBefore"></a>

```go
func ResetUpdatedBefore()
```

##### `ResetWeight` <a name="ResetWeight" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.resetWeight"></a>

```go
func ResetWeight()
```

##### `ResetWithLabelsDetails` <a name="ResetWithLabelsDetails" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.resetWithLabelsDetails"></a>

```go
func ResetWithLabelsDetails()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-gitlab-go/gitlab/v7/datagitlabprojectissues"

datagitlabprojectissues.DataGitlabProjectIssues_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-gitlab-go/gitlab/v7/datagitlabprojectissues"

datagitlabprojectissues.DataGitlabProjectIssues_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.isTerraformDataSource"></a>

```go
import "github.com/cdktf/cdktf-provider-gitlab-go/gitlab/v7/datagitlabprojectissues"

datagitlabprojectissues.DataGitlabProjectIssues_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.property.issues">Issues</a></code> | <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesList">DataGitlabProjectIssuesIssuesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.property.assigneeIdInput">AssigneeIdInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.property.assigneeUsernameInput">AssigneeUsernameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.property.authorIdInput">AuthorIdInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.property.confidentialInput">ConfidentialInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.property.createdAfterInput">CreatedAfterInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.property.createdBeforeInput">CreatedBeforeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.property.dueDateInput">DueDateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.property.iidsInput">IidsInput</a></code> | <code>*[]*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.property.issueTypeInput">IssueTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.property.labelsInput">LabelsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.property.milestoneInput">MilestoneInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.property.myReactionEmojiInput">MyReactionEmojiInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.property.notAssigneeIdInput">NotAssigneeIdInput</a></code> | <code>*[]*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.property.notAuthorIdInput">NotAuthorIdInput</a></code> | <code>*[]*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.property.notLabelsInput">NotLabelsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.property.notMilestoneInput">NotMilestoneInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.property.notMyReactionEmojiInput">NotMyReactionEmojiInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.property.orderByInput">OrderByInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.property.projectInput">ProjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.property.scopeInput">ScopeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.property.searchInput">SearchInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.property.sortInput">SortInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.property.updatedAfterInput">UpdatedAfterInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.property.updatedBeforeInput">UpdatedBeforeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.property.weightInput">WeightInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.property.withLabelsDetailsInput">WithLabelsDetailsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.property.assigneeId">AssigneeId</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.property.assigneeUsername">AssigneeUsername</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.property.authorId">AuthorId</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.property.confidential">Confidential</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.property.createdAfter">CreatedAfter</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.property.createdBefore">CreatedBefore</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.property.dueDate">DueDate</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.property.iids">Iids</a></code> | <code>*[]*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.property.issueType">IssueType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.property.labels">Labels</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.property.milestone">Milestone</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.property.myReactionEmoji">MyReactionEmoji</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.property.notAssigneeId">NotAssigneeId</a></code> | <code>*[]*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.property.notAuthorId">NotAuthorId</a></code> | <code>*[]*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.property.notLabels">NotLabels</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.property.notMilestone">NotMilestone</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.property.notMyReactionEmoji">NotMyReactionEmoji</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.property.orderBy">OrderBy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.property.project">Project</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.property.scope">Scope</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.property.search">Search</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.property.sort">Sort</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.property.updatedAfter">UpdatedAfter</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.property.updatedBefore">UpdatedBefore</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.property.weight">Weight</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.property.withLabelsDetails">WithLabelsDetails</a></code> | <code>interface{}</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.property.count"></a>

```go
func Count() *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Issues`<sup>Required</sup> <a name="Issues" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.property.issues"></a>

```go
func Issues() DataGitlabProjectIssuesIssuesList
```

- *Type:* <a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesList">DataGitlabProjectIssuesIssuesList</a>

---

##### `AssigneeIdInput`<sup>Optional</sup> <a name="AssigneeIdInput" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.property.assigneeIdInput"></a>

```go
func AssigneeIdInput() *f64
```

- *Type:* *f64

---

##### `AssigneeUsernameInput`<sup>Optional</sup> <a name="AssigneeUsernameInput" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.property.assigneeUsernameInput"></a>

```go
func AssigneeUsernameInput() *string
```

- *Type:* *string

---

##### `AuthorIdInput`<sup>Optional</sup> <a name="AuthorIdInput" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.property.authorIdInput"></a>

```go
func AuthorIdInput() *f64
```

- *Type:* *f64

---

##### `ConfidentialInput`<sup>Optional</sup> <a name="ConfidentialInput" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.property.confidentialInput"></a>

```go
func ConfidentialInput() interface{}
```

- *Type:* interface{}

---

##### `CreatedAfterInput`<sup>Optional</sup> <a name="CreatedAfterInput" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.property.createdAfterInput"></a>

```go
func CreatedAfterInput() *string
```

- *Type:* *string

---

##### `CreatedBeforeInput`<sup>Optional</sup> <a name="CreatedBeforeInput" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.property.createdBeforeInput"></a>

```go
func CreatedBeforeInput() *string
```

- *Type:* *string

---

##### `DueDateInput`<sup>Optional</sup> <a name="DueDateInput" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.property.dueDateInput"></a>

```go
func DueDateInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `IidsInput`<sup>Optional</sup> <a name="IidsInput" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.property.iidsInput"></a>

```go
func IidsInput() *[]*f64
```

- *Type:* *[]*f64

---

##### `IssueTypeInput`<sup>Optional</sup> <a name="IssueTypeInput" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.property.issueTypeInput"></a>

```go
func IssueTypeInput() *string
```

- *Type:* *string

---

##### `LabelsInput`<sup>Optional</sup> <a name="LabelsInput" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.property.labelsInput"></a>

```go
func LabelsInput() *[]*string
```

- *Type:* *[]*string

---

##### `MilestoneInput`<sup>Optional</sup> <a name="MilestoneInput" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.property.milestoneInput"></a>

```go
func MilestoneInput() *string
```

- *Type:* *string

---

##### `MyReactionEmojiInput`<sup>Optional</sup> <a name="MyReactionEmojiInput" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.property.myReactionEmojiInput"></a>

```go
func MyReactionEmojiInput() *string
```

- *Type:* *string

---

##### `NotAssigneeIdInput`<sup>Optional</sup> <a name="NotAssigneeIdInput" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.property.notAssigneeIdInput"></a>

```go
func NotAssigneeIdInput() *[]*f64
```

- *Type:* *[]*f64

---

##### `NotAuthorIdInput`<sup>Optional</sup> <a name="NotAuthorIdInput" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.property.notAuthorIdInput"></a>

```go
func NotAuthorIdInput() *[]*f64
```

- *Type:* *[]*f64

---

##### `NotLabelsInput`<sup>Optional</sup> <a name="NotLabelsInput" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.property.notLabelsInput"></a>

```go
func NotLabelsInput() *[]*string
```

- *Type:* *[]*string

---

##### `NotMilestoneInput`<sup>Optional</sup> <a name="NotMilestoneInput" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.property.notMilestoneInput"></a>

```go
func NotMilestoneInput() *string
```

- *Type:* *string

---

##### `NotMyReactionEmojiInput`<sup>Optional</sup> <a name="NotMyReactionEmojiInput" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.property.notMyReactionEmojiInput"></a>

```go
func NotMyReactionEmojiInput() *[]*string
```

- *Type:* *[]*string

---

##### `OrderByInput`<sup>Optional</sup> <a name="OrderByInput" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.property.orderByInput"></a>

```go
func OrderByInput() *string
```

- *Type:* *string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.property.projectInput"></a>

```go
func ProjectInput() *string
```

- *Type:* *string

---

##### `ScopeInput`<sup>Optional</sup> <a name="ScopeInput" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.property.scopeInput"></a>

```go
func ScopeInput() *string
```

- *Type:* *string

---

##### `SearchInput`<sup>Optional</sup> <a name="SearchInput" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.property.searchInput"></a>

```go
func SearchInput() *string
```

- *Type:* *string

---

##### `SortInput`<sup>Optional</sup> <a name="SortInput" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.property.sortInput"></a>

```go
func SortInput() *string
```

- *Type:* *string

---

##### `UpdatedAfterInput`<sup>Optional</sup> <a name="UpdatedAfterInput" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.property.updatedAfterInput"></a>

```go
func UpdatedAfterInput() *string
```

- *Type:* *string

---

##### `UpdatedBeforeInput`<sup>Optional</sup> <a name="UpdatedBeforeInput" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.property.updatedBeforeInput"></a>

```go
func UpdatedBeforeInput() *string
```

- *Type:* *string

---

##### `WeightInput`<sup>Optional</sup> <a name="WeightInput" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.property.weightInput"></a>

```go
func WeightInput() *f64
```

- *Type:* *f64

---

##### `WithLabelsDetailsInput`<sup>Optional</sup> <a name="WithLabelsDetailsInput" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.property.withLabelsDetailsInput"></a>

```go
func WithLabelsDetailsInput() interface{}
```

- *Type:* interface{}

---

##### `AssigneeId`<sup>Required</sup> <a name="AssigneeId" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.property.assigneeId"></a>

```go
func AssigneeId() *f64
```

- *Type:* *f64

---

##### `AssigneeUsername`<sup>Required</sup> <a name="AssigneeUsername" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.property.assigneeUsername"></a>

```go
func AssigneeUsername() *string
```

- *Type:* *string

---

##### `AuthorId`<sup>Required</sup> <a name="AuthorId" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.property.authorId"></a>

```go
func AuthorId() *f64
```

- *Type:* *f64

---

##### `Confidential`<sup>Required</sup> <a name="Confidential" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.property.confidential"></a>

```go
func Confidential() interface{}
```

- *Type:* interface{}

---

##### `CreatedAfter`<sup>Required</sup> <a name="CreatedAfter" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.property.createdAfter"></a>

```go
func CreatedAfter() *string
```

- *Type:* *string

---

##### `CreatedBefore`<sup>Required</sup> <a name="CreatedBefore" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.property.createdBefore"></a>

```go
func CreatedBefore() *string
```

- *Type:* *string

---

##### `DueDate`<sup>Required</sup> <a name="DueDate" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.property.dueDate"></a>

```go
func DueDate() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Iids`<sup>Required</sup> <a name="Iids" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.property.iids"></a>

```go
func Iids() *[]*f64
```

- *Type:* *[]*f64

---

##### `IssueType`<sup>Required</sup> <a name="IssueType" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.property.issueType"></a>

```go
func IssueType() *string
```

- *Type:* *string

---

##### `Labels`<sup>Required</sup> <a name="Labels" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.property.labels"></a>

```go
func Labels() *[]*string
```

- *Type:* *[]*string

---

##### `Milestone`<sup>Required</sup> <a name="Milestone" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.property.milestone"></a>

```go
func Milestone() *string
```

- *Type:* *string

---

##### `MyReactionEmoji`<sup>Required</sup> <a name="MyReactionEmoji" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.property.myReactionEmoji"></a>

```go
func MyReactionEmoji() *string
```

- *Type:* *string

---

##### `NotAssigneeId`<sup>Required</sup> <a name="NotAssigneeId" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.property.notAssigneeId"></a>

```go
func NotAssigneeId() *[]*f64
```

- *Type:* *[]*f64

---

##### `NotAuthorId`<sup>Required</sup> <a name="NotAuthorId" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.property.notAuthorId"></a>

```go
func NotAuthorId() *[]*f64
```

- *Type:* *[]*f64

---

##### `NotLabels`<sup>Required</sup> <a name="NotLabels" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.property.notLabels"></a>

```go
func NotLabels() *[]*string
```

- *Type:* *[]*string

---

##### `NotMilestone`<sup>Required</sup> <a name="NotMilestone" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.property.notMilestone"></a>

```go
func NotMilestone() *string
```

- *Type:* *string

---

##### `NotMyReactionEmoji`<sup>Required</sup> <a name="NotMyReactionEmoji" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.property.notMyReactionEmoji"></a>

```go
func NotMyReactionEmoji() *[]*string
```

- *Type:* *[]*string

---

##### `OrderBy`<sup>Required</sup> <a name="OrderBy" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.property.orderBy"></a>

```go
func OrderBy() *string
```

- *Type:* *string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.property.project"></a>

```go
func Project() *string
```

- *Type:* *string

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.property.scope"></a>

```go
func Scope() *string
```

- *Type:* *string

---

##### `Search`<sup>Required</sup> <a name="Search" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.property.search"></a>

```go
func Search() *string
```

- *Type:* *string

---

##### `Sort`<sup>Required</sup> <a name="Sort" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.property.sort"></a>

```go
func Sort() *string
```

- *Type:* *string

---

##### `UpdatedAfter`<sup>Required</sup> <a name="UpdatedAfter" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.property.updatedAfter"></a>

```go
func UpdatedAfter() *string
```

- *Type:* *string

---

##### `UpdatedBefore`<sup>Required</sup> <a name="UpdatedBefore" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.property.updatedBefore"></a>

```go
func UpdatedBefore() *string
```

- *Type:* *string

---

##### `Weight`<sup>Required</sup> <a name="Weight" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.property.weight"></a>

```go
func Weight() *f64
```

- *Type:* *f64

---

##### `WithLabelsDetails`<sup>Required</sup> <a name="WithLabelsDetails" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.property.withLabelsDetails"></a>

```go
func WithLabelsDetails() interface{}
```

- *Type:* interface{}

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataGitlabProjectIssuesConfig <a name="DataGitlabProjectIssuesConfig" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-gitlab-go/gitlab/v7/datagitlabprojectissues"

&datagitlabprojectissues.DataGitlabProjectIssuesConfig {
	Connection: interface{},
	Count: *f64,
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Project: *string,
	AssigneeId: *f64,
	AssigneeUsername: *string,
	AuthorId: *f64,
	Confidential: interface{},
	CreatedAfter: *string,
	CreatedBefore: *string,
	DueDate: *string,
	Id: *string,
	Iids: *[]*f64,
	IssueType: *string,
	Labels: *[]*string,
	Milestone: *string,
	MyReactionEmoji: *string,
	NotAssigneeId: *[]*f64,
	NotAuthorId: *[]*f64,
	NotLabels: *[]*string,
	NotMilestone: *string,
	NotMyReactionEmoji: *[]*string,
	OrderBy: *string,
	Scope: *string,
	Search: *string,
	Sort: *string,
	UpdatedAfter: *string,
	UpdatedBefore: *string,
	Weight: *f64,
	WithLabelsDetails: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesConfig.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesConfig.property.project">Project</a></code> | <code>*string</code> | The name or id of the project. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesConfig.property.assigneeId">AssigneeId</a></code> | <code>*f64</code> | Return issues assigned to the given user id. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesConfig.property.assigneeUsername">AssigneeUsername</a></code> | <code>*string</code> | Return issues assigned to the given username. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesConfig.property.authorId">AuthorId</a></code> | <code>*f64</code> | Return issues created by the given user id. Combine with scope=all or scope=assigned_to_me. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesConfig.property.confidential">Confidential</a></code> | <code>interface{}</code> | Filter confidential or public issues. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesConfig.property.createdAfter">CreatedAfter</a></code> | <code>*string</code> | Return issues created on or after the given time. Expected in ISO 8601 format (2019-03-15T08:00:00Z). |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesConfig.property.createdBefore">CreatedBefore</a></code> | <code>*string</code> | Return issues created on or before the given time. Expected in ISO 8601 format (2019-03-15T08:00:00Z). |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesConfig.property.dueDate">DueDate</a></code> | <code>*string</code> | Return issues that have no due date, are overdue, or whose due date is this week, this month, or between two weeks ago and next month. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/gitlab/d/project_issues#id DataGitlabProjectIssues#id}. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesConfig.property.iids">Iids</a></code> | <code>*[]*f64</code> | Return only the issues having the given iid. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesConfig.property.issueType">IssueType</a></code> | <code>*string</code> | Filter to a given type of issue. Valid values are [issue incident test_case]. (Introduced in GitLab 13.12). |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesConfig.property.labels">Labels</a></code> | <code>*[]*string</code> | Return issues with labels. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesConfig.property.milestone">Milestone</a></code> | <code>*string</code> | The milestone title. None lists all issues with no milestone. Any lists all issues that have an assigned milestone. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesConfig.property.myReactionEmoji">MyReactionEmoji</a></code> | <code>*string</code> | Return issues reacted by the authenticated user by the given emoji. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesConfig.property.notAssigneeId">NotAssigneeId</a></code> | <code>*[]*f64</code> | Return issues that do not match the assignee id. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesConfig.property.notAuthorId">NotAuthorId</a></code> | <code>*[]*f64</code> | Return issues that do not match the author id. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesConfig.property.notLabels">NotLabels</a></code> | <code>*[]*string</code> | Return issues that do not match the labels. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesConfig.property.notMilestone">NotMilestone</a></code> | <code>*string</code> | Return issues that do not match the milestone. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesConfig.property.notMyReactionEmoji">NotMyReactionEmoji</a></code> | <code>*[]*string</code> | Return issues not reacted by the authenticated user by the given emoji. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesConfig.property.orderBy">OrderBy</a></code> | <code>*string</code> | Return issues ordered by. Valid values are `created_at`, `updated_at`, `priority`, `due_date`, `relative_position`, `label_priority`, `milestone_due`, `popularity`, `weight`. Default is created_at. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesConfig.property.scope">Scope</a></code> | <code>*string</code> | Return issues for the given scope. Valid values are `created_by_me`, `assigned_to_me`, `all`. Defaults to all. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesConfig.property.search">Search</a></code> | <code>*string</code> | Search project issues against their title and description. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesConfig.property.sort">Sort</a></code> | <code>*string</code> | Return issues sorted in asc or desc order. Default is desc. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesConfig.property.updatedAfter">UpdatedAfter</a></code> | <code>*string</code> | Return issues updated on or after the given time. Expected in ISO 8601 format (2019-03-15T08:00:00Z). |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesConfig.property.updatedBefore">UpdatedBefore</a></code> | <code>*string</code> | Return issues updated on or before the given time. Expected in ISO 8601 format (2019-03-15T08:00:00Z). |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesConfig.property.weight">Weight</a></code> | <code>*f64</code> | Return issues with the specified weight. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesConfig.property.withLabelsDetails">WithLabelsDetails</a></code> | <code>interface{}</code> | If true, the response returns more details for each label in labels field: :name, :color, :description, :description_html, :text_color. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesConfig.property.count"></a>

```go
Count *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesConfig.property.project"></a>

```go
Project *string
```

- *Type:* *string

The name or id of the project.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/gitlab/d/project_issues#project DataGitlabProjectIssues#project}

---

##### `AssigneeId`<sup>Optional</sup> <a name="AssigneeId" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesConfig.property.assigneeId"></a>

```go
AssigneeId *f64
```

- *Type:* *f64

Return issues assigned to the given user id.

Mutually exclusive with assignee_username. None returns unassigned issues. Any returns issues with an assignee.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/gitlab/d/project_issues#assignee_id DataGitlabProjectIssues#assignee_id}

---

##### `AssigneeUsername`<sup>Optional</sup> <a name="AssigneeUsername" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesConfig.property.assigneeUsername"></a>

```go
AssigneeUsername *string
```

- *Type:* *string

Return issues assigned to the given username.

Similar to assignee_id and mutually exclusive with assignee_id. In GitLab CE, the assignee_username array should only contain a single value. Otherwise, an invalid parameter error is returned.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/gitlab/d/project_issues#assignee_username DataGitlabProjectIssues#assignee_username}

---

##### `AuthorId`<sup>Optional</sup> <a name="AuthorId" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesConfig.property.authorId"></a>

```go
AuthorId *f64
```

- *Type:* *f64

Return issues created by the given user id. Combine with scope=all or scope=assigned_to_me.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/gitlab/d/project_issues#author_id DataGitlabProjectIssues#author_id}

---

##### `Confidential`<sup>Optional</sup> <a name="Confidential" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesConfig.property.confidential"></a>

```go
Confidential interface{}
```

- *Type:* interface{}

Filter confidential or public issues.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/gitlab/d/project_issues#confidential DataGitlabProjectIssues#confidential}

---

##### `CreatedAfter`<sup>Optional</sup> <a name="CreatedAfter" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesConfig.property.createdAfter"></a>

```go
CreatedAfter *string
```

- *Type:* *string

Return issues created on or after the given time. Expected in ISO 8601 format (2019-03-15T08:00:00Z).

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/gitlab/d/project_issues#created_after DataGitlabProjectIssues#created_after}

---

##### `CreatedBefore`<sup>Optional</sup> <a name="CreatedBefore" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesConfig.property.createdBefore"></a>

```go
CreatedBefore *string
```

- *Type:* *string

Return issues created on or before the given time. Expected in ISO 8601 format (2019-03-15T08:00:00Z).

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/gitlab/d/project_issues#created_before DataGitlabProjectIssues#created_before}

---

##### `DueDate`<sup>Optional</sup> <a name="DueDate" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesConfig.property.dueDate"></a>

```go
DueDate *string
```

- *Type:* *string

Return issues that have no due date, are overdue, or whose due date is this week, this month, or between two weeks ago and next month.

Accepts: 0 (no due date), any, today, tomorrow, overdue, week, month, next_month_and_previous_two_weeks.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/gitlab/d/project_issues#due_date DataGitlabProjectIssues#due_date}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/gitlab/d/project_issues#id DataGitlabProjectIssues#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Iids`<sup>Optional</sup> <a name="Iids" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesConfig.property.iids"></a>

```go
Iids *[]*f64
```

- *Type:* *[]*f64

Return only the issues having the given iid.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/gitlab/d/project_issues#iids DataGitlabProjectIssues#iids}

---

##### `IssueType`<sup>Optional</sup> <a name="IssueType" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesConfig.property.issueType"></a>

```go
IssueType *string
```

- *Type:* *string

Filter to a given type of issue. Valid values are [issue incident test_case]. (Introduced in GitLab 13.12).

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/gitlab/d/project_issues#issue_type DataGitlabProjectIssues#issue_type}

---

##### `Labels`<sup>Optional</sup> <a name="Labels" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesConfig.property.labels"></a>

```go
Labels *[]*string
```

- *Type:* *[]*string

Return issues with labels.

Issues must have all labels to be returned. None lists all issues with no labels. Any lists all issues with at least one label. No+Label (Deprecated) lists all issues with no labels. Predefined names are case-insensitive.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/gitlab/d/project_issues#labels DataGitlabProjectIssues#labels}

---

##### `Milestone`<sup>Optional</sup> <a name="Milestone" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesConfig.property.milestone"></a>

```go
Milestone *string
```

- *Type:* *string

The milestone title. None lists all issues with no milestone. Any lists all issues that have an assigned milestone.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/gitlab/d/project_issues#milestone DataGitlabProjectIssues#milestone}

---

##### `MyReactionEmoji`<sup>Optional</sup> <a name="MyReactionEmoji" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesConfig.property.myReactionEmoji"></a>

```go
MyReactionEmoji *string
```

- *Type:* *string

Return issues reacted by the authenticated user by the given emoji.

None returns issues not given a reaction. Any returns issues given at least one reaction.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/gitlab/d/project_issues#my_reaction_emoji DataGitlabProjectIssues#my_reaction_emoji}

---

##### `NotAssigneeId`<sup>Optional</sup> <a name="NotAssigneeId" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesConfig.property.notAssigneeId"></a>

```go
NotAssigneeId *[]*f64
```

- *Type:* *[]*f64

Return issues that do not match the assignee id.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/gitlab/d/project_issues#not_assignee_id DataGitlabProjectIssues#not_assignee_id}

---

##### `NotAuthorId`<sup>Optional</sup> <a name="NotAuthorId" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesConfig.property.notAuthorId"></a>

```go
NotAuthorId *[]*f64
```

- *Type:* *[]*f64

Return issues that do not match the author id.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/gitlab/d/project_issues#not_author_id DataGitlabProjectIssues#not_author_id}

---

##### `NotLabels`<sup>Optional</sup> <a name="NotLabels" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesConfig.property.notLabels"></a>

```go
NotLabels *[]*string
```

- *Type:* *[]*string

Return issues that do not match the labels.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/gitlab/d/project_issues#not_labels DataGitlabProjectIssues#not_labels}

---

##### `NotMilestone`<sup>Optional</sup> <a name="NotMilestone" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesConfig.property.notMilestone"></a>

```go
NotMilestone *string
```

- *Type:* *string

Return issues that do not match the milestone.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/gitlab/d/project_issues#not_milestone DataGitlabProjectIssues#not_milestone}

---

##### `NotMyReactionEmoji`<sup>Optional</sup> <a name="NotMyReactionEmoji" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesConfig.property.notMyReactionEmoji"></a>

```go
NotMyReactionEmoji *[]*string
```

- *Type:* *[]*string

Return issues not reacted by the authenticated user by the given emoji.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/gitlab/d/project_issues#not_my_reaction_emoji DataGitlabProjectIssues#not_my_reaction_emoji}

---

##### `OrderBy`<sup>Optional</sup> <a name="OrderBy" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesConfig.property.orderBy"></a>

```go
OrderBy *string
```

- *Type:* *string

Return issues ordered by. Valid values are `created_at`, `updated_at`, `priority`, `due_date`, `relative_position`, `label_priority`, `milestone_due`, `popularity`, `weight`. Default is created_at.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/gitlab/d/project_issues#order_by DataGitlabProjectIssues#order_by}

---

##### `Scope`<sup>Optional</sup> <a name="Scope" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesConfig.property.scope"></a>

```go
Scope *string
```

- *Type:* *string

Return issues for the given scope. Valid values are `created_by_me`, `assigned_to_me`, `all`. Defaults to all.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/gitlab/d/project_issues#scope DataGitlabProjectIssues#scope}

---

##### `Search`<sup>Optional</sup> <a name="Search" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesConfig.property.search"></a>

```go
Search *string
```

- *Type:* *string

Search project issues against their title and description.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/gitlab/d/project_issues#search DataGitlabProjectIssues#search}

---

##### `Sort`<sup>Optional</sup> <a name="Sort" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesConfig.property.sort"></a>

```go
Sort *string
```

- *Type:* *string

Return issues sorted in asc or desc order. Default is desc.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/gitlab/d/project_issues#sort DataGitlabProjectIssues#sort}

---

##### `UpdatedAfter`<sup>Optional</sup> <a name="UpdatedAfter" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesConfig.property.updatedAfter"></a>

```go
UpdatedAfter *string
```

- *Type:* *string

Return issues updated on or after the given time. Expected in ISO 8601 format (2019-03-15T08:00:00Z).

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/gitlab/d/project_issues#updated_after DataGitlabProjectIssues#updated_after}

---

##### `UpdatedBefore`<sup>Optional</sup> <a name="UpdatedBefore" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesConfig.property.updatedBefore"></a>

```go
UpdatedBefore *string
```

- *Type:* *string

Return issues updated on or before the given time. Expected in ISO 8601 format (2019-03-15T08:00:00Z).

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/gitlab/d/project_issues#updated_before DataGitlabProjectIssues#updated_before}

---

##### `Weight`<sup>Optional</sup> <a name="Weight" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesConfig.property.weight"></a>

```go
Weight *f64
```

- *Type:* *f64

Return issues with the specified weight.

None returns issues with no weight assigned. Any returns issues with a weight assigned.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/gitlab/d/project_issues#weight DataGitlabProjectIssues#weight}

---

##### `WithLabelsDetails`<sup>Optional</sup> <a name="WithLabelsDetails" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesConfig.property.withLabelsDetails"></a>

```go
WithLabelsDetails interface{}
```

- *Type:* interface{}

If true, the response returns more details for each label in labels field: :name, :color, :description, :description_html, :text_color.

Default is false. description_html was introduced in GitLab 12.7

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/gitlab/d/project_issues#with_labels_details DataGitlabProjectIssues#with_labels_details}

---

### DataGitlabProjectIssuesIssues <a name="DataGitlabProjectIssuesIssues" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssues"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssues.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-gitlab-go/gitlab/v7/datagitlabprojectissues"

&datagitlabprojectissues.DataGitlabProjectIssuesIssues {

}
```


### DataGitlabProjectIssuesIssuesTaskCompletionStatus <a name="DataGitlabProjectIssuesIssuesTaskCompletionStatus" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesTaskCompletionStatus"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesTaskCompletionStatus.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-gitlab-go/gitlab/v7/datagitlabprojectissues"

&datagitlabprojectissues.DataGitlabProjectIssuesIssuesTaskCompletionStatus {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataGitlabProjectIssuesIssuesList <a name="DataGitlabProjectIssuesIssuesList" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-gitlab-go/gitlab/v7/datagitlabprojectissues"

datagitlabprojectissues.NewDataGitlabProjectIssuesIssuesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataGitlabProjectIssuesIssuesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesList.get"></a>

```go
func Get(index *f64) DataGitlabProjectIssuesIssuesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataGitlabProjectIssuesIssuesOutputReference <a name="DataGitlabProjectIssuesIssuesOutputReference" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-gitlab-go/gitlab/v7/datagitlabprojectissues"

datagitlabprojectissues.NewDataGitlabProjectIssuesIssuesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataGitlabProjectIssuesIssuesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesOutputReference.property.assigneeIds">AssigneeIds</a></code> | <code>*[]*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesOutputReference.property.authorId">AuthorId</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesOutputReference.property.closedAt">ClosedAt</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesOutputReference.property.closedByUserId">ClosedByUserId</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesOutputReference.property.confidential">Confidential</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesOutputReference.property.createdAt">CreatedAt</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesOutputReference.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesOutputReference.property.discussionLocked">DiscussionLocked</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesOutputReference.property.discussionToResolve">DiscussionToResolve</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesOutputReference.property.downvotes">Downvotes</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesOutputReference.property.dueDate">DueDate</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesOutputReference.property.epicId">EpicId</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesOutputReference.property.epicIssueId">EpicIssueId</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesOutputReference.property.externalId">ExternalId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesOutputReference.property.humanTimeEstimate">HumanTimeEstimate</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesOutputReference.property.humanTotalTimeSpent">HumanTotalTimeSpent</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesOutputReference.property.iid">Iid</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesOutputReference.property.issueId">IssueId</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesOutputReference.property.issueLinkId">IssueLinkId</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesOutputReference.property.issueType">IssueType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesOutputReference.property.labels">Labels</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesOutputReference.property.links">Links</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesOutputReference.property.mergeRequestsCount">MergeRequestsCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesOutputReference.property.mergeRequestToResolveDiscussionsOf">MergeRequestToResolveDiscussionsOf</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesOutputReference.property.milestoneId">MilestoneId</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesOutputReference.property.movedToId">MovedToId</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesOutputReference.property.project">Project</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesOutputReference.property.references">References</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesOutputReference.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesOutputReference.property.subscribed">Subscribed</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesOutputReference.property.taskCompletionStatus">TaskCompletionStatus</a></code> | <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesTaskCompletionStatusList">DataGitlabProjectIssuesIssuesTaskCompletionStatusList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesOutputReference.property.timeEstimate">TimeEstimate</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesOutputReference.property.title">Title</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesOutputReference.property.totalTimeSpent">TotalTimeSpent</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesOutputReference.property.updatedAt">UpdatedAt</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesOutputReference.property.upvotes">Upvotes</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesOutputReference.property.userNotesCount">UserNotesCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesOutputReference.property.webUrl">WebUrl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesOutputReference.property.weight">Weight</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssues">DataGitlabProjectIssuesIssues</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AssigneeIds`<sup>Required</sup> <a name="AssigneeIds" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesOutputReference.property.assigneeIds"></a>

```go
func AssigneeIds() *[]*f64
```

- *Type:* *[]*f64

---

##### `AuthorId`<sup>Required</sup> <a name="AuthorId" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesOutputReference.property.authorId"></a>

```go
func AuthorId() *f64
```

- *Type:* *f64

---

##### `ClosedAt`<sup>Required</sup> <a name="ClosedAt" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesOutputReference.property.closedAt"></a>

```go
func ClosedAt() *string
```

- *Type:* *string

---

##### `ClosedByUserId`<sup>Required</sup> <a name="ClosedByUserId" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesOutputReference.property.closedByUserId"></a>

```go
func ClosedByUserId() *f64
```

- *Type:* *f64

---

##### `Confidential`<sup>Required</sup> <a name="Confidential" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesOutputReference.property.confidential"></a>

```go
func Confidential() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `CreatedAt`<sup>Required</sup> <a name="CreatedAt" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesOutputReference.property.createdAt"></a>

```go
func CreatedAt() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesOutputReference.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `DiscussionLocked`<sup>Required</sup> <a name="DiscussionLocked" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesOutputReference.property.discussionLocked"></a>

```go
func DiscussionLocked() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `DiscussionToResolve`<sup>Required</sup> <a name="DiscussionToResolve" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesOutputReference.property.discussionToResolve"></a>

```go
func DiscussionToResolve() *string
```

- *Type:* *string

---

##### `Downvotes`<sup>Required</sup> <a name="Downvotes" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesOutputReference.property.downvotes"></a>

```go
func Downvotes() *f64
```

- *Type:* *f64

---

##### `DueDate`<sup>Required</sup> <a name="DueDate" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesOutputReference.property.dueDate"></a>

```go
func DueDate() *string
```

- *Type:* *string

---

##### `EpicId`<sup>Required</sup> <a name="EpicId" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesOutputReference.property.epicId"></a>

```go
func EpicId() *f64
```

- *Type:* *f64

---

##### `EpicIssueId`<sup>Required</sup> <a name="EpicIssueId" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesOutputReference.property.epicIssueId"></a>

```go
func EpicIssueId() *f64
```

- *Type:* *f64

---

##### `ExternalId`<sup>Required</sup> <a name="ExternalId" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesOutputReference.property.externalId"></a>

```go
func ExternalId() *string
```

- *Type:* *string

---

##### `HumanTimeEstimate`<sup>Required</sup> <a name="HumanTimeEstimate" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesOutputReference.property.humanTimeEstimate"></a>

```go
func HumanTimeEstimate() *string
```

- *Type:* *string

---

##### `HumanTotalTimeSpent`<sup>Required</sup> <a name="HumanTotalTimeSpent" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesOutputReference.property.humanTotalTimeSpent"></a>

```go
func HumanTotalTimeSpent() *string
```

- *Type:* *string

---

##### `Iid`<sup>Required</sup> <a name="Iid" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesOutputReference.property.iid"></a>

```go
func Iid() *f64
```

- *Type:* *f64

---

##### `IssueId`<sup>Required</sup> <a name="IssueId" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesOutputReference.property.issueId"></a>

```go
func IssueId() *f64
```

- *Type:* *f64

---

##### `IssueLinkId`<sup>Required</sup> <a name="IssueLinkId" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesOutputReference.property.issueLinkId"></a>

```go
func IssueLinkId() *f64
```

- *Type:* *f64

---

##### `IssueType`<sup>Required</sup> <a name="IssueType" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesOutputReference.property.issueType"></a>

```go
func IssueType() *string
```

- *Type:* *string

---

##### `Labels`<sup>Required</sup> <a name="Labels" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesOutputReference.property.labels"></a>

```go
func Labels() *[]*string
```

- *Type:* *[]*string

---

##### `Links`<sup>Required</sup> <a name="Links" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesOutputReference.property.links"></a>

```go
func Links() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `MergeRequestsCount`<sup>Required</sup> <a name="MergeRequestsCount" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesOutputReference.property.mergeRequestsCount"></a>

```go
func MergeRequestsCount() *f64
```

- *Type:* *f64

---

##### `MergeRequestToResolveDiscussionsOf`<sup>Required</sup> <a name="MergeRequestToResolveDiscussionsOf" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesOutputReference.property.mergeRequestToResolveDiscussionsOf"></a>

```go
func MergeRequestToResolveDiscussionsOf() *f64
```

- *Type:* *f64

---

##### `MilestoneId`<sup>Required</sup> <a name="MilestoneId" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesOutputReference.property.milestoneId"></a>

```go
func MilestoneId() *f64
```

- *Type:* *f64

---

##### `MovedToId`<sup>Required</sup> <a name="MovedToId" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesOutputReference.property.movedToId"></a>

```go
func MovedToId() *f64
```

- *Type:* *f64

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesOutputReference.property.project"></a>

```go
func Project() *string
```

- *Type:* *string

---

##### `References`<sup>Required</sup> <a name="References" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesOutputReference.property.references"></a>

```go
func References() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesOutputReference.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `Subscribed`<sup>Required</sup> <a name="Subscribed" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesOutputReference.property.subscribed"></a>

```go
func Subscribed() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `TaskCompletionStatus`<sup>Required</sup> <a name="TaskCompletionStatus" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesOutputReference.property.taskCompletionStatus"></a>

```go
func TaskCompletionStatus() DataGitlabProjectIssuesIssuesTaskCompletionStatusList
```

- *Type:* <a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesTaskCompletionStatusList">DataGitlabProjectIssuesIssuesTaskCompletionStatusList</a>

---

##### `TimeEstimate`<sup>Required</sup> <a name="TimeEstimate" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesOutputReference.property.timeEstimate"></a>

```go
func TimeEstimate() *f64
```

- *Type:* *f64

---

##### `Title`<sup>Required</sup> <a name="Title" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesOutputReference.property.title"></a>

```go
func Title() *string
```

- *Type:* *string

---

##### `TotalTimeSpent`<sup>Required</sup> <a name="TotalTimeSpent" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesOutputReference.property.totalTimeSpent"></a>

```go
func TotalTimeSpent() *f64
```

- *Type:* *f64

---

##### `UpdatedAt`<sup>Required</sup> <a name="UpdatedAt" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesOutputReference.property.updatedAt"></a>

```go
func UpdatedAt() *string
```

- *Type:* *string

---

##### `Upvotes`<sup>Required</sup> <a name="Upvotes" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesOutputReference.property.upvotes"></a>

```go
func Upvotes() *f64
```

- *Type:* *f64

---

##### `UserNotesCount`<sup>Required</sup> <a name="UserNotesCount" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesOutputReference.property.userNotesCount"></a>

```go
func UserNotesCount() *f64
```

- *Type:* *f64

---

##### `WebUrl`<sup>Required</sup> <a name="WebUrl" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesOutputReference.property.webUrl"></a>

```go
func WebUrl() *string
```

- *Type:* *string

---

##### `Weight`<sup>Required</sup> <a name="Weight" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesOutputReference.property.weight"></a>

```go
func Weight() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesOutputReference.property.internalValue"></a>

```go
func InternalValue() DataGitlabProjectIssuesIssues
```

- *Type:* <a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssues">DataGitlabProjectIssuesIssues</a>

---


### DataGitlabProjectIssuesIssuesTaskCompletionStatusList <a name="DataGitlabProjectIssuesIssuesTaskCompletionStatusList" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesTaskCompletionStatusList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesTaskCompletionStatusList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-gitlab-go/gitlab/v7/datagitlabprojectissues"

datagitlabprojectissues.NewDataGitlabProjectIssuesIssuesTaskCompletionStatusList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataGitlabProjectIssuesIssuesTaskCompletionStatusList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesTaskCompletionStatusList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesTaskCompletionStatusList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesTaskCompletionStatusList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesTaskCompletionStatusList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesTaskCompletionStatusList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesTaskCompletionStatusList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesTaskCompletionStatusList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesTaskCompletionStatusList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesTaskCompletionStatusList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesTaskCompletionStatusList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesTaskCompletionStatusList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesTaskCompletionStatusList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesTaskCompletionStatusList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesTaskCompletionStatusList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesTaskCompletionStatusList.get"></a>

```go
func Get(index *f64) DataGitlabProjectIssuesIssuesTaskCompletionStatusOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesTaskCompletionStatusList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesTaskCompletionStatusList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesTaskCompletionStatusList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesTaskCompletionStatusList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesTaskCompletionStatusList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataGitlabProjectIssuesIssuesTaskCompletionStatusOutputReference <a name="DataGitlabProjectIssuesIssuesTaskCompletionStatusOutputReference" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesTaskCompletionStatusOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesTaskCompletionStatusOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-gitlab-go/gitlab/v7/datagitlabprojectissues"

datagitlabprojectissues.NewDataGitlabProjectIssuesIssuesTaskCompletionStatusOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataGitlabProjectIssuesIssuesTaskCompletionStatusOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesTaskCompletionStatusOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesTaskCompletionStatusOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesTaskCompletionStatusOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesTaskCompletionStatusOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesTaskCompletionStatusOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesTaskCompletionStatusOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesTaskCompletionStatusOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesTaskCompletionStatusOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesTaskCompletionStatusOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesTaskCompletionStatusOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesTaskCompletionStatusOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesTaskCompletionStatusOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesTaskCompletionStatusOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesTaskCompletionStatusOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesTaskCompletionStatusOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesTaskCompletionStatusOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesTaskCompletionStatusOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesTaskCompletionStatusOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesTaskCompletionStatusOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesTaskCompletionStatusOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesTaskCompletionStatusOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesTaskCompletionStatusOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesTaskCompletionStatusOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesTaskCompletionStatusOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesTaskCompletionStatusOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesTaskCompletionStatusOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesTaskCompletionStatusOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesTaskCompletionStatusOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesTaskCompletionStatusOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesTaskCompletionStatusOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesTaskCompletionStatusOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesTaskCompletionStatusOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesTaskCompletionStatusOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesTaskCompletionStatusOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesTaskCompletionStatusOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesTaskCompletionStatusOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesTaskCompletionStatusOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesTaskCompletionStatusOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesTaskCompletionStatusOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesTaskCompletionStatusOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesTaskCompletionStatusOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesTaskCompletionStatusOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesTaskCompletionStatusOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesTaskCompletionStatusOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesTaskCompletionStatusOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesTaskCompletionStatusOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesTaskCompletionStatusOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesTaskCompletionStatusOutputReference.property.completedCount">CompletedCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesTaskCompletionStatusOutputReference.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesTaskCompletionStatusOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesTaskCompletionStatus">DataGitlabProjectIssuesIssuesTaskCompletionStatus</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesTaskCompletionStatusOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesTaskCompletionStatusOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CompletedCount`<sup>Required</sup> <a name="CompletedCount" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesTaskCompletionStatusOutputReference.property.completedCount"></a>

```go
func CompletedCount() *f64
```

- *Type:* *f64

---

##### `Count`<sup>Required</sup> <a name="Count" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesTaskCompletionStatusOutputReference.property.count"></a>

```go
func Count() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesTaskCompletionStatusOutputReference.property.internalValue"></a>

```go
func InternalValue() DataGitlabProjectIssuesIssuesTaskCompletionStatus
```

- *Type:* <a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesTaskCompletionStatus">DataGitlabProjectIssuesIssuesTaskCompletionStatus</a>

---



