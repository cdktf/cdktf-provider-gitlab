# `dataGitlabProjectMilestones` Submodule <a name="`dataGitlabProjectMilestones` Submodule" id="@cdktf/provider-gitlab.dataGitlabProjectMilestones"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataGitlabProjectMilestones <a name="DataGitlabProjectMilestones" id="@cdktf/provider-gitlab.dataGitlabProjectMilestones.DataGitlabProjectMilestones"></a>

Represents a {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.4.0/docs/data-sources/project_milestones gitlab_project_milestones}.

#### Initializers <a name="Initializers" id="@cdktf/provider-gitlab.dataGitlabProjectMilestones.DataGitlabProjectMilestones.Initializer"></a>

```typescript
import { dataGitlabProjectMilestones } from '@cdktf/provider-gitlab'

new dataGitlabProjectMilestones.DataGitlabProjectMilestones(scope: Construct, id: string, config: DataGitlabProjectMilestonesConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMilestones.DataGitlabProjectMilestones.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMilestones.DataGitlabProjectMilestones.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMilestones.DataGitlabProjectMilestones.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMilestones.DataGitlabProjectMilestonesConfig">DataGitlabProjectMilestonesConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-gitlab.dataGitlabProjectMilestones.DataGitlabProjectMilestones.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-gitlab.dataGitlabProjectMilestones.DataGitlabProjectMilestones.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-gitlab.dataGitlabProjectMilestones.DataGitlabProjectMilestones.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-gitlab.dataGitlabProjectMilestones.DataGitlabProjectMilestonesConfig">DataGitlabProjectMilestonesConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMilestones.DataGitlabProjectMilestones.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMilestones.DataGitlabProjectMilestones.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMilestones.DataGitlabProjectMilestones.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMilestones.DataGitlabProjectMilestones.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMilestones.DataGitlabProjectMilestones.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMilestones.DataGitlabProjectMilestones.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMilestones.DataGitlabProjectMilestones.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMilestones.DataGitlabProjectMilestones.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMilestones.DataGitlabProjectMilestones.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMilestones.DataGitlabProjectMilestones.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMilestones.DataGitlabProjectMilestones.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMilestones.DataGitlabProjectMilestones.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMilestones.DataGitlabProjectMilestones.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMilestones.DataGitlabProjectMilestones.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMilestones.DataGitlabProjectMilestones.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMilestones.DataGitlabProjectMilestones.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMilestones.DataGitlabProjectMilestones.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMilestones.DataGitlabProjectMilestones.resetIids">resetIids</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMilestones.DataGitlabProjectMilestones.resetIncludeParentMilestones">resetIncludeParentMilestones</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMilestones.DataGitlabProjectMilestones.resetSearch">resetSearch</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMilestones.DataGitlabProjectMilestones.resetState">resetState</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMilestones.DataGitlabProjectMilestones.resetTitle">resetTitle</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-gitlab.dataGitlabProjectMilestones.DataGitlabProjectMilestones.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-gitlab.dataGitlabProjectMilestones.DataGitlabProjectMilestones.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-gitlab.dataGitlabProjectMilestones.DataGitlabProjectMilestones.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-gitlab.dataGitlabProjectMilestones.DataGitlabProjectMilestones.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-gitlab.dataGitlabProjectMilestones.DataGitlabProjectMilestones.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-gitlab.dataGitlabProjectMilestones.DataGitlabProjectMilestones.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-gitlab.dataGitlabProjectMilestones.DataGitlabProjectMilestones.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-gitlab.dataGitlabProjectMilestones.DataGitlabProjectMilestones.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-gitlab.dataGitlabProjectMilestones.DataGitlabProjectMilestones.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-gitlab.dataGitlabProjectMilestones.DataGitlabProjectMilestones.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectMilestones.DataGitlabProjectMilestones.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectMilestones.DataGitlabProjectMilestones.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectMilestones.DataGitlabProjectMilestones.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectMilestones.DataGitlabProjectMilestones.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectMilestones.DataGitlabProjectMilestones.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectMilestones.DataGitlabProjectMilestones.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectMilestones.DataGitlabProjectMilestones.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectMilestones.DataGitlabProjectMilestones.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectMilestones.DataGitlabProjectMilestones.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectMilestones.DataGitlabProjectMilestones.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectMilestones.DataGitlabProjectMilestones.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectMilestones.DataGitlabProjectMilestones.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectMilestones.DataGitlabProjectMilestones.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectMilestones.DataGitlabProjectMilestones.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectMilestones.DataGitlabProjectMilestones.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectMilestones.DataGitlabProjectMilestones.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectMilestones.DataGitlabProjectMilestones.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectMilestones.DataGitlabProjectMilestones.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectMilestones.DataGitlabProjectMilestones.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectMilestones.DataGitlabProjectMilestones.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetIids` <a name="resetIids" id="@cdktf/provider-gitlab.dataGitlabProjectMilestones.DataGitlabProjectMilestones.resetIids"></a>

```typescript
public resetIids(): void
```

##### `resetIncludeParentMilestones` <a name="resetIncludeParentMilestones" id="@cdktf/provider-gitlab.dataGitlabProjectMilestones.DataGitlabProjectMilestones.resetIncludeParentMilestones"></a>

```typescript
public resetIncludeParentMilestones(): void
```

##### `resetSearch` <a name="resetSearch" id="@cdktf/provider-gitlab.dataGitlabProjectMilestones.DataGitlabProjectMilestones.resetSearch"></a>

```typescript
public resetSearch(): void
```

##### `resetState` <a name="resetState" id="@cdktf/provider-gitlab.dataGitlabProjectMilestones.DataGitlabProjectMilestones.resetState"></a>

```typescript
public resetState(): void
```

##### `resetTitle` <a name="resetTitle" id="@cdktf/provider-gitlab.dataGitlabProjectMilestones.DataGitlabProjectMilestones.resetTitle"></a>

```typescript
public resetTitle(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMilestones.DataGitlabProjectMilestones.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMilestones.DataGitlabProjectMilestones.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMilestones.DataGitlabProjectMilestones.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMilestones.DataGitlabProjectMilestones.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataGitlabProjectMilestones resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-gitlab.dataGitlabProjectMilestones.DataGitlabProjectMilestones.isConstruct"></a>

```typescript
import { dataGitlabProjectMilestones } from '@cdktf/provider-gitlab'

dataGitlabProjectMilestones.DataGitlabProjectMilestones.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-gitlab.dataGitlabProjectMilestones.DataGitlabProjectMilestones.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-gitlab.dataGitlabProjectMilestones.DataGitlabProjectMilestones.isTerraformElement"></a>

```typescript
import { dataGitlabProjectMilestones } from '@cdktf/provider-gitlab'

dataGitlabProjectMilestones.DataGitlabProjectMilestones.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-gitlab.dataGitlabProjectMilestones.DataGitlabProjectMilestones.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-gitlab.dataGitlabProjectMilestones.DataGitlabProjectMilestones.isTerraformDataSource"></a>

```typescript
import { dataGitlabProjectMilestones } from '@cdktf/provider-gitlab'

dataGitlabProjectMilestones.DataGitlabProjectMilestones.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-gitlab.dataGitlabProjectMilestones.DataGitlabProjectMilestones.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-gitlab.dataGitlabProjectMilestones.DataGitlabProjectMilestones.generateConfigForImport"></a>

```typescript
import { dataGitlabProjectMilestones } from '@cdktf/provider-gitlab'

dataGitlabProjectMilestones.DataGitlabProjectMilestones.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataGitlabProjectMilestones resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-gitlab.dataGitlabProjectMilestones.DataGitlabProjectMilestones.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-gitlab.dataGitlabProjectMilestones.DataGitlabProjectMilestones.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataGitlabProjectMilestones to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-gitlab.dataGitlabProjectMilestones.DataGitlabProjectMilestones.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataGitlabProjectMilestones that should be imported.

Refer to the {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.4.0/docs/data-sources/project_milestones#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-gitlab.dataGitlabProjectMilestones.DataGitlabProjectMilestones.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataGitlabProjectMilestones to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMilestones.DataGitlabProjectMilestones.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMilestones.DataGitlabProjectMilestones.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMilestones.DataGitlabProjectMilestones.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMilestones.DataGitlabProjectMilestones.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMilestones.DataGitlabProjectMilestones.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMilestones.DataGitlabProjectMilestones.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMilestones.DataGitlabProjectMilestones.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMilestones.DataGitlabProjectMilestones.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMilestones.DataGitlabProjectMilestones.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMilestones.DataGitlabProjectMilestones.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMilestones.DataGitlabProjectMilestones.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMilestones.DataGitlabProjectMilestones.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMilestones.DataGitlabProjectMilestones.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMilestones.DataGitlabProjectMilestones.property.milestones">milestones</a></code> | <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMilestones.DataGitlabProjectMilestonesMilestonesList">DataGitlabProjectMilestonesMilestonesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMilestones.DataGitlabProjectMilestones.property.iidsInput">iidsInput</a></code> | <code>number[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMilestones.DataGitlabProjectMilestones.property.includeParentMilestonesInput">includeParentMilestonesInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMilestones.DataGitlabProjectMilestones.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMilestones.DataGitlabProjectMilestones.property.searchInput">searchInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMilestones.DataGitlabProjectMilestones.property.stateInput">stateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMilestones.DataGitlabProjectMilestones.property.titleInput">titleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMilestones.DataGitlabProjectMilestones.property.iids">iids</a></code> | <code>number[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMilestones.DataGitlabProjectMilestones.property.includeParentMilestones">includeParentMilestones</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMilestones.DataGitlabProjectMilestones.property.project">project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMilestones.DataGitlabProjectMilestones.property.search">search</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMilestones.DataGitlabProjectMilestones.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMilestones.DataGitlabProjectMilestones.property.title">title</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-gitlab.dataGitlabProjectMilestones.DataGitlabProjectMilestones.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-gitlab.dataGitlabProjectMilestones.DataGitlabProjectMilestones.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-gitlab.dataGitlabProjectMilestones.DataGitlabProjectMilestones.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-gitlab.dataGitlabProjectMilestones.DataGitlabProjectMilestones.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-gitlab.dataGitlabProjectMilestones.DataGitlabProjectMilestones.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-gitlab.dataGitlabProjectMilestones.DataGitlabProjectMilestones.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-gitlab.dataGitlabProjectMilestones.DataGitlabProjectMilestones.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-gitlab.dataGitlabProjectMilestones.DataGitlabProjectMilestones.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-gitlab.dataGitlabProjectMilestones.DataGitlabProjectMilestones.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-gitlab.dataGitlabProjectMilestones.DataGitlabProjectMilestones.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-gitlab.dataGitlabProjectMilestones.DataGitlabProjectMilestones.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-gitlab.dataGitlabProjectMilestones.DataGitlabProjectMilestones.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-gitlab.dataGitlabProjectMilestones.DataGitlabProjectMilestones.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `milestones`<sup>Required</sup> <a name="milestones" id="@cdktf/provider-gitlab.dataGitlabProjectMilestones.DataGitlabProjectMilestones.property.milestones"></a>

```typescript
public readonly milestones: DataGitlabProjectMilestonesMilestonesList;
```

- *Type:* <a href="#@cdktf/provider-gitlab.dataGitlabProjectMilestones.DataGitlabProjectMilestonesMilestonesList">DataGitlabProjectMilestonesMilestonesList</a>

---

##### `iidsInput`<sup>Optional</sup> <a name="iidsInput" id="@cdktf/provider-gitlab.dataGitlabProjectMilestones.DataGitlabProjectMilestones.property.iidsInput"></a>

```typescript
public readonly iidsInput: number[];
```

- *Type:* number[]

---

##### `includeParentMilestonesInput`<sup>Optional</sup> <a name="includeParentMilestonesInput" id="@cdktf/provider-gitlab.dataGitlabProjectMilestones.DataGitlabProjectMilestones.property.includeParentMilestonesInput"></a>

```typescript
public readonly includeParentMilestonesInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-gitlab.dataGitlabProjectMilestones.DataGitlabProjectMilestones.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `searchInput`<sup>Optional</sup> <a name="searchInput" id="@cdktf/provider-gitlab.dataGitlabProjectMilestones.DataGitlabProjectMilestones.property.searchInput"></a>

```typescript
public readonly searchInput: string;
```

- *Type:* string

---

##### `stateInput`<sup>Optional</sup> <a name="stateInput" id="@cdktf/provider-gitlab.dataGitlabProjectMilestones.DataGitlabProjectMilestones.property.stateInput"></a>

```typescript
public readonly stateInput: string;
```

- *Type:* string

---

##### `titleInput`<sup>Optional</sup> <a name="titleInput" id="@cdktf/provider-gitlab.dataGitlabProjectMilestones.DataGitlabProjectMilestones.property.titleInput"></a>

```typescript
public readonly titleInput: string;
```

- *Type:* string

---

##### `iids`<sup>Required</sup> <a name="iids" id="@cdktf/provider-gitlab.dataGitlabProjectMilestones.DataGitlabProjectMilestones.property.iids"></a>

```typescript
public readonly iids: number[];
```

- *Type:* number[]

---

##### `includeParentMilestones`<sup>Required</sup> <a name="includeParentMilestones" id="@cdktf/provider-gitlab.dataGitlabProjectMilestones.DataGitlabProjectMilestones.property.includeParentMilestones"></a>

```typescript
public readonly includeParentMilestones: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-gitlab.dataGitlabProjectMilestones.DataGitlabProjectMilestones.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

##### `search`<sup>Required</sup> <a name="search" id="@cdktf/provider-gitlab.dataGitlabProjectMilestones.DataGitlabProjectMilestones.property.search"></a>

```typescript
public readonly search: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-gitlab.dataGitlabProjectMilestones.DataGitlabProjectMilestones.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `title`<sup>Required</sup> <a name="title" id="@cdktf/provider-gitlab.dataGitlabProjectMilestones.DataGitlabProjectMilestones.property.title"></a>

```typescript
public readonly title: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMilestones.DataGitlabProjectMilestones.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-gitlab.dataGitlabProjectMilestones.DataGitlabProjectMilestones.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataGitlabProjectMilestonesConfig <a name="DataGitlabProjectMilestonesConfig" id="@cdktf/provider-gitlab.dataGitlabProjectMilestones.DataGitlabProjectMilestonesConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-gitlab.dataGitlabProjectMilestones.DataGitlabProjectMilestonesConfig.Initializer"></a>

```typescript
import { dataGitlabProjectMilestones } from '@cdktf/provider-gitlab'

const dataGitlabProjectMilestonesConfig: dataGitlabProjectMilestones.DataGitlabProjectMilestonesConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMilestones.DataGitlabProjectMilestonesConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMilestones.DataGitlabProjectMilestonesConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMilestones.DataGitlabProjectMilestonesConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMilestones.DataGitlabProjectMilestonesConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMilestones.DataGitlabProjectMilestonesConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMilestones.DataGitlabProjectMilestonesConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMilestones.DataGitlabProjectMilestonesConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMilestones.DataGitlabProjectMilestonesConfig.property.project">project</a></code> | <code>string</code> | The ID or URL-encoded path of the project owned by the authenticated user. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMilestones.DataGitlabProjectMilestonesConfig.property.iids">iids</a></code> | <code>number[]</code> | Return only the milestones having the given `iid` (Note: ignored if `include_parent_milestones` is set as `true`). |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMilestones.DataGitlabProjectMilestonesConfig.property.includeParentMilestones">includeParentMilestones</a></code> | <code>boolean \| cdktf.IResolvable</code> | Include group milestones from parent group and its ancestors. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMilestones.DataGitlabProjectMilestonesConfig.property.search">search</a></code> | <code>string</code> | Return only milestones with a title or description matching the provided string. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMilestones.DataGitlabProjectMilestonesConfig.property.state">state</a></code> | <code>string</code> | Return only `active` or `closed` milestones. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMilestones.DataGitlabProjectMilestonesConfig.property.title">title</a></code> | <code>string</code> | Return only the milestones having the given `title`. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-gitlab.dataGitlabProjectMilestones.DataGitlabProjectMilestonesConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-gitlab.dataGitlabProjectMilestones.DataGitlabProjectMilestonesConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-gitlab.dataGitlabProjectMilestones.DataGitlabProjectMilestonesConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-gitlab.dataGitlabProjectMilestones.DataGitlabProjectMilestonesConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-gitlab.dataGitlabProjectMilestones.DataGitlabProjectMilestonesConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-gitlab.dataGitlabProjectMilestones.DataGitlabProjectMilestonesConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-gitlab.dataGitlabProjectMilestones.DataGitlabProjectMilestonesConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-gitlab.dataGitlabProjectMilestones.DataGitlabProjectMilestonesConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

The ID or URL-encoded path of the project owned by the authenticated user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.4.0/docs/data-sources/project_milestones#project DataGitlabProjectMilestones#project}

---

##### `iids`<sup>Optional</sup> <a name="iids" id="@cdktf/provider-gitlab.dataGitlabProjectMilestones.DataGitlabProjectMilestonesConfig.property.iids"></a>

```typescript
public readonly iids: number[];
```

- *Type:* number[]

Return only the milestones having the given `iid` (Note: ignored if `include_parent_milestones` is set as `true`).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.4.0/docs/data-sources/project_milestones#iids DataGitlabProjectMilestones#iids}

---

##### `includeParentMilestones`<sup>Optional</sup> <a name="includeParentMilestones" id="@cdktf/provider-gitlab.dataGitlabProjectMilestones.DataGitlabProjectMilestonesConfig.property.includeParentMilestones"></a>

```typescript
public readonly includeParentMilestones: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Include group milestones from parent group and its ancestors.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.4.0/docs/data-sources/project_milestones#include_parent_milestones DataGitlabProjectMilestones#include_parent_milestones}

---

##### `search`<sup>Optional</sup> <a name="search" id="@cdktf/provider-gitlab.dataGitlabProjectMilestones.DataGitlabProjectMilestonesConfig.property.search"></a>

```typescript
public readonly search: string;
```

- *Type:* string

Return only milestones with a title or description matching the provided string.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.4.0/docs/data-sources/project_milestones#search DataGitlabProjectMilestones#search}

---

##### `state`<sup>Optional</sup> <a name="state" id="@cdktf/provider-gitlab.dataGitlabProjectMilestones.DataGitlabProjectMilestonesConfig.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

Return only `active` or `closed` milestones.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.4.0/docs/data-sources/project_milestones#state DataGitlabProjectMilestones#state}

---

##### `title`<sup>Optional</sup> <a name="title" id="@cdktf/provider-gitlab.dataGitlabProjectMilestones.DataGitlabProjectMilestonesConfig.property.title"></a>

```typescript
public readonly title: string;
```

- *Type:* string

Return only the milestones having the given `title`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.4.0/docs/data-sources/project_milestones#title DataGitlabProjectMilestones#title}

---

### DataGitlabProjectMilestonesMilestones <a name="DataGitlabProjectMilestonesMilestones" id="@cdktf/provider-gitlab.dataGitlabProjectMilestones.DataGitlabProjectMilestonesMilestones"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-gitlab.dataGitlabProjectMilestones.DataGitlabProjectMilestonesMilestones.Initializer"></a>

```typescript
import { dataGitlabProjectMilestones } from '@cdktf/provider-gitlab'

const dataGitlabProjectMilestonesMilestones: dataGitlabProjectMilestones.DataGitlabProjectMilestonesMilestones = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataGitlabProjectMilestonesMilestonesList <a name="DataGitlabProjectMilestonesMilestonesList" id="@cdktf/provider-gitlab.dataGitlabProjectMilestones.DataGitlabProjectMilestonesMilestonesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-gitlab.dataGitlabProjectMilestones.DataGitlabProjectMilestonesMilestonesList.Initializer"></a>

```typescript
import { dataGitlabProjectMilestones } from '@cdktf/provider-gitlab'

new dataGitlabProjectMilestones.DataGitlabProjectMilestonesMilestonesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMilestones.DataGitlabProjectMilestonesMilestonesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMilestones.DataGitlabProjectMilestonesMilestonesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMilestones.DataGitlabProjectMilestonesMilestonesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-gitlab.dataGitlabProjectMilestones.DataGitlabProjectMilestonesMilestonesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectMilestones.DataGitlabProjectMilestonesMilestonesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-gitlab.dataGitlabProjectMilestones.DataGitlabProjectMilestonesMilestonesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMilestones.DataGitlabProjectMilestonesMilestonesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMilestones.DataGitlabProjectMilestonesMilestonesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMilestones.DataGitlabProjectMilestonesMilestonesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMilestones.DataGitlabProjectMilestonesMilestonesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMilestones.DataGitlabProjectMilestonesMilestonesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-gitlab.dataGitlabProjectMilestones.DataGitlabProjectMilestonesMilestonesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-gitlab.dataGitlabProjectMilestones.DataGitlabProjectMilestonesMilestonesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-gitlab.dataGitlabProjectMilestones.DataGitlabProjectMilestonesMilestonesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-gitlab.dataGitlabProjectMilestones.DataGitlabProjectMilestonesMilestonesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-gitlab.dataGitlabProjectMilestones.DataGitlabProjectMilestonesMilestonesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-gitlab.dataGitlabProjectMilestones.DataGitlabProjectMilestonesMilestonesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-gitlab.dataGitlabProjectMilestones.DataGitlabProjectMilestonesMilestonesList.get"></a>

```typescript
public get(index: number): DataGitlabProjectMilestonesMilestonesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-gitlab.dataGitlabProjectMilestones.DataGitlabProjectMilestonesMilestonesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMilestones.DataGitlabProjectMilestonesMilestonesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMilestones.DataGitlabProjectMilestonesMilestonesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-gitlab.dataGitlabProjectMilestones.DataGitlabProjectMilestonesMilestonesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-gitlab.dataGitlabProjectMilestones.DataGitlabProjectMilestonesMilestonesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataGitlabProjectMilestonesMilestonesOutputReference <a name="DataGitlabProjectMilestonesMilestonesOutputReference" id="@cdktf/provider-gitlab.dataGitlabProjectMilestones.DataGitlabProjectMilestonesMilestonesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-gitlab.dataGitlabProjectMilestones.DataGitlabProjectMilestonesMilestonesOutputReference.Initializer"></a>

```typescript
import { dataGitlabProjectMilestones } from '@cdktf/provider-gitlab'

new dataGitlabProjectMilestones.DataGitlabProjectMilestonesMilestonesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMilestones.DataGitlabProjectMilestonesMilestonesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMilestones.DataGitlabProjectMilestonesMilestonesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMilestones.DataGitlabProjectMilestonesMilestonesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMilestones.DataGitlabProjectMilestonesMilestonesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-gitlab.dataGitlabProjectMilestones.DataGitlabProjectMilestonesMilestonesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectMilestones.DataGitlabProjectMilestonesMilestonesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-gitlab.dataGitlabProjectMilestones.DataGitlabProjectMilestonesMilestonesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-gitlab.dataGitlabProjectMilestones.DataGitlabProjectMilestonesMilestonesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMilestones.DataGitlabProjectMilestonesMilestonesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMilestones.DataGitlabProjectMilestonesMilestonesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMilestones.DataGitlabProjectMilestonesMilestonesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMilestones.DataGitlabProjectMilestonesMilestonesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMilestones.DataGitlabProjectMilestonesMilestonesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMilestones.DataGitlabProjectMilestonesMilestonesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMilestones.DataGitlabProjectMilestonesMilestonesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMilestones.DataGitlabProjectMilestonesMilestonesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMilestones.DataGitlabProjectMilestonesMilestonesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMilestones.DataGitlabProjectMilestonesMilestonesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMilestones.DataGitlabProjectMilestonesMilestonesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMilestones.DataGitlabProjectMilestonesMilestonesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMilestones.DataGitlabProjectMilestonesMilestonesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-gitlab.dataGitlabProjectMilestones.DataGitlabProjectMilestonesMilestonesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectMilestones.DataGitlabProjectMilestonesMilestonesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectMilestones.DataGitlabProjectMilestonesMilestonesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectMilestones.DataGitlabProjectMilestonesMilestonesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectMilestones.DataGitlabProjectMilestonesMilestonesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectMilestones.DataGitlabProjectMilestonesMilestonesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectMilestones.DataGitlabProjectMilestonesMilestonesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectMilestones.DataGitlabProjectMilestonesMilestonesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectMilestones.DataGitlabProjectMilestonesMilestonesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectMilestones.DataGitlabProjectMilestonesMilestonesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectMilestones.DataGitlabProjectMilestonesMilestonesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectMilestones.DataGitlabProjectMilestonesMilestonesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectMilestones.DataGitlabProjectMilestonesMilestonesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectMilestones.DataGitlabProjectMilestonesMilestonesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectMilestones.DataGitlabProjectMilestonesMilestonesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectMilestones.DataGitlabProjectMilestonesMilestonesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectMilestones.DataGitlabProjectMilestonesMilestonesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectMilestones.DataGitlabProjectMilestonesMilestonesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectMilestones.DataGitlabProjectMilestonesMilestonesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectMilestones.DataGitlabProjectMilestonesMilestonesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-gitlab.dataGitlabProjectMilestones.DataGitlabProjectMilestonesMilestonesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-gitlab.dataGitlabProjectMilestones.DataGitlabProjectMilestonesMilestonesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-gitlab.dataGitlabProjectMilestones.DataGitlabProjectMilestonesMilestonesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-gitlab.dataGitlabProjectMilestones.DataGitlabProjectMilestonesMilestonesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMilestones.DataGitlabProjectMilestonesMilestonesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMilestones.DataGitlabProjectMilestonesMilestonesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMilestones.DataGitlabProjectMilestonesMilestonesOutputReference.property.createdAt">createdAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMilestones.DataGitlabProjectMilestonesMilestonesOutputReference.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMilestones.DataGitlabProjectMilestonesMilestonesOutputReference.property.dueDate">dueDate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMilestones.DataGitlabProjectMilestonesMilestonesOutputReference.property.expired">expired</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMilestones.DataGitlabProjectMilestonesMilestonesOutputReference.property.iid">iid</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMilestones.DataGitlabProjectMilestonesMilestonesOutputReference.property.milestoneId">milestoneId</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMilestones.DataGitlabProjectMilestonesMilestonesOutputReference.property.project">project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMilestones.DataGitlabProjectMilestonesMilestonesOutputReference.property.projectId">projectId</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMilestones.DataGitlabProjectMilestonesMilestonesOutputReference.property.startDate">startDate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMilestones.DataGitlabProjectMilestonesMilestonesOutputReference.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMilestones.DataGitlabProjectMilestonesMilestonesOutputReference.property.title">title</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMilestones.DataGitlabProjectMilestonesMilestonesOutputReference.property.updatedAt">updatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMilestones.DataGitlabProjectMilestonesMilestonesOutputReference.property.webUrl">webUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMilestones.DataGitlabProjectMilestonesMilestonesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMilestones.DataGitlabProjectMilestonesMilestones">DataGitlabProjectMilestonesMilestones</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-gitlab.dataGitlabProjectMilestones.DataGitlabProjectMilestonesMilestonesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-gitlab.dataGitlabProjectMilestones.DataGitlabProjectMilestonesMilestonesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createdAt`<sup>Required</sup> <a name="createdAt" id="@cdktf/provider-gitlab.dataGitlabProjectMilestones.DataGitlabProjectMilestonesMilestonesOutputReference.property.createdAt"></a>

```typescript
public readonly createdAt: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-gitlab.dataGitlabProjectMilestones.DataGitlabProjectMilestonesMilestonesOutputReference.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `dueDate`<sup>Required</sup> <a name="dueDate" id="@cdktf/provider-gitlab.dataGitlabProjectMilestones.DataGitlabProjectMilestonesMilestonesOutputReference.property.dueDate"></a>

```typescript
public readonly dueDate: string;
```

- *Type:* string

---

##### `expired`<sup>Required</sup> <a name="expired" id="@cdktf/provider-gitlab.dataGitlabProjectMilestones.DataGitlabProjectMilestonesMilestonesOutputReference.property.expired"></a>

```typescript
public readonly expired: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `iid`<sup>Required</sup> <a name="iid" id="@cdktf/provider-gitlab.dataGitlabProjectMilestones.DataGitlabProjectMilestonesMilestonesOutputReference.property.iid"></a>

```typescript
public readonly iid: number;
```

- *Type:* number

---

##### `milestoneId`<sup>Required</sup> <a name="milestoneId" id="@cdktf/provider-gitlab.dataGitlabProjectMilestones.DataGitlabProjectMilestonesMilestonesOutputReference.property.milestoneId"></a>

```typescript
public readonly milestoneId: number;
```

- *Type:* number

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-gitlab.dataGitlabProjectMilestones.DataGitlabProjectMilestonesMilestonesOutputReference.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

##### `projectId`<sup>Required</sup> <a name="projectId" id="@cdktf/provider-gitlab.dataGitlabProjectMilestones.DataGitlabProjectMilestonesMilestonesOutputReference.property.projectId"></a>

```typescript
public readonly projectId: number;
```

- *Type:* number

---

##### `startDate`<sup>Required</sup> <a name="startDate" id="@cdktf/provider-gitlab.dataGitlabProjectMilestones.DataGitlabProjectMilestonesMilestonesOutputReference.property.startDate"></a>

```typescript
public readonly startDate: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-gitlab.dataGitlabProjectMilestones.DataGitlabProjectMilestonesMilestonesOutputReference.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `title`<sup>Required</sup> <a name="title" id="@cdktf/provider-gitlab.dataGitlabProjectMilestones.DataGitlabProjectMilestonesMilestonesOutputReference.property.title"></a>

```typescript
public readonly title: string;
```

- *Type:* string

---

##### `updatedAt`<sup>Required</sup> <a name="updatedAt" id="@cdktf/provider-gitlab.dataGitlabProjectMilestones.DataGitlabProjectMilestonesMilestonesOutputReference.property.updatedAt"></a>

```typescript
public readonly updatedAt: string;
```

- *Type:* string

---

##### `webUrl`<sup>Required</sup> <a name="webUrl" id="@cdktf/provider-gitlab.dataGitlabProjectMilestones.DataGitlabProjectMilestonesMilestonesOutputReference.property.webUrl"></a>

```typescript
public readonly webUrl: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-gitlab.dataGitlabProjectMilestones.DataGitlabProjectMilestonesMilestonesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataGitlabProjectMilestonesMilestones;
```

- *Type:* <a href="#@cdktf/provider-gitlab.dataGitlabProjectMilestones.DataGitlabProjectMilestonesMilestones">DataGitlabProjectMilestonesMilestones</a>

---



