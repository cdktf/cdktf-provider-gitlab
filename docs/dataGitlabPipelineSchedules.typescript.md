# `dataGitlabPipelineSchedules` Submodule <a name="`dataGitlabPipelineSchedules` Submodule" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedules"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataGitlabPipelineSchedules <a name="DataGitlabPipelineSchedules" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedules"></a>

Represents a {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.0/docs/data-sources/pipeline_schedules gitlab_pipeline_schedules}.

#### Initializers <a name="Initializers" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedules.Initializer"></a>

```typescript
import { dataGitlabPipelineSchedules } from '@cdktf/provider-gitlab'

new dataGitlabPipelineSchedules.DataGitlabPipelineSchedules(scope: Construct, id: string, config: DataGitlabPipelineSchedulesConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedules.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedules.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedules.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedulesConfig">DataGitlabPipelineSchedulesConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedules.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedules.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedules.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedulesConfig">DataGitlabPipelineSchedulesConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedules.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedules.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedules.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedules.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedules.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedules.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedules.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedules.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedules.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedules.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedules.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedules.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedules.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedules.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedules.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedules.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedules.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedules.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedules.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedules.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedules.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedules.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedules.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedules.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedules.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedules.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedules.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedules.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedules.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedules.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedules.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedules.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedules.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedules.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedules.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedules.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedules.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedules.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedules.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedules.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedules.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedules.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedules.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedules.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedules.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedules.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedules.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedules.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedules.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedules.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedules.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataGitlabPipelineSchedules resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedules.isConstruct"></a>

```typescript
import { dataGitlabPipelineSchedules } from '@cdktf/provider-gitlab'

dataGitlabPipelineSchedules.DataGitlabPipelineSchedules.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedules.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedules.isTerraformElement"></a>

```typescript
import { dataGitlabPipelineSchedules } from '@cdktf/provider-gitlab'

dataGitlabPipelineSchedules.DataGitlabPipelineSchedules.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedules.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedules.isTerraformDataSource"></a>

```typescript
import { dataGitlabPipelineSchedules } from '@cdktf/provider-gitlab'

dataGitlabPipelineSchedules.DataGitlabPipelineSchedules.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedules.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedules.generateConfigForImport"></a>

```typescript
import { dataGitlabPipelineSchedules } from '@cdktf/provider-gitlab'

dataGitlabPipelineSchedules.DataGitlabPipelineSchedules.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataGitlabPipelineSchedules resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedules.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedules.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataGitlabPipelineSchedules to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedules.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataGitlabPipelineSchedules that should be imported.

Refer to the {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.0/docs/data-sources/pipeline_schedules#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedules.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataGitlabPipelineSchedules to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedules.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedules.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedules.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedules.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedules.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedules.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedules.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedules.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedules.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedules.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedules.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedules.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedules.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedules.property.pipelineSchedules">pipelineSchedules</a></code> | <code><a href="#@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedulesPipelineSchedulesList">DataGitlabPipelineSchedulesPipelineSchedulesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedules.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedules.property.project">project</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedules.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedules.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedules.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedules.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedules.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedules.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedules.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedules.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedules.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedules.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedules.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedules.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedules.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `pipelineSchedules`<sup>Required</sup> <a name="pipelineSchedules" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedules.property.pipelineSchedules"></a>

```typescript
public readonly pipelineSchedules: DataGitlabPipelineSchedulesPipelineSchedulesList;
```

- *Type:* <a href="#@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedulesPipelineSchedulesList">DataGitlabPipelineSchedulesPipelineSchedulesList</a>

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedules.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedules.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedules.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedules.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataGitlabPipelineSchedulesConfig <a name="DataGitlabPipelineSchedulesConfig" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedulesConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedulesConfig.Initializer"></a>

```typescript
import { dataGitlabPipelineSchedules } from '@cdktf/provider-gitlab'

const dataGitlabPipelineSchedulesConfig: dataGitlabPipelineSchedules.DataGitlabPipelineSchedulesConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedulesConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedulesConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedulesConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedulesConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedulesConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedulesConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedulesConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedulesConfig.property.project">project</a></code> | <code>string</code> | The name or id of the project to add the schedule to. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedulesConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedulesConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedulesConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedulesConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedulesConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedulesConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedulesConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedulesConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

The name or id of the project to add the schedule to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.0/docs/data-sources/pipeline_schedules#project DataGitlabPipelineSchedules#project}

---

### DataGitlabPipelineSchedulesPipelineSchedules <a name="DataGitlabPipelineSchedulesPipelineSchedules" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedulesPipelineSchedules"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedulesPipelineSchedules.Initializer"></a>

```typescript
import { dataGitlabPipelineSchedules } from '@cdktf/provider-gitlab'

const dataGitlabPipelineSchedulesPipelineSchedules: dataGitlabPipelineSchedules.DataGitlabPipelineSchedulesPipelineSchedules = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedulesPipelineSchedules.property.id">id</a></code> | <code>number</code> | The pipeline schedule id. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedulesPipelineSchedules.property.cronTimezone">cronTimezone</a></code> | <code>string</code> | The timezone. |

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedulesPipelineSchedules.property.id"></a>

```typescript
public readonly id: number;
```

- *Type:* number

The pipeline schedule id.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.0/docs/data-sources/pipeline_schedules#id DataGitlabPipelineSchedules#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `cronTimezone`<sup>Optional</sup> <a name="cronTimezone" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedulesPipelineSchedules.property.cronTimezone"></a>

```typescript
public readonly cronTimezone: string;
```

- *Type:* string

The timezone.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.0/docs/data-sources/pipeline_schedules#cron_timezone DataGitlabPipelineSchedules#cron_timezone}

---

### DataGitlabPipelineSchedulesPipelineSchedulesOwner <a name="DataGitlabPipelineSchedulesPipelineSchedulesOwner" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedulesPipelineSchedulesOwner"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedulesPipelineSchedulesOwner.Initializer"></a>

```typescript
import { dataGitlabPipelineSchedules } from '@cdktf/provider-gitlab'

const dataGitlabPipelineSchedulesPipelineSchedulesOwner: dataGitlabPipelineSchedules.DataGitlabPipelineSchedulesPipelineSchedulesOwner = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataGitlabPipelineSchedulesPipelineSchedulesList <a name="DataGitlabPipelineSchedulesPipelineSchedulesList" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedulesPipelineSchedulesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedulesPipelineSchedulesList.Initializer"></a>

```typescript
import { dataGitlabPipelineSchedules } from '@cdktf/provider-gitlab'

new dataGitlabPipelineSchedules.DataGitlabPipelineSchedulesPipelineSchedulesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedulesPipelineSchedulesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedulesPipelineSchedulesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedulesPipelineSchedulesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedulesPipelineSchedulesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedulesPipelineSchedulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedulesPipelineSchedulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedulesPipelineSchedulesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedulesPipelineSchedulesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedulesPipelineSchedulesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedulesPipelineSchedulesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedulesPipelineSchedulesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedulesPipelineSchedulesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedulesPipelineSchedulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedulesPipelineSchedulesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedulesPipelineSchedulesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedulesPipelineSchedulesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedulesPipelineSchedulesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedulesPipelineSchedulesList.get"></a>

```typescript
public get(index: number): DataGitlabPipelineSchedulesPipelineSchedulesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedulesPipelineSchedulesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedulesPipelineSchedulesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedulesPipelineSchedulesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedulesPipelineSchedulesList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedulesPipelineSchedules">DataGitlabPipelineSchedulesPipelineSchedules</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedulesPipelineSchedulesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedulesPipelineSchedulesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedulesPipelineSchedulesList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataGitlabPipelineSchedulesPipelineSchedules[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedulesPipelineSchedules">DataGitlabPipelineSchedulesPipelineSchedules</a>[]

---


### DataGitlabPipelineSchedulesPipelineSchedulesOutputReference <a name="DataGitlabPipelineSchedulesPipelineSchedulesOutputReference" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedulesPipelineSchedulesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedulesPipelineSchedulesOutputReference.Initializer"></a>

```typescript
import { dataGitlabPipelineSchedules } from '@cdktf/provider-gitlab'

new dataGitlabPipelineSchedules.DataGitlabPipelineSchedulesPipelineSchedulesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedulesPipelineSchedulesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedulesPipelineSchedulesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedulesPipelineSchedulesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedulesPipelineSchedulesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedulesPipelineSchedulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedulesPipelineSchedulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedulesPipelineSchedulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedulesPipelineSchedulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedulesPipelineSchedulesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedulesPipelineSchedulesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedulesPipelineSchedulesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedulesPipelineSchedulesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedulesPipelineSchedulesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedulesPipelineSchedulesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedulesPipelineSchedulesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedulesPipelineSchedulesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedulesPipelineSchedulesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedulesPipelineSchedulesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedulesPipelineSchedulesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedulesPipelineSchedulesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedulesPipelineSchedulesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedulesPipelineSchedulesOutputReference.resetCronTimezone">resetCronTimezone</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedulesPipelineSchedulesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedulesPipelineSchedulesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedulesPipelineSchedulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedulesPipelineSchedulesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedulesPipelineSchedulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedulesPipelineSchedulesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedulesPipelineSchedulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedulesPipelineSchedulesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedulesPipelineSchedulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedulesPipelineSchedulesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedulesPipelineSchedulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedulesPipelineSchedulesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedulesPipelineSchedulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedulesPipelineSchedulesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedulesPipelineSchedulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedulesPipelineSchedulesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedulesPipelineSchedulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedulesPipelineSchedulesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedulesPipelineSchedulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedulesPipelineSchedulesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedulesPipelineSchedulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedulesPipelineSchedulesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedulesPipelineSchedulesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedulesPipelineSchedulesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCronTimezone` <a name="resetCronTimezone" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedulesPipelineSchedulesOutputReference.resetCronTimezone"></a>

```typescript
public resetCronTimezone(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedulesPipelineSchedulesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedulesPipelineSchedulesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedulesPipelineSchedulesOutputReference.property.active">active</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedulesPipelineSchedulesOutputReference.property.createdAt">createdAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedulesPipelineSchedulesOutputReference.property.cron">cron</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedulesPipelineSchedulesOutputReference.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedulesPipelineSchedulesOutputReference.property.nextRunAt">nextRunAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedulesPipelineSchedulesOutputReference.property.owner">owner</a></code> | <code><a href="#@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedulesPipelineSchedulesOwnerOutputReference">DataGitlabPipelineSchedulesPipelineSchedulesOwnerOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedulesPipelineSchedulesOutputReference.property.ref">ref</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedulesPipelineSchedulesOutputReference.property.updatedAt">updatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedulesPipelineSchedulesOutputReference.property.cronTimezoneInput">cronTimezoneInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedulesPipelineSchedulesOutputReference.property.idInput">idInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedulesPipelineSchedulesOutputReference.property.cronTimezone">cronTimezone</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedulesPipelineSchedulesOutputReference.property.id">id</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedulesPipelineSchedulesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedulesPipelineSchedules">DataGitlabPipelineSchedulesPipelineSchedules</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedulesPipelineSchedulesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedulesPipelineSchedulesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `active`<sup>Required</sup> <a name="active" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedulesPipelineSchedulesOutputReference.property.active"></a>

```typescript
public readonly active: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `createdAt`<sup>Required</sup> <a name="createdAt" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedulesPipelineSchedulesOutputReference.property.createdAt"></a>

```typescript
public readonly createdAt: string;
```

- *Type:* string

---

##### `cron`<sup>Required</sup> <a name="cron" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedulesPipelineSchedulesOutputReference.property.cron"></a>

```typescript
public readonly cron: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedulesPipelineSchedulesOutputReference.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `nextRunAt`<sup>Required</sup> <a name="nextRunAt" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedulesPipelineSchedulesOutputReference.property.nextRunAt"></a>

```typescript
public readonly nextRunAt: string;
```

- *Type:* string

---

##### `owner`<sup>Required</sup> <a name="owner" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedulesPipelineSchedulesOutputReference.property.owner"></a>

```typescript
public readonly owner: DataGitlabPipelineSchedulesPipelineSchedulesOwnerOutputReference;
```

- *Type:* <a href="#@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedulesPipelineSchedulesOwnerOutputReference">DataGitlabPipelineSchedulesPipelineSchedulesOwnerOutputReference</a>

---

##### `ref`<sup>Required</sup> <a name="ref" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedulesPipelineSchedulesOutputReference.property.ref"></a>

```typescript
public readonly ref: string;
```

- *Type:* string

---

##### `updatedAt`<sup>Required</sup> <a name="updatedAt" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedulesPipelineSchedulesOutputReference.property.updatedAt"></a>

```typescript
public readonly updatedAt: string;
```

- *Type:* string

---

##### `cronTimezoneInput`<sup>Optional</sup> <a name="cronTimezoneInput" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedulesPipelineSchedulesOutputReference.property.cronTimezoneInput"></a>

```typescript
public readonly cronTimezoneInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedulesPipelineSchedulesOutputReference.property.idInput"></a>

```typescript
public readonly idInput: number;
```

- *Type:* number

---

##### `cronTimezone`<sup>Required</sup> <a name="cronTimezone" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedulesPipelineSchedulesOutputReference.property.cronTimezone"></a>

```typescript
public readonly cronTimezone: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedulesPipelineSchedulesOutputReference.property.id"></a>

```typescript
public readonly id: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedulesPipelineSchedulesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataGitlabPipelineSchedulesPipelineSchedules;
```

- *Type:* <a href="#@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedulesPipelineSchedules">DataGitlabPipelineSchedulesPipelineSchedules</a>

---


### DataGitlabPipelineSchedulesPipelineSchedulesOwnerOutputReference <a name="DataGitlabPipelineSchedulesPipelineSchedulesOwnerOutputReference" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedulesPipelineSchedulesOwnerOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedulesPipelineSchedulesOwnerOutputReference.Initializer"></a>

```typescript
import { dataGitlabPipelineSchedules } from '@cdktf/provider-gitlab'

new dataGitlabPipelineSchedules.DataGitlabPipelineSchedulesPipelineSchedulesOwnerOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedulesPipelineSchedulesOwnerOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedulesPipelineSchedulesOwnerOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedulesPipelineSchedulesOwnerOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedulesPipelineSchedulesOwnerOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedulesPipelineSchedulesOwnerOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedulesPipelineSchedulesOwnerOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedulesPipelineSchedulesOwnerOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedulesPipelineSchedulesOwnerOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedulesPipelineSchedulesOwnerOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedulesPipelineSchedulesOwnerOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedulesPipelineSchedulesOwnerOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedulesPipelineSchedulesOwnerOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedulesPipelineSchedulesOwnerOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedulesPipelineSchedulesOwnerOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedulesPipelineSchedulesOwnerOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedulesPipelineSchedulesOwnerOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedulesPipelineSchedulesOwnerOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedulesPipelineSchedulesOwnerOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedulesPipelineSchedulesOwnerOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedulesPipelineSchedulesOwnerOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedulesPipelineSchedulesOwnerOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedulesPipelineSchedulesOwnerOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedulesPipelineSchedulesOwnerOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedulesPipelineSchedulesOwnerOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedulesPipelineSchedulesOwnerOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedulesPipelineSchedulesOwnerOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedulesPipelineSchedulesOwnerOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedulesPipelineSchedulesOwnerOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedulesPipelineSchedulesOwnerOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedulesPipelineSchedulesOwnerOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedulesPipelineSchedulesOwnerOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedulesPipelineSchedulesOwnerOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedulesPipelineSchedulesOwnerOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedulesPipelineSchedulesOwnerOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedulesPipelineSchedulesOwnerOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedulesPipelineSchedulesOwnerOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedulesPipelineSchedulesOwnerOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedulesPipelineSchedulesOwnerOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedulesPipelineSchedulesOwnerOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedulesPipelineSchedulesOwnerOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedulesPipelineSchedulesOwnerOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedulesPipelineSchedulesOwnerOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedulesPipelineSchedulesOwnerOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedulesPipelineSchedulesOwnerOutputReference.property.avatarUrl">avatarUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedulesPipelineSchedulesOwnerOutputReference.property.id">id</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedulesPipelineSchedulesOwnerOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedulesPipelineSchedulesOwnerOutputReference.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedulesPipelineSchedulesOwnerOutputReference.property.username">username</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedulesPipelineSchedulesOwnerOutputReference.property.webUrl">webUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedulesPipelineSchedulesOwnerOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedulesPipelineSchedulesOwner">DataGitlabPipelineSchedulesPipelineSchedulesOwner</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedulesPipelineSchedulesOwnerOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedulesPipelineSchedulesOwnerOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `avatarUrl`<sup>Required</sup> <a name="avatarUrl" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedulesPipelineSchedulesOwnerOutputReference.property.avatarUrl"></a>

```typescript
public readonly avatarUrl: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedulesPipelineSchedulesOwnerOutputReference.property.id"></a>

```typescript
public readonly id: number;
```

- *Type:* number

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedulesPipelineSchedulesOwnerOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedulesPipelineSchedulesOwnerOutputReference.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedulesPipelineSchedulesOwnerOutputReference.property.username"></a>

```typescript
public readonly username: string;
```

- *Type:* string

---

##### `webUrl`<sup>Required</sup> <a name="webUrl" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedulesPipelineSchedulesOwnerOutputReference.property.webUrl"></a>

```typescript
public readonly webUrl: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedulesPipelineSchedulesOwnerOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataGitlabPipelineSchedulesPipelineSchedulesOwner;
```

- *Type:* <a href="#@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedulesPipelineSchedulesOwner">DataGitlabPipelineSchedulesPipelineSchedulesOwner</a>

---



