# `gitlab_project_issue`

Refer to the Terraform Registory for docs: [`gitlab_project_issue`](https://registry.terraform.io/providers/gitlabhq/gitlab/15.10.0/docs/resources/project_issue).

# `projectIssue` Submodule <a name="`projectIssue` Submodule" id="@cdktf/provider-gitlab.projectIssue"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ProjectIssue <a name="ProjectIssue" id="@cdktf/provider-gitlab.projectIssue.ProjectIssue"></a>

Represents a {@link https://registry.terraform.io/providers/gitlabhq/gitlab/15.10.0/docs/resources/project_issue gitlab_project_issue}.

#### Initializers <a name="Initializers" id="@cdktf/provider-gitlab.projectIssue.ProjectIssue.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-gitlab-go/gitlab/projectissue"

projectissue.NewProjectIssue(scope Construct, id *string, config ProjectIssueConfig) ProjectIssue
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssue.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssue.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssue.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssueConfig">ProjectIssueConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-gitlab.projectIssue.ProjectIssue.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-gitlab.projectIssue.ProjectIssue.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-gitlab.projectIssue.ProjectIssue.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssueConfig">ProjectIssueConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssue.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssue.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssue.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssue.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssue.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssue.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssue.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssue.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssue.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssue.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssue.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssue.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssue.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssue.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssue.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssue.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssue.resetAssigneeIds">ResetAssigneeIds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssue.resetConfidential">ResetConfidential</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssue.resetCreatedAt">ResetCreatedAt</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssue.resetDeleteOnDestroy">ResetDeleteOnDestroy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssue.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssue.resetDiscussionLocked">ResetDiscussionLocked</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssue.resetDiscussionToResolve">ResetDiscussionToResolve</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssue.resetDueDate">ResetDueDate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssue.resetEpicIssueId">ResetEpicIssueId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssue.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssue.resetIid">ResetIid</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssue.resetIssueType">ResetIssueType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssue.resetLabels">ResetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssue.resetMergeRequestToResolveDiscussionsOf">ResetMergeRequestToResolveDiscussionsOf</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssue.resetMilestoneId">ResetMilestoneId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssue.resetState">ResetState</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssue.resetUpdatedAt">ResetUpdatedAt</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssue.resetWeight">ResetWeight</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-gitlab.projectIssue.ProjectIssue.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-gitlab.projectIssue.ProjectIssue.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-gitlab.projectIssue.ProjectIssue.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-gitlab.projectIssue.ProjectIssue.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-gitlab.projectIssue.ProjectIssue.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-gitlab.projectIssue.ProjectIssue.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-gitlab.projectIssue.ProjectIssue.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-gitlab.projectIssue.ProjectIssue.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-gitlab.projectIssue.ProjectIssue.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-gitlab.projectIssue.ProjectIssue.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.projectIssue.ProjectIssue.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-gitlab.projectIssue.ProjectIssue.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.projectIssue.ProjectIssue.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-gitlab.projectIssue.ProjectIssue.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.projectIssue.ProjectIssue.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-gitlab.projectIssue.ProjectIssue.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.projectIssue.ProjectIssue.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-gitlab.projectIssue.ProjectIssue.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.projectIssue.ProjectIssue.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-gitlab.projectIssue.ProjectIssue.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.projectIssue.ProjectIssue.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-gitlab.projectIssue.ProjectIssue.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.projectIssue.ProjectIssue.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-gitlab.projectIssue.ProjectIssue.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.projectIssue.ProjectIssue.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-gitlab.projectIssue.ProjectIssue.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.projectIssue.ProjectIssue.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-gitlab.projectIssue.ProjectIssue.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.projectIssue.ProjectIssue.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ResetAssigneeIds` <a name="ResetAssigneeIds" id="@cdktf/provider-gitlab.projectIssue.ProjectIssue.resetAssigneeIds"></a>

```go
func ResetAssigneeIds()
```

##### `ResetConfidential` <a name="ResetConfidential" id="@cdktf/provider-gitlab.projectIssue.ProjectIssue.resetConfidential"></a>

```go
func ResetConfidential()
```

##### `ResetCreatedAt` <a name="ResetCreatedAt" id="@cdktf/provider-gitlab.projectIssue.ProjectIssue.resetCreatedAt"></a>

```go
func ResetCreatedAt()
```

##### `ResetDeleteOnDestroy` <a name="ResetDeleteOnDestroy" id="@cdktf/provider-gitlab.projectIssue.ProjectIssue.resetDeleteOnDestroy"></a>

```go
func ResetDeleteOnDestroy()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-gitlab.projectIssue.ProjectIssue.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetDiscussionLocked` <a name="ResetDiscussionLocked" id="@cdktf/provider-gitlab.projectIssue.ProjectIssue.resetDiscussionLocked"></a>

```go
func ResetDiscussionLocked()
```

##### `ResetDiscussionToResolve` <a name="ResetDiscussionToResolve" id="@cdktf/provider-gitlab.projectIssue.ProjectIssue.resetDiscussionToResolve"></a>

```go
func ResetDiscussionToResolve()
```

##### `ResetDueDate` <a name="ResetDueDate" id="@cdktf/provider-gitlab.projectIssue.ProjectIssue.resetDueDate"></a>

```go
func ResetDueDate()
```

##### `ResetEpicIssueId` <a name="ResetEpicIssueId" id="@cdktf/provider-gitlab.projectIssue.ProjectIssue.resetEpicIssueId"></a>

```go
func ResetEpicIssueId()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-gitlab.projectIssue.ProjectIssue.resetId"></a>

```go
func ResetId()
```

##### `ResetIid` <a name="ResetIid" id="@cdktf/provider-gitlab.projectIssue.ProjectIssue.resetIid"></a>

```go
func ResetIid()
```

##### `ResetIssueType` <a name="ResetIssueType" id="@cdktf/provider-gitlab.projectIssue.ProjectIssue.resetIssueType"></a>

```go
func ResetIssueType()
```

##### `ResetLabels` <a name="ResetLabels" id="@cdktf/provider-gitlab.projectIssue.ProjectIssue.resetLabels"></a>

```go
func ResetLabels()
```

##### `ResetMergeRequestToResolveDiscussionsOf` <a name="ResetMergeRequestToResolveDiscussionsOf" id="@cdktf/provider-gitlab.projectIssue.ProjectIssue.resetMergeRequestToResolveDiscussionsOf"></a>

```go
func ResetMergeRequestToResolveDiscussionsOf()
```

##### `ResetMilestoneId` <a name="ResetMilestoneId" id="@cdktf/provider-gitlab.projectIssue.ProjectIssue.resetMilestoneId"></a>

```go
func ResetMilestoneId()
```

##### `ResetState` <a name="ResetState" id="@cdktf/provider-gitlab.projectIssue.ProjectIssue.resetState"></a>

```go
func ResetState()
```

##### `ResetUpdatedAt` <a name="ResetUpdatedAt" id="@cdktf/provider-gitlab.projectIssue.ProjectIssue.resetUpdatedAt"></a>

```go
func ResetUpdatedAt()
```

##### `ResetWeight` <a name="ResetWeight" id="@cdktf/provider-gitlab.projectIssue.ProjectIssue.resetWeight"></a>

```go
func ResetWeight()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssue.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssue.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssue.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-gitlab.projectIssue.ProjectIssue.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-gitlab-go/gitlab/projectissue"

projectissue.ProjectIssue_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-gitlab.projectIssue.ProjectIssue.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-gitlab.projectIssue.ProjectIssue.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-gitlab-go/gitlab/projectissue"

projectissue.ProjectIssue_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-gitlab.projectIssue.ProjectIssue.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-gitlab.projectIssue.ProjectIssue.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-gitlab-go/gitlab/projectissue"

projectissue.ProjectIssue_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-gitlab.projectIssue.ProjectIssue.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssue.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssue.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssue.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssue.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssue.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssue.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssue.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssue.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssue.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssue.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssue.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssue.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssue.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssue.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssue.property.authorId">AuthorId</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssue.property.closedAt">ClosedAt</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssue.property.closedByUserId">ClosedByUserId</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssue.property.downvotes">Downvotes</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssue.property.epicId">EpicId</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssue.property.externalId">ExternalId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssue.property.humanTimeEstimate">HumanTimeEstimate</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssue.property.humanTotalTimeSpent">HumanTotalTimeSpent</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssue.property.issueId">IssueId</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssue.property.issueLinkId">IssueLinkId</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssue.property.links">Links</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssue.property.mergeRequestsCount">MergeRequestsCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssue.property.movedToId">MovedToId</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssue.property.references">References</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssue.property.subscribed">Subscribed</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssue.property.taskCompletionStatus">TaskCompletionStatus</a></code> | <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssueTaskCompletionStatusList">ProjectIssueTaskCompletionStatusList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssue.property.timeEstimate">TimeEstimate</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssue.property.totalTimeSpent">TotalTimeSpent</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssue.property.upvotes">Upvotes</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssue.property.userNotesCount">UserNotesCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssue.property.webUrl">WebUrl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssue.property.assigneeIdsInput">AssigneeIdsInput</a></code> | <code>*[]*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssue.property.confidentialInput">ConfidentialInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssue.property.createdAtInput">CreatedAtInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssue.property.deleteOnDestroyInput">DeleteOnDestroyInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssue.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssue.property.discussionLockedInput">DiscussionLockedInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssue.property.discussionToResolveInput">DiscussionToResolveInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssue.property.dueDateInput">DueDateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssue.property.epicIssueIdInput">EpicIssueIdInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssue.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssue.property.iidInput">IidInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssue.property.issueTypeInput">IssueTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssue.property.labelsInput">LabelsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssue.property.mergeRequestToResolveDiscussionsOfInput">MergeRequestToResolveDiscussionsOfInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssue.property.milestoneIdInput">MilestoneIdInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssue.property.projectInput">ProjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssue.property.stateInput">StateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssue.property.titleInput">TitleInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssue.property.updatedAtInput">UpdatedAtInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssue.property.weightInput">WeightInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssue.property.assigneeIds">AssigneeIds</a></code> | <code>*[]*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssue.property.confidential">Confidential</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssue.property.createdAt">CreatedAt</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssue.property.deleteOnDestroy">DeleteOnDestroy</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssue.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssue.property.discussionLocked">DiscussionLocked</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssue.property.discussionToResolve">DiscussionToResolve</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssue.property.dueDate">DueDate</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssue.property.epicIssueId">EpicIssueId</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssue.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssue.property.iid">Iid</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssue.property.issueType">IssueType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssue.property.labels">Labels</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssue.property.mergeRequestToResolveDiscussionsOf">MergeRequestToResolveDiscussionsOf</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssue.property.milestoneId">MilestoneId</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssue.property.project">Project</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssue.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssue.property.title">Title</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssue.property.updatedAt">UpdatedAt</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssue.property.weight">Weight</a></code> | <code>*f64</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-gitlab.projectIssue.ProjectIssue.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-gitlab.projectIssue.ProjectIssue.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-gitlab.projectIssue.ProjectIssue.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-gitlab.projectIssue.ProjectIssue.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-gitlab.projectIssue.ProjectIssue.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-gitlab.projectIssue.ProjectIssue.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-gitlab.projectIssue.ProjectIssue.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-gitlab.projectIssue.ProjectIssue.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-gitlab.projectIssue.ProjectIssue.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-gitlab.projectIssue.ProjectIssue.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-gitlab.projectIssue.ProjectIssue.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-gitlab.projectIssue.ProjectIssue.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-gitlab.projectIssue.ProjectIssue.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-gitlab.projectIssue.ProjectIssue.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AuthorId`<sup>Required</sup> <a name="AuthorId" id="@cdktf/provider-gitlab.projectIssue.ProjectIssue.property.authorId"></a>

```go
func AuthorId() *f64
```

- *Type:* *f64

---

##### `ClosedAt`<sup>Required</sup> <a name="ClosedAt" id="@cdktf/provider-gitlab.projectIssue.ProjectIssue.property.closedAt"></a>

```go
func ClosedAt() *string
```

- *Type:* *string

---

##### `ClosedByUserId`<sup>Required</sup> <a name="ClosedByUserId" id="@cdktf/provider-gitlab.projectIssue.ProjectIssue.property.closedByUserId"></a>

```go
func ClosedByUserId() *f64
```

- *Type:* *f64

---

##### `Downvotes`<sup>Required</sup> <a name="Downvotes" id="@cdktf/provider-gitlab.projectIssue.ProjectIssue.property.downvotes"></a>

```go
func Downvotes() *f64
```

- *Type:* *f64

---

##### `EpicId`<sup>Required</sup> <a name="EpicId" id="@cdktf/provider-gitlab.projectIssue.ProjectIssue.property.epicId"></a>

```go
func EpicId() *f64
```

- *Type:* *f64

---

##### `ExternalId`<sup>Required</sup> <a name="ExternalId" id="@cdktf/provider-gitlab.projectIssue.ProjectIssue.property.externalId"></a>

```go
func ExternalId() *string
```

- *Type:* *string

---

##### `HumanTimeEstimate`<sup>Required</sup> <a name="HumanTimeEstimate" id="@cdktf/provider-gitlab.projectIssue.ProjectIssue.property.humanTimeEstimate"></a>

```go
func HumanTimeEstimate() *string
```

- *Type:* *string

---

##### `HumanTotalTimeSpent`<sup>Required</sup> <a name="HumanTotalTimeSpent" id="@cdktf/provider-gitlab.projectIssue.ProjectIssue.property.humanTotalTimeSpent"></a>

```go
func HumanTotalTimeSpent() *string
```

- *Type:* *string

---

##### `IssueId`<sup>Required</sup> <a name="IssueId" id="@cdktf/provider-gitlab.projectIssue.ProjectIssue.property.issueId"></a>

```go
func IssueId() *f64
```

- *Type:* *f64

---

##### `IssueLinkId`<sup>Required</sup> <a name="IssueLinkId" id="@cdktf/provider-gitlab.projectIssue.ProjectIssue.property.issueLinkId"></a>

```go
func IssueLinkId() *f64
```

- *Type:* *f64

---

##### `Links`<sup>Required</sup> <a name="Links" id="@cdktf/provider-gitlab.projectIssue.ProjectIssue.property.links"></a>

```go
func Links() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `MergeRequestsCount`<sup>Required</sup> <a name="MergeRequestsCount" id="@cdktf/provider-gitlab.projectIssue.ProjectIssue.property.mergeRequestsCount"></a>

```go
func MergeRequestsCount() *f64
```

- *Type:* *f64

---

##### `MovedToId`<sup>Required</sup> <a name="MovedToId" id="@cdktf/provider-gitlab.projectIssue.ProjectIssue.property.movedToId"></a>

```go
func MovedToId() *f64
```

- *Type:* *f64

---

##### `References`<sup>Required</sup> <a name="References" id="@cdktf/provider-gitlab.projectIssue.ProjectIssue.property.references"></a>

```go
func References() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `Subscribed`<sup>Required</sup> <a name="Subscribed" id="@cdktf/provider-gitlab.projectIssue.ProjectIssue.property.subscribed"></a>

```go
func Subscribed() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `TaskCompletionStatus`<sup>Required</sup> <a name="TaskCompletionStatus" id="@cdktf/provider-gitlab.projectIssue.ProjectIssue.property.taskCompletionStatus"></a>

```go
func TaskCompletionStatus() ProjectIssueTaskCompletionStatusList
```

- *Type:* <a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssueTaskCompletionStatusList">ProjectIssueTaskCompletionStatusList</a>

---

##### `TimeEstimate`<sup>Required</sup> <a name="TimeEstimate" id="@cdktf/provider-gitlab.projectIssue.ProjectIssue.property.timeEstimate"></a>

```go
func TimeEstimate() *f64
```

- *Type:* *f64

---

##### `TotalTimeSpent`<sup>Required</sup> <a name="TotalTimeSpent" id="@cdktf/provider-gitlab.projectIssue.ProjectIssue.property.totalTimeSpent"></a>

```go
func TotalTimeSpent() *f64
```

- *Type:* *f64

---

##### `Upvotes`<sup>Required</sup> <a name="Upvotes" id="@cdktf/provider-gitlab.projectIssue.ProjectIssue.property.upvotes"></a>

```go
func Upvotes() *f64
```

- *Type:* *f64

---

##### `UserNotesCount`<sup>Required</sup> <a name="UserNotesCount" id="@cdktf/provider-gitlab.projectIssue.ProjectIssue.property.userNotesCount"></a>

```go
func UserNotesCount() *f64
```

- *Type:* *f64

---

##### `WebUrl`<sup>Required</sup> <a name="WebUrl" id="@cdktf/provider-gitlab.projectIssue.ProjectIssue.property.webUrl"></a>

```go
func WebUrl() *string
```

- *Type:* *string

---

##### `AssigneeIdsInput`<sup>Optional</sup> <a name="AssigneeIdsInput" id="@cdktf/provider-gitlab.projectIssue.ProjectIssue.property.assigneeIdsInput"></a>

```go
func AssigneeIdsInput() *[]*f64
```

- *Type:* *[]*f64

---

##### `ConfidentialInput`<sup>Optional</sup> <a name="ConfidentialInput" id="@cdktf/provider-gitlab.projectIssue.ProjectIssue.property.confidentialInput"></a>

```go
func ConfidentialInput() interface{}
```

- *Type:* interface{}

---

##### `CreatedAtInput`<sup>Optional</sup> <a name="CreatedAtInput" id="@cdktf/provider-gitlab.projectIssue.ProjectIssue.property.createdAtInput"></a>

```go
func CreatedAtInput() *string
```

- *Type:* *string

---

##### `DeleteOnDestroyInput`<sup>Optional</sup> <a name="DeleteOnDestroyInput" id="@cdktf/provider-gitlab.projectIssue.ProjectIssue.property.deleteOnDestroyInput"></a>

```go
func DeleteOnDestroyInput() interface{}
```

- *Type:* interface{}

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-gitlab.projectIssue.ProjectIssue.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `DiscussionLockedInput`<sup>Optional</sup> <a name="DiscussionLockedInput" id="@cdktf/provider-gitlab.projectIssue.ProjectIssue.property.discussionLockedInput"></a>

```go
func DiscussionLockedInput() interface{}
```

- *Type:* interface{}

---

##### `DiscussionToResolveInput`<sup>Optional</sup> <a name="DiscussionToResolveInput" id="@cdktf/provider-gitlab.projectIssue.ProjectIssue.property.discussionToResolveInput"></a>

```go
func DiscussionToResolveInput() *string
```

- *Type:* *string

---

##### `DueDateInput`<sup>Optional</sup> <a name="DueDateInput" id="@cdktf/provider-gitlab.projectIssue.ProjectIssue.property.dueDateInput"></a>

```go
func DueDateInput() *string
```

- *Type:* *string

---

##### `EpicIssueIdInput`<sup>Optional</sup> <a name="EpicIssueIdInput" id="@cdktf/provider-gitlab.projectIssue.ProjectIssue.property.epicIssueIdInput"></a>

```go
func EpicIssueIdInput() *f64
```

- *Type:* *f64

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-gitlab.projectIssue.ProjectIssue.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `IidInput`<sup>Optional</sup> <a name="IidInput" id="@cdktf/provider-gitlab.projectIssue.ProjectIssue.property.iidInput"></a>

```go
func IidInput() *f64
```

- *Type:* *f64

---

##### `IssueTypeInput`<sup>Optional</sup> <a name="IssueTypeInput" id="@cdktf/provider-gitlab.projectIssue.ProjectIssue.property.issueTypeInput"></a>

```go
func IssueTypeInput() *string
```

- *Type:* *string

---

##### `LabelsInput`<sup>Optional</sup> <a name="LabelsInput" id="@cdktf/provider-gitlab.projectIssue.ProjectIssue.property.labelsInput"></a>

```go
func LabelsInput() *[]*string
```

- *Type:* *[]*string

---

##### `MergeRequestToResolveDiscussionsOfInput`<sup>Optional</sup> <a name="MergeRequestToResolveDiscussionsOfInput" id="@cdktf/provider-gitlab.projectIssue.ProjectIssue.property.mergeRequestToResolveDiscussionsOfInput"></a>

```go
func MergeRequestToResolveDiscussionsOfInput() *f64
```

- *Type:* *f64

---

##### `MilestoneIdInput`<sup>Optional</sup> <a name="MilestoneIdInput" id="@cdktf/provider-gitlab.projectIssue.ProjectIssue.property.milestoneIdInput"></a>

```go
func MilestoneIdInput() *f64
```

- *Type:* *f64

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-gitlab.projectIssue.ProjectIssue.property.projectInput"></a>

```go
func ProjectInput() *string
```

- *Type:* *string

---

##### `StateInput`<sup>Optional</sup> <a name="StateInput" id="@cdktf/provider-gitlab.projectIssue.ProjectIssue.property.stateInput"></a>

```go
func StateInput() *string
```

- *Type:* *string

---

##### `TitleInput`<sup>Optional</sup> <a name="TitleInput" id="@cdktf/provider-gitlab.projectIssue.ProjectIssue.property.titleInput"></a>

```go
func TitleInput() *string
```

- *Type:* *string

---

##### `UpdatedAtInput`<sup>Optional</sup> <a name="UpdatedAtInput" id="@cdktf/provider-gitlab.projectIssue.ProjectIssue.property.updatedAtInput"></a>

```go
func UpdatedAtInput() *string
```

- *Type:* *string

---

##### `WeightInput`<sup>Optional</sup> <a name="WeightInput" id="@cdktf/provider-gitlab.projectIssue.ProjectIssue.property.weightInput"></a>

```go
func WeightInput() *f64
```

- *Type:* *f64

---

##### `AssigneeIds`<sup>Required</sup> <a name="AssigneeIds" id="@cdktf/provider-gitlab.projectIssue.ProjectIssue.property.assigneeIds"></a>

```go
func AssigneeIds() *[]*f64
```

- *Type:* *[]*f64

---

##### `Confidential`<sup>Required</sup> <a name="Confidential" id="@cdktf/provider-gitlab.projectIssue.ProjectIssue.property.confidential"></a>

```go
func Confidential() interface{}
```

- *Type:* interface{}

---

##### `CreatedAt`<sup>Required</sup> <a name="CreatedAt" id="@cdktf/provider-gitlab.projectIssue.ProjectIssue.property.createdAt"></a>

```go
func CreatedAt() *string
```

- *Type:* *string

---

##### `DeleteOnDestroy`<sup>Required</sup> <a name="DeleteOnDestroy" id="@cdktf/provider-gitlab.projectIssue.ProjectIssue.property.deleteOnDestroy"></a>

```go
func DeleteOnDestroy() interface{}
```

- *Type:* interface{}

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-gitlab.projectIssue.ProjectIssue.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `DiscussionLocked`<sup>Required</sup> <a name="DiscussionLocked" id="@cdktf/provider-gitlab.projectIssue.ProjectIssue.property.discussionLocked"></a>

```go
func DiscussionLocked() interface{}
```

- *Type:* interface{}

---

##### `DiscussionToResolve`<sup>Required</sup> <a name="DiscussionToResolve" id="@cdktf/provider-gitlab.projectIssue.ProjectIssue.property.discussionToResolve"></a>

```go
func DiscussionToResolve() *string
```

- *Type:* *string

---

##### `DueDate`<sup>Required</sup> <a name="DueDate" id="@cdktf/provider-gitlab.projectIssue.ProjectIssue.property.dueDate"></a>

```go
func DueDate() *string
```

- *Type:* *string

---

##### `EpicIssueId`<sup>Required</sup> <a name="EpicIssueId" id="@cdktf/provider-gitlab.projectIssue.ProjectIssue.property.epicIssueId"></a>

```go
func EpicIssueId() *f64
```

- *Type:* *f64

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-gitlab.projectIssue.ProjectIssue.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Iid`<sup>Required</sup> <a name="Iid" id="@cdktf/provider-gitlab.projectIssue.ProjectIssue.property.iid"></a>

```go
func Iid() *f64
```

- *Type:* *f64

---

##### `IssueType`<sup>Required</sup> <a name="IssueType" id="@cdktf/provider-gitlab.projectIssue.ProjectIssue.property.issueType"></a>

```go
func IssueType() *string
```

- *Type:* *string

---

##### `Labels`<sup>Required</sup> <a name="Labels" id="@cdktf/provider-gitlab.projectIssue.ProjectIssue.property.labels"></a>

```go
func Labels() *[]*string
```

- *Type:* *[]*string

---

##### `MergeRequestToResolveDiscussionsOf`<sup>Required</sup> <a name="MergeRequestToResolveDiscussionsOf" id="@cdktf/provider-gitlab.projectIssue.ProjectIssue.property.mergeRequestToResolveDiscussionsOf"></a>

```go
func MergeRequestToResolveDiscussionsOf() *f64
```

- *Type:* *f64

---

##### `MilestoneId`<sup>Required</sup> <a name="MilestoneId" id="@cdktf/provider-gitlab.projectIssue.ProjectIssue.property.milestoneId"></a>

```go
func MilestoneId() *f64
```

- *Type:* *f64

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-gitlab.projectIssue.ProjectIssue.property.project"></a>

```go
func Project() *string
```

- *Type:* *string

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktf/provider-gitlab.projectIssue.ProjectIssue.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `Title`<sup>Required</sup> <a name="Title" id="@cdktf/provider-gitlab.projectIssue.ProjectIssue.property.title"></a>

```go
func Title() *string
```

- *Type:* *string

---

##### `UpdatedAt`<sup>Required</sup> <a name="UpdatedAt" id="@cdktf/provider-gitlab.projectIssue.ProjectIssue.property.updatedAt"></a>

```go
func UpdatedAt() *string
```

- *Type:* *string

---

##### `Weight`<sup>Required</sup> <a name="Weight" id="@cdktf/provider-gitlab.projectIssue.ProjectIssue.property.weight"></a>

```go
func Weight() *f64
```

- *Type:* *f64

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssue.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-gitlab.projectIssue.ProjectIssue.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### ProjectIssueConfig <a name="ProjectIssueConfig" id="@cdktf/provider-gitlab.projectIssue.ProjectIssueConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-gitlab.projectIssue.ProjectIssueConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-gitlab-go/gitlab/projectissue"

&projectissue.ProjectIssueConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Project: *string,
	Title: *string,
	AssigneeIds: *[]*f64,
	Confidential: interface{},
	CreatedAt: *string,
	DeleteOnDestroy: interface{},
	Description: *string,
	DiscussionLocked: interface{},
	DiscussionToResolve: *string,
	DueDate: *string,
	EpicIssueId: *f64,
	Id: *string,
	Iid: *f64,
	IssueType: *string,
	Labels: *[]*string,
	MergeRequestToResolveDiscussionsOf: *f64,
	MilestoneId: *f64,
	State: *string,
	UpdatedAt: *string,
	Weight: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssueConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssueConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssueConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssueConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssueConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssueConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssueConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssueConfig.property.project">Project</a></code> | <code>*string</code> | The name or ID of the project. |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssueConfig.property.title">Title</a></code> | <code>*string</code> | The title of the issue. |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssueConfig.property.assigneeIds">AssigneeIds</a></code> | <code>*[]*f64</code> | The IDs of the users to assign the issue to. |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssueConfig.property.confidential">Confidential</a></code> | <code>interface{}</code> | Set an issue to be confidential. |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssueConfig.property.createdAt">CreatedAt</a></code> | <code>*string</code> | When the issue was created. |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssueConfig.property.deleteOnDestroy">DeleteOnDestroy</a></code> | <code>interface{}</code> | Whether the issue is deleted instead of closed during destroy. |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssueConfig.property.description">Description</a></code> | <code>*string</code> | The description of an issue. Limited to 1,048,576 characters. |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssueConfig.property.discussionLocked">DiscussionLocked</a></code> | <code>interface{}</code> | Whether the issue is locked for discussions or not. |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssueConfig.property.discussionToResolve">DiscussionToResolve</a></code> | <code>*string</code> | The ID of a discussion to resolve. |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssueConfig.property.dueDate">DueDate</a></code> | <code>*string</code> | The due date. |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssueConfig.property.epicIssueId">EpicIssueId</a></code> | <code>*f64</code> | The ID of the epic issue. |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssueConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/15.10.0/docs/resources/project_issue#id ProjectIssue#id}. |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssueConfig.property.iid">Iid</a></code> | <code>*f64</code> | The internal ID of the project's issue. |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssueConfig.property.issueType">IssueType</a></code> | <code>*string</code> | The type of issue. Valid values are: `issue`, `incident`, `test_case`. |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssueConfig.property.labels">Labels</a></code> | <code>*[]*string</code> | The labels of an issue. |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssueConfig.property.mergeRequestToResolveDiscussionsOf">MergeRequestToResolveDiscussionsOf</a></code> | <code>*f64</code> | The IID of a merge request in which to resolve all issues. |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssueConfig.property.milestoneId">MilestoneId</a></code> | <code>*f64</code> | The global ID of a milestone to assign issue. |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssueConfig.property.state">State</a></code> | <code>*string</code> | The state of the issue. Valid values are: `opened`, `closed`. |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssueConfig.property.updatedAt">UpdatedAt</a></code> | <code>*string</code> | When the issue was updated. Date time string, ISO 8601 formatted, for example 2016-03-11T03:45:40Z. |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssueConfig.property.weight">Weight</a></code> | <code>*f64</code> | The weight of the issue. Valid values are greater than or equal to 0. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-gitlab.projectIssue.ProjectIssueConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-gitlab.projectIssue.ProjectIssueConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-gitlab.projectIssue.ProjectIssueConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-gitlab.projectIssue.ProjectIssueConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-gitlab.projectIssue.ProjectIssueConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-gitlab.projectIssue.ProjectIssueConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-gitlab.projectIssue.ProjectIssueConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-gitlab.projectIssue.ProjectIssueConfig.property.project"></a>

```go
Project *string
```

- *Type:* *string

The name or ID of the project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/15.10.0/docs/resources/project_issue#project ProjectIssue#project}

---

##### `Title`<sup>Required</sup> <a name="Title" id="@cdktf/provider-gitlab.projectIssue.ProjectIssueConfig.property.title"></a>

```go
Title *string
```

- *Type:* *string

The title of the issue.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/15.10.0/docs/resources/project_issue#title ProjectIssue#title}

---

##### `AssigneeIds`<sup>Optional</sup> <a name="AssigneeIds" id="@cdktf/provider-gitlab.projectIssue.ProjectIssueConfig.property.assigneeIds"></a>

```go
AssigneeIds *[]*f64
```

- *Type:* *[]*f64

The IDs of the users to assign the issue to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/15.10.0/docs/resources/project_issue#assignee_ids ProjectIssue#assignee_ids}

---

##### `Confidential`<sup>Optional</sup> <a name="Confidential" id="@cdktf/provider-gitlab.projectIssue.ProjectIssueConfig.property.confidential"></a>

```go
Confidential interface{}
```

- *Type:* interface{}

Set an issue to be confidential.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/15.10.0/docs/resources/project_issue#confidential ProjectIssue#confidential}

---

##### `CreatedAt`<sup>Optional</sup> <a name="CreatedAt" id="@cdktf/provider-gitlab.projectIssue.ProjectIssueConfig.property.createdAt"></a>

```go
CreatedAt *string
```

- *Type:* *string

When the issue was created.

Date time string, ISO 8601 formatted, for example 2016-03-11T03:45:40Z. Requires administrator or project/group owner rights.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/15.10.0/docs/resources/project_issue#created_at ProjectIssue#created_at}

---

##### `DeleteOnDestroy`<sup>Optional</sup> <a name="DeleteOnDestroy" id="@cdktf/provider-gitlab.projectIssue.ProjectIssueConfig.property.deleteOnDestroy"></a>

```go
DeleteOnDestroy interface{}
```

- *Type:* interface{}

Whether the issue is deleted instead of closed during destroy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/15.10.0/docs/resources/project_issue#delete_on_destroy ProjectIssue#delete_on_destroy}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-gitlab.projectIssue.ProjectIssueConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

The description of an issue. Limited to 1,048,576 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/15.10.0/docs/resources/project_issue#description ProjectIssue#description}

---

##### `DiscussionLocked`<sup>Optional</sup> <a name="DiscussionLocked" id="@cdktf/provider-gitlab.projectIssue.ProjectIssueConfig.property.discussionLocked"></a>

```go
DiscussionLocked interface{}
```

- *Type:* interface{}

Whether the issue is locked for discussions or not.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/15.10.0/docs/resources/project_issue#discussion_locked ProjectIssue#discussion_locked}

---

##### `DiscussionToResolve`<sup>Optional</sup> <a name="DiscussionToResolve" id="@cdktf/provider-gitlab.projectIssue.ProjectIssueConfig.property.discussionToResolve"></a>

```go
DiscussionToResolve *string
```

- *Type:* *string

The ID of a discussion to resolve.

This fills out the issue with a default description and mark the discussion as resolved. Use in combination with merge_request_to_resolve_discussions_of.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/15.10.0/docs/resources/project_issue#discussion_to_resolve ProjectIssue#discussion_to_resolve}

---

##### `DueDate`<sup>Optional</sup> <a name="DueDate" id="@cdktf/provider-gitlab.projectIssue.ProjectIssueConfig.property.dueDate"></a>

```go
DueDate *string
```

- *Type:* *string

The due date.

Date time string in the format YYYY-MM-DD, for example 2016-03-11.
*Note:** removing a due date is currently not supported, see https://github.com/xanzy/go-gitlab/issues/1384 for details.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/15.10.0/docs/resources/project_issue#due_date ProjectIssue#due_date}

---

##### `EpicIssueId`<sup>Optional</sup> <a name="EpicIssueId" id="@cdktf/provider-gitlab.projectIssue.ProjectIssueConfig.property.epicIssueId"></a>

```go
EpicIssueId *f64
```

- *Type:* *f64

The ID of the epic issue.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/15.10.0/docs/resources/project_issue#epic_issue_id ProjectIssue#epic_issue_id}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-gitlab.projectIssue.ProjectIssueConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/15.10.0/docs/resources/project_issue#id ProjectIssue#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Iid`<sup>Optional</sup> <a name="Iid" id="@cdktf/provider-gitlab.projectIssue.ProjectIssueConfig.property.iid"></a>

```go
Iid *f64
```

- *Type:* *f64

The internal ID of the project's issue.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/15.10.0/docs/resources/project_issue#iid ProjectIssue#iid}

---

##### `IssueType`<sup>Optional</sup> <a name="IssueType" id="@cdktf/provider-gitlab.projectIssue.ProjectIssueConfig.property.issueType"></a>

```go
IssueType *string
```

- *Type:* *string

The type of issue. Valid values are: `issue`, `incident`, `test_case`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/15.10.0/docs/resources/project_issue#issue_type ProjectIssue#issue_type}

---

##### `Labels`<sup>Optional</sup> <a name="Labels" id="@cdktf/provider-gitlab.projectIssue.ProjectIssueConfig.property.labels"></a>

```go
Labels *[]*string
```

- *Type:* *[]*string

The labels of an issue.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/15.10.0/docs/resources/project_issue#labels ProjectIssue#labels}

---

##### `MergeRequestToResolveDiscussionsOf`<sup>Optional</sup> <a name="MergeRequestToResolveDiscussionsOf" id="@cdktf/provider-gitlab.projectIssue.ProjectIssueConfig.property.mergeRequestToResolveDiscussionsOf"></a>

```go
MergeRequestToResolveDiscussionsOf *f64
```

- *Type:* *f64

The IID of a merge request in which to resolve all issues.

This fills out the issue with a default description and mark all discussions as resolved. When passing a description or title, these values take precedence over the default values.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/15.10.0/docs/resources/project_issue#merge_request_to_resolve_discussions_of ProjectIssue#merge_request_to_resolve_discussions_of}

---

##### `MilestoneId`<sup>Optional</sup> <a name="MilestoneId" id="@cdktf/provider-gitlab.projectIssue.ProjectIssueConfig.property.milestoneId"></a>

```go
MilestoneId *f64
```

- *Type:* *f64

The global ID of a milestone to assign issue.

To find the milestone_id associated with a milestone, view an issue with the milestone assigned and use the API to retrieve the issue's details.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/15.10.0/docs/resources/project_issue#milestone_id ProjectIssue#milestone_id}

---

##### `State`<sup>Optional</sup> <a name="State" id="@cdktf/provider-gitlab.projectIssue.ProjectIssueConfig.property.state"></a>

```go
State *string
```

- *Type:* *string

The state of the issue. Valid values are: `opened`, `closed`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/15.10.0/docs/resources/project_issue#state ProjectIssue#state}

---

##### `UpdatedAt`<sup>Optional</sup> <a name="UpdatedAt" id="@cdktf/provider-gitlab.projectIssue.ProjectIssueConfig.property.updatedAt"></a>

```go
UpdatedAt *string
```

- *Type:* *string

When the issue was updated. Date time string, ISO 8601 formatted, for example 2016-03-11T03:45:40Z.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/15.10.0/docs/resources/project_issue#updated_at ProjectIssue#updated_at}

---

##### `Weight`<sup>Optional</sup> <a name="Weight" id="@cdktf/provider-gitlab.projectIssue.ProjectIssueConfig.property.weight"></a>

```go
Weight *f64
```

- *Type:* *f64

The weight of the issue. Valid values are greater than or equal to 0.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/15.10.0/docs/resources/project_issue#weight ProjectIssue#weight}

---

### ProjectIssueTaskCompletionStatus <a name="ProjectIssueTaskCompletionStatus" id="@cdktf/provider-gitlab.projectIssue.ProjectIssueTaskCompletionStatus"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-gitlab.projectIssue.ProjectIssueTaskCompletionStatus.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-gitlab-go/gitlab/projectissue"

&projectissue.ProjectIssueTaskCompletionStatus {

}
```


## Classes <a name="Classes" id="Classes"></a>

### ProjectIssueTaskCompletionStatusList <a name="ProjectIssueTaskCompletionStatusList" id="@cdktf/provider-gitlab.projectIssue.ProjectIssueTaskCompletionStatusList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-gitlab.projectIssue.ProjectIssueTaskCompletionStatusList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-gitlab-go/gitlab/projectissue"

projectissue.NewProjectIssueTaskCompletionStatusList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) ProjectIssueTaskCompletionStatusList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssueTaskCompletionStatusList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssueTaskCompletionStatusList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssueTaskCompletionStatusList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-gitlab.projectIssue.ProjectIssueTaskCompletionStatusList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.projectIssue.ProjectIssueTaskCompletionStatusList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-gitlab.projectIssue.ProjectIssueTaskCompletionStatusList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssueTaskCompletionStatusList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssueTaskCompletionStatusList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssueTaskCompletionStatusList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssueTaskCompletionStatusList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-gitlab.projectIssue.ProjectIssueTaskCompletionStatusList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-gitlab.projectIssue.ProjectIssueTaskCompletionStatusList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-gitlab.projectIssue.ProjectIssueTaskCompletionStatusList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-gitlab.projectIssue.ProjectIssueTaskCompletionStatusList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-gitlab.projectIssue.ProjectIssueTaskCompletionStatusList.get"></a>

```go
func Get(index *f64) ProjectIssueTaskCompletionStatusOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-gitlab.projectIssue.ProjectIssueTaskCompletionStatusList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssueTaskCompletionStatusList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssueTaskCompletionStatusList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-gitlab.projectIssue.ProjectIssueTaskCompletionStatusList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-gitlab.projectIssue.ProjectIssueTaskCompletionStatusList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### ProjectIssueTaskCompletionStatusOutputReference <a name="ProjectIssueTaskCompletionStatusOutputReference" id="@cdktf/provider-gitlab.projectIssue.ProjectIssueTaskCompletionStatusOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-gitlab.projectIssue.ProjectIssueTaskCompletionStatusOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-gitlab-go/gitlab/projectissue"

projectissue.NewProjectIssueTaskCompletionStatusOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) ProjectIssueTaskCompletionStatusOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssueTaskCompletionStatusOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssueTaskCompletionStatusOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssueTaskCompletionStatusOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssueTaskCompletionStatusOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-gitlab.projectIssue.ProjectIssueTaskCompletionStatusOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.projectIssue.ProjectIssueTaskCompletionStatusOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-gitlab.projectIssue.ProjectIssueTaskCompletionStatusOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-gitlab.projectIssue.ProjectIssueTaskCompletionStatusOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssueTaskCompletionStatusOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssueTaskCompletionStatusOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssueTaskCompletionStatusOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssueTaskCompletionStatusOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssueTaskCompletionStatusOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssueTaskCompletionStatusOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssueTaskCompletionStatusOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssueTaskCompletionStatusOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssueTaskCompletionStatusOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssueTaskCompletionStatusOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssueTaskCompletionStatusOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssueTaskCompletionStatusOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssueTaskCompletionStatusOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-gitlab.projectIssue.ProjectIssueTaskCompletionStatusOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-gitlab.projectIssue.ProjectIssueTaskCompletionStatusOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.projectIssue.ProjectIssueTaskCompletionStatusOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-gitlab.projectIssue.ProjectIssueTaskCompletionStatusOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.projectIssue.ProjectIssueTaskCompletionStatusOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-gitlab.projectIssue.ProjectIssueTaskCompletionStatusOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.projectIssue.ProjectIssueTaskCompletionStatusOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-gitlab.projectIssue.ProjectIssueTaskCompletionStatusOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.projectIssue.ProjectIssueTaskCompletionStatusOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-gitlab.projectIssue.ProjectIssueTaskCompletionStatusOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.projectIssue.ProjectIssueTaskCompletionStatusOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-gitlab.projectIssue.ProjectIssueTaskCompletionStatusOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.projectIssue.ProjectIssueTaskCompletionStatusOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-gitlab.projectIssue.ProjectIssueTaskCompletionStatusOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.projectIssue.ProjectIssueTaskCompletionStatusOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-gitlab.projectIssue.ProjectIssueTaskCompletionStatusOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.projectIssue.ProjectIssueTaskCompletionStatusOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-gitlab.projectIssue.ProjectIssueTaskCompletionStatusOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.projectIssue.ProjectIssueTaskCompletionStatusOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-gitlab.projectIssue.ProjectIssueTaskCompletionStatusOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-gitlab.projectIssue.ProjectIssueTaskCompletionStatusOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-gitlab.projectIssue.ProjectIssueTaskCompletionStatusOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-gitlab.projectIssue.ProjectIssueTaskCompletionStatusOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-gitlab.projectIssue.ProjectIssueTaskCompletionStatusOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssueTaskCompletionStatusOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssueTaskCompletionStatusOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssueTaskCompletionStatusOutputReference.property.completedCount">CompletedCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssueTaskCompletionStatusOutputReference.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssueTaskCompletionStatusOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssueTaskCompletionStatus">ProjectIssueTaskCompletionStatus</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-gitlab.projectIssue.ProjectIssueTaskCompletionStatusOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-gitlab.projectIssue.ProjectIssueTaskCompletionStatusOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CompletedCount`<sup>Required</sup> <a name="CompletedCount" id="@cdktf/provider-gitlab.projectIssue.ProjectIssueTaskCompletionStatusOutputReference.property.completedCount"></a>

```go
func CompletedCount() *f64
```

- *Type:* *f64

---

##### `Count`<sup>Required</sup> <a name="Count" id="@cdktf/provider-gitlab.projectIssue.ProjectIssueTaskCompletionStatusOutputReference.property.count"></a>

```go
func Count() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-gitlab.projectIssue.ProjectIssueTaskCompletionStatusOutputReference.property.internalValue"></a>

```go
func InternalValue() ProjectIssueTaskCompletionStatus
```

- *Type:* <a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssueTaskCompletionStatus">ProjectIssueTaskCompletionStatus</a>

---



